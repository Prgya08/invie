// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBho-InKLpHlrBmpapvPzZlDLiz8NmPSYU",
  authDomain: "invie-894d0.firebaseapp.com",
  projectId: "invie-894d0",
  storageBucket: "invie-894d0.appspot.com",
  messagingSenderId: "423996170868",
  appId: "1:423996170868:web:6c7bc234dabb1b2b9ca721",
  measurementId: "G-9HFFV3WPBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export default app;
