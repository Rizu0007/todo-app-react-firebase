// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3qVT7CYh-OzULAW9bDcDIE0Q2groMTYQ",
  authDomain: "todo-7d341.firebaseapp.com",
  projectId: "todo-7d341",
  storageBucket: "todo-7d341.appspot.com",
  messagingSenderId: "906725758027",
  appId: "1:906725758027:web:f9c05e09e43bed1ca169ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)