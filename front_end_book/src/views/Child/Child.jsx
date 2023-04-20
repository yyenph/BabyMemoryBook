import { Link, Outlet } from "react-router-dom"
export default function Child(){
    return (
        <>
            <nav>
                <Link to="/child/addchild/">Add new Child</Link>
            </nav>
            <Outlet />
        </>
        
    )
}