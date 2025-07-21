
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

// const inversion= (c,r,f,t)=>{
//     const beneficioNeto= c * r -(c - f) * t
//     const gananciaInversion = c * r
//     const costeDeuda = (c - f) * t
//     const rentabilidadFinanciera = (gananciaInversion - costeDeuda) / f
//     console.log(`Beneficio Neto: ${beneficioNeto.toFixed(2)}$`)
//     console.log(`ganancia de la inversión: ${gananciaInversion.toFixed(2)}$`)
//     console.log(`coste de la deuda: ${costeDeuda.toFixed(2)}$`)
//     console.log(`rentabilidad financiera de la empresa con esta inversión: ${rentabilidadFinanciera.toFixed(2)}$`)

// }

// let capitalInversion= 30000
// let rentabilidadAnual = 0.15
// let fondosPropios = 10000
// let tiposInteres = 0.09


// inversion(capitalInversion,rentabilidadAnual,fondosPropios,tiposInteres)

// const razon = (cantidadChicos, cantidadChicas, totalEstudiantes) => {
//   const sumaBase = cantidadChicos + cantidadChicas;

//   if (sumaBase === 0) {
//     console.log("La razón no puede calcularse porque la suma de chicos y chicas es cero.");
//     return;
//   }

//   const contante = totalEstudiantes / sumaBase;
//   const chicosReales = cantidadChicos * contante;
//   const chicasReales = cantidadChicas * contante;

//   const sumaTotal = chicosReales + chicasReales;

//   if (Math.round(sumaTotal) === totalEstudiantes) {
//     console.log(`Hay ${chicosReales} chicos y ${chicasReales} chicas en la clase.`);
//   } else {
//     console.log("La proporción no coincide exactamente con el total de estudiantes.");
//   }
// };

// let chicos = 5;
// let chicas = 8;
// let total = 65;

// razon(chicos, chicas, total);

// chicos = 3;
// chicas = 2;
// total = 80;

// razon(chicos, chicas, total);


// let tamanoTela = 80
// let trozosCorte= 1
// let tiempoCorte = 6

// const calcularTiempoTrabajo = (tamanoTela, trozosCorte, tiempoCorte)=>{

//     const totalTiempo = tamanoTela / trozosCorte * tiempoCorte
//     console.log(`El tiempo total de trabajo es: ${totalTiempo} minutos`);
// }  

// calcularTiempoTrabajo(tamanoTela, trozosCorte, tiempoCorte)


// Cree una función llamada así:formatBlogTitle

// Toma una cadena de título de blog como entrada
// Recorta cualquier espacio en blanco de ambos extremos
// Hace que el primer carácter de cada palabra esté en mayúsculas
// Reemplaza todas las apariciones de "Javascript" (no distingue entre mayúsculas y minúsculas) por "JavaScript"
// Devuelve el título con formato
// Ejemplo de entrada:

// " Cómo aprender JavaScript para principiantes "

// Resultado esperado:

// "Cómo aprender JavaScript para principiantes"


// function formatBlogTitle(title) {
//   return title
//     .trim()
//     .split(' ') 
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')
//     .replace('Javascript','JavasCript')
// }


// console.log(formatBlogTitle( '  mastering javascript tricks   '))

function stringWeaver(str1, str2) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Write your code here
  const removeNumbers = str => str.split('').filter(char => !numbers.includes(char));
  const toUpperCaseVowels = str => str.map(char => vowels.includes(char) ? char.toUpperCase() : char);
  let result = ''
  let isNum1 = removeNumbers(str1)
  let isNum2 = removeNumbers(str2);
  let isVowel1 = toUpperCaseVowels(isNum1)
  let isVowel2 = toUpperCaseVowels(isNum2);
  let maxLength = Math.max(isVowel1.length, isVowel2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < isVowel1.length) {
      let char1 = isVowel1[i];
      result += char1;
      
    }
    if (i < isVowel2.length) {
      let char2 = isVowel2[i];
      result += char2
    }
  }

  return result
}

console.log(stringWeaver("h2ello", "w1orld"))