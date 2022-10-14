

const templateCard = document.getElementById('template-card').content;
const cards = document.querySelector('#card-dinamicas');
//fragment
const fragment = document.createDocumentFragment();

//como hare un fetch api, debo asegurar aue todo cargue primero

document.addEventListener('DOMContentLoaded', () => {

    //funcion que busca datos (fetch)
    fetchData()

    //generalmente si llamo esta funcion antes no funciona, pero como
    //esta dentro de 'DOMContentLoaded' funciona
})


//-PRIMERO-funcion que busca datos (fetch)

const fetchData = async () => {

    try {
        loadingData(true)

        //1 await fetch()
        const resp = await fetch('https://rickandmortyapi.com/api/character')
        //2 await formateo a json
        const data = await resp.json()

        // console.log(data)  <-- toda la info en consola
        //console.log(data.results) //<-- es un array con lo que me interesa (nombre, img, etc)


        //3 funcion que pinta las cartas [debo llamarla a juro incluso antes del forEach, sino pinta los console(item) nisiquiera]
        pintarCards(data)
        
    } catch (error) {
        console.log(error)
    }finally{

        //siempre ejecuta
        loadingData(false)

    }

};


///////////////////////////////////////////////////////////////////




//-ULTIMO- funcion que pinta las cartas
// Obkigatoriamente debo pasar 'data' como argumento, sino aue voy a pintar?

const pintarCards = (data) => {

    cards.textContent = "";
    //forEach que recorre el array que contiene lo necesario

    data.results.forEach(item => {

        //console.log(item)

        //1. El clone para el template, siempre true
        const clone = templateCard.cloneNode(true)

        //2.Con el clone selecciono los elementos a afectar en HTML
        clone.querySelector('h5').textContent = item.name
        //luego de testear que si funciona con el nombre, continuo con los siguientes
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src', item.image)


        //guardo el clone en el fragment para evitar el reflow
        fragment.appendChild(clone)
    });

        //al elemento que mostrara los items debo pasarle el fragment
        //SINO, nada se pinta, NADA
        cards.appendChild(fragment)

        pintarPaginacion(data.info);
        
       
}


// //Paginacion

const pintarPaginacion = (data) => {
    // console.log(data);
    const paginacion = document.getElementById('paginacion');
    paginacion.textContent = "";

    const templatePaginacion = document.getElementById('template-paginacion').content;

    const clone = templatePaginacion.cloneNode(true);

    // console.log(clone);

    if (data.prev) {
        clone.querySelector(".btn-outline-secondary").disabled = false;
    } else {
        clone.querySelector(".btn-outline-secondary").disabled = true;
    }

    if (data.next) {
        clone.querySelector(".btn-outline-primary").disabled = false;
    } else {
        clone.querySelector(".btn-outline-primary").disabled = true;
    }


    paginacion.appendChild(clone);




    paginacion.addEventListener('click', (e) =>{

        if(e.target.matches('.btn-outline-primary')){
            
            console.log('click');

            if(data.next){
                fetchData(data.next)
            }
        }
        if(e.target.matches('.btn-outline-secondary')){
            
            console.log('click');

            if(data.prev){
                fetchData(data.prev)
            }
        }
    });
};



///////////////////////////////////////////////////////////////////////

 //-OPCIONAL PRIMERO- funcion externa para el loading

/****************************************************************
const loadingData = () =>{

    const loading = document.querySelector('#loading');

     if (condition) {
        
     } else {
        
     }
}

aqui testeo un booleano (true/false), si el "estado" existe, es decir,
si esta cargando el contenido remuevo la clase 'd-none', lo aue dejara
visible el spinner. Si no existe el "estado", le agrego la clase 'd-none'
para esconderlo
/****************************************************************** */

const loadingData = (estado) =>{

    const loading = document.getElementById('loading');

    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }

}

