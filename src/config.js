import firebase from 'firebase';
//import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyCAXH7jaXtkwcSSoOOrdwKWrC5VTFDFSds",
    authDomain: "saligdeliveries-c0786.firebaseapp.com",
    databaseURL: "https://saligdeliveries-c0786.firebaseio.com",
    projectId: "saligdeliveries-c0786",
    storageBucket: "saligdeliveries-c0786.appspot.com",
    messagingSenderId: "77005774557",
    appId: "1:77005774557:web:16fa184266325c4c4b0534",
    measurementId: "G-GCBHCN5KWE"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export const db = app.database();
 // export const analysis = firebase.analytics();