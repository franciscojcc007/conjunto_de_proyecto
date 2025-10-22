// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// function updateTask(tasks, index, newTask) {
//     // Tu código aquí
//     var updatedTasks = __spreadArray([], tasks, true);
//     updatedTasks[index] = newTask;
//     return [
//         updatedTasks,
//         tasks
//     ];
// }
// console.log(updateTask(['Tarea 1', 'Tarea 2', 'Tarea 3'], 1, 'Tarea Actualizada')); // [['Tarea 1', 'Tarea Actualizada', 'Tarea 3'], ['Tarea 1', 'Tarea 2', 'Tarea 3']]


// function limesToCut(wedgesNeeded, limes) {
//   let w = 0
//   let c = 0
//   for(let lime of limes){
//     if( w >= wedgesNeeded) break

//     switch(lime){
//       case 'small' :
//         w += 6
//           break
//       case 'medium':
//         w += 8
//           break
//       case 'large':
//         w += 10
//           break
//     }

//     c++
//   }

//   return c
// }
// console.log(limesToCut(25, ['small', 'large', 'large', 'medium', 'small'])) // 4

//Además de reservar el tiempo, también debes asegurarte de tener suficiente salsa y fideos para
//  cocinar la lasaña de tu Sueños. Por cada capa de fideos en su lasaña, necesitará 50 gramos de 
// fideos. Por cada capa de salsa en su lasaña, Necesitarás 0,2 litros de salsa.

//Defina la función que toma una matriz de capas como parámetro. La función determinará entonces el
//  cantidad de fideos y salsa necesarios para preparar su comida. El resultado debe devolverse como 
// un objeto con claves y .quantitiesnoodlessauce


// function quantities(capas){
//     let noodles = 0
//     let sauce = 0
//     for (let i = 0; i < capas.length; i++) {
//         if(capas[i]=== 'noodles') noodles += 50
//         if(capas[i]=== 'sauce') sauce += 0.2
//     }
//     return {
//         noodles,
//         sauce
//     }
// }

// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']));
// // => { noodles: 100, sauce: 0.4 }
