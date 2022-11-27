import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {

  const [email, setEmail] = useState('fafa@fafa.com')
  const [password, setPassword] = useState('fafa123')

  // const {user, setUser} = useContext(UserContext)
  const {loginUser} = useContext(UserContext)


  const navegate = useNavigate();

  // const handleClickLogin = () => {
  //   setUser(true)
  //   navegate('/')
  // }

  
  const handleSubmit = async(e) => {

    e.preventDefault()
    console.log('procesando: ', email, password)
    try {
        await loginUser(email, password)
        console.log('usuario logeado');
        navegate("/")
    } catch (error) {
        console.log(error)
    }
}

  return (
    <>
        <h1>Login</h1>

        {/* <h2>
          {
            user ? 'en linea' : 'desconectado'
          }
        </h2> */}

        {/* <button onClick={() => setUser(true)}>Acceder</button>
        <button onClick={() => setUser(false)}>Salir</button> */}
        {/* <button onClick={handleClickLogin}>Acceder</button> */}

        <form onSubmit={handleSubmit}>

            <input type="email" 
                placeholder='ingrese email'
                value={email}
                onChange = {e =>setEmail(e.target.value)}
            />

            <input type="password" 
                placeholder='ingrese password'
                value={password}
                onChange = {e =>setPassword(e.target.value)}
            />
            
            <button type='submit'>login</button>

        </form>

    </>
  )
}

export default Login