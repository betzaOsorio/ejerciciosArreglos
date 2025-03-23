function analizarNumeros(lista) {
    let cantidadPositivos = 0;
    let cantidadNegativos = 0;
    let cantidadCeros = 0;

    for (let numero of lista) {
        if (numero > 0) {
            cantidadPositivos++;
        } else if (numero < 0) {
            cantidadNegativos++;
        } else {
            cantidadCeros++;
        }
    }

    console.log("===== Análisis de Números =====");
    console.log(`Total de números: ${lista.length}`);
    console.log(`Números positivos: ${cantidadPositivos}`);
    console.log(`Números negativos: ${cantidadNegativos}`);
    console.log(`Cantidad de ceros: ${cantidadCeros}`);
    console.log("================================");
}

// Generar una lista de números aleatorios entre -10 y 10
function generarListaAleatoria(tamano, min, max) {
    let lista = [];
    for (let i = 0; i < tamano; i++) {
        lista.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return lista;
}

let numerosEjemplo = generarListaAleatoria(15, -10, 10);
console.log("Lista generada:", numerosEjemplo);
analizarNumeros(numerosEjemplo);
