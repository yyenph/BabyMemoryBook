import { useLoaderData } from "react-router-dom"
import AlbumContent from "./AlbumContent"
export default function AlbumCard(){
    // const {childrenList,setChildrenList} = useContext(UserContext);
    const album=useLoaderData()

    return (    
        <div>
            {album.map((entry)=>{
                <AlbumContent entry={entry}/>

            })}
        </div>  
            
            
            
        
    )
}