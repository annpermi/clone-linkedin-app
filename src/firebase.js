import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYgV_MWNX4OJ2pa2__nXbfkcSIOKlN4wc",
  authDomain: "linkedin-clone-288e7.firebaseapp.com",
  projectId: "linkedin-clone-288e7",
  storageBucket: "linkedin-clone-288e7.appspot.com",
  messagingSenderId: "151679760418",
  appId: "1:151679760418:web:9e15d490adddd399d1327b",
  measurementId: "G-3BX706BFDK",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore(); //connect your firebase to database
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
const auth = getAuth();
// const provider = new firebase.auth.googleAuthProvider();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage(); //store images
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
