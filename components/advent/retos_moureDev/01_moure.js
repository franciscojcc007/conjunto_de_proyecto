/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */


// Aritméticos
console.log(`suma : ${3 + 2}`)
console.log(`resta : ${3 - 2}`)
console.log(`multiplicar : ${3 * 2}`)
console.log(`dividir : ${3 / 2}`)
console.log(`modulo : ${3 % 2}`)
console.log(`exponente : ${3 ** 2}`)
let num =2;
console.log(`incremento : ${++num}`)
console.log(`decremento : ${--num}`)

// lógicos
console.log(`AND: ${2+2 === 4 && 6-2 === 4}`);    
console.log(`OR: ${2+2 === 6 || 6-2 === 4}`);     
console.log(`NOT: ${!(2+2 === 4 && 6-2 === 4)}`);            


// comparación
console.log(`igualdad: ${3 === 3}`)
console.log(`desigualdad: ${3 !== 3}`)
console.log(`mayor que: ${2 > 3}`)
console.log(`menor que: ${2 < 3}`)
console.log(`mayor que o igual que: ${3 >= 3}`)
console.log(`menor que o igual que: ${3 <= 3}`)

// asignación
let num3 = 20;
console.log(`asignación: ${num3}`);
console.log(`asignación +=: ${num3 += 2}`);
console.log(`asignación -=: ${num3 -= 2}`);
console.log(`asignación *=: ${num3 *= 2}`);
console.log(`asignación /=: ${num3 /= 2}`);
console.log(`asignación %=: ${num3 %= 3}`);
console.log(`asignación **=: ${num3 **= 2}`);

// identidad
let num4 = 10;
let num5 = 10;
console.log(`identidad num3 === num5 : ${num3 === num5}`)
console.log(`identidad num3 !== num5 : ${num3 !== num5}`)

// pertenencia
const obj = { nombre: "Juan", edad: 25 };
console.log("nombre" in obj); 
console.log("apellido" in obj); 

// bits
a = 10;
b = 3;
console.log(`asignación &=: ${a &= b}`); 
console.log(`asignación |=: ${a |= b}`);
console.log(`asignación ^=: ${a ^= b}`);
console.log(`asignación <<=: ${a <<= b}`);
console.log(`asignación >>=: ${a >>= b}`);