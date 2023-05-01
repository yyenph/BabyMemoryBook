import { useContext } from "react";
import { UserContext } from "../../App";
import { deleteChild } from "../../utilities";
import { useNavigate } from "react-router-dom";
export default function ChildContent({child}){
    const child_name=child.name
    const navigate=useNavigate();
    
    const handleDelete= ()=> {
        deleteChild(child_name)
            .then(()=> {
                navigate('/child/')
            })
            .catch((e)=> {
                console.error(e)
            })
            
        
    }
    return (
        <>
            <h2>{child.name}</h2>
            <img className='profile-photo' src={`/media/${child.profile_photo}`} alt="Profile Photo" />

            <p>Birthday: {child.birthdate}</p>
            <p>Age</p>
            <button className ='deleteChild-btn' onClick={handleDelete} >Delete</button>
       
        </>
        
    )
}