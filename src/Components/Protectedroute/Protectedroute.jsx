import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'


const Protectedroute = ({children}) => {

    if(localStorage.getItem("tkn")==null)
    {
        return <Navigate to={"/Login"}/>
    }
  return <>{children}</>
  
  
}

export default Protectedroute