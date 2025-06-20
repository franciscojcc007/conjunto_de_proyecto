// function calcularAlturaTriángulos (ladoEquivalente, base){
//     if(ladoEquivalente == base){
//         console.warn(`Este no es un triangulo isosceles`)
//     }else{
//         let altura2 = Math.sqrt((ladoEquivalente ** 2) - ((base ** 2) / 4))
//         let result = altura2.toFixed(3)
//         console.log(`calcular altura triángulos ${result}`)
//     }
// }

// calcularAlturaTriángulos(10, 8)

// function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
//   if (
//     lado1 + lado2 <= lado3 ||
//     lado1 + lado3 <= lado2 ||
//     lado2 + lado3 <= lado1
//   ) {
//     return false
//   }
  
//   if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//     return false
//   }

//   const s = (lado1 + lado2 + lado3) / 2
//   const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3))
//   const altura = (2 * area) / lado1

//   return Math.floor(altura); 
//   }

// console.log(calcularAlturaTrianguloEscaleno(12,8,6))
// console.log(calcularAlturaTrianguloEscaleno(6,6,6))


// function suma() {
//   const num = 10000;
//   const resultado = (num * (num + 1)) / 2;

//   for (let i = 0; i < n; i++) {
//     console.log(resultado);
//   }
// }

// suma()



// let inp = [3, 5, 2]
// let num1 = parseInt(inp[0]); // Don't change this line
// let num2 = parseInt(inp[1]); // Don't change this line
// let num3 = parseInt(inp[2]); // Don't change this line
// function findMax(a, b, c) {
//   let max
//   if (a > b && a > c) {
//     max = a
//   } else if (b > a && b > c) {
//     max = b
//   } else {
//     max = c
//   }
//   return max
// }

// console.log(findMax(num1, num2, num3))


// function calculateBMI(weight, height) {
//   return weight / (height * height)
// }

// // Don't change the lines below
// console.log(calculateBMI(70, 1.75));
// console.log(calculateBMI(80, 1.8));

// Type your code below
// function calculateVolume(length, width, height) {
//   return length * width * height

// }

// // Don't change the lines below
// console.log(calculateVolume(3, 4, 5));
// console.log(calculateVolume(2, 2, 2));
// console.log(calculateVolume(1, 4, 2));
// console.log(calculateVolume(9, 8, 7));

// const sumOfEvens = (n) => {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };

// console.log(sumOfEvens(5));

// const isValid = (username, password) => username === 'admin' || (username === 'user' && password === 'qweasd');

// console.log(isValid('user', 'qweasd'))
// console.log(isValid('admin',''))

// let inp = 14
// let num = parseInt(inp); // Don't change this line

// function fizzbuzz(number) {
//   let result = "";
//   let isFizzBuzz = false;  // Variable para saber si ya se imprimió Fizz o Buzz

//   if (number % 3 === 0) {
//       result += "Fizz";
//       isFizzBuzz = true;
//   }
//   if (number % 7 === 0) {
//       result += "Buzz";
//       isFizzBuzz = true;
//   }

//   if (!isFizzBuzz) { // Solo ejecuta si no es múltiplo de 3 ni 7
//       let strNum = String(number);
//       result = strNum.includes("3") ? "Almost Fizz" : strNum;
//   }

//   return result;
// }

// for (let i = 1; i <= num; i++) {
//   console.log(fizzbuzz(i));
// }

// let shoppingList =['bread','eggs','milk','butter']
// console.log(shoppingList)

// let favoriteColors = ['red','blue','green','yellow']
// console.log(favoriteColors)
// let colors = ['red', 'blue', 'green', 'yellow', 'purple']
// console.log(colors[colors.length - 2])

// function values(arr) {
//     // Write code here
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// let arr = [1,2,3]
// values(arr)

// function firstAndLast(arr){
//     return arr[0] + arr[arr.length - 1];
// }

// let arr = [10,20,30,40,50]
// console.log(firstAndLast(arr))

// function checkSizeOfStack(c, s) {
//     let isLastEqual = c === s[s.length -1]
//     return isLastEqual
// }

// let c = 0
// let s =[1,2,3,4]
// console.log(checkSizeOfStack(c,s))

// function changeElement(arr, index, newElement) {
//     // Write code here
//     arr[index] = newElement
//     return arr
// }

// let arr = [1,2,3]
// let i = 0
// let newElement = 9
// console.log(changeElement(arr, i, newElement))

// function swapEnds(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let temp = arr[0]
//     arr[0]= arr[arr.length -1]
//     arr[arr.length -1]= temp
//     return arr
// }

// let arr = [1,2,3,4]
// console.log(swapEnds(arr))

// let colors = ["red", "blue", "green"];
// colors.push("yellow")
// let removedClores = colors.shift("red")
// colors.unshift("purple")
// let lasColor = colors.pop()

// console.log(colors)
// console.log(removedClores)
// console.log(lasColor)

// function findElement(arr, num) {
//     return arr.indexOf(num);
// }

// let arr = [1,2,3,5]
// let num = 3
// console.log(findElement(arr, num))

// let numbers = [40, 10, 30, 20, 50, 30, 10];
// numbers.sort().reverse()
// let firstIndex = numbers.indexOf(30)
// let lastIndex = numbers.lastIndexOf(10)
// let hasHundred = numbers.includes(100)

// console.log(numbers)
// console.log(firstIndex)
// console.log(lastIndex)
// console.log(hasHundred)

// function processArray(arr) {
//   arr.pop();
//   arr.push(10);
//   arr.sort();

//   if (arr.includes(5)) {
//     arr[arr.indexOf(5)] = 50;
//   }

//   arr.reverse();
//   return arr;
// }
// console.log(processArray([1, 2, 3, 4, 5, 6])); // Esperado: [50, 4, 3, 2, 10, 1]

// let inp = 'Bob, Josh, Alexander, Rachel, Jax'
// let arr = inp.split(", "); // Don't change this line
// // Write your code below

// let filteredArr = arr.filter(word => word.length > 5);

// console.log(filteredArr);
// let inp = '1,2,3,4,5,6,7,8,9,10'
// let inp = '23, 432, 213, 1234, 5555'

// let arr = inp.split(",").map(Number); // Don't change this line
// let result = []
// arr.forEach(num=>{
//   if(num < 50 || num % 5 === 0){
//     result.push(num);
//   }
// })
// console.log(result)

// Write your code below
// let str = 'I love coding!'
// function countVowels(str) {
//   let acc = 0
//   const vowels = "aeiou";
//   // Write code here
//   for (const el of str.toLowerCase()) {
//     if (vowels.includes(el)) {
//       acc++;
//     }
//

//   return acc;
// }
// console.log(countVowels(str))

// let str = "hello123world"
// function countVowels(str) {
//   let acc = 0
//   const vowels = "12346567890";
//   // Write code here
//   for (const el of str.toLowerCase()) {
//     if (vowels.includes(el)) {
//       acc++;
//     }
//   }

//   return acc;
// }
// console.log(countVowels(str))

// let inp = 'apple pie'
// let text = inp;
// // // Write your code below
// function letra(text) {
//   let vowels = "p";
//   let acc = 0
//   for (const el of text.toLowerCase()) {
//     if (vowels.includes(el)) {
//       acc++
//     }
//   }
//   return acc
// }

// console.log(letra(text))
// let inp = '1, 2, 3, 4, 5, 6, 7,'
// let arr = inp.split(", ").map(Number);
// // Write your code below
// function matricesCortadas(arr) {
//   let mid = Math.floor(arr.length / 2);

//   if (arr.length % 2 !== 0) {
//     return arr.slice(mid - 1, mid + 2);
//   } else {
//     return arr.slice(mid - 1, mid + 1);
//   }
// }

// console.log(matricesCortadas(arr))


// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
// let newNumbers= numbers.slice(2,7)
// console.log(newNumbers)

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.concat([6, 7, 8])
// console.log(newNumbers)
// let string = newNumbers.join(",")
// console.log(string)
// let extraer = newNumbers.slice(0,3)
// console.log(extraer)
// numbers.splice(1, 1, 99)
// console.log(numbers)
// let sentence ='Coding is super fun'

// function formatSentence(sentence){
//   let words = sentence.split(" ")
//   let newWords = words.join("-")
//   return newWords
// }


// console.log(formatSentence(sentence))

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(num => num * 3)
// console.log(newNumbers)
// let mayorQue = numbers.filter(num => num > 3)
// console.log(mayorQue)

// function transformArray(arr) {
//   let arrFilter = arr.filter(num => num >= 10)
//   let arrMap = arrFilter.map(num2 => num2 * 2)
//   return arrMap
// }

// console.log(transformArray([5, 12, 8, 20, 7, 15]))

// function transformArray(arr) {
//   return arr
//       .filter(num => num >= 10)
//       .map(num => num * 2);
// }

// let inp =['1, 2, 3 , 4, 5','3, 4, 6']
// let arr1 = inp[0].split(", ").map(Number);
// let arr2 = inp[1].split(", ").map(Number);
// // Write your code below
// function matrices(arr1 , arr2){
//   let incluidos = arr1.filter(num => arr2.indexOf(num) === -1)
//   return incluidos
// }


// console.log(matrices(arr1, arr2))
// console.log('z' < 't')

// let lista = []

// function addItem(item) {
//   lista = [...lista, item]
//   console.log(`${item} added to the grocery list.`)
// }

// function removeItem(item) {
//   if(lista.indexOf(item) === -1){
//     console.log(`${item} is not in the grocery list.`)
//   }else{
//     lista = lista.filter(el => el !== item)
//     console.log(`${item} removed from the grocery list.`)
//   }
// }

// function viewList(item) {
//   if(lista.length === 0){
//     console.log('The grocery list is empty.')
//   }else{
//     console.log('Grocery List:')
//     lista.forEach((el , i)=> {
//       console.log(`${i + 1}. ${el}`)
//     })
//   }
// }

// viewList();
// addItem("Milk");
// addItem("Bread");
// addItem("Eggs");
// viewList();
// removeItem("Bread");
// viewList();
// removeItem("Cheese");

// let greeting = 'hi'.repeat(3) + '!';
// console.log(greeting)
// let word = 'code';
// let wordWord= word += word[0];
// console.log(wordWord)


// console.log('na'.repeat(2) + ' Batman!');

// let inp = 5
// let n = parseInt(inp);

// function imprimirPiramide(n) {
//   let piramide = '';
//   for (let i = 1; i <= n; i++) {
//     piramide += '*'.repeat(i) + '\n';
//   }
//   return piramide;
// }

// console.log(imprimirPiramide(n))

// let n = parseInt(inp); // Don't change this line

// let rows = Math.floor(n / 2) + 1;
// for (let i = 0; i < rows; i++) {
//   console.log("*".repeat(2 * i + 1));
// }
// let numbers = [1, 2, 3, 4, 5]

// function doubleOdds(numbers) {
//   for (let i = 0; i <= numbers.length; i++) {
//     if (numbers[i] % 2 === 1) {
//       numbers[i] *= 2
//     }
//   }
//   return numbers
// }

// console.log(doubleOdds(numbers))

// let prices = [10, 20, 5, 15];
// let items = ["Notebook", "Pen", "Eraser", "Bag"];
// let budget = 10;


// function analyzeBudget(prices, items, budget) {
//   let acc = 0;
//   let affordableItems = [];
//   let outOfBudgetItems = [];

//   for (let i = 0; i < items.length; i++) {
//     if (prices[i] <= budget) {
//       affordableItems.push(items[i]);
//       acc += prices[i];
//     } else {
//       outOfBudgetItems.push(items[i]);
//     }
//   }

//   console.log(`Affordable items: ${affordableItems.join(", ")}`);
//   console.log(`Total budget needed: ${acc}`);
//   console.log(`Items out of budget: ${outOfBudgetItems.length}`);
// }

// analyzeBudget(prices, items, budget);


// function countUniqueVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let acc = 0
//     // Write code here
//     for (let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i])){
//             str = [...new Set(str)]
//             acc += str[i].length
//         }
//     }
//     return acc
// }
// // Do not write anything outside function

// function countUniqueVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     let uniqueVowels = new Set();

//     for (let char of str) {
//         if (vowels.has(char)) {
//             uniqueVowels.add(char);
//         }
//     }

//     return uniqueVowels.size;
// }

// console.log(countUniqueVowels('hello world'))

// let names= ["John", "Jane", null, "Jim"]

// function greetAll(names) {
//     // Write your code here
//     names.forEach(name => console.log(`Hello, ${name}!`));
// }
//   // Do not write anything outside function

// greetAll(names)

// function alternateCase(str) {
//   // Write your code here
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if(i % 2 === 0){
//       newStr += str[i].toUpperCase()
//     }else{
//       newStr += str[i].toLowerCase()
//     }
//   }
//   return newStr
// }
// // Do not write anything outside function

// console.log(alternateCase('programming'))

// function stringWeaver(str1, str2) {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   // Write your code here
//   let clearStr1 = str1.replace(/[0-9]/g, '')
//   let clearStr2 = str2.replace(/[0-9]/g, '')

// }
// // Do not write anything outside function

// console.log(stringWeaver('h2ello','w1orld'))

// let person = {
//     name: "francisco",
//     age: 37,
//     sex: 'masculino',
//     greet() {
//         console.log(`Hola, soy ${this.name}`)
//     }
// }

// person.sayAge = function () {
//     console.log(`Tengo ${this.age} años`)
// }

// person.genre = function(){
//     console.log(`su genero es ${this.sex}`)
// }

// // console.log(person)

// let programmer = Object.create(person)
// programmer.language = "JavaScript"

// // console.log(person.name)
// // console.log(person.language)

// console.log(programmer.name)
// console.log(programmer.age)
// console.log(programmer.language)
// person.greet()
// programmer.sayAge()
// programmer.genre()


// Clases avanzadas

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log(`Hola, soy ${this.name}`)
//     }
// }

// const person = new Person("Brais", 37)
// person.greet()

// person.sayAge = function () {
//     console.log(`Tengo ${this.age} años`)
// }
// person.sayAge()

// - Abstracción

// class Animal {
//     constructor(name) {
//         if (new.target === Animal) {
//             throw new Error("No se puede instanciar una clase abstracta")
//         }
//         this.name = name
//     }

//     makeSound() {
//         throw new Error("Este método tiene que ser implementado por la subclase")
//     }
// }

// // Error
// // const animal = new Animal("Mou")
// // console.log(animal)

// // - Polimorfismo

// class Cat extends Animal {

//     makeSound() {
//         console.log("Miau!")
//     }
// }

// class Dog extends Animal {

//     makeSound() {
//         console.log("Guau!")
//     }
// }

// const cat = new Cat("MoureCat")
// console.log(cat)
// cat.makeSound()

// const dog = new Dog("MoureDog")
// console.log(dog)
// dog.makeSound()

// // - Mixins

// const FlyMixin = {
//     fly() {
//         console.log(`${this.name} está volando`)
//     }
// }

// class Bird extends Animal { }

// class Dragon extends Animal { }

// Object.assign(Bird.prototype, FlyMixin)
// Object.assign(Dragon.prototype, FlyMixin)

// const bird = new Bird("MoureBird")

// console.log(bird.name)
// bird.fly()

// const dragon = new Dragon("MoureDragon")

// console.log(dragon.name)
// dragon.fly()

// - Patrón Singleton

// class Session {

//     constructor(name) {
//         if (Session.instance) {
//             return Session.instance
//         }
//         this.name = name
//         Session.instance = this
//     }
// }

// const session1 = new Session('Frank')
// const session2 = new Session()
// console.log(session1.name)
// console.log(session2.name)
// console.log(session1 === session2)

// const session3 = new Session("MoureDev")
// console.log(session3.name)
// console.log(session2 === session3)

// - Symbol

// const ID = Symbol("id")

// class User {
//     constructor(name) {
//         this.name = name
//         this[ID] = Math.random()
//     }

//     getId() {
//         return this[ID]
//     }
// }

// const user = new User("Brais")
// console.log(user.name)
// console.log(user[ID])
// console.log(user.getId())

// - instanceof

// class Car { }

// const car = new Car()

// console.log(car instanceof Car)

// // - create

// const anotherCar = Object.create(Car.prototype)

// console.log(anotherCar instanceof Car)

// - Proxy

// const proxy = {
//     get(target, property) {
//         console.log(`Se accede a la propiedad ${property}`)
//         return target[property]
//     },
//     set(target, property, value) {
//         if (property === "balance" && value < 0) {
//             throw new Error("El saldo no puede ser negativo")
//         }
//         target[property] = value
//     }
// }

// class BankAccount {
//     constructor(balance) {
//         this.balance = balance
//     }
// }

// const account = new Proxy(new BankAccount(100), proxy)
// console.log(account.balance)

// account.balance = 50
// console.log(account.balance)

// Error
// account.balance = -10

// function reverseVowels(str) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
//     let chars = str.split('');
//     let left = 0, right = chars.length - 1;
    
//     while (left < right) {
//         if (!vowels.has(chars[left])) {
//             left++;
//             continue;
//         }
//         if (!vowels.has(chars[right])) {
//             right--;
//             continue;
//         }
        
//         [chars[left], chars[right]] = [chars[right], chars[left]];
//         left++;
//         right--;
//     }
    
//     return chars.join('');
// }

// // Ejemplos de uso
// console.log(reverseVowels("hello")); // "holle"
// console.log(reverseVowels("programación")); // "pregramacinó"


// function getPercentageRounds(percentage) {
//     const totalRounds = 10; // Número total de círculos
//     const filledRounds = Math.round(percentage * totalRounds);
    
//     let result = "";

//     for (let i = 0; i < totalRounds; i++) {
//         if (i < filledRounds) {
//             result += "🔵";
//         } else {
//             result += "⚪";
//         }
//     }

//     return result;
// }

// // Ejemplos de uso:
// console.log(getPercentageRounds(0.1));      
// console.log(getPercentageRounds(0.2));   
// console.log(getPercentageRounds(0.7));   
// console.log(getPercentageRounds(1));      
// const first = (callback) => {
// setTimeout(() => {
//   console.log('Primero')
//   callback()
// }, 1000)
// }

// const second = () => {
// console.log('Segundo')
// }


// function prometeMeAmistad() {
// return new Promise((resolve, reject) => {
//   if (Math.random() < 0.8) {
//     resolve("Soy tu amigo");
//   } else {
//     reject(new Error("No puedo ser tu amigo"));
//   }
// });
// }

// function agregarEmojis(mensaje) {
// return new Promise((resolve) => {
//   resolve(`${mensaje} 😊`);
// });
// }

// prometeMeAmistad()

// .then(respuesta => agregarEmojis(respuesta))
// .then(mensaje => {
//   console.log(mensaje);
//   return Promise.resolve(true);
// })
// .then(ok => console.log("¿Se completó todo correctamente?", ok))
// .catch(error => console.error("Error en alguna de las promesas:", error))
// .finally(() => console.log("Fin de la promesa"));
// let precio = 100

// const calcularImpuesto  =  async (precio)=>{
//   return precio * 0.10
// }

// const calculoFinal = async(precio)=>{
//   const impuesto = await calcularImpuesto(precio)
//   const total = precio + impuesto
//   console.log(`el precio es ${precio} mas el impuesto es ${total}`)
// }

// calculoFinal(precio)

// console.log("Inicio");

// setTimeout(() => {
// console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promesa"));

// const car ={
//     modelo: 'Bmw',
//     color: 'blue',
//     year: 2025,
//     onCar:function (){
//         console.log(`el ${this.modelo} esta encendido`)
//     }
// }

// car.onCar()
// Por favor, rellene los espacios en blanco para mostrar los minutos actuales.

// var date = new Date();
// console.log(date.getMinutes())

// function main() {
//     var increase = 10;
//     var prices = [98.99, 15.2, 20, 1026];

//     //your code goes here
//     let acc = [];
//     for(let i = 0; i < prices.length; i++){
//         acc.push(prices[i] + increase);
//     }
//     console.log(acc);
// }
// main()
// let list = ["x", "y", "z"];
// for (let val of list) {
//     console.log(val);
// }

// let obj = {a: 1, b: 2, c: 3};
// for (let v in obj) {
//     console.log(v);
// }


// let names = ['John', 'Fred', 'Ann'];
// let [Ann, Fred, John] = names;
// console.log(John);

// const obj = {one: 1, two: 2};
// let {one:first, two:second} = obj;
// console.log(one);


