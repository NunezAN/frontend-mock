// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClDRBe5AfaDHBqZKb3GYDb0nzBCk5bpPc",
  authDomain: "frontend-mock.firebaseapp.com",
  projectId: "frontend-mock",
  storageBucket: "frontend-mock.appspot.com",
  messagingSenderId: "124001338077",
  appId: "1:124001338077:web:c8837ac345cf52b72e9134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();