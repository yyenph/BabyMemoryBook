import { useEffect,useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import NewEntry from "../Entry/NewEntry"
import AlbumContent from "./AlbumContent"
import { Link } from "react-router-dom"


export default function AlbumCard(){
    const {child_name}=useParams();
    const album=useLoaderData()
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        console.log(album);
        setEntries(album);
    }, [album]);

    const addEntry = (entry) => {
        setEntries([...entries, entry]);
    };

    return (    
        <div>
   
            {
                album.length!==0?(
                    <div>
                        <NewEntry addEntry={addEntry}/>
                        <Link className='back-to-albums-button' to={`/${child_name}/albums`}>Back to albums </Link>
                        <div className="album-gallery">
                            
                            {album.map((entry)=>
                            (<AlbumContent entry={entry}/>)
                            )}
                        </div>
                    </div>
            ):
                (<NewEntry addEntry={addEntry}/>)
            
            }
        </div>  
            
            
            
        
    )
}