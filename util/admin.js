var admin = require("firebase-admin");
var serviceAccount = require("D:\\Rolling Code\\Proyecto FireBase\\Json_credenciales\\Credenciales.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emdmodels-c4f25-default-rtdb.firebaseio.com/"
})

const db = admin.firestore();


module.exports = { admin, db };