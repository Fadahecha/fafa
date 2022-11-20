import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {

  const {user, setUser} = useContext(UserContext)
  const navegate = useNavigate();

  const handleClickLogin = () => {
    setUser(true)
    navegate('/')
  }

  return (
    <>
        <h1>Login</h1>

        <h2>
          {
            user ? 'en linea' : 'desconectado'
          }
        </h2>

        {/* <button onClick={() => setUser(true)}>Acceder</button>
        <button onClick={() => setUser(false)}>Salir</button> */}
        <button onClick={handleClickLogin}>Acceder</button>

    </>
  )
}

export default Login