// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth" // Add this import
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   // apiKey: "AIzaSyDQlzYRKyOpv4obLh-TKYlpVI3EyYL7uWA",
//   authDomain: process.env.AUTH_DOMAIN,
//   // authDomain: "codeverse-explorer.firebaseapp.com",
//   projectId: process.env.PROJECT_ID,
//   // projectId: "codeverse-explorer",
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   // authDomain: "codeverse-explorer.firebaseapp.com",
//   // apiKey: "AIzaSyDQlzYRKyOpv4obLh-TKYlpVI3EyYL7uWA",
//   // projectId: "codeverse-explorer",
//   // storageBucket: "codeverse-explorer.appspot.com",
//   // messagingSenderId: "225375450997",
//   // appId: "1:225375450997:web:025c05bd55bddaf10d453c",
// }

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
