/**
 * Calcula las sumatorias sucesivas de 1 hasta numero.
 * @param {number} numero - El límite de la secuencia.
 * @param {function} callback - Se ejecuta si el resultado es < 1000.
 * @param {function} callback_error - Se ejecuta si el resultado es >= 1000.
 */
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
    let totalSum = 0;
    let partialSum = 0;

    // Lógica para calcular sumatorias sucesivas:
    // Para numero=5:
    // i=1: partial=1, total=1
    // i=2: partial=3, total=1+3=4
    // i=3: partial=6, total=4+6=10
    // i=4: partial=10, total=10+10=20
    // i=5: partial=15, total=20+15=35
    for (let i = 1; i <= numero; i++) {
        partialSum += i;     // Suma acumulada actual (1, 3, 6, 10, 15...)
        totalSum += partialSum; // Suma total de las sumas parciales
    }

    // Evaluar el resultado
    if (totalSum < 1000) {
        callback(`Las sumatorias sucesivas de ${numero} es ${totalSum}`);
    } else {
        callback_error(`El número sobrepasa el objetivo de la función. Resultado obtenido: ${totalSum}`);
    }
}

/** Callback de éxito */
function mostrarExito(mensaje) {
    console.log("Éxito:", mensaje);
    const div = document.getElementById('resultado');
    div.innerText = mensaje;
    div.style.color = 'green';
    alert(mensaje);
}

/** Callback de error */
function mostrarError(mensaje) {
    console.error("Error:", mensaje);
    const div = document.getElementById('resultado');
    div.innerText = mensaje;
    div.style.color = 'red';
    alert(mensaje);
}

// Función para probar desde el botón HTML
function iniciarCalculo() {
    const input = prompt("Ingrese un número para las sumatorias sucesivas:");
    const numero = parseInt(input);

    if (!isNaN(numero) && numero > 0) {
        calcular_y_avisar_dependiendo(numero, mostrarExito, mostrarError);
    } else {
        alert("Por favor ingrese un número válido mayor a 0.");
    }
}
