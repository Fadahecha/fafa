import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Inicio = () => {

  //context
  // const [user, setUser] = useState(false)

  const {user, signIn, signOut} = useContext(UserContext)

  return (
    <div>
        <h1>Inicio</h1>

      

        <h2>
          {
            user ? 'conectado' : 'desconectado'
          }
        </h2>
          {
            user ? 
            (
              <>
              <button className='btn btn-primary'
              onClick={signOut}
              >Salir</button>

              <Link to='/protegida' className='btn btn-warning text-danger'>Ruta Protegida</Link>
              </>
            ) : 
            
            (
              <button className='btn btn-primary'
              onClick={signIn}
              >Acceder</button>
            )
          }
        
        
    </div>
  )
}

export default Inicio