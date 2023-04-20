import { useState } from "react";

// const Child = getAllChild()

export default function AddAlbum(){
    const [name, setName] = useState("");
    const [child, setChild] = useState("");
    
    return(
        
        <form onSubmit={(e)=>{[
            e.preventDefault(),
            // addAlbum(name,child),
            setAlbum(''),
            setChild(''),
            ]
        }}>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
    
            <div>
                <Select 
                    options={Child}
                    value={child}
                    onChange={(e) => setChild(e.target.value)} 
                />
            </div>
            <div>
                <input type="file"/>
                <button>
                  Save
                </button>
            </div>
            <input type="submit" value="Save Album" />
    
        </form>
    )
}