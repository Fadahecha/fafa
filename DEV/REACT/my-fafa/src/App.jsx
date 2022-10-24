import React from 'react'
import DLmode from './components/DLmode'
import Formulario from './components/Formulario'
// import FormNoControlado from './components/FormNoControlado'


const App = () => {
  return (
    <div className='container'>
    <h1>Formularios</h1>
    <Formulario/>
    <DLmode/>
    {/* <FormNoControlado/> */}
    </div>
  )
}

export default App



// //FUNDAMENTOS DE REACT #1

// import Contador from './components/Contador'
// import Cosas from './components/Cosas'
// import Frutas from './components/Frutas'
// import Plantas from './components/Plantas'


// const App = () => {

//     const saludo = "Saludo  desde variable"

//     const colorObjeto = {
//         primary: 'text-primary',
//         danger: 'text-danger',
//         success: 'text-success',
//         secondary: 'text-secondary'
//     }

//     const boton = document.getElementById('btn')

//     //---- renderizado condicional

//     const user = true; 

//          //Componente   
//     const SaludoBienvenida = () => (   //<--- si se usa () es sin return

//         <h2 className={colorObjeto.success}>Bienvenido!</h2>

//     )
//           //Componente  
//     const SaludoDespedida = () => {         //<-- si se usa {} return obligatorio

//         return(
//         <h2 className={colorObjeto.secondary}>Adios!</h2>
//         )

// }
    
//     //-------------------------------------------

//     /////////////////////////////////////////////////

//     //---- Listas y Keys

//         // const frutas = ['🍏', '🍓', '🍌'];

//         // const cosas = ['🍕','🚗','🏠']
//     //-------------------------------------------

//     //---- eventos onClick={}

//         const funcionClick = () =>{
//             console.log('me diste click desde funcion');
//         }

//         //con parametros
//         const funcionClick1 = (nombre) => {
//             console.log(`me diste click ${nombre}`)
//         }
//     //----------------------------------------------

//     //----Props--
        
//     const plantas = ['🌳','🌴','🌵','🌾']

//     //----


//     return (
//     <div className='container mt-2'>Mi primer componente
//         <hr />
//         <p className={colorObjeto.primary}>{saludo}</p>
    
//         {/* para testear renderizado condicional */}
//         {
//             user ? <SaludoBienvenida/> : <SaludoDespedida/>
//         }

//         <button className='btn btn-primary mx-2' id='boton' onClick={()=> console.log('me diste click')}>Dame Click!</button>
//         <button className='btn btn-warning mx-2' id='boton' onClick={()=> funcionClick()}>Dame Click!</button>
//         <button className='btn btn-success mx-2' id='boton' onClick={()=> funcionClick1('fafa')}>Dame Click!</button>


//         {/* para testear lista y key={OJO} NO index si no es estatica, funcion =>() sin return */}
//        {/* <ul className='mt-2'>
//        {
//             frutas.map((fruta, index, array)=> (
//                 <li key={index}>{fruta}</li>
//             ))
//         }
//        </ul> */}
//         <hr className={colorObjeto.success}/>
//        <Frutas/>
//        <Frutas/>
//        <Frutas/>
//         <hr className={colorObjeto.danger}/>
//         {/* para testear lista y key={OJO} NO index si no es estatica, invento mio probando {}return() */}
       
//        {/* <table>
//             <tbody>
//                 <tr>
//                     {
//                         cosas.map((item, index) =>{
//                             return(
//                                 <td className='border ' key={index}>{index + 1}{item}</td>
//                             )
//                         })
//                     }    
//                 </tr>
//             </tbody>
//        </table>

        
//         <ul className='mt-2'>
//             {
//                 cosas.map((item, index) => (
//                     <li key={index}>{index + ' '}{item}</li>
//                 ))
//             }
//         </ul> */}

//         <Cosas/>
//         <hr />
//         <Plantas plantasProps={plantas}/>
//         <hr />
//         <Contador/>

//     <hr className=''/>
//     <hr />    
//     </div>
//   )
// }

// export default App






/**APP original */

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
