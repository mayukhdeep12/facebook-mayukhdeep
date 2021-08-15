// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0DLr4wz9GJpNtd0wrgxifRxSW8X3fdUc",
  authDomain: "facebook-mayukh.firebaseapp.com",
  projectId: "facebook-mayukh",
  storageBucket: "facebook-mayukh.appspot.com",
  messagingSenderId: "445630013503",
  appId: "1:445630013503:web:d6ace7fcdca7377844988a",
  measurementId: "G-YQXM2JV7G9"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
