import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
export function UserScreen(){
    const { user } = useContext(AuthContext);

    return (
    <div>
        <p className="greeting">Hello</p>
        { user != null ? <div>
                Thanks for Signing in
        </div>
        :
        <div>
        </div>
        }

    </div>)
}