

export default function AlbumContent({entry}){
    
    return (
        <>
            
                <div className="single_entry">
                <p id="img-title">{entry.title}</p>
                <img className='entry-image' src={`${entry.image}`} alt={entry.title} />
                <p>{entry.date}</p>
                <p>{entry.caption}</p>
                
                </div>
           
         
        </>
        
    )
}