// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-FugyvxZ757bL75DLgtP3tZMZeUacs5U",
  authDomain: "react-food-app-ccceb.firebaseapp.com",
  databaseURL: "https://react-food-app-ccceb-default-rtdb.firebaseio.com",
  projectId: "react-food-app-ccceb",
  storageBucket: "react-food-app-ccceb.appspot.com",
  messagingSenderId: "355513219213",
  appId: "1:355513219213:web:9c104139fca39c73a84ac4",
  measurementId: "G-7X91QWERCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);