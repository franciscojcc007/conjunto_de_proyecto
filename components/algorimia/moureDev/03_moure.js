/*
 * EJERCICIO:
 * 1 Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * 2 Utiliza operaciones de inserción, borrado, actualización y ordenación.
 */

// let obj ={
//   "nombre": "Juan",
//   "edad": 25,
//   "direccion": {
//     "calle": "calle 1",
//     "ciudad": "ciudad 1",
//     "pais": "pais 1"
//   }
// }
// const map = new Map();
// map.set('clave','valor');
// map.set(1,'uno');

// console.log(map)

// const numLites =new Set([1,2,2,2,22,2,22,2,2,23,4,3,44]);
// console.log(numLites);

// let num = [2, 4, 6];
// num.push(8);       // Añadir al final: [2, 4, 6, 8]
// num.unshift(0);    // Añadir al inicio: [0, 2, 4, 6, 8]
// num.splice(2, 0, 3); // Insertar en posición 2: [0, 2, 3, 4, 6, 8]

// num.pop();         // Eliminar del final: [0, 2, 3, 4, 6]
// num.shift();       // Eliminar del inicio: [2, 3, 4, 6]
// num.splice(1, 2);  // Eliminar 2 elementos desde posición 1: [2, 6]

// num[1] = 5;        // Cambiar el valor en posición 1: [2, 5]

// num = [3, 1, 4, 2];
// num.sort((a, b) => a - b); // Orden ascendente: [1, 2, 3, 4]
// num.sort((a, b) => b - a); // Orden descendente: [4, 3, 2, 1]

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * 1 Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * 2 Cada contacto debe tener un nombre y un número de teléfono.
 * 3 El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * 4 El programa no puede dejar introducir números de teléfono no numéricos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * 5 También se debe proponer una operación de finalización del programa.
 */

// require("colors");

const agenda = () => {
  const dict = {}
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: pro1cess.stdout
  });

  const menu = () => {
    console.log('\n1. Buscar contacto')
    console.log('2. Insertar contacto')
    console.log('3. Actualizar contacto')
    console.log('4. Eliminar contacto')
    console.log('5. Finalizar programa')

    const addContactIfValid = (name, phono) => {
      if (/^\d{1,11}$/.test(phono)) {
        dict[name] = phono
        console.log(`Contacto agregado: ${name} - ${phono}`)
      } else {
        console.log(
          `Error, la longitud o formato del teléfono ${phono} no es correcto`
        )
      }
    }

    rl.question('\n¿Qué operación deseas realizar?: ', (opcion) => {
      switch (parseInt(opcion)) {
        case 1:
          rl.question('Introduce el nombre del contacto a buscar: ', (name) => {
            if (dict[name]) {
              console.log(`El contacto ${name} tiene el número ${dict[name]}`);
            } else {
              console.log(`No hay un contacto con el nombre ${name}`);
            }
            menu()
          })
          break

        case 2:
          rl.question('Introduce un nombre: ', (name) => {
            rl.question('Introduce un número: ', (phono) => {
              addContactIfValid(name, phono)
              menu()
            })
          })
          break

        case 3:
          rl.question(
            'Introduce el nombre del contacto a actualizar: ',
            (name) => {
              if (dict[name]) {
                rl.question(
                  'Introduce el nuevo número de teléfono: ',
                  (phono) => {
                    addContactIfValid(name, phono)
                    menu()
                  }
                )
              } else {
                console.log(`No hay un contacto con el nombre ${name}`)
                menu()
              }
            }
          )
          break

        case 4:
          rl.question(
            'Introduce el nombre del contacto a eliminar: ',
            (name) => {
              if (dict[name]) {
                delete dict[name]
                console.log(`Contacto eliminado: ${name}`)
              } else {
                console.log(`No hay un contacto con el nombre ${name}`)
              }
              menu()
            }
          )
          break

        case 5:
          console.log("Saliendo de la agenda.")
          rl.close()
          break

        default:
          console.log('Opción no válida. Por favor, selecciona entre 1 y 5.')
          menu()
      }
    }
  )
  }

  menu()
}

agenda()
