import React, { useState } from 'react'

const Formulario = () => {

    //state
    const [todo, setTodo] = useState({
        //Que las propiedades sean iguales a los 'name'
        todoName: ' ',
        todoDescription: ' ',
        todoEstado: 'Pendiente',
        todoCheck: false,
    })

    //otro state para validacion

    const [error, setError] = useState(false)

    const [dark, setDark] = useState(false)

    //onSubmit - handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form capturado')

        //dalidacion
        //destructuring todo
        const {todoName, todoDescription} = todo

        if(!todoName.trim() || !todoDescription.trim()) {
            // console.log('Rellene los campos');
            setError(true);
            return
        }else{
            setError(false)
        }


        //resetear
        setTodo({
            todoName: ' ',
            todoDescription: ' ',
            todoEstado: 'Pendiente',
            todoCheck: false,
        })
    }

    //handleChange

    const handleChange = (e) =>{
        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target.type); //para el checkbox

        //destructuring e.target
        const {name, type, checked, value} = e.target

        setTodo({
            ...todo,
            // [e.target.name] : e.target.value
            //para el checkbox con operador ternario
            // [e.target.name] : e.target.type === 'checkbox' ? e.target.checked : e.target.value
            //luego del destructuring
            [name] : type ==='checkbox' ? checked : value
        })

        // setTodo((old) =>({
        
        //     ...old,
        //     [e.target.name] : e.target.value

        // }))
    }


    //nuevo componente para el error
    const PintarError = () => (
        <div className="alert alert-danger">
            <span>Campos Obligatorios</span>
        </div>)

        
    

    //return (Formulario)
  return (
    <>
        <h2 className='text-danger'>Formulario Controlado</h2>

        {
            error ? <PintarError/> : null
        }


        <form onSubmit={handleSubmit} > 

        {/* input text */}

        <input 
        type="text" 
        placeholder='Ingrese TODO'
        name='todoName'
        className='form-control mb-2'
        // defaultValue="Tarea #1"
                                  //objeto{}
        // onChange={e => setTodo({...todo, todoName: e.target.value})}
        onChange={handleChange}
        value={todo.todoName}
        />

        {/* input textarea */}

        {/* <textarea name="" id="" cols="30" rows="10"></textarea> HTML, NO JSX*/}
        <textarea 
            name="todoDescription"
            placeholder='Ingrese descripcion del TODO'
            className='form-control mb-2'
            // defaultValue="Descripcion Tarea #1"
            // onChange={e => setTodo({...todo, todoDescription: e.target.value})}
        onChange={handleChange}
        value={todo.todoDescription}
        />

        {/* input select */}

        <select 
            name="todoEstado"
            className='form-control mb-2'
            // defaultValue="Pendiente"
            // onChange={e => setTodo({...todo, todoEstado: e.target.value})}
            onChange={handleChange} 
            value={todo.todoEstado}
            >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
        </select>

        {/* input checkbox */}
        {/* no es html, remplazar las class por className */}
        <div className="form-check">
            <input 
                className="form-check-input" 
                type="checkbox" 
                checked={todo.todoCheck} 
                id="flexCheckDefault"
                name='todoCheck'
                onChange={handleChange}
                />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Dar prioridad
            </label>
        </div>

        <button type='submit' className='btn btn-primary'>Agregar</button>
        <button type='submit' className='btn btn-secondary'>Cambiar</button>

    </form>
    </>
  )
}

export default Formulario