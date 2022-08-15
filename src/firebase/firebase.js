import firebase from 'firebase';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.VUE_API_KEY,
  authDomain: process.env.VUE_AUTH_DOMAIN,
  projectId: process.env.VUE_PROJECT_ID,
  storageBucket: process.env.VUE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase;
