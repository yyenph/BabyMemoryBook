import NewEntry from "../Entry/NewEntry"

export default function AlbumContent({entry}){
    
    return (
        <>
            <h2>{entry.title}</h2>
            <p>{entry.date}</p>
            <img className='entry-image' src={`/media/${entry.image}`} alt="Img" />

            <p>{entry.caption}</p>
           
            <NewEntry />
        </>
        
    )
}