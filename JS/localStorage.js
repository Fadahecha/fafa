////////////////////////////////////
///localStorage
////////////////////////////////////

/**
 * Permite guardar datod en el navegador
 * 
 * Los datos persisten entre diferentes sesiones (diferentes pestañas)
 * 
 * localStorage es similar a sessionStorage. Pero los datos en localStorage no tienen
 * fecha de expiracion. en sessionStorage si, los datos son eliminados al finalizar la
 * sesion (cuando se cierra la pagina)
 * 
 * Las claves y los valores son siempre cadenas de texto ('clave', 'valor')
 * 
 * Soporta 5mb ( es string es suficiente)
 * 
 */

localStorage.setItem('platano', "🍌")
localStorage.setItem('fresa', '🍓')

/**
 * Vive en el navegador del dispositivo, en el almacenamiento local, no voy a encontrarlo si
 * cambio de dispositivo o navegador diferente
 * 
 * Se revisa en "inspeccionar" -> "aplicaciones" -> "almacenamiento local"
 * 
 */

//Para capturar este valor

localStorage.getItem('platano')
// console.log(localStorage.getItem('platano'));


if(localStorage.getItem('fresa')){
    const fresa = localStorage.getItem('fresa');   //generalmente se hace asi, tambien dentro del if
    console.log(fresa)
}


//remover item

//localStorage.removeItem('platano')

//localStorage.clear()  //destruye  todo

/**
 * Como somo admite strings, es un problema con los arrays y objetos por lo aue se usa
 * JSON.stringify() y JSON.parse()
 * 
 * Alguien pregunto si se puede utilisar con tokes de autentificacion. No es posible guardar
 * un API Rest en localStorage. Para nuestras aplicaciones, usar VanillaJS implica complicaciones
 * 
 * No podemos guardar una sesion en el localStorage si hacemos una API Rest. Solo "Rest", es decir
 * si cumple con el standard REST.. Si no se hace una Api Rest, es posible (api a mi gusto)
 * 
 *  Tal vez con Nuxt.js o Next.js aue renderizan la parte del servidor y podemos conectarnos al servidor
 * algunos usan tecnicas para almacenar las seciones en el localStorage y capturarlas con Next.js.
 * PERO ESO YA NO ES UN API REST, es una api, una forma de comunicarnos
 * 
 * ES RECOMENDABLE USAR UNA LIBRERIA AUE YA TENGA TODA LA SEGURIDAD (ej REACT)
 * 
 *
 */

 const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];

//para poder guardarlo poraue solo guarda string
localStorage.setItem('frutas', JSON.stringify(frutas));


//para pintarlo, OJO viene en formato JSON asi que se hace lo contrario

if(localStorage.getItem('frutas')){
    const frutasDesdeLocal = JSON.parse(localStorage.getItem('frutas'))
    console.log(frutasDesdeLocal);
}

//En localStorage NO EXISTE updateItem -> CRUD descartado