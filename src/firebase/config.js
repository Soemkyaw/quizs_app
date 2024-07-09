import { initializeApp } from "firebase/app";
import { getFirestore,serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBHe3euGUk--9z1pAmRLvFlV22qadVLPRU",
  authDomain: "quizs-app-9033d.firebaseapp.com",
  projectId: "quizs-app-9033d",
  storageBucket: "quizs-app-9033d.appspot.com",
  messagingSenderId: "819636318482",
  appId: "1:819636318482:web:9fca141a0475376b2bc3cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
  db,
  serverTimestamp,
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
};