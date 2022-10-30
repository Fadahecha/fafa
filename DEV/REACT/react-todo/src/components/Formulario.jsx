import React, { useState } from 'react'
//sweetalert2 - npm install sweetalert2
import Swal from 'sweetalert2'
//uuid
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from '../hooks/useFormulario';


const Formulario = ({agregarTodo}) => {

    //estado inicial
    const initialState = {
        nombre: "",
        descripcion:"",
        estado:"pendiente",
        prioridad:false
    }

    //hook useState
    // const [todo, setTodo] = useState(initialState) //lo quite por el hook personalizado

    //hook personalizado
    const [inputs, handleChange, reset] = useFormulario(initialState)

    //destructuring
    //const {nombre, descripcion, estado, prioridad} = todo //lo quite por el hook personalizado
    const {nombre, descripcion, estado, prioridad} = inputs



    /**lo envié al custom hook y lo modifiqué */

    // const handleChange = e => {
    //     const {name, value, checked, type} = e.target;

    //     setTodo( (old) => ({
    //         ...old,
    //         [name]: type === 'checkbox' ? checked : value
    //     }));

        //otra forma
        // setTodo({
        //     ...todo,
        //     [name]: type === 'checbox' ? checked : value
        // })
    //}

    const handleSubmit = (e) => {
        e.preventDefault()
       

        if(!nombre.trim()){
            console.log('campo obligatorio')

            //focus
            e.target[0].focus();

            //sweetAllert2
            Swal.fire({
                title: 'Error!',
                text: 'Nombre de tarea obligatorio',
                icon: 'error',
                confirmButtonText: 'ok'
              })

            return //para que no ejecute el codigo de abajo
        }

        if(!descripcion.trim()){

            //focus
            e.target[1].focus();

            //sweetAllert2
            Swal.fire({
                title: 'Error!',
                text: 'Descripcion de tarea obligatorio',
                icon: 'error',
                confirmButtonText: 'ok'
              })
            
            return  
        }

        //success sweetAlert2
        Swal.fire({
            title: 'Bien!',
            text: 'Tarea guardada con exito',
            icon: 'success',
            confirmButtonText: 'ok'
          })
          

        //console.log(todo);

        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            // id: Date.now()
            id: uuidv4()
        })

        //setTodo(initialState); //lo quite por el hook personalizado

        reset();

    }

    /**
     * DL MODE
     */
    

  return (
    <>
        <h3>Agregar TODO </h3> <span className='text-success'><small>Titulo del componente Formulario</small></span>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" 
                   className='form-control mb-2'
                   name='nombre'
                   placeholder='Ingrese TODO'
                   value={nombre}
                   onChange={handleChange}
            />

            <textarea name="descripcion"
                      placeholder='Descripcion'
                      className='form-control mb-2'
                      value={descripcion}
                      onChange={handleChange}

            />

            <select name="estado"
                    className='form-control mb-2'
                    value={estado}
                    onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <div className="form-check mb-2">
                <input className="form-check-input" 
                       type="checkbox" 
                       checked={prioridad}
                       id="flexCheckDefault"
                       name='prioridad'
                       onChange={handleChange}
                       />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Prioritario
                </label>

            </div>
            
            <button type='submit' className='btn btn-primary'>Agregar</button>

        </form>
    </>
  )
}

export default Formulario