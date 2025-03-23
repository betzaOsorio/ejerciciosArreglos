function contarVocalesEnPalabras(listaPalabras) {
    for (let palabra of listaPalabras) {
        let totalVocales = 0;

        for (let letra of palabra) {
            if ("aeiou".includes(letra.toLowerCase())) { 
                totalVocales++;
            }
        }

        console.log(`La palabra "${palabra}" tiene ${totalVocales} vocales.`);
    }
}


let palabrasLista = ["computadora", "mesa", "silla", "mouse"];

console.log("===== Análisis de Vocales en Palabras =====");
contarVocalesEnPalabras(palabrasLista);
console.log("===========================================");
