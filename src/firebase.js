import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCVwDMYR9-gb3LbiJGZkjnSW1K6KAMjbcI",
  // authDomain: "react-chat-app-vite.firebaseapp.com",
  // projectId: "react-chat-app-vite",
  // storageBucket: "react-chat-app-vite.appspot.com",
  // messagingSenderId: "415228392124",
  // appId: "1:415228392124:web:278657efc2e5f2d22616b9"

  apiKey: "AIzaSyDXbJjkIMCB_WOgngLHl83dAQIEWBs8OLQ",
  authDomain: "lets-chat-app-70cb0.firebaseapp.com",
  projectId: "lets-chat-app-70cb0",
  storageBucket: "lets-chat-app-70cb0.appspot.com",
  messagingSenderId: "321316384003",
  appId: "1:321316384003:web:48d1b25be020e475734d36",
  measurementId: "G-8CBQ4M5GZB",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
