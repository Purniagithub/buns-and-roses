// src/firebase.js

// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUpdlb8afT-5AyrZzp3giwjlOTpOT8LM0",
  authDomain: "buns-and-roses.firebaseapp.com",
  projectId: "buns-and-roses",
  storageBucket: "buns-and-roses.appspot.com", // ✅ fixed (.appspot.com)
  messagingSenderId: "594880851044",
  appId: "1:594880851044:web:1546586ab90914fea70371",
  measurementId: "G-5VRVBS5R24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore (for storing contact messages)
export const db = getFirestore(app);

// Analytics (only if supported & running in browser)
let analytics;
isSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});
export { analytics };
