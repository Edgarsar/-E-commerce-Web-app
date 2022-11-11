import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCVHUUyJoZ8uh3ZVFB7T15qbVNSEQDEU80",
  authDomain: "capstone-db-54ca2.firebaseapp.com",
  projectId: "capstone-db-54ca2",
  storageBucket: "capstone-db-54ca2.appspot.com",
  messagingSenderId: "17476986722",
  appId: "1:17476986722:web:651a768b369193afb4ee3b"
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);