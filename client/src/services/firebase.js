import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyBzWwY3nXxhihFNMznYh2QTY9KP05IgVpQ",
  authDomain: "roll-call-d0ece.firebaseapp.com",
  databaseURL: "https://roll-call-d0ece.firebaseio.com",
  projectId: "roll-call-d0ece",
  storageBucket: "roll-call-d0ece.appspot.com",
  messagingSenderId: "940633529266",
  appId: "1:940633529266:web:1fa21a8d8a0c1b559ce2ab",
  measurementId: "G-MXHD39YCCQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
