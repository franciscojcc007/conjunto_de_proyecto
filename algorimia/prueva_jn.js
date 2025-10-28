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

// Las cantidades enumeradas en su libro de cocina solo producen suficiente lasaña para dos porciones. Ya que quieres cocinar para más personas La próxima vez, desea calcular las cantidades para diferentes números de porciones.

// Implemente una función que tome dos parámetros.scaleRecipe

// Objeto de receta que contiene las cantidades necesarias para 2 porciones. El formato del objeto se puede ver en el ejemplo abajo.
// El número de porciones que desea cocinar.
// La función debe devolver un objeto de receta con las cantidades necesarias para el número deseado de porciones. Quieres mantener Sin embargo, la receta original. Esto significa que, en esta tarea, el argumento de la receta no debe modificarse.


// function scaleRecipe(recipe, num){
//     console.log(recipe);
//     const scaledRecipe = {};

//     for (const ingredient in recipe) {
//         console.log(recipe[ingredient]);
//         scaledRecipe[ingredient] = recipe[ingredient] *  (num / 2)
//     }
//     return scaledRecipe;
    
// }

// const recipe = {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };

// console.log(scaleRecipe(recipe, 5))

function translate2d(dx, dy) {
  return function (x , y){  
    return [x + dx, y + dy]
  }
}


function scale2d(sx, sy) {
   return function (x , y){  
    return [x * sx, y * sy]
  }
}


function composeTransform(f, g) {
   return function (x, y) {
    const [x1, y1] = f(x, y);  
    return g(x1, y1);          
  };
}

const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates);
const result = composedTransformations(0, 1);
console.log(result)