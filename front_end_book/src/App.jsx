import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from "./components/CsrfToken";
import { logOut } from './utilities';

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
      <button onClick={()=>logOut(setUser)}>Log out</button>
      {/* <p>Hello {user}</p> */}
      <Navbar />
      

      <UserContext.Provider value={{user, setUser}} >
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
