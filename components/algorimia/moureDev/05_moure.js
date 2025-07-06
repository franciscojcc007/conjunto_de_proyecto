/*
 * EJERCICIO:
 * 1 Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * 
 * 2 Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 */

// Tipos de datos por valor:
// String (Cadenas de texto)
// Number (Números: enteros y flotantes)
// Boolean (Booleanos: true o false)
// undefined (Valor no definido)
// null (Ausencia intencional de un valor)
// Symbol (Identificadores únicos e inmutables)
// BigInt (Números enteros de gran tamaño)

// Tipos de datos por referencia:
// Object (Objetos en general)
// Array (Arreglos)
// Function (Funciones)
// Date, RegExp, Map, Set, entre otros (Todos derivados de Object)


// por valor


// por referencia
// let arr1 =[1, 2];
// let arr2 = arr1;
// arr2.push(3);
// console.log(arr2)
// console.log(arr1);

/*
* DIFICULTAD EXTRA (opcional):
* Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
* - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
*   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
*   se asigna a dos variables diferentes a las originales. A continuación, imprime
*   el valor de las variables originales y las nuevas, comprobando que se ha invertido
*   su valor en las segundas.
*   Comprueba también que se ha conservado el valor original en las primeras.
*/

const pasoPorValor = (c, d) => {
  let temp = c
  c = d
  d = temp
  return [c, d]
}

let a = 1
let b = 2

let [c, d] = pasoPorValor(a, b)

console.log(`${a} ${b}, ${c} ${d}`)

const pasoPorReferencia = (c, d) => {
  let temp = c
  c = d
  d = temp
  return [c, d]
}

let arr1 = [1, 2]
let arr2 = [3, 4]

let [arr3, arr4] = pasoPorReferencia(arr1, arr2)
console.log(`${arr1} ${arr2}, ${arr3} ${arr4}`)