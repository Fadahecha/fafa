import React, { useRef } from 'react'

const FormNoControlado = () => {

    const formulario = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form capturado')

        const datos = new FormData(formulario.current)
        console.log(datos);
        console.log(...datos.entries());

        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)

        const {todoName, todoDescripcion, todoEstado} = objetoDatos;
        
        if(!todoName.trim() || !todoDescripcion.trim()) {
            console.log('Rellene los campos');
            return
        }else{
            console.log('bien')
        }

    }

  return (
    <>
    <h2>No controlado</h2>
    {/* se llama sin parentesis la funcion de onSubmit */}
    <form ref={formulario} onSubmit={handleSubmit} > 
        <input 
        type="text" 
        placeholder='Ingrese TODO'
        name='todoName'
        className='form-control mb-2'
        defaultValue="Tarea #1"
        />

        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <textarea 
            name="todoDescripcion"
            placeholder='Ingrese descripcion del TODO'
            className='form-control mb-2'
            defaultValue="Descripcion Tarea #1"
        />

        <select 
            name="todoEstado"
            className='form-control mb-2'
            defaultValue="Pendiente"
            >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>

        <button type='submit' className='btn btn-primary'>Agregar</button>

    </form>
    </>
  )
}

export default FormNoControlado