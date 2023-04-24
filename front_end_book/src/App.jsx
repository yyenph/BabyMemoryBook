import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from "./components/CsrfToken";


export const UserContext=createContext()

function App() {
  const [user,setUser]=useState(null);
  getToken();
  const [childrenList,setChildrenList]=useState();
  
  // handler to add new child to childList when new child is created
  const handleChildList = ()=>{
    
  }

  useEffect(()=> {
    const getCurrUser = async () => {
      setUser( await currUser())
    };
    getCurrUser();
  },[])

  return (
    <div className="App">
      
      <UserContext.Provider value={{user, setUser,childrenList,setChildrenList}} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
