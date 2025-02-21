// const fun1 = function (name) {
//     console.log(`klk ${name}`)
// }

// fun1("jaro")

// function fun2(fun, name) {
//     fun(name)
// }

// fun2(fun1, "junior")

// function fun3() {
//     return fun1
// }

// let cont = fun3()
// cont('mello')

// let longitud = (arr) => arr.length
// console.log(longitud([1, 2, 3,]));


// (function () {
//     console.log("IIFE clásico")
// })();

// (() => {
//     console.log("IIFE Arrow")
// })();

// function list(...name) {
//     name.forEach(list => console.log(list))
// }

// function list(...name) {
//     let arr = name.forEach(list => {
//         console.log(list)
//     })
// }

// list('Carlos', 'amerce', 'ana')

// function sum(...number) {
//     return number.reduce((acc, n) => acc + n, 0);
// }

// console.log(sum(1, 2, 3, 4,))

// function factorial(n) {
//     if (n <= 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }

// console.log(factorial(5))

// function processData(data, callback) {
//     const result = sum(...data)
//     callback(result)
// }

// function processResult(result) {
//     console.log(result)
// }

// function processResult2(result) {
//     console.log(`Mi resultado es: ${result}`)
// }

// processData([1, 2, 3, 4, 5], processResult)
// processData([1, 2, 3], processResult2)
// processData([1, 2, 3], (result) => {
//     console.log(`Mi resultado en la arrow function es: ${result}`)
// })


