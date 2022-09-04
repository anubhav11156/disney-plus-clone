// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA8e0BfdI6PMwNPKtMCqlmwuVuEbe7GsE",
  authDomain: "this-guy-disney-clone.firebaseapp.com",
  projectId: "this-guy-disney-clone",
  storageBucket: "this-guy-disney-clone.appspot.com",
  messagingSenderId: "804290623369",
  appId: "1:804290623369:web:c91dd18cf208b11fafd358",
  measurementId: "G-VPNR2SPJ8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }
