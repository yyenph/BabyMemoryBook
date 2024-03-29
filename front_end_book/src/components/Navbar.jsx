import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../utilities';
import SignIn from './SignIn';
import { UserContext } from '../App';
export default function Navbar(){
    // const [searchKey,setSearchKey]=useState();
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
    console.log('user:', user);
    return(
    <nav className='navbar'>
        {user ? (
            <>
            <div className='navbar-left'>
                <h2 className='appname'>Memorybook</h2>
                <Link className='navbar-link' to="/">HOME</Link>
                <Link className='navbar-link' to="child/">CHILD</Link>
            </div>

            <div className='navbar-right'>
                <button className='nav-button' onClick={()=>
                    [logOut(setUser),
                    navigate('/')]
                }
                    >LOG OUT</button>
                {/* <form onSubmit={seachHandler}>
                    <input type="text" value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder="Search" />
                    <button className='nav-button' type='submit'>SEARCH</button>
                </form> */}
            </div>
            </>
            
        ): 
        (<>
            <h2 className='appname'>Memorybook</h2>
            <p onClick={toggleModal} id='SignIn'>
            Sign In or Create Account
            </p>
            {isSignInVisible && <SignIn />}
        </>)
        }
       
    </nav>
    
    )
}