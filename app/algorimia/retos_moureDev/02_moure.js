/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 */
// let a = 2;
// let b = 3;
// function function1() {}
// function1();

// function function2(a, b = null) {
//   return a + b;
// }
// console.log(function2(2));

// const function3 = () => {
//   console.log("aro function");
// };
// function3();
// const function4 = function () {};
// function4();

// (function () {
//   console.log("Esto se ejecuta de inmediato");
// })();

// const multipleArgumento = (...names) => {
//   for (argumento of names) {
//     console.log(argumento);
//   }
// };
// multipleArgumento("juan", "José", "ana");

// function usoF() {
//   const f = () => console.log("soy yo yo");
//   f();
// }

// usoF();
// Variable local y global
// var global = 20
// function func() {
//   var local = 10
//   console.log(local, global)
// }

// func()

/*
* DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */


function extra(a , b) {
  let acc = 0
  for (let i= 1 ; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0)console.log(`es ${a} ${b}`)  
    else if(i % 3 === 0)console.log(a)
    else if(i % 5 === 0)console.log(b)
    else {
      console.log(i)
      acc += 1
    }
  }
  return acc
}

console.log(extra("Fizz", "Buzz"))