// 1. Crea una función que retorne a otra función

function functionOtraFunction(mensaje) {
  return function () {
    console.log(mensaje);
  };
}

const miFunction = functionOtraFunction('Hola desde la función anidada');
miFunction();

// 2. Implementa una función currificada que multiplique 3 números
function multiplicar(num1){
  return function(num2){
    return function(num3){
      return num1*num2*num3
    };
  };
}
// Versión Moderna con Arrow Functions
// const multiplicar = num1 => num2 => num3 => num1 * num2 * num3;

console.log(multiplicar(2)(5)(6))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function recursiva(num, ex){
  if(ex === 0)return 1;
    return num * recursiva(num, ex -1)
}

console.log(recursiva(5, 4))



// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función


// 7. Desarrolla una función parcial


// 8. Implementa un ejemplo que haga uso de Spread


// 9. Implementa un retorno implícito


// 10. Haz uso del this léxico