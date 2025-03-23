function combinarListas(lista1, lista2) {
    let resultadoIntercalado = [];
    let longitudMinima = Math.min(lista1.length, lista2.length);

    for (let i = 0; i < longitudMinima; i++) {
        resultadoIntercalado.push(lista1[i], lista2[i]);
    }

   
    if (lista1.length > lista2.length) {
        resultadoIntercalado.push(...lista1.slice(longitudMinima));
    } else if (lista2.length > lista1.length) {
        resultadoIntercalado.push(...lista2.slice(longitudMinima));
    }

    return resultadoIntercalado;
}

let listaA = ["a", "b", "c", "d"];
let listaB = [1, 2, 3];

console.log("Listas originales:");
console.log("Lista A:", listaA);
console.log("Lista B:", listaB);

let listaIntercalada = combinarListas(listaA, listaB);
console.log("Lista intercalada:", listaIntercalada);
