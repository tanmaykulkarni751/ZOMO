import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'

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

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to working on  app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
