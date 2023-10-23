import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAehBDDs94mL44Kdl70OGC5j73VS1i5Vdk",
  authDomain: "credit-karma-d94e4.firebaseapp.com",
  projectId: "credit-karma-d94e4",
  storageBucket: "credit-karma-d94e4.appspot.com",
  messagingSenderId: "776811599931",
  appId: "1:776811599931:web:df7a539c0898f1f98b241e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { app, auth, provider};
  