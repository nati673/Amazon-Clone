// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import  'firebase/compat/auth';
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQROhBKm7qEbcFGpruyOmMYjtXMB-pQrw",
  authDomain: "app-dcea6.firebaseapp.com",
  projectId: "app-dcea6",
  storageBucket: "app-dcea6.appspot.com",
  messagingSenderId: "604628966733",
  appId: "1:604628966733:web:07043cb0e61ea08ceeeb04",
  measurementId: "G-B9E1WP6H2E",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db};


