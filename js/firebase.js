// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-0JJr4habltXLo7JMGNrmfnlrD8H_k1E",
  authDomain: "school-system-46cce.firebaseapp.com",
  projectId: "school-system-46cce",
  storageBucket: "school-system-46cce.firebasestorage.app",
  messagingSenderId: "938854271066",
  appId: "1:938854271066:web:81b8399642b918bc36b063",
  measurementId: "G-RK9QXE1RJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
