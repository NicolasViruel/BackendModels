const firebase = require('firebase');


const firebaseConfig = {
    apiKey: "AIzaSyCM9qLnhu8chCeulM2L1ASy6rJo8akM3qc",
    authDomain: "emdmodels-c4f25.firebaseapp.com",
    databaseURL: "https://emdmodels-c4f25-default-rtdb.firebaseio.com/",
    projectId: "emdmodels-c4f25",
    storageBucket: "emdmodels-c4f25.appspot.com",
    messagingSenderId: "773693823375",
    appId: "1:773693823375:web:4de942b4130132119493fa",
    measurementId: "G-W57PKGBJ7S"
};

firebase.initializeApp(firebaseConfig); //initialize firebase app 

module.exports = { firebase }; //export the app