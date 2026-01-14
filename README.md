# Ejercicios Prácticos: Callbacks en JavaScript

Este repositorio contiene tres ejercicios prácticos para entender el funcionamiento de los **Callbacks** en JavaScript.

## Ejercicios

### 1. Validar Número
**Ubicación:** `1.validar_numero(callback)/`
*   **Función:** Solicita un número al usuario mediante un `prompt`.
*   **Lógica:** Verifica si la entrada es un número válido.
*   **Callback:**
    *   Devuelve "Correcto" si es un número.
    *   Devuelve un mensaje de error si se ingresaron caracteres no válidos.

### 2. Calcular Sumatoria (Con espera)
**Ubicación:** `2. calcular_y_avisar_despues(numero, callback)/`
*   **Función:** Calcula la suma de todos los números impares desde el 1 hasta el número ingresado.
*   **Asincronía:** Simula un proceso lento esperando **5 segundos** antes de dar el resultado.
*   **Callback:** Muestra el resultado final pasado el tiempo de espera.

### 3. Sumatorias Sucesivas (Con validación de rango)
**Ubicación:** `3. calcular_y_avisar_dependiendo(numero, callback, callback_error)/`
*   **Función:** Realiza una suma acumulativa compleja (1, 1+2, 1+2+3, ...).
*   **Lógica:**
    *   Si el resultado es **menor a 1000**: Ejecuta el callback de éxito.
    *   Si el resultado es **1000 o más**: Ejecuta el callback de error (avisando que se pasó del límite).
