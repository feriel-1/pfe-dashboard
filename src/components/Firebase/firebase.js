// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"
import{getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLJ-A7XFocGZijMMKpf1PNnfYGiXOWtnw",
  authDomain: "leoni-2023.firebaseapp.com",
  databaseURL: "https://leoni-2023-default-rtdb.firebaseio.com",
  projectId: "leoni-2023",
  storageBucket: "leoni-2023.appspot.com",
  messagingSenderId: "675137016314",
  appId: "1:675137016314:web:106c617034fa438f1d1443",
  measurementId: "G-2NENP19E6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth (app);
export   const db = getFirestore(app);


