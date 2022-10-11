//fetch() proporciona una interfaz para recuperar recursos (incluso a travez de la red)

//fetch() toma como argumento obligatorio, la ruta de acceso al recurso aue deseamos recuperar

//fetch() devuelve una Promise que resuelve en Response, sea correcta o no

//una vez recuperada Response,hay diferentes metodos para manipularla


// Un json es un standard, una forma de transferencia en la aue nos comunicamos con una API


const url = 'https://jsonplaceholder.typicode.com/posts/'

//puedo usar el .then, porque fetch() devuelve una promesa

//cuando usemos .then, tenemos que retornar la respuesta especificando el formato (en las funciones flechas el return esta implicito)

// fetch(url)
// .then((res) => res.json())
// .then(data =>console.log(data))
// .catch(e => console.log(e))
// .finally(() => console.log('finalizó'))

//--------------------------------------------------------
//mismo ejemplo anterior

// const findPostById = async (id) => {

const findPostById = async (id) => {

    try {

        // const res = await fetch(url)
        const res = await fetch(url + id)
        const post = await res.json()

        console.log(post);
        
    } catch (error) {
        console.log(error)
    }
}

findPostById(50)

