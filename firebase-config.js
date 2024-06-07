import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZvXf6auTyKoHiKsmGKI2JJbXzqlUaXhs",
  authDomain: "client-a7be5.firebaseapp.com",
  projectId: "client-a7be5",
  storageBucket: "client-a7be5.appspot.com",
  messagingSenderId: "702461196639",
  appId: "1:702461196639:web:42c32fda4004f67e5b5eea",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };
