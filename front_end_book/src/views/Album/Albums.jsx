import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link,Outlet, useLoaderData } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import NewAlbum from "./NewAlbum";

export default function Album(){
    const {child_name}=useParams();
    
    const albumlist=useLoaderData();

    return (
        <>
            
            <p className="album-title">Album for {child_name}</p> 
            <Link className='back-to-child-button' to="/child/">Back to see all children list</Link>
            
            
            <div className="album-display">
                
                {
                    albumlist.map((album)=>
                    
                        <Link className="album_name" to={`/${child_name}/${album.name}/`}>{album.name}</Link>
                   
                    )
                } 
                <NewAlbum/>
                {/* <Link className="add-album" to={`/${child_name}/addalbum`}>+ Album</Link> */}
            </div>

            
        </>
    )
}