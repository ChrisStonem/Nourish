// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ea4ygeIJebAunepgIUQBwE-3K5Aw1iY",
  authDomain: "final-project-35063.firebaseapp.com",
  projectId: "final-project-35063",
  storageBucket: "final-project-35063.appspot.com",
  messagingSenderId: "530897351022",
  appId: "1:530897351022:web:7859e10502611ee202d17f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



