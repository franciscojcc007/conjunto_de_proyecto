
// // Aritméticos
// console.log(`suma : ${3 + 2}`);
// console.log(`resta : ${3 - 2}`);
// console.log(`multiplicar : ${3 * 2}`);
// console.log(`dividir : ${3 / 2}`);
// console.log(`modulo : ${3 % 2}`);
// console.log(`exponente : ${3 ** 2}`);
// let num = 2;
// console.log(`incremento : ${++num}`);
// console.log(`decremento : ${--num}`);

// // lógicos
// console.log(`AND: ${2 + 2 === 4 && 6 - 2 === 4}`);
// console.log(`OR: ${2 + 2 === 6 || 6 - 2 === 4}`);
// console.log(`NOT: ${!(2 + 2 === 4 && 6 - 2 === 4)}`);

// // comparación
// console.log(`igualdad: ${3 === 3}`);
// console.log(`desigualdad: ${3 !== 3}`);
// console.log(`mayor que: ${2 > 3}`);
// console.log(`menor que: ${2 < 3}`);
// console.log(`mayor que o igual que: ${3 >= 3}`);
// console.log(`menor que o igual que: ${3 <= 3}`);

// // asignación
// let num3 = 20;
// console.log(`asignación: ${num3}`);
// console.log(`asignación +=: ${(num3 += 2)}`);
// console.log(`asignación -=: ${(num3 -= 2)}`);
// console.log(`asignación *=: ${(num3 *= 2)}`);
// console.log(`asignación /=: ${(num3 /= 2)}`);
// console.log(`asignación %=: ${(num3 %= 3)}`);
// console.log(`asignación **=: ${(num3 **= 2)}`);

// // identidad
// let num4 = 10;
// let num5 = 10;
// console.log(`identidad num3 === num5 : ${num3 === num5}`);
// console.log(`identidad num3 !== num5 : ${num3 !== num5}`);

// // pertenencia
// const obj = { nombre: "Juan", edad: 25 };
// console.log("nombre" in obj);
// console.log("apellido" in obj);

// // bits
// a = 10;
// b = 3;
// console.log(`asignación &=: ${a &= b}`);
// console.log(`asignación |=: ${a |= b}`);
// console.log(`asignación ^=: ${a ^= b}`);
// console.log(`asignación <<=: ${a <<= b}`);
// console.log(`asignación >>=: ${a >>= b}`);

// Estructura de control
// if (a > b) {
//   console.log("a es mayor que b");
// } else if (a < b) {
//   console.log("a es menor que b");
// } else {
//   console.log("a es igual a b");
// }

// // iterativas
// let num6 = 1;
// for (num6; 10 >= num6; ++num6) {
//   console.log(num6);
// }

// while (num6 > 1) {
//   --num6;
//   console.log(num6);
// }
// const ar = ["juan", "ana", "arry"];

// for (acc in ar) {
//   console.log("yes");
//   console.log(acc);
// }
// for (acc of ar) {
//   console.log("not");
//   console.log(acc);
// }
// //  excepciones
// try {
//   console.log(10 / 0);
// } catch (error) {
//   console.log("error");
// }

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

// for(let i = 10; i < 56; i++){
//   console.log(i)
// }

for(let i = 10; i < 56; i++){
  if(i % 2 === 0 && i !== 16 && i % 3 !== 0){
    console.log(i)
  }
}
