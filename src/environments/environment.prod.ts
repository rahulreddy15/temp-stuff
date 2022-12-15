export const environment = {
  firebase: {
  apiKey: "AIzaSyCvbRhyWR10TEGtS6ecqH9KAB7uF3EDwUg",
  authDomain: "mul-t-80ec1.firebaseapp.com",
  databaseURL: "https://mul-t-80ec1-default-rtdb.firebaseio.com",
  projectId: "mul-t-80ec1",
  storageBucket: "mul-t-80ec1.appspot.com",
  messagingSenderId: "570560402076",
  appId: "1:570560402076:web:1b113e20dab65ad6715359",
  measurementId: "G-QJQSVSLD2P"
  },
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvbRhyWR10TEGtS6ecqH9KAB7uF3EDwUg",
  authDomain: "mul-t-80ec1.firebaseapp.com",
  databaseURL: "https://mul-t-80ec1-default-rtdb.firebaseio.com",
  projectId: "mul-t-80ec1",
  storageBucket: "mul-t-80ec1.appspot.com",
  messagingSenderId: "570560402076",
  appId: "1:570560402076:web:1b113e20dab65ad6715359",
  measurementId: "G-QJQSVSLD2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);