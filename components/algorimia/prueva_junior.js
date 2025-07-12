
// let x= 5
// console.log(4*x+5-7)
// console.log(4*x+3-x)
// x= 3/2
// console.log(4*x-8*x+2)
// console.log(-7-6*x+12)


// let edadHijo = 12
// let edadPadre = 89

// const comprobacion = (h, p) => {
//   for (let i = 0; i < 100; i++) {

//     if (h + i === (p + i) / 3) {
//       return i
//     }
//   }
//   return null;
// }

// console.log(comprobacion(edadHijo, edadPadre))

// let sumaEdad= 34

// const edadHermanos=( suma)=>{

//   for (let i = 0; i < 100; i++) {
//     let hermanoMenor 
//     let hermanoMayor 

//     if(i+(i+4) === suma){
//       hermanoMenor = i
//       hermanoMayor = i + 4
//       return console.log(`La edad del hermano menor es ${hermanoMenor} y la del hermano mayor es ${hermanoMayor}`)
//     }
//   }
//   return console.log("No se encontró una solución válida.")
// }

// edadHermanos( sumaEdad)

// const edadHermanos = (sumaTotal) => {
//   const DIFERENCIA = 4;

//   const menor = (sumaTotal - DIFERENCIA) / 2;
//   const mayor = menor + DIFERENCIA;

//   if (Number.isInteger(menor) && menor >= 0) {
//     console.log(`La edad del hermano menor es ${menor} y la del hermano mayor es ${mayor}`);
//   } else {
//     console.log("No se encontró una combinación de edades que cumpla con la condición.");
//   }
// };

// const sumaEdad = 34;
// edadHermanos(sumaEdad);



// 1. Una fábrica tiene 3 áreas de producción A, B y C. Por motivos de gestión del personal, se enumera a sus trabajadores, cada trabajador se tiene una labro designada en sus respectivas áreas de producción, 

// ={1,2,4,5,6,}
// ={2,3,4,8,10}
// ={5,6,7,8,9}

// La empresa necesita conocer:

//  • Cuáles trabajadores de las áreas de producían A y B, se encuentran a su vez en el Area de producían C.
// • Cuáles trabajadores se encuentran trabajando en las áreas de producían A y B al mismo tempo.
// • Cuáles trabajadores se encuentran trabajando en Ias áreas de producían C y B al mismo tempo.
// • Cuáles trabajadores se encuentran trabajando en las áreas de producían A y C al mismo tempo.

// const trabajadoresEnComun = (A, B, C) => {
//   const setB = new Set(B);
//   const setC = new Set(C);

//   const trabajadoresABC = A.filter(t => setB.has(t) && setC.has(t));
//   const trabajadoresAB  = A.filter(t => setB.has(t));
//   const trabajadoresAC  = A.filter(t => setC.has(t));
//   const trabajadoresCB  = C.filter(t => setB.has(t));

//   const imprimirResultado = (grupo, nombre) => {
//     if (grupo.length === 0) {
//       console.log(`No hay trabajadores en común entre ${nombre}.`);
//     } else {
//       console.log(`Trabajadores en común entre ${nombre}:`, grupo);
//     }
//   };

//   imprimirResultado(trabajadoresABC, "las áreas A, B y C");
//   imprimirResultado(trabajadoresAB, "las áreas A y B");
//   imprimirResultado(trabajadoresCB, "las áreas C y B");
//   imprimirResultado(trabajadoresAC, "las áreas A y C");
// };

// const A = [1, 2, 4, 5, 6];
// const B = [2, 3, 4, 8, 10];
// const C = [5, 6, 7, 8, 9];

// trabajadoresEnComun(A, B, C);


// 2. Un lote de autos en una fábrica presento defectos en varias partes, siendo estas el motor, los frenos y la transmisión. Se enumeran los 15 vehículos, agrupando sus respectivas fallas:

// Motor={1,3,5,7,9,11,13,15}
// Frenos={2,4,6,8,10,12,14}
// Transmisión={1,5,6,7,8,11}

// La empresa necesita conocer:

// • Cuáles vehículos que presentaron fallos en motor y transmisión, se encuentran a su vez en los frenos.
// • Cuáles vehículos presentan fallos en el motor y los frenos al mismo tempo.
// • Cuáles vehículos presentan fallos en Ia transmisión y los frenos al mismo tempo.


// const Motor=[1,3,5,7,9,11,13,15]
// const Frenos=[2,4,6,8,10,12,14]
// const Transmisión=[1,5,6,7,8,11]

// trabajadoresEnComun(Motor,Frenos,Transmisión)


// En la actualidad, la empresa “INDUCORP” realiza una inversión por valor de 30.000$ con una rentabilidad el 15% anual, la empresa 
// ha sido financiar la operación con fondos propios por valor de 10.000$ y el resto del dinero a un préstamo en tipo interés del 9%
// anual. Tu desafío como profesional es calcular beneficio neto, la ganancia de la inversión, el coste de la deuda, la rentabilidad 
// financiera de la empresa con esta inversión, además de emitir tus conclusiones sobre el estado de la misma. 

// Cuál es el beneficio neto?
// Cuál es la ganancia de la inversión?
// Cuál es el coste de la deuda?
// Cuál es la rentabilidad financiera de la empresa con esta inversión?
// Cuáles son tus conclusiones con respectos la inversión de la empresa?
// Anexe los procedimientos empleados para resolver cada respuesta dentro de un archivo de Excel.


// let tamanoTela = 40
// let trozosCorte= 1
// let tiempoCorte = 6

// const calcularTiempoTrabajo =()=>{

// }

// calcularTiempoTrabajo(tamanoTela, trozosCorte, tiempoCorte)