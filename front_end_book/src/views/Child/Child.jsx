import { useEffect } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ChildContent from "./ChildContent";
import { getChildList } from "../../utilities";

import AddChild2 from "./AddChild2";


export default function Child(){
    const child_list=useLoaderData();
    const navigate =useNavigate()
    // const [child_list,setChildList]=useState();
    return (
        <div className="child-card">
            
            
            
                {child_list.map((child)=> (
                    <div className="child-content"
                    onClick={() => navigate(`/${child.name}/albums`)}
                    >
                        <ChildContent child={child}/>
                    </div> 
                ))}
            
            <div className="add-child" >
                <h2>New child</h2>
                {/* <Link className="addChild-button" to="/child/addchild/">+</Link> */}
                <AddChild2 />
                <p>Birthday</p>
                <p>Age</p>
            </div>
            <Outlet />
        </div>
        
    )
}