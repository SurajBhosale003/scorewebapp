// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scorebat-users.firebaseapp.com",
  projectId: "scorebat-users",
  storageBucket: "scorebat-users.appspot.com",
  messagingSenderId: "683170725280",
  appId: "1:683170725280:web:50b8da09c558c2dc9878c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);