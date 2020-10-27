import * as firebase from 'firebase';
require("@firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwCU3-3I7e9MizekgewruG8A8j_Bu4xco",
  authDomain: "wily-b2c06.firebaseapp.com",
  databaseURL: "https://wily-b2c06.firebaseio.com",
  projectId: "wily-b2c06",
  storageBucket: "wily-b2c06.appspot.com",
  messagingSenderId: "989928641594",
  appId: "1:989928641594:web:d66d37097b59f452be1103"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();