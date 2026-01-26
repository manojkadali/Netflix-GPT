// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJjY-i83bsO3jovTiMAbqswStuJH9tSZc",
  authDomain: "netflixgpt-a9eca.firebaseapp.com",
  projectId: "netflixgpt-a9eca",
  storageBucket: "netflixgpt-a9eca.firebasestorage.app",
  messagingSenderId: "37512953262",
  appId: "1:37512953262:web:dbd1be95b9846f85745c3f",
  measurementId: "G-N1MVPK9Y2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// to use modules in firebase , this is nedded, so keeping it as centeral such that can used everywhere
export const auth=getAuth();