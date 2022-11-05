import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {

    //useEffect ejemplo///////////////////
    const [contador, setContador] = useState(0) //useState, tipico contador aue parte en 0

    useEffect(() => {
        console.log(`contador: ${contador}`);
    }, [contador])
    //////////////////////////////////////


    //state
    const [nombrePersonaje, setNombrePersonaje] = useState('')

    //localStorage
    // useEffect(() =>{
    //     if(localStorage.getItem('nombreApi')){
    //       setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
    //     }
    
    //     localStorage.setItem('nombreApi', JSON.stringify(nombrePersonaje))
    // }, [nombrePersonaje])

    


  return (
    <div className='container'>
       
            <h1>App Rick & Morty</h1>
         <div className='bg-warning mb-4'>    
            <h3>Contador {contador}</h3>
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        </div>
       
        <Formulario setNombrePersonaje={setNombrePersonaje}/>
        <PintarDatos nombrePersonaje={nombrePersonaje}/>

    </div>
  )
}

export default App