import { useEffect } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import ChildContent from "./ChildContent";
import { getChildList } from "../../utilities";
import './Childstyle.css'

export default function Child(){
    const child_list=useLoaderData();
    const navigate =useNavigate()

    return (
        <>
            <nav>
                <Link to="/child/addchild/">Add new Child</Link>
            </nav>
            
            <div className="child-display" >
                {child_list.map((child)=> (
                    <div className="child-content"
                    onClick={() => navigate(`/child/${child.name}/albums`)}
                    >
                        <ChildContent child={child}/>
                    </div>
                ))}
            </div>
            <Outlet />
        </>
        
    )
}