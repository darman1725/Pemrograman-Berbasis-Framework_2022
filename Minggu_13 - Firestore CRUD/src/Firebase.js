import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAGK4Zcg5NjhYjBepU1xMnUIaptbmoQ7Lw",
    authDomain: "reactfirestore-3db93.firebaseapp.com",
    databaseURL: "https://reactfirestore-3db93-default-rtdb.firebaseio.com",
    projectId: "reactfirestore-3db93",
    storageBucket: "reactfirestore-3db93.appspot.com",
    messagingSenderId: "54398284735",
    appId: "1:54398284735:web:99db37a7fd0a3e18d3a70a",
    measurementId: "G-7JT6V0TKJR"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
