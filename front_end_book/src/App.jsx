import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet,useNavigate } from 'react-router-dom';
import { currUser,submitNameHandler, } from './utilities';
import { getToken } from "./components/CsrfToken";
import Select from 'react-select';
export const UserContext=createContext();

const Gender= [
  {label: 'Girl', value:'girl'},
  {label: 'Boy', value:'boy'},
  {label: 'Neutral', value:'newtral'},
]

function App() {
  const [user,setUser]=useState(null);
  getToken();
  const [gender,setGender]=useState('');
  const [nameList,setNameList]=useState([])
  const navigate=useNavigate();


  useEffect(()=> {
    const getCurrUser = async () => {
      setUser( await currUser())
    };
    getCurrUser();
  },[])


  return (
    <div className="App">
      <div className='api-card'>
        <div className='namefinder-card'>
          
          <form className='nameidea-form'onSubmit={(e)=>{
            e.preventDefault();
            submitNameHandler(gender,setNameList);
            setGender('');
            console.log(nameList);
            navigate('/namefinder/');
          }
            }>
              <p className='api-title'>Baby Name Finder </p>
              
              <Select 
                  className='finder-input'
                  options={Gender}
                  onChange={(selectedOption) => setGender(selectedOption['value'])} 
              />
              
              <input className="button" type="submit" value="Get Idea" />
              
          </form>
        </div>
       
      </div>
      <UserContext.Provider value={{user, setUser,nameList}} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
