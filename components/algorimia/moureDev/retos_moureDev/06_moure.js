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

const factorial = (num, acc = 1) => {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    throw new Error('El parámetro debe ser un número entero no negativo.');
  }
  if (num <= 1) return acc;
  return factorial(num - 1, num * acc);
};



let resultFactorial = factorial(5)
console.log(resultFactorial)

const fibonacci = (num, memo = {}) => {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    throw new Error('El parámetro debe ser un número entero no negativo.');
  }
  if (num <= 1) return num;
  if (memo[num]) return memo[num];
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
};


let resultFibonacci = fibonacci(3)
console.log(resultFibonacci)