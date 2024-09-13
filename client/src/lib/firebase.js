import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "gabble-27df4.firebaseapp.com",
  projectId: "gabble-27df4",
  storageBucket: "gabble-27df4.appspot.com",
  messagingSenderId: "184979683832",
  appId: "1:184979683832:web:e41010b29920494cd57e0d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); //login/register through this auth
export const db = getFirestore(); //upload user info
export const storage = getStorage(); //upload img
