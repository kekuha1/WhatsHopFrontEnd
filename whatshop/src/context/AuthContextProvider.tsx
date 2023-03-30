import { User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import AuthContext from './AuthContext';

function AuthContextProvider({children}: {children:ReactNode}) {
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        return auth.onAuthStateChanged(newUser => {
            setUser(newUser);
        });
    }, []);

   return(<AuthContext.Provider value={{user}}>
    {children}
   </AuthContext.Provider>)
}

export default AuthContextProvider;