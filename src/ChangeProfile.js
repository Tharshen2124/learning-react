/* import  { useState } from "react";
import { useContext } from "react";
import { AppContext } from './Routing';

export const ChangeProfile = (props) => {
    const { setUsername } = useContext(AppContext);
    const [newUser, setNewUser] = useState("");

    return (
        <div>
            <input onChange={(e) => {setNewUser(e.target.value);}}/>
            <button 
                onClick={() => {setUsername(newUser)}}>
                Change username
            </button>
        </div>
    )
} */
