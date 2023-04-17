import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
    const [searchKey,setSearchKey]=useState();
    const navigate = useNavigate();
    const seachHandler = ()=>{
        console.log(searchKey)
        // add more search code later
        navigate(`child/${searchKey}`);
        }
    
    return(
        <header>
        <h1>MemoryBook</h1>
        <Link to="/">Home</Link>
        <Link to="child/">Child</Link>
        <Link to="account/">Account</Link>
        <form onSubmit={seachHandler}>
                <input type="text" value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder="search" />
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}