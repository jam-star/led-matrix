// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbQUXho7Ira8QPR6_w5NZPGesN1_Hy9Yg",
  authDomain: "dotmatrix-1da09.firebaseapp.com",
  databaseURL: "https://dotmatrix-1da09-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dotmatrix-1da09",
  storageBucket: "dotmatrix-1da09.appspot.com",
  messagingSenderId: "373906249431",
  appId: "1:373906249431:web:1b22498d8783cb03a18292"
};

const fireDb = initializeApp(firebaseConfig);
export default fireDb;