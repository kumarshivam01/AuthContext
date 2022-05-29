import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authcontext"



export const Navbar=()=>{
    const{logout,changeauth}=useContext(AuthContext)
    const navigate=useNavigate()
    const setclick=()=>{
       navigate("/form")
    }
    return (
        <div className="nav_cont">
            <div>Authsystem</div>
            <div className="btn">
                <button onClick={logout?setclick:changeauth}>{logout?"Login":"Logout"}</button>
            </div>
        </div>
    )
}
