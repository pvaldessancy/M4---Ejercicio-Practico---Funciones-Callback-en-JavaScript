/**
 * @param {number} numero - El límite para calcular la sumatoria.
 * @param {function} callback - Función que se ejecutará tras 5 segundos.
 */
function calcular_y_avisar_despues(numero, callback) {
    let sumatoria = 0;

    // Calcular la sumatoria de números impares EN EL RANGO [1, numero] (INCLUSIVO)
    // El operador "<=" asegura que se tome en cuenta el "numero" final si es impar
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            sumatoria += i;
        }
    }

    // Esperar 5 segundos (5000 ms) antes de ejecutar el callback
    setTimeout(() => {
        const mensaje = `El valor de la sumatoria es ${sumatoria}. Este resultado se obtuvo hace 5 segundos`;
        callback(mensaje);
    }, 5000);
}

/**
 * Función callback para mostrar el resultado.
 */
function mostrarResultado(mensaje) {
    alert(mensaje);

    // También mostrar en el HTML
    const div = document.getElementById('resultado');
    if (div) {
        div.textContent = mensaje;
    }
}

// Función auxiliar para probar desde el botón en el HTML
function iniciarCalculo() {
    const input = prompt("Ingrese un número para calcular la sumatoria de impares:");
    const numero = parseInt(input);

    if (!isNaN(numero)) {
        document.getElementById('resultado').textContent = "Calculando... espere 5 segundos.";
        calcular_y_avisar_despues(numero, mostrarResultado);
    } else {
        alert("Por favor ingrese un número válido.");
    }
}
