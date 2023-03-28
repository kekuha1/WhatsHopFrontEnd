import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAamubItn1aA1uJvgw7Xw3cEMyUYV8glEI",
    authDomain: "whatshop-b56f0.firebaseapp.com",
    projectId: "whatshop-b56f0",
    storageBucket: "whatshop-b56f0.appspot.com",
    messagingSenderId: "142021723279",
    appId: "1:142021723279:web:c2164b304b170b33ab9cfa"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  const authProvider = new GoogleAuthProvider();

  export function signInWithGoogle() : void {
    signInWithPopup(auth, authProvider);
  }

  export function signInWithPassword(email:string, password:string){
    signInWithEmailAndPassword(auth, email, password);
  }

  export function signOut() : void {
    auth.signOut();
  }