import React, { useState } from 'react'
import { useEffect } from 'react'
import DLmode from './DLmode'
import Formulario from './Formulario'
import Todo from './Todo'

const TodoList = () => {

  //useState para todos
  const [todos, setTodos] = useState([])

  const agregarTodo = (todo) => {
      console.log(todo)
      setTodos((old) => [...old, todo])
  }

  //localStorage NO ME FUNCIONA en DEV mode react pero si en Netlify
  useEffect(() => {
    if(localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  //eliminar
  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id))
  }

  //editar
  const editarTodo = (id) => {
    const editarTodos = todos.map((item) => {
      return(item.id === id ? {...item, estado: !item.estado} : item)
    })

    setTodos(editarTodos)
  }

  return (
    <>
        <h2 className='text-success
        '><DLmode/></h2>
        <Formulario agregarTodo={agregarTodo}/>

        <ol className='list-group list-group-numbered mt-2-'>
          {
          todos.map((item) =>(
            // <li key={item.id}>{item.nombre}</li>
            <Todo key={item.id} 
                  todo={item} 
                  eliminarTodo={eliminarTodo}
                  editarTodo ={editarTodo}
                  />
          ))
        }
        </ol>
        
    </>
  )
}

export default TodoList