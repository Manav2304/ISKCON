import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNL7aj2UndR0Wx6rbmavDsWDazygwpyQw",
  authDomain: "iskcon-a4720.firebaseapp.com",
  projectId: "iskcon-a4720",
  storageBucket: "iskcon-a4720.appspot.com",
  messagingSenderId: "549331270115",
  appId: "1:549331270115:web:e373f4ca40f291d87fc8d6",
  measurementId: "G-CWZZ2LMLK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
