// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homesforyou-a6741.firebaseapp.com",
  projectId: "homesforyou-a6741",
  storageBucket: "homesforyou-a6741.appspot.com",
  messagingSenderId: "617381857293",
  appId: "1:617381857293:web:466131cdc69fe921df2d44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);