import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDLkvrccYjUDXFohq_-uIcxYguHJQXor4k",
    authDomain: "my-portfolio-a81a1.firebaseapp.com",
    projectId: "my-portfolio-a81a1",
    storageBucket: "my-portfolio-a81a1.appspot.com",
    messagingSenderId: "480386608658",
    appId: "1:480386608658:web:5a508b7d0ddfd491c932cb",
    measurementId: "G-W34HHPKEM9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)
const analytics = getAnalytics(app);