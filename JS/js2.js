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



const findPostById = (id) => {
    //logica para encontrar posts
    const post = posts.find((item) => item.id === id);

    return new Promise((resolve, reject) => {
        //simular el tiempo de respuesta de un servidor
        setTimeout(()=>{
            if(post){
                resolve(post)
            }else{
                reject('No se encontro id ' + id)
            }
        }, 2000);
      
    })
}

// findPostById(1)
// .then(post => console.log(post))
// .catch(err => console.log(err))

console.log('fin del codigo')



// //------------practica mia----------------------------------------
// const findPostByUserId = (userId) =>{
//     const post1 = posts.find(item =>item.userId === userId) 

//     return new Promise((resolve, reject) => {
//         if(post1){
//             resolve(post1)
//         }else{
//             reject('mal')
//         }
//     })
// }

// findPostByUserId(1)
//     .then( post1 => console.log(post1))
//     .catch( e => console.log(e))


//------------------------------------------------------

//Con las promesas nuestro codigo comienza a ser asincrono,
//es decir se ejecuta en paralelo con otras cosas sin un tiempo impuesto

//ASYNC AWAIT

const buscar = async (id) =>{

    try {
        const post = await findPostById(id)
        console.log(post);
    } catch (error) {
        console.log(error)
    }finally{
        console.log('se ejecuta si o si');
    }

    
}

buscar(4)


//un asinc es una simple funcion de flecha con ma palabra clave 'async' antepuesta
//solo es posible usar un await dentro de un async
//lo hacemos dinamico al pasar parametros

//async await solo funcionan con promesas, hay que tener un resolve/reject

//para manejar los errores se usa try/catch

// Promise ALL para promesas que no dependen de ellas mismas

const buscar1 = async () =>{

    try {

        //esto no es del todo correcto porque la segunda promesa esta dependiendo de la primera (tal vez si fuese el mismo id)
        // const post1 = await findPostById(1);
        // const post2 = await findPostById(2);
        // console.log(post1.title, post2.title);

        const resPosts = await Promise.all([
            findPostById(1),
            findPostById(2)
        ])

        console.log(resPosts);
        console.log(resPosts[0].title, resPosts[1].title);  

    } catch (error) {

        console.log(error);
        
    }finally{

        console.log('se ejecuta siempre');
    }
}

buscar1()

//cuidado con el Promise.all(), si no consigue uno de los elementos, va a saltar directamente al catch

