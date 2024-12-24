/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * Acceso a caracteres específicos.✔️
 * subCadenas.
 * longitud.✔️
 * concatenación.✔️
 * repetición.✔️
 * recorrido.✔️
 * conversión a mayúsculas y minúsculas.✔️
 * reemplazo.✔️ 
 * división.✔️
 * unión.✔️
 * interpolación.✔️
 * verificación...✔️
 */

let string1 = 'Mariana'
let string2 = ' ster '
let string3 = 'Hola, soy'
let arr = [string3, string1]

console.log(string2.trim())
console.log(string1.split(''))
console.log(string1.slice(4))
console.log(string1[3])
console.log(string1.length)
console.log(`${string1} ${string2}`)
console.log(string1.repeat(3))
console.log(string1.toUpperCase())
console.log(string1.toLowerCase())
console.log(string1.replace('Mariana', 'Mariana1'))
console.log(string1.split('i'))
console.log(arr.join(' '))
console.log(`name: ${string1} lastName: ${string2}`)
console.log(string1.includes('a'))



/*
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * 1 Palíndromos
 * 2 Anagramas
 * 3 Isogramas
 */

let word1 = 'mano'
let word2 = 'ana'

function wordChecker(word1, word2) {
    if (word1 === word1.split('').reverse().join('')) {
        console.log('Es palíndromo')
    } else if (word2 === word1.split('').sort().join('')) {
        console.log('Es anagrama')
    } else if (word1.length === new Set(word1).size) {
        console.log('Es isograma')
    } else {
        console.log('No es nada')
    }
}

