function obtenerPromedioAjustado(calificaciones) {
    if (calificaciones.length <= 2) {
        console.error("Se requieren al menos tres calificaciones para calcular el promedio sin contar los valores extremos.");
        return;
    }

    let menorNota = Math.min(...calificaciones);
    let mayorNota = Math.max(...calificaciones);
    let sumaTotal = 0;
    let cantidadValidas = 0;

    for (let calificacion of calificaciones) {
        if (calificacion !== menorNota && calificacion !== mayorNota) {
            sumaTotal += calificacion;
            cantidadValidas++;
        }
    }

    let promedioFinal = cantidadValidas > 0 ? (sumaTotal / cantidadValidas).toFixed(2) : "No disponible";

    console.log("===== Cálculo del Promedio Ajustado =====");
    console.log(`Lista de calificaciones: ${calificaciones.join(", ")}`);
    console.log(`Notas excluidas: Menor (${menorNota}), Mayor (${mayorNota})`);
    console.log(`Promedio calculado sin extremos: ${promedioFinal}`);
    console.log("=========================================");
}

let calificacionesEjemplo = [8.5, 9.0, 7.5, 6.0, 10.0, 5.5];
obtenerPromedioAjustado(calificacionesEjemplo);
