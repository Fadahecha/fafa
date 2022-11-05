import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading'
import Personaje from './Personaje'

const PintarDatos = ({nombrePersonaje}) => {

    //empujar los .results, con un state
    const [personajes, setPersonajes] = useState([])
    //spinner
    const [loading, setLoading] = useState(false)


    //useEffect para consumirApi()
    useEffect( () => {
        consumirApi(nombrePersonaje)
    }, [nombrePersonaje])


    //funcion del fetch()
    const consumirApi = async(nombre) =>{

        //spinner
        setLoading(true)

        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
        
            if(!res.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }

            //en caso de enviar algo correcto
            //NOTA, siempre 2 await con el fetch
            const datos = await res.json()
            console.log(datos) 
            console.log(datos.results);    //.results esta dentro de datos quien tiene a la res pardeada con json()

            //.results
            setPersonajes(datos.results);

        } catch (error) {
            console.log('error')
        }finally{
            //spinner
            setLoading(false)
        }
    }

    //spinner
    if(loading){
        return <Loading/>
    }

  return (
    <div className='row mt-2'>
        {
            personajes.map((item) =>(
                <Personaje key={item.id} personaje={item}/>
            ))
        }
    </div>
  )
}

export default PintarDatos