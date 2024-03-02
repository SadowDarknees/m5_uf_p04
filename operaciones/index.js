/**
 * Aquesta funcio suma tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function suma(...valors) {
    let resultado = 0;

    for (let i = 0; i < valors.length; i++) {
        resultado += valors[i];
    }

    return resultado;
}


/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) {
    let resultado = 1;

    for(let valor of valors) {
        resultado *= valor;
    }

    return resultado;
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;