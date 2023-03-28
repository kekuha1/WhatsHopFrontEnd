import { User } from 'firebase/auth';
import { createContext } from 'react';
import Profile from '../model/Profile';
export interface AuthContextModel {
    user: User|null;
    profile: Profile | null;
}
const defaultValue:AuthContextModel = {
    user:null,
    profile: null,
}
const AuthContext = createContext(defaultValue);
export default AuthContext;