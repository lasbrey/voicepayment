// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2N6o--3CRX57mhv-D12Dx7OOdB5j0Oyc",
  authDomain: "talkworkspace-d1859.firebaseapp.com",
  projectId: "talkworkspace-d1859",
  storageBucket: "talkworkspace-d1859.appspot.com",
  messagingSenderId: "836894140280",
  appId: "1:836894140280:web:acc810014bb3917d03ca8d",
  measurementId: "G-16169GVP8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);