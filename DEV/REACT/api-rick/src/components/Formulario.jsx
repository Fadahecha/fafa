import React from 'react'
import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonaje}) => {

    //custom hook
    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    const {nombre} = inputs //destructuring para usar 'nombre'

    //handleSubmit
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nombre);

        //validacion con sweetAlert2

        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }

        setNombrePersonaje(nombre.trim().toLowerCase())
        reset()
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text"
               placeholder='Chercher'
               className='form-control mb-2'
               value={nombre} //viene del destructuring
               onChange={handleChange} //en el hook
               name='nombre'
        />

        <button type='submit'
                className='btn btn-dark'
        >
            Chercher</button>

    </form>
  )
}

export default Formulario