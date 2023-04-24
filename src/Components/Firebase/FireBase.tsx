// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCli033vLar1gJg0gAZk7vPZylJeW_kIXw",
  authDomain: "iskcon-vvnagar.firebaseapp.com",
  projectId: "iskcon-vvnagar",
  storageBucket: "iskcon-vvnagar.appspot.com",
  messagingSenderId: "286431733270",
  appId: "1:286431733270:web:23f0f2a03ef5fbb3817737",
  measurementId: "G-D20R6N5WQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);