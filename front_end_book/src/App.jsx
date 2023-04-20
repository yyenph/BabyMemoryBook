import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from "./components/CsrfToken";


export const UserContext=createContext()

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
