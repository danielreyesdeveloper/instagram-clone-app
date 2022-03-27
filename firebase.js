// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpCfDlL1qJKHbrflvvgYyL4vDhrnsex3k",
  authDomain: "insta-clone-app-7309d.firebaseapp.com",
  projectId: "insta-clone-app-7309d",
  storageBucket: "insta-clone-app-7309d.appspot.com",
  messagingSenderId: "951232478031",
  appId: "1:951232478031:web:ae9c2e96d029eded50a33a"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};