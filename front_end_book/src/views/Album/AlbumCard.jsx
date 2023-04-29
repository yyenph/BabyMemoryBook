import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import NewEntry from "../Entry/NewEntry"
import AlbumContent from "./AlbumContent"
import { Link } from "react-router-dom"


export default function AlbumCard(){
    const {child_name}=useParams();
    const album=useLoaderData()
    useEffect(()=>{
        console.log(album)
    },[])

    return (    
        <div>
   
            {
                album.length!==0?(
                    <div>
                        <NewEntry />
                        <Link className='back-to-albums-button' to={`/${child_name}/albums`}>Back to albums </Link>
                        <div className="album-gallery">
                            
                            {album.map((entry)=>
                            (<AlbumContent entry={entry}/>)
                            )}
                        </div>
                    </div>
            ):
                (<NewEntry />)
            
            }
        </div>  
            
            
            
        
    )
}