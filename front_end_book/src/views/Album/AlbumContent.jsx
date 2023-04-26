

export default function AlbumContent({entry}){
    
    return (
        <>
            {/* {( */}
                <div className="single_entry">
                <h2>{entry.title}</h2>
                <img className='entry-image' src={`${entry.image}`} alt={entry.title} />
                <p>{entry.date}</p>
                <p>{entry.caption}</p>
                
                </div>
           
         
        </>
        
    )
}