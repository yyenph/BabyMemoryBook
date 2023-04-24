import { useContext } from "react";
import { UserContext } from "../../App";
import EditChild from "./EditChild";

export default function ChildContent({child}){

    return (
        <>
            <h2>{child.name}</h2>
            <img className='profile-photo' src={`/media/${child.profile_photo}`} alt="Profile Photo" />

            <p>Birthday: {child.birthdate}</p>
            <p>Age</p>
            <EditChild />
        </>
        
    )
}