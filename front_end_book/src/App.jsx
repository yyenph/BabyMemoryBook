import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet,useNavigate } from 'react-router-dom';
import { currUser,submitNameHandler,submitLyricsHandler } from './utilities';
import { getToken } from "./components/CsrfToken";
import NameIdea from './components/NameIdea';
import Select from 'react-select';
import axios from "axios";
export const UserContext=createContext();

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
  const [quote,setQuote]=useState('')
  const navigate=useNavigate();


  useEffect(()=> {
    const getCurrUser = async () => {
      setUser( await currUser())
    };
    getCurrUser();
  },[])
// namefinder api 
  useEffect(()=>{

  })

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
              <p>Baby Name Finder </p>
              
              <Select 
                  className='finder-input'
                  options={Gender}
                  onChange={(selectedOption) => setGender(selectedOption['value'])} 
              />
              
              <input className="button" type="submit" value="Get Idea" />
              
          </form>
        </div>
        <div className='lyricsfinder-card'>
        
        <form className='lyrics-finder-form'  onSubmit={(e)=>{
            e.preventDefault();
            submitLyricsHandler(setQuote);
            // navigate('/quotegenerator/');
          }
            }>
            <p>Quote of the day </p>
            {quote &&(
            <div className="quote">
            <p>{quote.text}</p> 
            <p>{quote.author}</p>
            </div>
        )}
            <input className="button" type="submit" value="Get today quote!" />
            
        </form>
      </div>
      </div>
      <UserContext.Provider value={{user, setUser,nameList,quote}} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  )
}

export default App;
