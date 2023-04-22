import { useContext } from "react";
import { UserContext } from "../../App";

export default function ChildContent({child}){
    const {childrenList,setChildrenList} = useContext(UserContext);
    return (
        <>
            <h2>{child.name}</h2>
            <img className='profile-photo' src={`/media/${child.profile_photo}`} alt="Profile Photo" />

            <p>Birthday: {child.birthdate}</p>
            <p>Age</p>
        </>
        
    )
}