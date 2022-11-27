// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV_qzSAXZ_UzRHpkn9U7gmW1CvmVAFKHY",
  authDomain: "revifi-2022.firebaseapp.com",
  projectId: "revifi-2022",
  storageBucket: "revifi-2022.appspot.com",
  messagingSenderId: "995349431477",
  appId: "1:995349431477:web:b57acc1ea16cf10ae2eafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
const auth = getAuth();
//

export {auth}