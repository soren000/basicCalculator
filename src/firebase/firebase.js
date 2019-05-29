const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAbkiTUIPFZkzoH7sDREzv9MSUXQavC-nU",
    authDomain: "sorensbasiccalc.firebaseapp.com",
    databaseURL: "https://sorensbasiccalc.firebaseio.com",
    projectId: "sorensbasiccalc",
    storageBucket: "sorensbasiccalc.appspot.com",
    messagingSenderId: "876322753812",
    appId: "1:876322753812:web:303803a0d78e7e59"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };