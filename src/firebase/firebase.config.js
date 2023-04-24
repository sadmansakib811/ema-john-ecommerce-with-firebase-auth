// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiPS94Zs6B2i0HzVme3XWgv55QAhPjJO8",
  authDomain: "ema-john-with-firebase-a-e7c05.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-e7c05",
  storageBucket: "ema-john-with-firebase-a-e7c05.appspot.com",
  messagingSenderId: "158903283355",
  appId: "1:158903283355:web:251f76f70c34d3e455e03e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;