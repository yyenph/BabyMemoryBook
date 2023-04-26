import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,Link,Outlet, useLoaderData } from "react-router-dom";
import AlbumCard from "./AlbumCard";

export default function Album(){
    const {child_name}=useParams();
    
    const albumlist=useLoaderData();

    return (
        <>
            <nav>
                <Link to={`/${child_name}/addalbum`}>Add new Album</Link>
            </nav>
            <div className="album-display">
                {
                    albumlist.map((album)=>
                    <ul>
                        <Link to={`/${child_name}/${album.name}/`}>{album.name}</Link>
                    </ul>
                    )
                } 
            </div>
            
        </>
    )
}