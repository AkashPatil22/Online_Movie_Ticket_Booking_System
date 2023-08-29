import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const user = sessionStorage['user_id']
    if(user===null||user===undefined){
      return  <Navigate to={'/signin'}/>
    }else{
        return children
    }
}

export default PrivateRoute