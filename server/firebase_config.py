import firebase_admin
from firebase_admin import credentials, firestore

# Check if Firebase Admin SDK has already been initialized
if not firebase_admin._apps:
    # Initialize Firebase Admin SDK
    cred = credentials.Certificate("./budgetmanagerkey.json")
    firebase_admin.initialize_app(cred)

# Get Firestore client instance
db = firestore.client()
