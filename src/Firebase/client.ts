// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to us
const firebaseConfig = {
  apiKey: "AIzaSyDjnQQku7RN5qPWIA7xBlLHak1Zm26-ZmU",
  authDomain: "prepwise-f9c64.firebaseapp.com",
  projectId: "prepwise-f9c64",
  storageBucket: "prepwise-f9c64.firebasestorage.app",
  messagingSenderId: "685140933469",
  appId: "1:685140933469:web:6e93d78b3dfef6c53f86b4",
  measurementId: "G-HPHK39VDL0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);