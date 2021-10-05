// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions
import { firebaseConfig } from "./firebase-config";

const app = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);
const db = app.firestore(); //connect your firebase to database
// const db = getFirestore(firebaseApp);
const auth = firebase.auth();
// const auth = getAuth();
const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new GoogleAuthProvider();
const storage = firebase.storage(); //store images
// const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
