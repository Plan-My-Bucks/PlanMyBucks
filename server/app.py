from flask import Flask, request, redirect, url_for, session, jsonify, send_from_directory, current_app
import os
import pyrebase
import uuid
import json
import pandas as pd  # Import pandas for DataFrame operations
from sklearn.linear_model import LinearRegression
from flask_cors import CORS, cross_origin
from authlib.integrations.flask_client import OAuth
from firebase_admin import firestore
import firebase_admin
import firebase_config
from firebase_admin import auth as admin_auth, storage
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
CORS(app, supports_credentials=True, resources={r"/*": {"origins": "https://planmybucks.vercel.app"}})

db = firebase_config.db

admin = firebase_config.admin

firebase_config = {
    "apiKey": os.environ.get("apiKey"),
    "authDomain": os.environ.get("authDomain"),
    "databaseURL": os.environ.get("databaseURL"),
    "projectId": os.environ.get("projectId"),
    "storageBucket": os.environ.get("storageBucket"),
    "messagingSenderId": os.getenv("messagingSenderId"),
    "appId": os.getenv("appId"),
    "measurementId": os.getenv("measurementId")
}

firebase = pyrebase.initialize_app(firebase_config)
auth = firebase.auth()

oauth = OAuth(app)
appConf = {
    "OAUTH2_CLIENT_ID": os.getenv("OAUTH2_CLIENT_ID"),
    "OAUTH2_CLIENT_SECRET": os.getenv("OAUTH2_CLIENT_SECRET"),
    "OAUTH2_META_URL": "https://accounts.google.com/.well-known/openid-configuration",
    "FLASK_SECRET": os.getenv("FLASK_SECRET"),
    "FLASK_PORT": 5000
}

app.secret_key = appConf.get("FLASK_SECRET")

oauth = OAuth(app)
oauth.register("myApp",
               client_id=appConf.get("OAUTH2_CLIENT_ID"),
               client_secret=appConf.get("OAUTH2_CLIENT_SECRET"),
               server_metadata_url=appConf.get("OAUTH2_META_URL"),
               client_kwargs={
                   "scope": "openid email profile",
               }
               )

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    number = data.get('mobile')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')

    if password != confirm_password:
        return jsonify({"message": "Passwords do not match"}), 400

    try:
        user = auth.create_user_with_email_and_password(email, password)
        user_info = auth.get_account_info(user['idToken'])
        uid = user_info['users'][0]['localId']

        current_app.logger.info(f"User created with UID: {uid}")

        user_data = {'name': name, 'contact': number, 'email': email, 'uid': uid}
        db.collection('users').document(uid).set(user_data)

        current_app.logger.info(f"User data stored in Firestore: {user_data}")

        response = jsonify({"message": "Account created successfully", "user": user_data})
        response.headers.add('Access-Control-Allow-Origin', 'https://planmybucks.vercel.app')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response, 200
    except Exception as e:
        current_app.logger.error(f"Error creating user: {str(e)}")
        return jsonify({"message": str(e)}), 400
    
@app.route('/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        user = auth.sign_in_with_email_and_password(email, password)
        user_info = auth.get_account_info(user['idToken'])
        uid = user_info['users'][0]['localId']
        user_data = db.collection('users').document(uid).get().to_dict()

        session['user'] = user_data
        response = jsonify({"message": "Sign in successful", "user": user_data})
        response.headers.add('Access-Control-Allow-Origin', 'https://planmybucks.vercel.app')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response, 200
    except Exception as e:
        return jsonify({"message": "Invalid email or password"}), 401
    
@app.route('/signin/google', methods=['GET'])
@cross_origin(origin='https://planmybucks.vercel.app', headers=['Content-Type', 'Authorization'])
def signin_google():
    redirect_uri = url_for('authorized_google', _external=True)
    return oauth.myApp.authorize_redirect(redirect_uri)

@app.route('/authorized/google')
def authorized_google():
    token = oauth.myApp.authorize_access_token()
    nonce = ''  # Add a nonce value here
    user_info = oauth.myApp.parse_id_token(token, nonce=nonce)
    email = user_info['email']
    name = user_info['name']

    current_app.logger.info(f"User info: {user_info}")

    users_ref = db.collection('users')
    query = users_ref.where('email', '==', email).stream()

    user = None
    for doc in query:
        user = doc.to_dict()
        user['id'] = doc.id
        break

    if not user:
        user_data = {'name': name, 'email': email, 'uid': str(uuid.uuid4())}
        db.collection('users').document(user_data['uid']).set(user_data)
        user = user_data

    session['user'] = user

    current_app.logger.info(f"Redirecting to React app with user data: {user}")

    redirect_url = f"https://planmybucks.vercel.app/google-redirect?name={user['name']}&email={user['email']}&uid={user['uid']}"
    current_app.logger.info(f"Redirect URL: {redirect_url}")

    response = redirect(redirect_url)
    response.headers.add('Access-Control-Allow-Origin', 'https://planmybucks.vercel.app')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route('/forgot_password', methods=['POST'])
def forgot_password():
    email = request.get_json().get('email')
    print(email)
    try:
        user = firebase_admin.auth.get_user_by_email(email)
        if user:
            auth.send_password_reset_email(email)
            return jsonify({"message": "Password reset link sent to your email"}), 200
        else:
            return jsonify({"message": "User not found please signup"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": str(e)}), 400
    
@app.route('/api/add-data', methods=['POST'])
def add_data():
    try:
        data = request.get_json()

        user_id = data['userId']
        month = data['month']
        income = data['income']
        groceries = data['groceries']
        rent = data['rent']
        entertainment = data['entertainment']
        emi = data['emi']
        loans = data['loans']
        transport = data['transport']
        utilities = data['utilities']
        bills = data['bills']
        fee = data['fee']
        savings = data['savings']
        total_expenditure = data['total_expenditure']
        other_expenditures = data['other_expenditures']

        doc_ref = db.collection('users').document(user_id).collection('previous_months').document(month)

        doc_ref.set({
            'income': income,
            'groceries': groceries,
            'rent': rent,
            'entertainment': entertainment,
            'emi': emi,
            'loans': loans,
            'transport': transport,
            'utilities': utilities,
            'bills': bills,
            'fee': fee,
            'savings': savings,
            'total_expenditure': total_expenditure,
            'other_expenditures': other_expenditures,
            'timestamp': firestore.SERVER_TIMESTAMP
        })

        return jsonify({"success": True}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400
    
def train_model(user_id):
    # Fetch user data from Firestore
    months_ref = db.collection('users').document(user_id).collection('previous_months').order_by('timestamp')
    docs = months_ref.stream()
    all_data = [doc.to_dict() for doc in docs]

    if not all_data:
        print("No data found for user:", user_id)
        return None, None

    df = pd.DataFrame(all_data)
    df.fillna(0, inplace=True)

    # Print the initial DataFrame for debugging
    print("Initial DataFrame:\n", df)

    # Extract all unique expenditure columns
    expenditure_columns = set(['groceries', 'rent', 'entertainment', 'emi', 'loans', 'transport', 'utilities', 
                               'bills', 'fee'])
    
    # Include other expenditures dynamically
    for _, row in df.iterrows():
        other_expenditures = row.get('other_expenditures', {})
        for key in other_expenditures.keys():
            expenditure_columns.add(key)

    # Convert set to list for consistent order
    expenditure_columns = list(expenditure_columns)

    # Ensure 'income' is included in X_columns
    X_columns = expenditure_columns + ['income']

    # Ensure all columns are in the dataframe
    for col in X_columns:
        if col not in df.columns:
            df[col] = df['other_expenditures'].apply(lambda x: x.get(col, 0) if isinstance(x, dict) else 0)

    # Print the DataFrame after adding columns for debugging
    print("DataFrame with additional columns:\n", df)

    X = df[X_columns]
    y = df['savings']

    # Print the features DataFrame for debugging
    print("Features DataFrame (X):\n", X)
    print("Target (y):\n", y)

    # Train the model
    model = LinearRegression()
    model.fit(X, y)

    y_pred = model.predict(X)

    mae = mean_absolute_error(y, y_pred)
    mse = mean_squared_error(y, y_pred)
    r2 = r2_score(y, y_pred)

    # Print evaluation metrics for debugging
    print(f"Mean Absolute Error: {mae}")
    print(f"Mean Squared Error: {mse}")
    print(f"R-squared: {r2}")

    return model, X_columns

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    user_id = data['user_id']

    # Train the model
    model, X_columns = train_model(user_id)

    if model is None or X_columns is None:
        return jsonify({"error": "No data available to train the model"}), 400

    # Fetch user data from Firestore for prediction
    months_ref = db.collection('users').document(user_id).collection('previous_months').order_by('timestamp')
    docs = months_ref.stream()
    all_data = [doc.to_dict() for doc in docs]

    if not all_data:
        return jsonify({"error": "No data available for prediction"}), 400

    df = pd.DataFrame(all_data)
    df.fillna(0, inplace=True)

    # Ensure all columns are present in the dataframe
    for col in X_columns:
        if col not in df.columns:
            df[col] = df['other_expenditures'].apply(lambda x: x.get(col, 0) if isinstance(x, dict) else 0)

    X = df[X_columns]

    # Print the features DataFrame for debugging
    print("Features DataFrame for Prediction (X):\n", X)

    # Predict savings
    savings_prediction = model.predict(X)[-1]

    # Get the most recent month's data
    last_month_data = df.iloc[-1]

    # Create expenditure plan
    expenditure_plan = {key: last_month_data.get(key, 0) for key in X_columns if key not in ['income', 'total_expenditure']}
    expenditure_plan['savings'] = savings_prediction

    # Increase savings by reducing non-essential expenditures
    for key in expenditure_plan.keys():
        if key not in ['income', 'savings', 'emi', 'loans', 'rent', 'fee']:
            expenditure_plan[key] *= 0.9  # Reduce non-essential expenditures by 10%

    # Ensure rent and EMI follow patterns
    expenditure_plan['rent'] = last_month_data.get('rent', 0)
    expenditure_plan['emi'] = last_month_data.get('emi', 0)
    expenditure_plan['loans'] = last_month_data.get('loans', 0)
    expenditure_plan['fee'] = last_month_data.get('fee', 0)

    income = last_month_data.get('income', 0)  # Ensure 'income' is retrieved from the last month's data
    expenditure_plan['savings'] = income - sum([v for k, v in expenditure_plan.items() if k != 'savings'])

    # Convert all values to native Python types
    expenditure_plan = {k: float(v) for k, v in expenditure_plan.items()}

    return jsonify(expenditure_plan)

@app.route('/update_profile/<field>', methods=['POST'])
def update_profile(field):
    data = request.form
    user = json.loads(data.get('user'))
    profile_image = request.files.get('profileImage')

    try:
        user_ref = db.collection('users').document(user.get('uid'))
        user_data = user_ref.get().to_dict()

        if not user_data:
            return jsonify({"message": "User not found"}), 404

        if field == 'profileImage' and profile_image:
            file_id = str(uuid.uuid4())
            file_extension = os.path.splitext(profile_image.filename)[1]
            file_path = f"profiles/{file_id}{file_extension}"

            storage_client = storage.bucket('planmybucks.appspot.com')
            blob = storage_client.blob(file_path)
            blob.upload_from_file(profile_image)

            profile_image_url = blob.public_url
            user_ref.update({'profileImage': profile_image_url})
            user_data['profileImage'] = profile_image_url
            return jsonify({"message": "Profile image updated successfully", "user": user_data}), 200

        return jsonify({"message": "Profile updated successfully", "user": user_data}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)
