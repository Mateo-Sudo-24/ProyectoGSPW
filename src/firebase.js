// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsQVvUL3NIn7KZGw0ViB4sfY00o3x7h5U",
  authDomain: "academybee-b1de5.firebaseapp.com",
  projectId: "academybee-b1de5",
  storageBucket: "academybee-b1de5.firebasestorage.app",
  messagingSenderId: "673595180122",
  appId: "1:673595180122:web:3047afcd5a6f5cf7e8c463",
  measurementId: "G-XFN7P1Z4N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);