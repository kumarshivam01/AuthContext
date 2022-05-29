import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authcontext"



export const Forms=()=>{
    const{logout,changeauth}=useContext(AuthContext)
    const[user,setUser]=useState({email:"",password:""})
    const navigate=useNavigate()

    const handlechange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const userdetail={
            email:user.email,
            password:user.password
        }
     let res= await fetch("https://reqres.in/api/login",{
         method:"POST",
         headers:{
             "content-type":"application/json",
         },
         body:JSON.stringify(userdetail)
     })
     let data=await res.json();
     if(data.token){
        changeauth()
        navigate("/")
     }
     
    }
    return (
        <form onSubmit={handlesubmit}>
            <label>Email</label><br></br>
            <input type="text" placeholder="Enter your email" id="email" name="email" onChange={handlechange}/>
            <label>password</label><br></br>
            <input type="password" placeholder="Enter your password" id="password" name="password" onChange={handlechange}/>
            <button>submit</button>
        </form>
    )
}