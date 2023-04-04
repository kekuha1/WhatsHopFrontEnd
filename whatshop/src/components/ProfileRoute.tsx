import React, { useContext } from 'react'
import { BrowserRouter, Link } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { signInWithGoogle, signOut } from "../firebaseConfig"


function ProfileRoute() {
  const { user } = useContext(AuthContext);
  return (
    <><div>
      {user == null ?
        <button className="googleButton" onClick={signInWithGoogle}>Sign in</button>
        :
        <button className='signout' onClick={signOut}>Sign out</button>}
    </div><div>
        {user != null ? <div className='Thankyou'>
          Thanks for Signing in!
        </div>
          :
          <div>
            <p className='signinpromt'>If you wish to add favorites
              please sign in with your google account.</p>
            <section className='userSection'>
              <p className="greeting">Hello there! Introducing Whats Hop - a site for beer enthusiasts to search,
                review and mark favorite breweries.
                Discover new breweries, share experiences and engage in thoughtful conversations.
                Maintain a professional atmosphere while connecting with other beer lovers. Cheers!</p>
            </section>

          </div>}
      </div></>)
}

export default ProfileRoute