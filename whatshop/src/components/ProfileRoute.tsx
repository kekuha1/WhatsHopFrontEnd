import React, { useContext } from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { signInWithGoogle, signOut } from "../firebaseConfig"


function ProfileRoute() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {
            user == null ? 
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            :
            <button onClick={signOut}>Sign out</button>
        }
    </div>
  )
}

export default ProfileRoute