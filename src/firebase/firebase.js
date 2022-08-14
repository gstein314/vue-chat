import firebase from 'firebase';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "${{ secrets.API_KEY }}",
  authDomain: "${{ secrets.AUTH_DOMAIN }}",
  projectId: "${{ secrets.PROJECT_ID }}",
  storageBucket: "${{ secrets.STORAGE_BUCKET }}",
  messagingSenderId: "${{ secrets.MESSAGING_SENDER_ID }}",
  appId: "${{ secrets.APP_ID }}"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default firebase;