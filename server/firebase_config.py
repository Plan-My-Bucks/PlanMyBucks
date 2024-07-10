import os
import json
import firebase_admin
from firebase_admin import credentials, firestore

from dotenv import load_dotenv
load_dotenv()

# Path to your service account key JSON file
firebase_service_account_key = {
    "type": os.getenv("type"),
    "project_id": os.getenv("project_id"),
    "private_key_id": os.getenv("private_key_id"),
    "private_key": os.getenv("private_key").replace('\\n', '\n'),
    "client_email": os.getenv("client_email"),
    "client_id": os.getenv("client_id"),
    "auth_uri": os.getenv("auth_uri"),
    "token_uri": os.getenv("token_uri"),
    "auth_provider_x509_cert_url": os.getenv("auth_provider_x509_cert_url"),
    "client_x509_cert_url": os.getenv("client_x509_cert_url"),
    "universe_domain": os.getenv("universe_domain")
}
print(firebase_service_account_key)
# Initialize Firebase Admin SDK
cred = credentials.Certificate(firebase_service_account_key)
firebase_admin.initialize_app(cred)

# Export Firestore client
db = firestore.client()

# Export initialized Firebase Admin SDK instance for reuse in other modules
admin = firebase_admin
