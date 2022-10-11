/**
 * Esto es AJAX poraue ya mezclamos con html, con las respuesta en JSON
 */

// const cards = document.getElementById('card-dinamicas');
// const templateCard = document.querySelector('#template-card').content //<-- agregar el .content al template puede ser bueno


//cuando pedimos info de una API hay que hacer esto mientras carga
document.addEventListener('DOMContentLoaded', () =>{
    
    fetchData()

})


const fetchData = async () => {        //<-- Esto se llama en el DOMContentLoaded (igual colocar los scripts abajo, tambien asegura)
    // console.log('obteniendo Datos')

    try {
        loadingData(true)
            //con el fetch, siempre son 2 awaits
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        
        // console.log(data)
        pintarCards(data)

    } catch (error) {
        console.log(error)
    }finally{
        //siempre ejecuta

        loadingData(false)
    }
};

//-------------------------------------------------


//funcion para pintar Cards
const pintarCards = (data) => {
    const cards = document.getElementById('card-dinamicas'); //*
    const templateCard = document.querySelector('#template-card').content //*
    //creo el fragment
    const fragment = document.createDocumentFragment() //*
    
    // console.log(data);              //<-- data.results[] es un array que puedo recorrer

    data.results.forEach(item => {
        // console.log(item)           //<-- informacion mas precisa en console para pintar
        
        //el clone para el template
        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = item.name  //<-- ya estoy dentro del array, no necesito .restults[]
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src', item.image)
        //al seleccionar elementos, esto solo seleccionara aquello dentro del template


        //guardo en el fragment para evitar el reflow
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}


//funcion externa para el loading
const loadingData = (estado) =>{
    const  loading = document.querySelector('#loading')

    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }


}

