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
  apiKey: "AIzaSyBCOKoQ-VYM4iGahilm-78bl4gUFdlwHNE",
  authDomain: "this-guy-disney-clone-2d7e1.firebaseapp.com",
  projectId: "this-guy-disney-clone-2d7e1",
  storageBucket: "this-guy-disney-clone-2d7e1.appspot.com",
  messagingSenderId: "276285356969",
  appId: "1:276285356969:web:1b7104545c79e3fe1622b8",
  measurementId: "G-R9FEHRD58E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }
