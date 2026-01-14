// Función principal que solicita y valida el número
function validar_numero(callback) {
    const input = prompt("Por favor, ingresa un número:");

    // Convertimos la entrada a número para verificar
    // isNaN devuelve true si NO es un número (Not-a-Number)
    // También verificamos que no sea una cadena vacía o espacios en blanco
    if (input !== null && input.trim() !== "" && !isNaN(input)) {
        callback("Correcto");
    } else {
        callback("Error: Usted ingresó caracteres incorrectos");
    }
}

// Función callback que maneja la respuesta
function mostrarMensaje(mensaje) {
    // Mostrar en alerta como pide el ejercicio
    // alert(mensaje);

    // También mejoramos la pantalla para que sea más fácil de usar.
    const box = document.getElementById('mensaje');
    box.style.display = 'block';
    box.textContent = mensaje;

    if (mensaje === "Correcto") {
        box.style.color = "#48bb78"; // Verde
        box.style.backgroundColor = "rgba(72, 187, 120, 0.1)";
        box.style.border = "1px solid #48bb78";
    } else {
        box.style.color = "#f56565"; // Rojo
        box.style.backgroundColor = "rgba(245, 101, 101, 0.1)";
        box.style.border = "1px solid #f56565";
    }
}

// Función para iniciar desde el botón HTML
function iniciarValidacion() {
    validar_numero(mostrarMensaje);
}

// Llamamos a la función después de medio segundo para comenzar;
setTimeout(iniciarValidacion, 500);
