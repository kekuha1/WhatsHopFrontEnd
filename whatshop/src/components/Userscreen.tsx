import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
export function UserScreen(){
    const { user } = useContext(AuthContext);

    return (
    <div>
        { user != null ? <div>
            <p>UID: {user.uid}</p>
            <p>Display Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
        </div>
        :
        <div>
            <p>Please log in to see stuff!</p>
        </div>
        }

    </div>)
}