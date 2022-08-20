const admin = require('firebase-admin');
const serviceAccount = require('../../os-dl-ph-r-1-75a89029ca69.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const firestore = admin.firestore();
module.exports = firestore;