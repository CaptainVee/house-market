// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkBzl3SG3s6YyLykT6io_nTqc8aVyT6CU",
  authDomain: "house-market-27076.firebaseapp.com",
  projectId: "house-market-27076",
  storageBucket: "house-market-27076.appspot.com",
  messagingSenderId: "283603739944",
  appId: "1:283603739944:web:b8d176e1b75d640874dc1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();
