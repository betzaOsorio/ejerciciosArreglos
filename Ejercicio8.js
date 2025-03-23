function obtenerSubarregloMasLargo(listaNumeros) {
    let subarregloMayor = [];
    let subarregloTemporal = [];

    for (let numero of listaNumeros) {
        if (numero !== 0) {
            subarregloTemporal.push(numero);

            if (subarregloTemporal.length > subarregloMayor.length) {
                subarregloMayor = [...subarregloTemporal];
            }
        } else {
            subarregloTemporal = [];
        }
    }

    return subarregloMayor;
}


let listaNumeros = [1, 2, 0, 3, 4, 5, 0, 6, 7, 8];

console.log("===== Subarreglo más largo sin ceros =====");
let subarregloLargo = obtenerSubarregloMasLargo(listaNumeros);
console.log("Resultado:", subarregloLargo);
console.log("==========================================");
