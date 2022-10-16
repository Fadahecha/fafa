/**Modulos
 * 
 * LLevar el codigo a archivos, encapsularlo y luego traerlo
 * 
 * Divide el codigo de js en varios modulos aue se pueden importar si es necesario
 * 
 * Node.js, Webpack, Babel, etc. Los navegadores modernos han comenzado a  admitir
 * la funcionalidad de los modulos de forma nativa 
 * 
 * 
 */

/*Si tuvieramos un segundo archivo js linkeado, con una constante llamada fruta tambien
daria ERROR*/
// const fruta = "🍇"
/**
 * Para este problema se inventaron las IIFE, expresiones de funcion ejecutadas inmediatamente
 * Al parecer es lo aue hace jquery
 * bootstrap 4 usa jquery. jquery debe ejecutarse primero en el script
 */

// (function () {
//     const fruta = "🍇";
//     console.log(fruta);

// })()

//funcion flecha

(() => {
    const fruta = '🥝'
    console.log(fruta);
})()

/**La funcion se convierte en una expresion de funcion que es ejecutada inmediatamente.
 * La va variable dentro de la funcion, no puede ser accesada desde afuera.
 * 
 * Esto representa otro problema, cuya solucion son los modulos
 * 
 */

////////////////////
//EXPORT E IMPORT
//////////////////////

/**
 * Lo primero a hacer para acceder a las funciones de un modulo es exportarlas
 * 
 * Se hace usando la declaracion 'export'. Pueden ser (var, let, const)
 * 
 * Deben ser elementos de nivel superior, no puedo usar export dentro de una funcion
 * 
 * Solo llamamos a un archivo, el archivo que va a recibir las importaciones
 * 
 * En el archivo donde vamos a recivir usamos la declaracion 'import {const} from "./etc.js" '
 *
 * 
 * OJO, aunque los archivos esten al mismo nivel siempre se usa './', asi la ruta se busca en 
 * sus propios archivos
 * 
 * Para ir a otra carpeta se puede retroceder
 * 
 * Los frameworks/librerias no necesitan las extension .js, pero vanillaJS si
 * 
 * OJO: en el <script> es OBLIGATORIO agregar el atributo 'type' con valor "module"
 * 
 * Este tipo de export es un export con Nombre, no olvidar eso
*/

//import { uva } from "./export.js";

console.log(uva) //

// puedo exportar lo que sea

// export function pintarBanana(){
//     console.log("🍌");
// }
                           //class
import { uva, pintarBanana, Fruta  } from "./export.js";
import pintarPollo, {fresa} from './export.js'

pintarBanana()

console.log(fresa)
fresa()



//new class

const mango = new Fruta("🥭")

console.log(mango)

//usar export{ const, function, Class } es recomendable

////////////////////
//EXPORT default
//////////////////////
/**
 * Solo exporta una cosa
 */

import pizza  from "./export.js"; //sin llaves, obligado en el export default

console.log(pizza)

//aqui invente un nombreFuncion, lo importe arriba pero fuera de los otros imports y ahora lo llamo aqui abajo
//es posible porque como es un export default, solo 1 es posible

pintarPollo
pintarPollo()

//////////////
/////Alias
//////////////

/**Usar 'as' */


import { arbre as arbol } from "./export.js";

console.log(arbol)