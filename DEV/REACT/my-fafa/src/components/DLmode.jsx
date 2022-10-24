import React, { useEffect, useState } from 'react'
import './DLmode.css'

const DLmode = () => {

    //useState hook

    //const 
    const [theme, setTheme] = useState(localStorage.getItem('theme') ||'light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    //useEffect hook
    useEffect(() => {
      localStorage.setItem('theme', theme)
        document.body.className = theme;
    }, [theme]); //<--- funciona sin [theme] ?

  return (
    <>
    {/* <div className={`App ${theme} my-5` }> */}
    {/* <div className={`DLmode ${theme} my-5` }> */}
    <div className={`DLmode my-5` }>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div>

    </>
  )
}

export default DLmode