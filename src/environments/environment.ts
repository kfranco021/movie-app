// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  apiKey: "AIzaSyAY-FpF3Nymlw1LsuzkTgPWFeW8GQiCIGA",
  authDomain: "app-filme-77dbf.firebaseapp.com",
  projectId: "app-filme-77dbf",
  storageBucket: "app-filme-77dbf.appspot.com",
  messagingSenderId: "1033616770393",
  appId: "1:1033616770393:web:5ceedcc73bd5cdb497b848",
  measurementId: "G-V9VNZR5WPW"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);
