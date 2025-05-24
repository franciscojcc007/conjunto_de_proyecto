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

function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function isAnagrama(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function isIsograma(word) {
  return new Set(word).size === word.length;
}

function wordChecker(word1, word2 = '') {
  if (!word1) {
    console.log("La primera palabra no puede estar vacía.");
    return;
  }

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  let results = [];

  if (isPalindrome(word1)) {
    results.push(`"${word1}" es un palíndromo.`);
  }

  if (word2 && isAnagrama(word1, word2)) {
    results.push(`"${word1}" y "${word2}" son anagramas.`);
  }

  if (isIsograma(word1)) {
    results.push(`"${word1}" es un isograma.`);
  }

  if (results.length === 0) {
    results.push(`"${word1}" no es un palíndromo, ni un isograma, ni un anagrama de "${word2}".`);
  }

  console.log(results.join(' '));
}


wordChecker("amor", "roma");
// wordChecker("reconocer");
// wordChecker("isograma");
