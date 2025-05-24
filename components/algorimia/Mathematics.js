// let ladoA = 5
// let ladoB = 4
// let base = 8
// let altura = 14
// let radio = 3


// console.log(`el perímetro del cuadrado es ${ladoA * 4}`)
// console.log(`el area del cuadrado es ${ladoA * ladoB}cm2`)
// console.log(`el perímetro del triangulo es ${ladoA + ladoB +ladoA}`)
// console.log(`el aria del triangulo es ${(base * altura) / 2}cm2`)
// console.log(`el diámetro del circulo es ${radio *2}`)
// console.log(`el circunferencia del circulo es ${(radio * 2) * Math.PI}`)
// console.log(`el area del circulo es ${(radio ** 2) * Math.PI}`)

// function calcularAlturaTriángulos (ladoEquivalente, base){
//     if(ladoEquivalente == base){
//         console.warn(`Este no es un triangulo isosceles`)
//     }else{
//         let altura2 = Math.sqrt((ladoEquivalente ** 2) - ((base **2) / 4))
//         let result = altura2.toFixed(3)
//         console.log(`calcular altura triángulos ${result}`)
//     }
// }

// calcularAlturaTriángulos(10, 8)


function solution(lado1, lado2, lado3) {
  if (
    lado1 + lado2 <= lado3 ||
    lado1 + lado3 <= lado2 ||
    lado2 + lado3 <= lado1
  ) {
    return false
  }

  
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return false
  }

  const s = (lado1 + lado2 + lado3) / 2
  const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3))
  const altura = (2 * area) / lado1

  return Math.floor(altura); 
  }

  //En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

// Input

console.log(solution(16,8,10))
console.log(solution(6,6,6))

// Output

// 4
// false