/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 */

function cuentaRegresiva(num) {
    if (num < 0) {
        return;
    }
    console.log(num);
    cuentaRegresiva(num - 1);   
}

cuentaRegresiva(100);


/* 
* DIFICULTAD EXTRA (opcional):
* Utiliza el concepto de recursividad para:
* 1 Calcular el factorial de un número concreto (la función recibe ese número).
* 
* 2 Calcular el valor de un elemento concreto (según su posición) en la 
*   sucesión de Fibonacci (la función recibe la posición).
*/

const factorial = (num) => {
  if (num === 0 || num === 1) return 1
  return num * factorial(num - 1)
}

let result = factorial(-5)
console.log(result)