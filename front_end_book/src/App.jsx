import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from "./components/CsrfToken";
import { logOut } from './utilities';

export const UserContext=createContext(null)

function App() {
  const [user,setUser]=useState();
  getToken()

  useEffect(()=> {
    const getCurrUser = async () => {
      setUser( await currUser())
    };
    getCurrUser();
  },[])

  return (
    <div className="App">
      
      <UserContext.Provider value={{user, setUser}} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
