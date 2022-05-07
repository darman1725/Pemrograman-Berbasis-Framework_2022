import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwNJYxHsFWoQNB5nVJfKYn2Pi1NYFYSB0",
    authDomain: "reactlogin-10c74.firebaseapp.com",
    projectId: "reactlogin-10c74",
    storageBucket: "reactlogin-10c74.appspot.com",
    messagingSenderId: "640122419955",
    appId: "1:640122419955:web:1046d3451894116df25586",
    measurementId: "G-4MRVBZJEK8"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
