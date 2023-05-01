import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../App";
import { logIn } from "../utilities";
import SignUp from "./SignUp";


export default function SignIn(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {setUser} = useContext(UserContext);

    return (
        <>
            <form
            id="signin-modal"
            onSubmit={(e)=>{[
                e.preventDefault(),
                logIn(email,password,setUser),
                setPassword(''),
                setEmail('')
            ]}}
            >
                <input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className="nav-button" type="submit" value="Sign In" />
                {/* <Link to="signup/">Create an Account</Link> */}
                
          
            </form>
            <SignUp/>
        </>
        
    )
}