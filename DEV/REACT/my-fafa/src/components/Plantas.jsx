import React from 'react'

const Plantas = (props) => {
    // console.log(props)
    //sin const plantas =[]
  return (
    <>
        <ul>
            {
                props.plantasProps.map((item, i) =>{
                    return(
                        <li key={i}>
                            {i+1} - {item}
                            </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default Plantas