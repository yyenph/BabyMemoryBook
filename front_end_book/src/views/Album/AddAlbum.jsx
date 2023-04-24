import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// const Child = getAllChild()

export default function AddAlbum(){
    const [name, setName] = useState("");
    const {child_name} =useParams();
    const navigate=useNavigate()

    const addAlbum = async ()=>{
        let response = await axios.post(`/child/${child_name}/albums/add/`, {
            'name' : name,
            
        })
        console.log('addalbum.jsx',name,child_name)
        
    }
    
    return(
        
        <form onSubmit={async (e)=>{
            e.preventDefault(),
            await addAlbum(name,child_name),
            console.log(name,child_name)
            setName(''),
            navigate(`/${child_name}/albums`)
            
        }}>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
    
            <input type="submit" value="Save Album" />
    
        </form>
    )
}