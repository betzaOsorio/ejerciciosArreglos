function obtenerPalabrasLargas(listaPalabras) {
    return listaPalabras.filter((palabra) => palabra.length > 5);
}

let listaDePalabras = ["sol", "ventilador", "mesa", "lámpara", "computadora"];

console.log("===== Palabras con más de 5 caracteres =====");
let palabrasLargas = obtenerPalabrasLargas(listaDePalabras);
console.log("Resultado:", palabrasLargas);
console.log("==========================================");
