import { useEffect } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ChildContent from "./ChildContent";
import { getChildList } from "../../utilities";
import './Childstyle.css'
import AddChild from "./AddChild2";

export default function Child(){
    const child_list=useLoaderData();
    const navigate =useNavigate()

    return (
        <div className="child-card">
            
            
            <div className="child-display" >
                {child_list.map((child)=> (
                    <div className="child-content"
                    onClick={() => navigate(`/${child.name}/albums`)}
                    >
                        <ChildContent child={child}/>
                    </div> 
                ))}
            </div>
            <div className="add-child" >
                <h2>New child</h2>
                {/* <Link className="addChild-button" to="/child/addchild/">Add new Child</Link> */}
                <AddChild />
                <p>Birthday</p>
                <p>Age</p>
            </div>
            <Outlet />
        </div>
        
    )
}