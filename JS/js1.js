//callbacks
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

// const findPostById = (id, callback) => {
//     const post = posts.find((item) => item.id === id);


//     if (post){
//         //  mandamos el null ya que no existen errores
//         callback(null, post);    

//     }else {
//         // en caso de que no exista el post
//         callback("No encontrado por id: " + id);
//     }
    
// }



// //siempre se manda el error primero

// findPostById(1, (err, post) =>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(post);

//     //Hell callback :S ------------------

//     findPostById(2, (err, post) => {
//         if(err){
//             return console.log(err)
//         }
//         console.log(post);

//         findPostById(3, (err, post) => {
//             if(err){
//                 return console.log(err)
//             }
//             console.log(post);

//             findPostById(4, (err, post) => {
//                 if(err){
//                     return console.log(err)
//                 }
//                 console.log(post);
//             })
//         })
//     })


// })

//----------------------------------
//PROMESAS
//Es un objeto aue representa la terminacion o el fracaso de una operacion asincrona
//----------------------------------
// //para evitar la locura de los callback, se crearon las promesas


const findPostById = (id) => {
    //logica para encontrar posts
    const post = posts.find((item) => item.id === id);

    return new Promise((resolve, reject) => {
        
        if(post){
            resolve(post)
        }else{
            reject('No se encontro id ' + id)
        }
    })
}

// findPostById(4)
// .then(post => console.log(post))
// .catch(err => console.log(err))


//-----------------------------------------------------------

// //otra forma aue podemos encontar

// const findPostById1 = (id) => new Promise((resolve, reject) => {
//     //logica para encontrar posts
//     const post = posts.find((item) => item.id === id);

//     if(post){
//         resolve(post)
//     }else{
//         reject('error ' + id)
//     }

// })

// findPostById1(5)
//     .then(post => console.log(post))
//     .catch(err => console.log(err))

//-----------------------------------------------------------


//tambien podemos encontrar el infierno de las promesas

console.log('infierno promesa');

findPostById(1)
    .then((post) =>{
        console.log(post)
        return findPostById(2)
    })
    .then(post => {
        console.log(post)
        return findPostById(3)
    })
    .then((post) =>{
        console.log(post)
        return findPostById(4)
    })
    .catch((err) => console.log(err));


// Como todavia se sigue geneando infiernos
// llego para solucionar muchas cosas el

//async await

//async: define una funcion asincrona, la cual devuelve una async Function

//await: es usado para esperar a una Promise, solo puede ser usado dentro de una async Function