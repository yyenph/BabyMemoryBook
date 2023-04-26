import { useContext, useState } from "react";
import { UserContext } from "../App";


export default function NameIdea (){
    const {nameList}=useContext(UserContext)

    return (
        <div className="name-finder">
    
        
        {nameList.length>0 &&(
            <div className="names-result">
            <h3>Baby Name Ideas You'll Love</h3>
            <ul>
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
