// Nuevos operadores de asignación lógica &&=, ||=, ??=
// JavaScript ha introducido tres nuevos operadores de asignación lógica (&&=, ||=, ??=) que permiten realizar asignaciones condicionales de forma más sencilla y concisa.

// Estos operadores combinan la lógica booleana con la asignación para reducir la necesidad de declaraciones if y operadores en ciertas situaciones comunes.

// Operador &&=
// El operador &&= asigna un valor solo si la variable ya es “truthy”.

// Ejemplo de uso del operador &&=

let valor2 = 5
valor2 &&= 10
console.log(valor2) // 10
 
let otroValor3 = 0
otroValor3 &&= 10
console.log(otroValor3) // 0
// En el ejemplo, valor se actualiza a 10 porque ya era un valor “truthy”. Sin embargo, otroValor no cambia porque inicialmente era 0 (un valor “falsy”).

// Operador ||=
// El operador ||= asigna un valor solo si la variable es “falsy”.

// Ejemplo de uso del operador ||=

let valor1 = 0
valor1 ||= 10
console.log(valor1) // 10
 
let otroValor1 = 5
otroValor1 ||= 10
console.log(otroValor1) // 5
// Aquí, valor se asigna a 10 porque era “falsy” (0). En cambio, otroValor permanece en 5 porque ya era un valor “truthy”.

// Operador ??=
// El operador ??= asigna un valor solo si la variable es null o undefined.

// Ejemplo de uso del operador ??=

let valor = null
valor ??= 10
console.log(valor) // 10
 
let otroValor = 5
otroValor ??= 10
console.log(otroValor) // 5
// En este caso, valor se actualiza a 10 porque era null. Por otro lado, otroValor sigue siendo 5 porque no es null ni undefined.

// La diferencia de asignaciones con operadores lógicos
// Seguramente te estarás preguntando qué ventaja tiene realmente el uso de estos operadores en lugar de usar el operador lógico a mano (&&, ||, ??) y luego hacer la asignación.

// Bien, además de que el código queda más corto, también evitamos la asignación en el caso de que no sea necesario.

// Dicho de otra forma, si no se cumple la condición según el operador, en el caso de &&=, ??= y ||= no se realiza ninguna asignación mientras que en el caso de &&, || y ?? se realiza siempre independientemente de si la condición se cumple o no.

// Ejemplo de reasignación con operador lógico

let value = 0
value = value && 10
console.log(value) // 0
 
// se reasigna value a la variable value
 
let otherValue = 0
otherValue ??= 10
console.log(otherValue) // 0
 
// NO se reasigna otherValue a la variable otherValue
// se evita trabajo innecesario
// Resumen
// Estos operadores permiten realizar asignaciones condicionales en una sola línea, haciendo el código más legible y reduciendo el uso de condicionales if. Son especialmente útiles cuando queremos asegurar valores predeterminados o evitar sobrescribir variables ya definidas.

// Además, como hemos visto, los operadores de asignación evitan trabajo innecesario ya que no reasignan variables si no se cumple la condición, a diferencia de usar el operador lógico a mano junto con la asignación.
