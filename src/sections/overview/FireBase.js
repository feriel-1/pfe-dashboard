import firebase from 'firebase/app';
import 'firebase/database'; // or 'firebase/firestore' for Firestore

  // your Firebase project credentials
  const firebaseConfig = {
    apiKey: "AIzaSyCI-EKlvQp3MfiZKfSJjzher6xss9fdC1E",
    authDomain: "leoni-2023-2a4b1.firebaseapp.com",
    databaseURL: "https://leoni-2023-2a4b1-default-rtdb.firebaseio.com",
    projectId: "leoni-2023-2a4b1",
    storageBucket: "leoni-2023-2a4b1.appspot.com",
    messagingSenderId: "112329223068",
    appId: "1:112329223068:web:28214f6679309b6dabf659",
    measurementId: "G-KLFCBMECF9"
  };
firebase.initializeApp(firebaseConfig);

