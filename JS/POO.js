/**Objetos literales
 * 
 * const estudianteUno = {
    nombre: 'Juanito',
    uid: "e-0001",
    intereses: ["Música", "Fútbol"],
    saludar(){
        return `${this.nombre} dice hola!`
    }
}

Imaginar tener miles de estudiantes, cientos de asistentes y profesores,
 inspectores, etccon propiedades y metodos similares, construirlos 1 por 1
 */



 //----------------------------------------------------------------------
//En todos los lenguajes de programacion se ocupa la palabra reservada 'Class'
 //----------------------------------------------------------------------

/**PLANTILLAS
 *
 * Usan funciones CONSTRUCTORAS, aue proporcionan los medios para crear
 * todo lo aue necesito
 * 
 * No es un objeto, es una plantilla
 * 
 * Propiedades y metodos generales que se pueden heredar a otras plantillas
 * mas especificas
 * 
 * Abstraccion: crear un modelo simple de algo complejo que represente los aspectos
 * mas importantes
 */

/**
 * funciones CONSTRUCTORAS
 * 
 * Cuando creamos un objeto literal, estamos creando una 'instancia' del objeto,
 * JS no copia estos objetos como lo harian otros lenguages OO, sino aue lo hace a traves
 * de una 'cadena de prototipos'
 * 
 * Por lo que no es una verdadera instanciacion, es decir, JS usa un mecanismo 
 * diferente para compartir funcionalidad entre objetos
 */

//Funcione Constructora = Plantilla = Class

//Una funcion con un nombre y parametros


//esto no es objeto
function PersonaX(nombre){
    this.nombre = nombre

    this.saludar = function(){
        return `${this.nombre} dice HOLA!`
    }
}

//estos son objetos
const juanito = new PersonaX('Juanito')
console.log(juanito.saludar())  //<-- Al visualisarlo en console, vemos un objeto literal

const pedrito = new PersonaX('Pedrito')
console.log((pedrito))

//.this no funciona con funciondes de flecha   


//OTRA FORMA --- new Object(), no lo usaremos



//////////////////////////////////////////////////////////////////////
////Prototipos de objetos
//////////////////////////////////////////////////////////////////////

/**
 * Son un mecanismo en el cual los objetos  en JS heredan caracteristicas entre si,
 * (en realidad son  instancias de objetos, cadenas de prototipos)
 * 
 * 
 * JS es un lenguaje de prototipos. Un objeto prototipo, puede tener otro objeto
 * prototipo (cadena de prototipos) el cual hereda propiedades y metodos
 * 
 * 
 * Cuando en la console en el navegador escribimos 'Persona.' o 'juanito.', aparecen
 * una serie de propiedades de los objetos, esos son los prototipos
 * 
 * Si desde 'juanito.' no se halla una propiedad en el constructor (Persona), JS seguira
 * buscando en un nivel mas alto para buscar estas propiedades. No copia el codigo para
 * reproducrie un objeto, solo busca dentro de la cadena de prototipos
 * 
 * 
 * Si yo en console del navegador, escribo: 'const array = [1,2,3]' y luego abajo escribo
 * 'array.', JS me va a sugerir una lista de propiedades y metodos. Esas propiedades y
 * metodos no significa que se usaron o se asignaron, es JS buscandolo en su cadena de 
 * prototipos, es herencia
 * 
 * 
 * Esto es para evitar usar metodos y popiedades en intancias (new Person(etc)) aue tal vez
 * no tienen o no usan necesariamente esos metodos y propiedades
 * 
*/

PersonaX.prototype.saludarIngles = function () {
    return `${this.nombre} says HELLO!`
}

/**
 * Ahora Persona (constructor) tiene un prototipo, es decir ya no se le esta pasando el metodo o propiedad
 * a cada una de las instancias. El beneficio es que no estamos saturando con muchos metodos o propiedades
 * sino que al momento de necesitarlo lo llamamos
 */

console.log(pedrito.saludarIngles());


//////////////////////////////////////////////////////////////////////
////Class
//////////////////////////////////////////////////////////////////////

/**
 * En los ultimos años, se agrego esta palabra reservada. Es casi lo mismo, al usar Class, estamos practicamente
 * usando una funcion constructora, es una mejora sintactica viene a ayudarnos q aue se vea mejor y tiene una gran 
 * ventaja. Lo anterior a esto es vieja escuela, hay aue usar class?
 * 
 */

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;  //<-- this._nombre = nombre (algunos lo hacen asi, para usar 'get nombre' o 'set nombre')
        this.edad = edad
    }
//-----------------------------------
    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre = nombre
    }
//------------------------------------    

    saludar(){
        return `${this.nombre} dice HOLA!`
    }

    static probarSaludo(nombre){
        return `${nombre} está saludando` //no se usa this.nombre, poraue no existe
    }
}

const fafa = new Persona('fafa', 40)
console.log(fafa);

/**
 * La ventaja de usar class, es aue todos sus metodos van a estar en la cadena de prototipos. Entonces cuando yo quiera
 * crear una new Persona('etc'), no es necesario crear prototipos porque automaticamente en la cadena de prototipos estan
 *  anidados sus metodos
 * 
 */

const fefe = new Persona('fefe', 30)
console.log(fefe.saludar())



//////////////////////////////////////////////////////////////////////
////Getters y Setters
//////////////////////////////////////////////////////////////////////

/**
 *GET No recibe parametros!!!
 * 
 *GET y SET CUANDO SE LLAMAN? SE LLAMAN SIN PARENTESIS!!!!!
 * 
 * 
 *SET lleva UN parametro, no hace return 
 *
 */

console.log(fafa.getNombre);

fefe.setNombre = 'fifi';

console.log(fefe.nombre);

//////////////////////////////////////////////////////////////////////
////static
//////////////////////

/**
 * se usa con class y define un metodo estatico para una clase
 * 
 * Los metodos estaticos no pueden ser llamados mediante una instancia de clase
 * 
 * Se llama sin instanciar, es decir sin crear una instancia (juanito, pedrito, fafa, fefe, etc)
 * 
 * Generalmente se usan para crear funciones de utilidad en una aplicacion
 */

console.log(Persona.probarSaludo('fofo'));


//////////////////////////////////////////////////////////////////////
////extends
//////////////////////

/**
 * 
 * Es usado en declaraciones de clase o expresiones de clase para crear una clase hija
 * 
 */

class Profesor extends Persona{

    saludar(){
        return `${this.nombre} saludo desde Profesor`
    }

    //En este caso el metodo 'saludar'del padre se sobreescribe.. Eso se llama polimorfismo
}

const gil = new Profesor('Gil', 22);

console.log(gil)

console.log(gil.saludar());

//////////////////////////////////////////////////////////////////////
////super
//////////////////////

/**
 * Asumiendo que quiero agregar la propiedad 'notas' a Estudiantes
 * 
 * Si quiero usar nuevas propiedades en mi clase Estudiante, se debe llamar a todas las propiedades
 * del padre (obligado) y agrego la nueva propiedad. Como ya tenemos las
 * propiedades en el padre no es necesario redefinirlas, en cambio debo usar 'super'
 * para indicar aue se va a mantener. Y luego si defino notas
 */

class Estudiante extends Persona {

    //  constructor(nombre, edad, notas)
        constructor(nombre, edad, notas = []){   
        super(nombre, edad);
      //this.notas = notas;
        this.notas = notas || []; 
    }

    set setNotas(nota){
        this.notas.push(nota)
    }

    get getNotas(){
        return this.notas
    }

    saludar(){
        return `${this.nombre} saludo desde Estudiante`
    }

}

//const andre = new Estudiante('Andre', 15, 13);
const andre = new Estudiante('Andre', 15);

console.log(andre)
console.log(andre.notas);

andre.setNotas = 17
andre.setNotas = 13
andre.setNotas = 08

console.log(andre.getNotas)

//////////////////////////////////////////////////////////////////////
////Private class fields
//////////////////////

/**
 * Las propiedades de las class son publicas por defecto y se pueden o modificar fuera de la clase
 * 
 * Para permitir la  definicion de campos privados, usamos '#'
 * 
 */

class Estudiante1 extends Persona{

    #notas = []

    set setNotas(nota){
        this.#notas.push(nota)
    }

    get getNotas(){
        return this.#notas
    }

}

const fifu = new Estudiante1('Fifu', 30)

console.log(fifu);

fifu.setNotas = 15
fifu.setNotas = 11
fifu.setNotas = 06

console.log(fifu.getNotas)

//console.log(fifu.#notas) NO se puede