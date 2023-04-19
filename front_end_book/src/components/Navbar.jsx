import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../utilities';
import SignIn from './SignIn';

export default function Navbar(){
    const [searchKey,setSearchKey]=useState();
    const [isSignInVisible,setIsSignInVisible]=useState();
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