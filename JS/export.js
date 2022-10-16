/*export*/ const uva = "🍇"
//console.log(uva);

/*export*/ function pintarBanana(){
    console.log("🍌");
}

/*export*/ const fresa =  () => {
    console.log('🍓');
}

/*export*/ class Fruta {
    constructor(nombre){
        this.nombre = nombre
    }
        
}

//Otra forma para no escribir 'export' tantas veces, es recomendado

export {
    uva, pintarBanana, fresa, Fruta
}

////////////////////
//EXPORT default
//////////////////////
/**
 * Solo exporta una cosa
 */

const pizza = '🍕'
// export default pizza;  //<--- se acepta solo 1 export default


export default function() {
    console.log('🍗');
}

//para llamar esta funcion puedo llamarla con cualquier nombre

export const arbre = '🌳'