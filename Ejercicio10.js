function encontrarNumeroMasFrecuente(listaDatos) {
    let frecuencias = {};
    let numeroMasFrecuente;
    let maxFrecuencia = 0;

    for (let numero of listaDatos) {
        frecuencias[numero] = (frecuencias[numero] || 0) + 1;
    }

    for (let numero in frecuencias) {
        if (frecuencias[numero] > maxFrecuencia) {
            maxFrecuencia = frecuencias[numero];
            numeroMasFrecuente = numero;
        }
    }

    console.log(`El número más frecuente es: ${numeroMasFrecuente} (se repite ${maxFrecuencia} veces).`);
}

let listaDeDatos = [3, 5, 3, 2, 3, 2, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

encontrarNumeroMasFrecuente(listaDeDatos);
