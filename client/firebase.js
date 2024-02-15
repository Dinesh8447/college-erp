// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "college-erp-6a74b.firebaseapp.com",
  projectId: "college-erp-6a74b",
  storageBucket: "college-erp-6a74b.appspot.com",
  messagingSenderId: "431645926829",
  appId: "1:431645926829:web:390aa1fb94aaac94252d24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

