import { useParams } from "react-router-dom";
import { deleteEntry } from "../../utilities"
export default function AlbumContent({entry}){
    const entry_title=entry.title
    const {child_name}=useParams();
    const {album_name}=useParams();

    return (
        <>
            
                <div className="single_entry">
                <p id="img-title">{entry.title}</p>
                <img className='entry-image' src={`${entry.image}`} alt={entry.title} />
                <p>{entry.date}</p>
                <p>{entry.caption}</p>
                <button onSubmit={(e)=>{
                    e.preventDefault();
                    deleteEntry(child_name,album_name,entry_title);
                    navigate(`/${child_name}/${album.name}/`)
                }
            }>Delete Entry</button>
                </div>
           
         
        </>
        
    )
}