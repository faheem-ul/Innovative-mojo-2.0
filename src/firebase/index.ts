import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase/compat/auth";
import "firebase/storage";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig2 = {
  apiKey: "AIzaSyACbXi4Do71eCURDhtUvOcpG5oCT6uAFkQ",
  authDomain: "innovative-mojo-ad226.firebaseapp.com",
  projectId: "innovative-mojo-ad226",
  storageBucket: "innovative-mojo-ad226.firebasestorage.app",
  messagingSenderId: "848371086235",
  appId: "1:848371086235:web:3c9fd0b561fe895366a73e",
  measurementId: "G-GJN8D4YNRK",
};

const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "firebase");

export const auth2 = firebaseApp2.auth();
export const firestore2 = firebaseApp2.firestore();
export const storage2 = firebaseApp2.storage().ref();

export default firebase;
export { firebaseConfig2 };
