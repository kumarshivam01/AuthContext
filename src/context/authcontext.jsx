import { createContext, useState } from "react";



export const AuthContext=createContext();

export const  Authcontextprovider=({children})=>{
    const[logout,setLogout]=useState(true)
    const changeauth=()=>{
        {logout==true?setLogout(false):setLogout(true)}
    }
    return (
        <AuthContext.Provider value={{logout,setLogout,changeauth}}>{children}</AuthContext.Provider>
    )
}