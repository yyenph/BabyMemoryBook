import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import NewEntry from "../Entry/NewEntry"
import AlbumContent from "./AlbumContent"
export default function AlbumCard(){

    const album=useLoaderData()
    useEffect(()=>{
        console.log(album)
    },[])

    return (    
        <div>
   
            {
                album.length!==0?(
                    <div className="album-gallery">
                        <NewEntry />
                        {album.map((entry)=>
                        (<AlbumContent entry={entry}/>)
                        )}
                    </div>
            ):
                (<NewEntry />)
            
            }
        </div>  
            
            
            
        
    )
}