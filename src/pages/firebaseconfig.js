// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyN5fCoMBhCRKRTpX9Xmk7LAL8CPhR-Ow",
    authDomain: "proyectodoctor-189ed.firebaseapp.com",
    projectId: "proyectodoctor-189ed",
    storageBucket: "proyectodoctor-189ed.appspot.com",
    messagingSenderId: "67850300595",
    appId: "1:67850300595:web:8e2093f88a585fcc1694c6",
    measurementId: "G-XQ7D392GHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db, addDoc, collection};