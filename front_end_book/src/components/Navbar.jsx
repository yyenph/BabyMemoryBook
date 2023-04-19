import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../utilities';
import SignIn from './SignIn';
import { UserContext } from '../App';
export default function Navbar(){
    const [searchKey,setSearchKey]=useState();
    const [isSignInVisible,setIsSignInVisible]=useState();
    const {user} = useContext(UserContext)
    const {setUser} = useContext(UserContext);

    const navigate = useNavigate();

    
    const seachHandler = ()=>{
        console.log(searchKey)
        // add more search code later
        navigate(`child/${searchKey}`);
        }
    const toggleModal =() =>{
        setIsSignInVisible(!isSignInVisible)
    }

    return(
    <nav className='navbar'>
        <h1>MemoryBook</h1>
        <Link to="/">Home</Link>
        <Link to="child/">Child</Link>
        <Link to="account/">Account</Link>
        <button onClick={()=>logOut(setUser)}>Log out</button>
        <p onClick={toggleModal}
        id='SignIn'>Sign In or Create Account</p>
        {
            isSignInVisible && <SignIn />
        }
        
        <form onSubmit={seachHandler}>
                <input type="text" value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder="search" />
                <button type='submit'>Search</button>
            </form>
    </nav>
    
    )
}