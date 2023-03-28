import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import config from './config';
const app = initializeApp(config);
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