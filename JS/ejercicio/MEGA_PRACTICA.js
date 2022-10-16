/**1_Capturar elementos */
const formulario = document.querySelector('#formulario');
const cardsEstudiantes = document.querySelector('#cardsEstudiantes');
const cardsProfesores = document.querySelector('#cardsProfesores');
//templates, siempre usar .content
const templateEstudiante = document.querySelector('#templateEstudiante').content;
const TemplateProfesor = document.querySelector('#TemplateProfesor').content;
 //fragment
 const fragment = document.createDocumentFragment();


const estudiantes = [] /**Despues de crear las clases y el metodo static */
const profesores = []

const alert = document.querySelector('.alert')

//delegacion de eventos (detectar botones aue aun no existen o aue existiran gracias a los templates)
//la 'e' es lo inportante
document.addEventListener('click', (e) => {
   // console.log(e.target.dataset.nombre);
                      
    if(e.target.dataset.uid){
        // console.log(e.target.matches('.btn-success'));
        if(e.target.matches('.btn-success')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){    // con == tambien puede servir pero se fuerza mas la maquina
                    item.setEstado = true
                }
                console.log(item)
                return item                   //nombre fue cambiado por uid
            });
            
        }

        if(e.target.matches('.btn-danger')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = false
                }
                console.log(item)
                return item
            });
            
        }
        
        Persona.pintarPersonaUI(estudiantes, "Estudiante")
    }
})



/*para capturar los elementos del input, se puede hacer con un id u capturar su valor, PERO
con el atributo name podemos usar form-data, y al usar form-data podemos hacer fetch() sin
formatear poraue form-data se encarga de eso
*/

//crear una class mas generica para heredar

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
        //alternativa para id, mientras no se escriba absurdamente rapido no habran ids iguales.. no hacer forEach
        this.uid = `${Date.now()}`  //buena alternativa para pasar de numeros a string
    }

    static pintarPersonaUI(personas, tipo){   //<--UI se usa cuando se pinta en html desde js
        if(tipo === "Estudiante"){
            cardsEstudiantes.textContent = "";  //<-- se van a ir apilando con ciclos, entonces es mejor emezar vacio
           

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante())
            });
            
            cardsEstudiantes.appendChild(fragment)
        }

        if(tipo === "Profesor"){
            cardsProfesores.textContent = "";

            personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor())
            });

            cardsProfesores.appendChild(fragment)
        }
    }

}

class Estudiante extends Persona{
    #estado = false       //<--propiedad unica del Estudiante  - false: reprobado -- true: aprobado
    #estudiante = "Estudiante";

    set setEstado(estado){
        this.#estado = estado
    }

    get getEstudiante(){            //<-- no necesario, para practicar
        return this.#estudiante   
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiante.cloneNode(true)
        clone.querySelector('h5 .text-primary').textContent = this.nombre  //<-- this.nombre viene de la clase, no hay aue contruirlo
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad;
        
        if(this.#estado){
            clone.querySelector('.badge').className = "badge bg-success"
            clone.querySelector('.btn-success').disabled = true
            clone.querySelector('.btn-danger').disabled = false
        }else{
            clone.querySelector('.badge').className = "badge bg-danger"
            clone.querySelector('.btn-danger').disabled = true
            clone.querySelector('.btn-success').disabled = false
        }

        //dinamico: fuera del if(), asi no debo escribir por cada condicion
        clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : 'Reprobado'

        // clone.querySelector('.btn-success').dataset.nombre = this.nombre;   //estos dataset.nombre, envia el atributo data-nombre ="fafa"      //el nombre se puede repetir, es incorrecto, es mejor un correo o id
        // clone.querySelector('.btn-danger').dataset.nombre = this.nombre;    //si usara dataset.correo, u otra cosa se comportaria de la misma forma creando el atributo
        //---------------------------------------------------------------
        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;
        /**OJO, todos los dataset devuelven string, hay aue hacer el cambio
         * en this.uid = Date.now() => `{Date.now()}`
         */
        //---------------------------------------------------------------

        return clone
    }
}

class Profesor extends Persona{
    #profesor = "Profesor"

    agregarNuevoProfesor(){
        const clone = TemplateProfesor.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;  //<-- el 'this' extiende de Persona y Persona ya tiene el constructor nombre
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = this.edad;

        return clone;
    }
}


//submit
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    //siempre que el alerta se dispare, para evitar aue el alerta se quede incluso al rectificar
    alert.classList.add('d-none')

    const datos = new FormData(formulario); //<-- id formulario
    //console.log(datos)
    //datos.forEach((item) => console.log(item))

    //----Destructuring----//
    //console.log([...datos.values()]); //<-- .values nativo de FormData

    //   atributos name FormData
    const [nombre, edad, opcion] = [...datos.values()];
    //console.log(nombre, edad, opcion)


    /**Validacion para espacios en blanco */
    if(!nombre.trim() || !edad.trim() || !opcion.trim()){
        console.log('algun dato en blanco')
        alert.classList.remove('d-none')
        return   //<-- importante para que continue el codigo de abajo
    
    }
    //**Validacion */


    if(opcion === "Estudiante"){
        const estudiante = new Estudiante(nombre, edad);
    // console.log(estudiante)
        estudiantes.push(estudiante);
    // console.log(estudiantes)

        Persona.pintarPersonaUI(estudiantes, opcion)
    }

    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre, edad)

        profesores.push(profesor)

        Persona.pintarPersonaUI(profesores, opcion)

    }
   
})