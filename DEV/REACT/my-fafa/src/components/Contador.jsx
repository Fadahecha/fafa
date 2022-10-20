import React, { useState } from 'react'

const Contador = () => {

    // let contador = 0;

    // const aumentar = () => {
    //     contador ++
    //     console.log(contador);
    // }


    //-------------hook------------------

        //contador es nuestro estado aue comienza en 0 y setContador es el modificador
        const [contador, setContador] = useState(100)

        const aumentar = () => {
            setContador(contador + 1);
        }
   

    //-------------------------------


  return (
    <>
    <h2>Contador</h2>
    <h3>{contador}</h3>
    <button className='btn btn-dark'
            onClick={aumentar}   //la llamo sin parentesis
    >Aumentar</button>
    </>
  )
}

export default Contador