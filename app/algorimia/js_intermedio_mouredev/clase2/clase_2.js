// let numbers = [1, 2, 3, 4, 5, 6]

// let filtrado = numbers.filter(el => el % 2 === 0)
// console.log(filtrado)

// flat

let nestedArray = [1, [2, [3, [4,[5,[6]]]]]]
let flatArray = nestedArray.flat(Infinity)
console.log(flatArray)


// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(' '))
console.log(words)

