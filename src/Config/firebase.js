import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARvT__jj5NqiJSPdQf5cxXpT2BctSn57k",
  authDomain: "netflix-67cdb.firebaseapp.com",
  projectId: "netflix-67cdb",
  storageBucket: "netflix-67cdb.appspot.com",
  messagingSenderId: "324765067332",
  appId: "1:324765067332:web:db4c1371755595e7047411",
  measurementId: "G-9RYVC1L1MJ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
