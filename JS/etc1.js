const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

// //----------------------------------
// //CALLBACKS
// //----------------------------------
// //callbacks, funcion aue se usa como argumento de otra funcion, no se usan casi ya


// //quiero enviar un id y aue me regrese el objeto relacionado
// const findPostById = (id, callback) => {

//     //------------------------------------------------
//     //logica para recuperar el post segun id
//     // const etc = array.find((item) => item.id === id)
//        const post = posts.find((item) => item.id === id)
//     //------------------------------------------------


//     //callback(post) <-- lo comento para no duplicar respuestas con los ejemplos siguientes

// }   

// //invoco la funcion, con un id como primer argumento,
// //luego como segundo argumento le paso el callback para aue ejecute luego

// findPostById(1, (post) =>{
//     console.log(post)
// })

// //************************************************************************ */
// //MANEJO DE ERRORES EN CALLBACKS
// //************************************************************************ */

// //Solo hay 3 id, y si pido algo aue no existe, hay un error
// //para manejar los errores


//                             // aqui el callback es solo un parametro
// const findPostByIdErr = (id, callback) => {

//     //logica para recuperar el post segun id
//     const post = posts.find((item) => item.id === id)

//     //callbacks para cualquier resultado
//     //En el caso el if, por convencion, el callback recibe primero como argumento
//     //el resultado negativo (null) y luego el positivo (post)

//     if(post){
//         //primero el null y luego el post
//         callback(null, post)
//     }else{
//         //mensaje de error
//         //callback(post)
//         callback('No se encontró el post con id ' + id)
//     }

// }

// //pero como ahora el callback recibe 2 argumentos, 'null'(err) y el positivo(post)
// //entonces aca debo recibir ambos resultados en el argumento callback

//                    //aqui se pasa crea la funcion 
//                    //callback () =>
// findPostByIdErr(4, (err, post) => {
    
//     if(err){
//         return console.log(err)
//     }
//     //si el else es una linea, no necesito llaves
//     console.log(post);
// })


// //CALLBACK HELL
// //si se realizan muchas validaciones se creara un callback hell
// console.log(`
// callback hell
// `);

// const findPostByIdErr1 = (id, callback) => {

//     const post = posts.find((item) => item.id ===id)

//     if (post) {
//         callback(null, post);
//     } else {
//         callback('Error HELL id ' + id + ' no existe')
//     }
// }

// findPostByIdErr1(1, (err, post) =>{

//     if (err) {
//         return console.log(err)
       
//     } else {
//         console.log(post);
//     }

//     findPostByIdErr1(2, (err, post) =>{
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post)
//         }

//         findPostByIdErr1(3, (err, post) =>{
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(post)
//             }

//             findPostByIdErr1(4, (err, post) =>{
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(post)
//                 }
//             })
//         })
//     })
// })

// //el codigo se indenta demasiado, no es lo mejor, para eso surgieron las promesas


// //********************************************************************* */
// //PROMISES
// //********************************************************************* */

// console.log(`
// Promises
// `)	

// const findPostByIdPro = (id) =>{

//     const post = posts.find((item) => item.id === id)

//     //una promesa devuelve o una respuesta satisfactoria o un rechazo

//     return new Promise((resolve, reject) => {
        
//         if (post) {
//             resolve(post)
//         } else {
//             reject('promesa: no se encontro el id ' + id)
//         }

//     })

// }

// //en la promesa solo recivo un argummendo, sin mucho estres
// //se usa .then para traer una respuesta ---> es como decir: si ok .entonces haz 'esto'
// //para manejar el error se usa .catch

// findPostByIdPro(1)
//     .then((post) => console.log(post))
//     .catch((e) => console.log(e))

// //-------es lo mismo que arriba
// findPostByIdPro(3).then((post) => {
//     console.log(post);
// })
// .catch((err) =>{
//     console.log(err)
// })
// //------------------------------

// //----------------------------
// //otra forma de hallar las promesas es: 'directa'
// //---------------------------------

// // const findPostByIdPro1 = (id) => new Promise((resolve, reject) => {
    
// //     const post = posts.find((item) => item.id === id)

// //     if (post) {
// //         resolve(post)
// //     } else {
// //         reject('error otra forma promesa')
// //     }
// // })

// // findPostByIdPro1(5)
// // .then((post)=>console.log(post))
// // .catch((err)=>console.log(err))

// //PROMISES HELL
// //si se realizan muchas validaciones se creara un callback hell
// console.log(`
// promise hell
// `);


// const findPostByIdProHell = (id) =>{

//     const post = posts.find((item) => item.id === id)

//     return new Promise((resolve, reject) => {
      
//         if (post) {
//             resolve(post)
//         } else {
//             reject('error hell promise con el id ' + id )
//         }

//     })
    
// }

// findPostByIdProHell(1)
//     .then((post) => {
//         console.log(post)
//         return findPostByIdProHell(2)
//     })
//     .then((post) =>{
//         console.log(post)
//         return findPostByIdProHell(3)
//     })
//     .then((post) =>{
//         console.log(post)
//         return findPostByIdProHell(4)
//     })
//     .catch(err => console.log(err))

//********************************************************************* */   
//ASYNC AWAIT
//********************************************************************* */    

console.log(`
async/await
`);

const findPostByIdAA = (id) => {

    const post = posts.find((item) => item.id === id) //no puede tener llaves es un valor asociativo

    return new Promise((resolve, reject) => {

    //simulacion del retraso cuando viene de una base de datos 
    //las promesas son asincronas, se resuelven independientemente o en paralelo a lo demas
        setTimeout(() => {
            
            if(post){
                resolve(post)
            }else{
                reject('Error async/await en el id ' + id)
            }

        }, 2000);

    })

}

// findPostByIdAA(1).then((post) =>{
//     console.log(post);
// }).catch((e) => {
//     console.log(e)
// })

//regla de oro: para el await, necesitamos usar una function async
//async puede funcionar solo, pero no el await
//solo se antepone la palabra async a la funcion flecha
//async/await funcionan bajo promesas, debe existir el resolve/reject

//hago mi funcion inicial con la logica y la promesa, luego otra funcion con el async/await aue tambien llevaria try/catch

const buscar = async (id) => {

    //const post = await findPostByIdAA(id)   //<--- esta es la promesa
    //console.log(post)

    //pero para poder manejar el error, necesito try/catch

    try {

        const post = await findPostByIdAA(id) //<--- esta es la promesa
        console.log(post)

    } catch (error) {

        console.log(error)

    }finally{
        console.log("se ejecuta si o si")
    }

   

}

buscar(7)

console.log('fin del code');

//-------------------------------------------------------
//---------ejemplo
const findPostByIdAA1 = (id) => {

    const post = posts.find((item) => item.id === id)


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (post) {
            resolve(post)
        } else {
            reject('promise rejected')
        }
        }, 3000);

    })
}

//------------------------------
//Promise.all()
//-------------------------------

const buscarX = async () =>{

    try {
        // //esto estaria bien si el postUno depende del postDos, solo asi
        // const postUno = await findPostByIdAA1(1);
        // const postDos = await findPostByIdAA1(2);
        // console.log(postUno.title +' //// ', postDos.title);


        //Promise.all() recibe como argumento, un array de todas las promesas que auiero ejecutar
        //en este caso las promesas son findPostByIdAA1(1) y findPostByIdAA1(2)
        //todos los elementos del array de Promise.all(), deben ser satisfactorios, sino manda directo al catch si ejecutar nada.
        const resPosts = await Promise.all([
            findPostByIdAA1(1),
            findPostByIdAA1(2)
        ])

        console.log(resPosts) // y para acceder a sus propiedades(title), como es un array
        console.log(resPosts[0].title +' //// ', resPosts[1].title)

    } catch (error) {
        console.log(error);
    }finally{
        console.log('finnaly')
    }
}


buscarX()


// const chercherLeCertificat = () => {

//     const certificat = certificats.find((item) => item.id === id)


// }

//****************************************************************** */
//FETCH API
//****************************************************************** */

console.log(`
fetch
`);

//el fetch() tiene como primer argumento obligatorio la direccion del recurso deseado
// fetch() envia como respuesta una Promise

const url = 'https://jsonplaceholder.typicode.com/posts/' //<-- una api que nos devuelve respuestas, de ahi salen los posts aue hemos usado

//puedo usar el .then poraue el fetch() devuelve una promesa
fetch(url)
    .then((res) => res.json()) //<-- FORMATEAR :se debe especificar el formato en el que viene la respuesta, funcion de flecha sin llaves?
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    .finally(() => console.log('Estudiando fetch()'))


//fetch() ya tiene todo el sistema de la promesa y no hay aue construirla   
//un json es un standard, una forma de transferencia con las aue nos comunicamos con una api

const findPostByIdFetch = async (id) =>{

    try {

        //en este caso se hace asi porque la respuesta del fetch depende de la formateada (promesa 1 depende de promesa 2)
        const res = await fetch(url + id)
        const post = await res.json()

        console.log(post);

    } catch (error) {
        console.log(error)
    }

}

findPostByIdFetch(50)