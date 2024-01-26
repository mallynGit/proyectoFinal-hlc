import firebase from "firebase/compat";
var firebaseConfig = {};

firebaseConfig = {
    "projectId": "constructapp-cc45d",
    "appId": "1:560733147926:web:7cf6b5dac98097ac58f637",
    "databaseURL": "https://constructapp-cc45d-default-rtdb.europe-west1.firebasedatabase.app",
    "storageBucket": "constructapp-cc45d.appspot.com", "apiKey": "AIzaSyC-W3L8fC9BaehNtJPIpQbFyqNqw1hxC1Y",
    "authDomain": "constructapp-cc45d.firebaseapp.com",
    "messagingSenderId": "560733147926",
    "measurementId": "G-07BX1M9EHM"
}

firebase.initializeApp(firebaseConfig);

export default firebase;