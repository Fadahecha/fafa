import React from 'react'

const Cosas = () => {

    const cosas = ['🍕','🚗','🏠']

  return (
    //fragment corto
    <>

        <table>
            <tbody>
                <tr>
                    {
                        cosas.map((item, i) =>{
                            return(
                                <td className='border ' key={i}>{i + 1}{item}</td>
                            )
                        })
                    }    
                </tr>
            </tbody>
       </table>

        
        <ul className='mt-2'>
            {
                cosas.map((item, index) => (
                    <li key={index}>{index + ' '}{item}</li>
                ))
            }
        </ul>

    </>
  )
}

export default Cosas