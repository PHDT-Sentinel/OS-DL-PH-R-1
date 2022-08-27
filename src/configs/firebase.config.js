const admin = require('firebase-admin');
const serviceAccount = require('../../os-dl-ph-r-1-30f8665c8c6f.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const firestore = admin.firestore();
const auth = admin.auth();

module.exports = {
    auth,
    firestore,
};