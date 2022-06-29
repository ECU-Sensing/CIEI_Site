// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-1kAUDHm2GAI-6C_ZDERXrqnzy7CdFN4",
  authDomain: "ciei-64781.firebaseapp.com",
  projectId: "ciei-64781",
  storageBucket: "ciei-64781.appspot.com",
  messagingSenderId: "960531290489",
  appId: "1:960531290489:web:cc1753326b1fca1de6b7a8",
  measurementId: "G-GG71WLZZT1"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
