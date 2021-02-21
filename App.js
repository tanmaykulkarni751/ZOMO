import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import { Providers } from "./src/Providers";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNlOin_a4QCzVoWDm92h5vcwVaJja0Oqk",
  authDomain: "zomo-d2bdd.firebaseapp.com",
  projectId: "zomo-d2bdd",
  storageBucket: "zomo-d2bdd.appspot.com",
  messagingSenderId: "778399872549",
  appId: "1:778399872549:web:085b9771a080684eb2f1cc",
  measurementId: "G-82ZD86YPSZ"
};

let app;
  
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig); 
} else {
  app = firebase.app();
}

const db = app.firestore();


export default Providers;
export { db }
