import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link,Outlet } from "react-router-dom";
import AlbumContent from "./AlbumContent";

export default function Album(){
    const {child_name}=useParams();
    const [album,setAlbum]=useState([]);


    useEffect(()=>{
        const getAlbum = async()=> {
            let response= await axios.get(`/child/${child_name}/albums/`)
            console.log(`album from ${child_name}`,response.data)
            setAlbum(response.data)
        }
        getAlbum()
    },[child_name])

    if(!album){
        return (<div>Loading...</div>);
    }
    return (
        <>
            <nav>
                <Link to={`/${child_name}/addalbum`}>Add new Album</Link>
            </nav>
            <Outlet />
            <div className="album-display">
                 <div className="child-content">
                        <AlbumContent />
                    </div>
             
            </div>
            
        </>
    )
}