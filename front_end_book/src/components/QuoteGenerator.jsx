import { useContext, useState } from "react";
import { UserContext } from "../App";


export default function QuoteGenerator (){
    const {quote}=useContext(UserContext)
   

    return (
        <div className="lyrics-finder">
    
        
        {quote &&(
            <div className="quote">
            <h3>"{quote.text}"</h3> 
            <p className="author">{quote.author}</p>
            </div>
        )
        } 
        </div>
    )
}