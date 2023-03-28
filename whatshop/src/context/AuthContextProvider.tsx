import { User } from 'firebase/auth';
import React, { ReactNode, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import Profile from '../model/Profile';
import AuthContext from './AuthContext';
function AuthContextProvider({children}: {children:ReactNode}) {
    const [user, setUser] = useState<User|null>(null);
    const [profile, setProfile] = useState<Profile|null>(null);
    useEffect(() => {
        return auth.onAuthStateChanged(newUser => {
            setUser(newUser);
            if (newUser){
                const profile = getProfile(newUser.uid)
                if (profile){
                    setProfile(profile)
                } else {
                    let newProfile = {
                        profile_id:newUser.uid,
                        username: newUser.displayName!,
                        displayName: newUser.displayName!,
                    }
                makeProfile(newProfile);
                setProfile(newProfile)
                }
                
            }
        });
    }, []);
   return(<AuthContext.Provider value={{user, profile}}>
    {children}
   </AuthContext.Provider>)
}
export default AuthContextProvider;