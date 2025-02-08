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