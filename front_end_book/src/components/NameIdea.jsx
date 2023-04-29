import { useContext, useState } from "react";
import { UserContext } from "../App";


export default function NameIdea (){
    const {nameList}=useContext(UserContext)

    return (
        <div className="name-finder">
    
        
        {nameList.length>0 &&(
            <div className="names-result">
                <p className="namecard-title">Baby Name Ideas You'll Love</p>
                <ul className="name-list">
                    {nameList.map((name)=> (
                        <li>{name}</li>
                    )
                    )}
                </ul>
            </div>
        )
        } 
        </div>
    )
}
