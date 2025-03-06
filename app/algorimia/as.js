// // Type your code below

// let a = 9
// let b = 2.9
// let c = 11
// let d = a % 2
// let e = a % 3
// let f = c % 10
// // Don't change the line below
// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)
// console.log(`d = ${d}`)
// console.log(`e = ${e}`)
// console.log(`f = ${f}`)


// Type your code below
// let count = 0
// count = 4
// count *= 2
// count -= 1

// // Don't change the line below
// console.log(`count = ${count}`)

// Type your code below
// let balance = 0
// balance = 100
// balance *= 1.1
// balance -= 50
// Don't change the line below
// console.log(`balance = ${balance}`)
// Type your code below
// let n1 = 8
// let n2 = 9
// let n3 = n1 > n2

// // Don't change the line below
// console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)



// // Type your code below
// let age = 18
// let canVote = age >= 18

// // Don't change the line below
// console.log(`age = ${age}, canVote = ${canVote}`)


// // Type your code below
// let a = 6
// let b = 4
// // Don't change the line below
// let c = b * a
// console.log(`c = ${c}`)

// Type your code below
// let b1 = false
// let b2 = true
// let b3 = b1 || b2

// // Don't change the line below
// console.log(`b3 = ${b3}`)

// Type your code below
// let b1 = true
// let b2 = true
// let b3 = true

// // Don't change below
// let b4 = b1 && b2 && b3
// console.log(`b4 = ${b4}`)

// Type your code below
// let b1 = 3
// let b2 = 3
// let b3 = !((b1 + b2) > (b1 * b2))

// // Don't change the line below
// console.log(`b3 = ${b3}`)

// let b1 = true
// let b2 = true
// let b3 = false

// // Don't change the line below
// let b4 = b1 && b2 && (!b3)
// console.log(`b4 = ${b4}`)

// Type your code below
// let x = 5
// let y = -1
// let z = ((x * y) < (x + y) < (x - y))

// // Don't change the line below
// console.log(`z = ${z}`)


// // Initialize variables
// let has_license = true
// let has_space = false
// let has_experience = true
// // Calculate conditions
// let can_sell_regular_pet = (has_license || has_experience) && has_space
// let can_sell_exotic_pet = (has_license && has_experience) && has_space
// let cannot_sell_any_pet = (!has_license && !has_experience) || !has_space

// // Don't delete the lines below
// console.log("Can sell regular pet:", can_sell_regular_pet)
// console.log("Can sell exotic pet:", can_sell_exotic_pet)
// console.log("Cannot sell any pet:", cannot_sell_any_pet)

// Given variables
// let num = 42
// let bool = false
// let str = "7"

// // Type your code below
// let a = String(num)
// let b =Number(bool)
// let c = Number(str)
// let d = a + c

// // Don't change the line below
// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`c = ${c}`)
// console.log(`d = ${d}`)


// // Initialize variables
// let has_license = true
// let has_insurance = false
// let has_experience = true
// // Calculate conditions
// let can_drive_car = (has_license && has_insurance) || ( has_license && has_experience)
// let can_drive_motorcycle = has_license && has_insurance && has_experience
// let cannot_drive_any = !has_license || (!has_insurance && !has_experience)

// // Don't delete the lines below
// console.log("Can drive car:", can_drive_car)
// console.log("Can drive motorcycle:", can_drive_motorcycle)
// console.log("Cannot drive any:", cannot_drive_any)

// let a = 11
// let b = 10

// // Don't change below this line
// let c = 0;
// if (a >= b && !(b < 10)) {
//     c = 2;
// }

// c += 1;
// console.log(`c = ${c}`);
// let inp = "7"
// let wind = parseInt(inp); // Don't change this line
// let condition = "unset";
// // Type your code below
// if(wind < 8){
//   condition = "Calm";
// }else if(wind >= 8 && wind <= 31){
//   condition = "Breeze";
// }else if(wind >= 32 && wind <=63){
//   condition = "Gale";
// }else{
//   condition = "Storm";
// }


// // Don't change the line below
// console.log(`condition = ${condition}`);


// const inp =[3, 4, "+"] // Don't change this line
// let n1 = parseInt(inp[0]) // Don't change this line
// let n2 = parseInt(inp[1]) // Don't change this line
// let op = inp[2] // Don't change this line
// let result = 0
// if(op === "+"){
//   result = n1 + n2
// }else if(op === "-"){
//   result = n1 -n2
// }else if(op === "/"){
//   result = n1 / n2
// }else if(op === "*"){
//   result = n1 * n2
// }


// // Don't change the line below
// console.log(`result = ${result}`)


// const inp =[18, 160, false] // Don't change this line
// let age = parseInt(inp[0]); // Don't change this line
// let height = parseInt(inp[1]); // Don't change this line
// let has_adult = inp[2] === "true"; // Don't change this line

// // Write your code below
// if(age < 12){
//   console.log("Sorry, you're too young")
// }else if(height < 150){
//   console.log("Sorry, you're not tall enough")
// }else if(age < 15 && !has_adult){
//   console.log("Sorry, you need an adult with you")
// }else if(age < 15 && has_adult){
//   console.log("You can ride with adult supervision!")
// }else if(age >= 15 && height >= 150){
//   console.log("You can ride by yourself!")
// }

// let r = 10 + '10' - 10
// console.log(r)

// let b = Boolean('false')
// console.log(b)

// let temperature = 25;
// let message = ""; // Set the message based on temperature

// // Add your if statements below
// if (temperature > 30){
//   message = "Too hot!"
// }else if(temperature < 10){
//   message = "Too cold!"
// }else if(temperature >= 10 && temperature <= 30){
//   message = "Just right!"
// }

// console.log(message); // This will show the result
// let inp = '5'
// let rainfall = parseInt(inp); // Don't change this line
// let rainCondition = "unset";
// // Type your code below
// if(rainfall < 1){
//   rainCondition = "Dry"
// }else if(rainfall >= 1 && rainfall <= 10){
//   rainCondition = "Light rain"
// }else if(rainfall >= 11 && rainfall <= 50){
//   rainCondition = "Moderate Rain"
// }else if(rainfall > 50){
//   rainCondition = "Heavy Rain"
// }

// // Don't change the line below
// console.log(rainCondition);


// let inp = 95
// // Get the number grade from the user
// let numGrade = inp;

// // Convert input to a number
// numGrade = parseInt(numGrade);

// // Determine the letter grade using a switch statement
// let letterGrade;

// switch (true) {
//   // Write your code here
//   case numGrade >= 90 && numGrade <= 100:
//     letterGrade = "A";
//     break;
//   case numGrade >= 80 && numGrade <= 89 :
//     letterGrade = "B";
//     break;
//   case numGrade >= 70 && numGrade <= 79:
//     letterGrade = "C";
//     break;
//   case numGrade >= 60 && numGrade <= 69:
//     letterGrade = "D";
//     break;
//   case numGrade <= 59:
//     letterGrade = "F";
//     break;
//   default:
//     letterGrade = "Invalid grade";
//     break;
// }

// // Print the letter grade
// console.log(`Letter grade: ${letterGrade}`);


// console.log(2 + 2, '4')

// console.log('Welcome to Coddy!')
// console.log('JavaScript is fun.')


// inp = 5
// let rnd = inp; // Don't change this line

// console.log("The input is: " + rnd)


// let name = "Alice"
// let age = 30
// console.log(name)
// console.log(age)
// console.log(10,20)

// inp = 5
// let rnd = inp; // Don't change this line
// console.log("The input is: " + rnd)
// if(rnd % 2 === 0){
//   console.log("The number is even.")
// }else{
//   console.log("The number is odd.")
// }

// "10" + 5
// console.log("10" + 5) // "105"
// let inp = ['5' , '3.2']
// let length = inp[0] // Don't change this line
// let width = inp[1] // Don't change this line

// // Write code below
// // console.log(var1 * var2)

// length = parseFloat(length)
// width = parseFloat(width)

// let area = length * width
// let perimeter = 2 * (length + width)
// console.log(`The area is: ${area} and the perimeter is: ${perimeter}`)

// let inp = 25
// let age = parseInt(inp); // Don't change this line
// // Type your code below
// let faltantes = 120 - age
// console.log(`${faltantes} years till 120`)


// inp = 1
// let num = parseInt(inp); // Don't change this line
// // Type your code below
// if (num > 0) {
//   console.log("T")
// } else {
//   console.log("F")
// }


// let inp =[64.3, 9.0, 2]
// let billAmount = parseFloat(inp[0]); // Don't change this line
// let tipPercentage = parseFloat(inp[1]); // Don't change this line
// let numPeople = parseInt(inp[2]); // Don't change this line

// // Type your code below
// console.log('Bill Split Calculator')
// let total= billAmount + (billAmount / 100 * tipPercentage)
// // console.log(total)
// console.log(`Total (including tip): ${total}`)
// let split = total / numPeople
// // console.log(split)
// console.log( `Each person pays: ${split}`)

// for(let i = 3; i <= 27; i++){
//   console.log(`Hello Coddy: ${i}`)
// }

// let result = 1;
// for (let i = 1; i < 5; i++) {
//     result *= i;
//     console.log(result);
// }
// console.log(result);

// for(let i = 1; i <= 10; i++){
//   console.log(`7 x ${i} = ${7 * i}`)
// }

// let inp = 12
// let number = parseFloat(inp); // Don't change this line
// while (number >= 3.5) {
//   number /= 2
// }

// console.log(number)

// let inp = 5
// let number = parseFloat(inp); // Don't change this line
// while (number <= 100) {
//   number *= 2
// }
// console.log(number)

// for (let i = 1; i <= 20; i++) {
//   if(i === 9){
//     break
//   }
//   console.log(i);
// }

// for (let i = 1; i < 20; i++) {
//   console.log(i);
//   if(i % 3 === 0 && i % 5 === 0){
//     break
//   }
// }

// for (let i = 1; i <= 20; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 4 === 0 ) {
//     continue;
//   }
//   console.log(i);
// }

// let inp = 8
// let n = parseInt(inp); // Don't change this line
// let res = 1

// for (let i = 1; i <= n; i++) {
//   res *= i
// }

// console.log(res)


// let count = 5
// do {
//   console.log(count)
//   count-= 1
// } while (count > 0);


// let count = 10;

// do {
//   console.log(`Counting down:  ${count}`)
//   count-= 2
// } while (count >= 0);


// do {
//     console.log("Counting down:", count);
//     count -= 2;
// } while (count >= 0);
// let inp = 12
// let n = parseInt(inp); // Don't change this line

// Write your code below
// for (let x = 1; x < n; x++) {
//   for (let y = 1; y < n; y++) {
//     if (x + y === n) {
//       console.log(`${x} ${y}`);
//     }
//   }
// }
// Escribe un programa que encuentre todos los pares de factores del uso de números desde hasta .n1n

// Por ejemplo, si , la salida debe ser:n = 12
// for (let x = 1; x <= n; x++) {
//   for (let y = 1; y <= n; y++) {
//     if (x * y === n) {
//       console.log(`${x} ${y}`);
//     }
//   }
// }

// Write the function below

// let inp = 5
// let n = parseInt(inp); // Don't change this line

// // // Execute your function n times with a loop
// function suma() {
//   const num = 10000;
//   const resultado = (num * (num + 1)) / 2;

//   for (let i = 0; i < n; i++) {
//     console.log(resultado);
//   }
// }

// suma()

// function printMessage(){
//   console.log("This is a reusable function!")
// }

// printMessage()
// printMessage()
// printMessage()
// let inp = [3,5]
// let a = parseInt(inp[0]); // Don't change this line
// let b = parseInt(inp[1]); // Don't change this line
// // Type your code below

// function producto(a,b){
//   return a * b
// }

// console.log(producto(a, b))
// let inp = [3,5]
// let num1 = parseInt(inp[0]); // Don't change this line
// let num2 = parseInt(inp[1]); // Don't change this line
// // Type your code below

// function sumRange(start,end){
//   let sum = 0
//   for(let i = start; i <= end; i++){
//     sum += i
//   }
//   return (`The sum of numbers from ${start} to ${end} is ${sum}.`)
// }

// console.log(sumRange(num1, num2))


// let inp = 33
// let num = parseInt(inp); // Don't change this line
// // Type your code below
// function square(p) {
//   return p * p
// }
// console.log(square(num))

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


// function sigma(n) {
//   // Write code here
//   let sum = 0
//   for(let i = 1; i<= n; i++){
//     sum += i
//   }
//   return sum
// }

// console.log(sigma(9))


// Type your code below
// function calculateArea(length, width) {
//   return length * width
// }

// // Don't change the lines below
// console.log(calculateArea(5, 10));
// console.log(calculateArea(3, 7));

// function calculatePrice(price, tax = price * 0.1) {
//   return price + tax;
// }

// console.log(calculatePrice(100));
// console.log(calculatePrice(100, 20));
// console.log(calculatePrice(100, 0));

// let square = (x) => x * x
// console.log(square(5))

// Type your code below
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
// let wordword= word += word[0];
// console.log(wordword)


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