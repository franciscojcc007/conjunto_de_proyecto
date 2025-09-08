// Nullish Coalescing Operator (??) en JavaScript

// Nullish Coalescing Operator ??
// El Nullish Coalescing Operator (??) es una característica de JavaScript que permite proporcionar un valor alternativo cuando una variable es null o undefined. Es especialmente útil para manejar valores predeterminados sin los inconvenientes del operador || que considera otros valores “falsy”.

// ¿Cómo funciona el operador ???
// A diferencia del operador ||, el operador ?? solo revisa si el valor es null o undefined en lugar de falsy. Esto es muy útil cuando queremos un valor predeterminado sin alterar valores como 0 o "", que son falsy pero podrían ser válidos según el contexto.

// Ejemplo de uso del operador ??

let currentPage = null
let page = currentPage ?? 1
console.log(page) // 1
 
currentPage = 0
page = currentPage ?? 1
console.log(page) // 0

// En este ejemplo, cuando currentPage es null, page se establece como 1. Sin embargo, si currentPage tiene el valor 0, page toma ese valor.

// Comparación con el operador ||
// El operador || evalúa otros valores “falsy” como 0, NaN, "" y false. Esto puede producir resultados inesperados si estos valores son válidos en tu código.

// Diferencia entre || y ??

let score = 0
let resultado = score || 10
console.log(resultado) // 10
 
resultado = score ?? 10
console.log(resultado) // 0

// En este caso, resultado es 10 cuando se usa || porque 0 se considera “falsy”. Sin embargo, con ??, resultado es 0 porque 0 no es null ni undefined.

// Resumen
// El operador ?? permite proporcionar valores predeterminados solo cuando una variable es null o undefined. Es útil para gestionar valores predeterminados sin los efectos secundarios de tratar otros valores “falsy” como si fueran null.

// Este operador hace que el código sea más legible y seguro, especialmente en casos en que los valores 0, false, o "" son válidos y no deben ser reemplazados por valores predeterminados.