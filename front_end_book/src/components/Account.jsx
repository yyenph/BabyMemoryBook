import { useContext } from "react"
import { UserContext } from "../App"
import Child from "../views/Child/Child"
export default function Account(){
    const {user}=useContext(UserContext)
    return (
        <div>
            <p>Have a wonderful day {user.name} </p>
            {/* < Child /> */}
        </div>
    )
}