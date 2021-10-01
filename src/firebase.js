import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYgV_MWNX4OJ2pa2__nXbfkcSIOKlN4wc",
  authDomain: "linkedin-clone-288e7.firebaseapp.com",
  projectId: "linkedin-clone-288e7",
  storageBucket: "linkedin-clone-288e7.appspot.com",
  messagingSenderId: "151679760418",
  appId: "1:151679760418:web:9e15d490adddd399d1327b",
  measurementId: "G-3BX706BFDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.googleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
