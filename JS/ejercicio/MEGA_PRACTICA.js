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


//delegacion de eventos (detectar botones aue aun no existen o aue existiran gracias a los templates)
//la 'e' es lo inportante
document.addEventListener('click', (e) => {
   // console.log(e.target.dataset.nombre);

    if(e.target.dataset.nombre){
        // console.log(e.target.matches('.btn-success'));
        if(e.target.matches('.btn-success')){
            estudiantes.map(item => {
                if(item.nombre === e.target.dataset.nombre){
                    item.setEstado = true
                }
                console.log(item)
                return item
            });
            
        }

        if(e.target.matches('.btn-danger')){
            estudiantes.map(item => {
                if(item.nombre === e.target.dataset.nombre){
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

        clone.querySelector('.btn-success').dataset.nombre = this.nombre;   //estos dataset.nombre, envia el atributo data-nombre ="fafa"      //el nombre se puede repetir, es incorrecto, es mejor un correo o id
        clone.querySelector('.btn-danger').dataset.nombre = this.nombre;    //si usara dataset.correo, u otra cosa se comportaria de la misma forma creando el atributo

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

    const datos = new FormData(formulario); //<-- id formulario
    //console.log(datos)
    //datos.forEach((item) => console.log(item))

    //----Destructuring----//
    //console.log([...datos.values()]); //<-- .values nativo de FormData

    //   atributos name FormData
    const [nombre, edad, opcion] = [...datos.values()];
    //console.log(nombre, edad, opcion)


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