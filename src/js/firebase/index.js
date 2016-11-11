import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB9ACT_OPmdMJxP2KlVf6g9mQiXp3cq8kk",
  authDomain: "blogs-6ee0b.firebaseapp.com",
  databaseURL: "https://blogs-6ee0b.firebaseio.com",
  storageBucket: "blogs-6ee0b.appspot.com",
  messagingSenderId: "674385242730"
};
firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();
export default firebase;
