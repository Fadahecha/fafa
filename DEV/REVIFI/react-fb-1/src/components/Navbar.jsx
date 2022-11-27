import { async } from '@firebase/util'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'





const Navbar = () => {

  const {user, signOutUser} = useContext(UserContext)

  const handleClickLogOut = async() => {
      try {
        await signOutUser()
      } catch (error) {
        console.log('error.code')
      }
  }

  return (
    <div>
      {
        user ? 
        <>
        (<NavLink to="/">Inicio |</NavLink>
        <button onClick={handleClickLogOut}>Logout</button>
        )
        </> :
        (
          <>
          <NavLink to="/login">Login |</NavLink>
          <NavLink to="/Register">Register |</NavLink>
          </>
        )
      }
        
        
    </div>
  )
}

export default Navbar