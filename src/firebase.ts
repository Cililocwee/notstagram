import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig: object = {
  apiKey: "AIzaSyAPRuvHY4YShJ2_wP6r5MpWiXWAAVKIVIM",
  authDomain: "notstagram-fcf48.firebaseapp.com",
  projectId: "notstagram-fcf48",
  storageBucket: "notstagram-fcf48.appspot.com",
  messagingSenderId: "11923173159",
  appId: "1:11923173159:web:00f8154744b4b10b2dc302",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
