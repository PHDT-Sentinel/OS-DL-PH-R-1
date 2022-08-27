const firebase = require('firebase-admin');
const serviceAccount = require('../../os-dl-ph-r-1-30f8665c8c6f.json');
firebase.initializeApp({ credential: firebase.credential.cert(serviceAccount) });

// Firebase Services
const auth = firebase.auth();
const firestore = firebase.firestore();

module.exports = {
    auth,
    firestore,
};