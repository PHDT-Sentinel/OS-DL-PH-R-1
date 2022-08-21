const admin = require('firebase-admin');
const PRIVATE_KEY = require('../../os-dl-ph-r-1-75a89029ca69.json');
require('dotenv').config();
admin.initializeApp({
    credential: admin.credential.cert({
        type:                           process.env.FIRESTORE_CREDENTIALS_TYPE,
        project_id:                     process.env.FIRESTORE_PROJECT_ID,
        private_key_id:                 process.env.FIRESTORE_PROJECT_KEY_ID,
        private_key:                    PRIVATE_KEY.private_key,
        client_email:                   process.env.FIRESTORE_CLIENT_EMAIL,
        client_id:                      process.env.FIRESTORE_CLIENT_ID,
        auth_uri:                       process.env.FIRESTORE_AUTH_URI,
        token_uri:                      process.env.FIRESTORE_TOKEN_URI,
        auth_provider_x509_cert_url:    process.env.FIRESTORE_AUTH_PROVIDER,
        client_x509_cert_url:           process.env.FIRESTORE_CLIENT
    })
});
const firestore = admin.firestore();
module.exports = firestore;