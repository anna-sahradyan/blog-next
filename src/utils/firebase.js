// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-71c93.firebaseapp.com",
    projectId: "blog-71c93",
    storageBucket: "blog-71c93.appspot.com",
    messagingSenderId: "398432603582",
    appId: "1:398432603582:web:adbda52f6dee15d698bdef"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
