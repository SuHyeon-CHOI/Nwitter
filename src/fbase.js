import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDYN1c4ArjDlBhj7Y0WhZfnUTN-TNC4KE",
  authDomain: "nwitter-67aa2.firebaseapp.com",
  projectId: "nwitter-67aa2",
  storageBucket: "nwitter-67aa2.appspot.com",
  messagingSenderId: "674828096683",
  appId: "1:674828096683:web:18c73f51063ad3ef9393ee",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
