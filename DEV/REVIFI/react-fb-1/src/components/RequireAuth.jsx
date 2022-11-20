import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const RequireAuth = ({children}) => {

 const {user, setUser} = useContext(UserContext)

 if(!user){
    return <Navigate to="/login" /> //si no existe el user, ir a /login
 }

  return children //continuar si si existe el user
}

export default RequireAuth