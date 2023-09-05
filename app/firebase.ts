// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth" // Add this import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlzYRKyOpv4obLh-TKYlpVI3EyYL7uWA",
  authDomain: "codeverse-explorer.firebaseapp.com",
  projectId: "codeverse-explorer",
  storageBucket: "codeverse-explorer.appspot.com",
  messagingSenderId: "225375450997",
  appId: "1:225375450997:web:025c05bd55bddaf10d453c",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const auth = getAuth(app) // Initialize Firebase Authentication

export { app, db }
