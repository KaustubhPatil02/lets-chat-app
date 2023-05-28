import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkua2sKkNaLpDumq7c5JzurvTHRj93LYI",
  authDomain: "lets-chat-app-13951.firebaseapp.com",
  projectId: "lets-chat-app-13951",
  storageBucket: "lets-chat-app-13951.appspot.com",
  messagingSenderId: "156880776325",
  appId: "1:156880776325:web:625d83957e30c367b24dec"
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
