// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoADzaBZnSZ8RLwrqjJgainzw1We9Kf9Y",
  authDomain: "uber-clone-1e803.firebaseapp.com",
  projectId: "uber-clone-1e803",
  storageBucket: "uber-clone-1e803.appspot.com",
  messagingSenderId: "540783253339",
  appId: "1:540783253339:web:7b663c7daae4f0f04eac7e",
  measurementId: "G-44PXZSJRPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
