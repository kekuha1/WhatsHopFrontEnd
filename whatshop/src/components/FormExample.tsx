import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

export function FormExample(){
    const { user } = useContext(AuthContext);
    const [thing, setThing] = useState<string>('');
    
    function onSubmit(e:React.FormEvent<HTMLElement>){
        e.preventDefault();

        if(user !== null){
            //user.uid is the unique id of the currently logged in user
        }
    }

    return(
    <div>
        { user == null ? <>
        </> :
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(e) => setThing(e.target.value)} />
            </form>
        </>
         }
    </div>)
}