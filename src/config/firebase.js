// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYsRoV3SM7lb71tWAZ-OJoDs_5CqpnkVw",
  authDomain: "myportfolio-13216.firebaseapp.com",
  projectId: "myportfolio-13216",
  storageBucket: "myportfolio-13216.appspot.com",
  messagingSenderId: "139572293504",
  appId: "1:139572293504:web:d2c34e5dd2476969dcdb65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);