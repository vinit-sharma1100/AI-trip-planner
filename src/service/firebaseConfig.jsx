// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj1uoNKPB9VkxEUyWaqyJn_uC8AHVQVr8",
    authDomain: "my-project-12f39.firebaseapp.com",
    projectId: "my-project-12f39",
    storageBucket: "my-project-12f39.firebasestorage.app",
    messagingSenderId: "1093953489042",
    appId: "1:1093953489042:web:d876352105920211d7fe4b",
    measurementId: "G-4S7SS62GV1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);