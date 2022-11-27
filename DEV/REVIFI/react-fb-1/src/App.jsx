import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import RequireAuth from "./components/RequireAuth"
import { UserContext } from "./context/UserProvider"

import Home from "./routes/Home"
import Login from "./routes/Login"

const App = () => {
  
  const {user} = useContext(UserContext)

  if(user===false){
    return <p>Loading...</p>
  }

  return (
    <>
    <Navbar/>
     <h1>APP</h1>
     
    <Routes>

      
          <Route path="/" element={
          <RequireAuth>
              <Home/>
          </RequireAuth>
          }/>
      

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    </>
  )
}

export default App
