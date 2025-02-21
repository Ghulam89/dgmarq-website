
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNcJrMxI6R6ws9BSuEzUdeBsQlD06wE6A",
    authDomain: "shopzone-c1767.firebaseapp.com",
    projectId: "shopzone-c1767",
    storageBucket: "shopzone-c1767.firebasestorage.app",
    messagingSenderId: "546553896604",
    appId: "1:546553896604:web:65a517dbbfee095c3dd759",
    measurementId: "G-7TTLVTWKDY"
  };




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export { auth, provider, providerFacebook, RecaptchaVerifier, signInWithPhoneNumber };