const formulario = document.getElementById('formulario');
const pintarTodo = document.querySelector('#pintarTodo');
const templateTodo = document.querySelector('#templateTodo').content //<-- siempre .content
const alertaValidacion = document.querySelector('#alertaValidacion')
//fragment
const fragment = document.createDocumentFragment()

let todos = []  // <--- ? // ---> let todos = [{nombre: "Fafa", id: 0654654679656}, {}, {}]

formulario.addEventListener('submit', (e) =>{
    e.preventDefault() //evitar aue GET haga el envio por defecto
    //console.log('doc capturado')

    //3 Validacion para vacios - limpiar el alerta
    alertaValidacion.classList.add('d-none')


    //1
    const data = new FormData(formulario)  //prototipo que siempre recibe el id del form, con formData, capturo todo con el nombre, mas efectivo que con id (menos trabajo)

    //2 Destructuring siempre
    const [todo] = [...data.values()] //esto devuelve un array de los valores que contienen los elementos inputs y los guardo en una const array [todo]... OJO 1 solo elemento esta vez, ver ejemplo anterior con mas de 1 elemento
    //console.log(todo)

    //3 validacion para vacios
    console.log(!todo.trim());  //trim() limpia todos los vacios puros?. En caso de haber vacios !trim() devuelve true y se puede usar esa info

    if(!todo.trim()){
        console.log('hay vacios')
        alertaValidacion.classList.remove('d-none')  //remode no genera error si no existe la clase
        return                      // Importante para aue no siga el codigo
    }
    

    //4 agregar TODO
    agregarTodo(todo)   //no existe al principio
    //5
    pintarTodos()

});



//4 creando agregarTodo
const agregarTodo = (todo) =>{          //el '= todo' es el argumento en este tipo de sintaxis --> const agregarTodo = (todo) => {}

    ///1 creo el objeto que voy a empujar
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`     //Alternativa porque no tenemos base de datos con id y no tenemos nada instalado. En realidad se genera un numero con muchos digitos al momento de hacer la operacion. No hacer forEach poraue se pudiese repetir un numero
        
        //Date.now() es un numero pero debo guardarlo con un dataSet() aue solo acepta string, por eso uso `template string`

    }

    ///2 empujo el objeto
    todos.push(objetoTodo)
}



//5 Pintar el TODO
const pintarTodos = () => {

 //7 localStorage
 localStorage.setItem('todos', JSON.stringify(todos))   

 ///1 como es dinamico, se borra el contenido inicial del lugar en donde se pintara el contenido (section con id = 'pintarTodo')
pintarTodo.textContent = "";

 ///2 creo el forEach aue va a recorrer los [todos]
todos.forEach((item) =>{

   

    ////1 creo el clone
    const clone = templateTodo.cloneNode(true)    

    ////2 Con el clone, modifico los elementos necesarios. Clone solo busca elementos dentro del template, no fuera
    
    clone.querySelector('p').textContent = item.nombre // normalmente en la <p> va el TODO: El TODO sale de [...data.values] aue se guarda en [todo], luego en el objeto que se va a empujar en el array y aue a su vez es el item que recorrer el forEach, 'todo' es igual a su nombre -->
                                                       // item.nombre = todo, todo = ...data.values()
    
    //6 Para saber q auien delegar el evento.. Necesario (antes del fragment)
    clone.querySelector('.btn-danger').dataset.id = item.id;      //.dataset.id en js es lo mismo aue el atributo <<data-id="">> en html

    ////3 pego el clone al fragment                                                   
    fragment.appendChild(clone)
})

    ////4 fuera del forEach pego el fragment a la seccion (pintarTodo)
    pintarTodo.appendChild(fragment)
   
}

//Ahora toca captar los botones para los elementos del TODO, pero ellos no existen aun, por lo que hay que hacer una delegacion de eventos
//Debo entonces capturar el id de cada TODO que aparece, por eso uso Data.now() para simular un id ... Ojo, es incorrecto asignar IDs reales a cosas que no existen y aue se van a repetir
//Ese 'id' debe ser especifico para borrar la tarea correcta
//PARA ESO, se usa 'dataSet'

//6 Delegacion de Eventos
document.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    console.log(e.target.dataset.id) //muestra el id clickeado
    console.log(e.target.matches('.btn-danger')); //si coincide manda true

    ///1
    if(e.target.matches('.btn-danger')){
        console.log('diste click al boton eliminar')

        ////1 recorro el array de todos con filter para eliminar, filtrar
        todos = todos.filter((item) => item.id !== e.target.dataset.id)
        pintarTodos()
    }
})


//7 localStorage
document.addEventListener('DOMContentLoaded', (e) => {
    
    //localStorage.getItem('todos')

    if(localStorage.getItem('todos')){
        //igualar los [todos] a lo que viene en el localStorage y si es asi se pintan
        todos = JSON.parse(localStorage.getItem('todos'))
        pintarTodos()  
    }
})