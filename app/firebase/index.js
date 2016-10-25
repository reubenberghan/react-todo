'use strict';

import firebase from 'firebase';

try {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAx96coTGVkRxKLQBnZ4ZNV7PWCY_ldx3o",
        authDomain: "berghan-todo-app.firebaseapp.com",
        databaseURL: "https://berghan-todo-app.firebaseio.com",
        storageBucket: "berghan-todo-app.appspot.com",
        messagingSenderId: "744290091139"
    };
    firebase.initializeApp(config);
} catch (err) {};

export const firebaseRef = firebase.database().ref();
export default firebase;