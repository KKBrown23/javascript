// Write a function that takes as argument the name of the user and displays "Hello " + the username
// Write a function that takes as agrument a weight in pound and returns that to kilograms
// Write a function that takes 2 numbers as argument and returns the result of (the product - the sum) of them

// Write a function that takes as argument the name of the user and displays "Hello " + the username
// In - the name of the user
// Cal - add the username to "Hello"
// Out - display (username)Hello in the console

// function helloPlusUsername(username) {
//   return "Hello " + username;
// }

// let greetingKK = helloPlusUsername("KK");
// console.log(greetingKK);

// let userName = prompt("Enter your name");
// let greetingUser = helloPlusUsername(userName);
// console.log(greetingUser);

// Write a function that takes as agrument a weight in pound and returns that to kilograms
// In - users weight in pounds
// Cal - convert it from pounds to kilograms
// Out - return the weight in kilograms

// function convertingFromLBToKG(userweightlb) {
//   return userweightlb * 0.45;
// }

// let result = convertingFromLBToKG(50);
// console.log(result + "kg");

// let userweightlb;
// userweightlb = +prompt("Please enter your weight in pounds(lb)");
// let result2 = convertingFromLBToKG(userweightlb);
// console.log(result2 + "kg");

// Write a function that takes 2 numbers as argument and returns the result of (the product - the sum) of them
// In - take two numbers from the user as an arguement
// Cal - calculate the product and the sum, then calculate the product - the sum
// Out - return the result of the equation

// function subtractSumFromProduct(number1, number2) {
//   let sum;
//   sum = number1 + number2;

//   let product;
//   product = number1 * number2;

//   let difference;
//   difference = product - sum;
//   return difference;
// }

// let result = subtractSumFromProduct(5, 6);
// console.log(result);
// let usernumber1;
// usernumber1 = +prompt("Please enter a number");

// let usernumber2;
// usernumber2 = +prompt("Please enter a number");
// let result1 = subtractSumFromProduct(usernumber1, usernumber2);
// console.log(result1);

//Write a function that will return true if the number is positive and false otherwise
// In - taking a number as an arguement
// Cal - check if the number is positive or negative
// Out - if it is positive return true else return false

function isPostive(number1) {
  if (number1 > 0) {
    return true;
  } else {
    return false;
  }
}

let result;
result = isPostive(-1);
console.log(result);

let userNumber;
userNumber = +prompt("Please enter a number");

let result2;
result2 = isPostive(userNumber);
console.log(result2);
