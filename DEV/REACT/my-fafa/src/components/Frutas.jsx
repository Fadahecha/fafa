import React from 'react'

const Frutas = () => {

    const frutas = ['🍏', '🍓', '🍌'];

  return (
    //fragment largo
    <React.Fragment>  

        <ul className='mt-2'>
       {
            frutas.map((fruta, index, array)=> (
                <li key={index}>{fruta}</li>
            ))
        }
       </ul>

    </React.Fragment>
    
  )
}

export default Frutas