import { useParams, useNavigate } from "react-router-dom";
import { deleteEntry } from "../../utilities"


export default function AlbumContent({entry}){
    const entry_title=entry.title
    const {child_name}=useParams();
    const {album_name}=useParams();
    const navigate = useNavigate();
    
// use then catch to navigate after deleteEntry is called successfully
    const handleDelete= ()=> {
        deleteEntry(child_name,album_name,entry_title)
            .then(()=> {
                navigate(`/${child_name}/${album.name}/`)
            })
            .catch((e)=> {
                console.error(e)
            })
            
        
    }
    return (
        <>
            
                <div className="single_entry">
                <p id="img-title">{entry.title}</p>
                <img className='entry-image' src={`${entry.image}`} alt={entry.title} />
                <p>{entry.date}</p>
                <p>{entry.caption}</p>
                {/* use onClick because this is not a form */}
                <button onClick={handleDelete} >Delete Entry</button>
                </div>
           
         
        </>
        
    )
}