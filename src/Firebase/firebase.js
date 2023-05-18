// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOIIuyfMTeOPdK7-DYD1eSEn3JJ-NHbgg",
  authDomain: "toy-dogs-firebase.firebaseapp.com",
  projectId: "toy-dogs-firebase",
  storageBucket: "toy-dogs-firebase.appspot.com",
  messagingSenderId: "16432557163",
  appId: "1:16432557163:web:a5e6442bf441544aa6152e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;