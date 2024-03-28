import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDQJvohdfiVg4NnfWp57lYQrOql1_2Buvk",
    authDomain: "ecommerce-b6859.firebaseapp.com",
    projectId: "ecommerce-b6859",
    storageBucket: "ecommerce-b6859.appspot.com",
    messagingSenderId: "1001860531065",
    appId: "1:1001860531065:web:82c45b1b58d631a5ff25a8"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}