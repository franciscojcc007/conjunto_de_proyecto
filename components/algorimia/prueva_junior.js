
// let x= 5
// console.log(4*x+5-7)
// console.log(4*x+3-x)
// x= 3/2
// console.log(4*x-8*x+2)
// console.log(-7-6*x+12)


// let edadhijo = 12
// let edadpadre = 89

// const coprobacion = (h, p) => {
//   for (let i = 0; i < 100; i++) {

//     if (h + i === (p + i) / 3) {
//       return i
//     }
//   }
//   return null;
// }

// console.log(coprobacion(edadhijo, edadpadre))

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

const edadHermanos = (sumaTotal) => {
  const DIFERENCIA = 4;

  const menor = (sumaTotal - DIFERENCIA) / 2;
  const mayor = menor + DIFERENCIA;

  if (Number.isInteger(menor) && menor >= 0) {
    console.log(`La edad del hermano menor es ${menor} y la del hermano mayor es ${mayor}`);
  } else {
    console.log("No se encontró una combinación de edades que cumpla con la condición.");
  }
};

const sumaEdad = 34;
edadHermanos(sumaEdad);
