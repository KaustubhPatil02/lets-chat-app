import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAOI68ovN6yZAukUVPK8jkjvCvrMJIcK6Y",
  authDomain: "chat-app1-fba14.firebaseapp.com",
  projectId: "chat-app1-fba14",
  storageBucket: "chat-app1-fba14.appspot.com",
  messagingSenderId: "999625354557",
  appId: "1:999625354557:web:bd0c7d9c7a8d44d84da954"



  
  // apiKey: "AIzaSyCVwDMYR9-gb3LbiJGZkjnSW1K6KAMjbcI",
  // authDomain: "react-chat-app-vite.firebaseapp.com",
  // projectId: "react-chat-app-vite",
  // storageBucket: "react-chat-app-vite.appspot.com",
  // messagingSenderId: "415228392124",
  // appId: "1:415228392124:web:278657efc2e5f2d22616b9"

  // apiKey: "AIzaSyDXbJjkIMCB_WOgngLHl83dAQIEWBs8OLQ",
  // authDomain: "lets-chat-app-70cb0.firebaseapp.com",
  // projectId: "lets-chat-app-70cb0",
  // storageBucket: "lets-chat-app-70cb0.appspot.com",
  // messagingSenderId: "321316384003",
  // appId: "1:321316384003:web:48d1b25be020e475734d36",
  // measurementId: "G-8CBQ4M5GZB",



  // apiKey: "AIzaSyDWoqVmemRb6fMgDXVrbMiPseFqWp4N4As",
  // authDomain: "react-lets-chat-app.firebaseapp.com",
  // projectId: "react-lets-chat-app",
  // storageBucket: "react-lets-chat-app.appspot.com",
  // messagingSenderId: "873511639829",
  // appId: "1:873511639829:web:dbd49674c7d9781f94271c"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
