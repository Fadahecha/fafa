import React from 'react'; //react
import ReactDOM from 'react-dom/client'; //DOM
import './index.css'; //estilos
import App from './App'; //componentes '/App.jsx' tambien se puede
import reportWebVitals from './reportWebVitals'; //reportes
import Frutas from './components/Frutas';
import Cosas from './components/Cosas';

//---------


//---------
const root = ReactDOM.createRoot(document.getElementById('root')); //root

//renderizacion en el root (div con id 'root' en /public/index.html)
root.render(
  <React.StrictMode>
    <App />
    {/* <Frutas/>
    <Cosas/>                         */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
