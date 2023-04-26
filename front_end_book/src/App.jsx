import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet,useNavigate } from 'react-router-dom';
import { currUser } from './utilities';
import { getToken } from "./components/CsrfToken";
import NameIdea from './components/NameIdea';
import Select from 'react-select';
import axios from "axios";
export const UserContext=createContext()

const Gender= [
  {label: 'Girl', value:'girl'},
  {label: 'Boy', value:'boy'},
  {label: 'Neutral', value:'newtral'},
]

function App() {
  const [user,setUser]=useState(null);
  getToken();
  const [childrenList,setChildrenList]=useState();
  const [gender,setGender]=useState('');
  const [nameList,setNameList]=useState([])
  const navigate=useNavigate();


  useEffect(()=> {
    const getCurrUser = async () => {
      setUser( await currUser())
    };
    getCurrUser();
  },[])
// namefinder api 
const submitHandler = async (e)=>{
  e.preventDefault();
  const response = await axios.get('https://baby-names-by-api-ninjas.p.rapidapi.com/v1/babynames',{
      headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '438befd54bmsh04adaf03ced30edp18739ajsnf6c968713038',
          'X-RapidAPI-Host': 'baby-names-by-api-ninjas.p.rapidapi.com'
        }
  });
  setGender('');
  setNameList(response.data);
  console.log(nameList)
  navigate('/namefinder/');
}

  return (
    <div className="App">
      <div className='namefinder-card'>
        <p>Baby Name Finder </p>
          <form className='nameidea-form'onSubmit={submitHandler}>
              <div>
                      <Select 
                          options={Gender}
                          onChange={(selectedOption) => setGender(selectedOption['value'])} 
                      />
              </div>
              <input className="button" type="submit" value="Get Idea" />
              
          </form>
      </div>
       
      <UserContext.Provider value={{user, setUser,nameList}} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
