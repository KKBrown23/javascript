// Write a function that takes two numbers as argument and returns the greatest of them
// In - two numbers as argument
// Cal - check if the number1 is greater than number 2
// Out - return the result

// function getGreater(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }

// let result;
// result = getGreater(44, 95);
// console.log(result);

// Write a function that takes two strings as argument and returns the longest of them
// In - take two string as argument
// Cal - using if statements
//       check if string1 is longer than string2 using using ".length"
// Out - return the longest of the two

// function getLongest(string1, string2) {
//   let length1 = string1.length;
//   let length2 = string2.length;
//   if (length1 > length2) {
//     return string1;
//   } else {
//     return string2;
//   }
// }

// let result;
// result = getLongest("Victoria", "Ferran");
// console.log(result);

// Write a function that takes an array as argument and prints only the positive numbers of the array
// In - a number array as arguement
// Cal - read the array
//       for each element
//       check if positive
// Out - print out the positive numbers

// function getPositive(numberArray) {
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number > 0) {
//       console.log(number);
//     }
//   }
// }
// let numberArray = [-6, 66, 11, 95, -10];
// getPositive(numberArray);

// Write a function that takes an array as an argument and returns the amount of the negative elements.
// In - take an array of numbers as an argument
// Cal - create a negative number counter
//       read the array
//       for each number
//       check if it is below 0. If yes then add to the negative counter.
// Out - return the negative counter

// function getNegative(numberArray) {
//   let negativeCounter = 0;
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number < 0) {
//       negativeCounter += 1;
//     }
//   }
//   return negativeCounter;
// }

// let numberArray = [-10, -6, -11, 55, 46];
// let result;
// result = getNegative(numberArray);
// console.log(result);

// Write a function that takes an array as an argument and returns the sum of all the positive numbers
// In - a number array as an argument
// Cal - read the array
//       for each number
//       check if it is over 0
//       if yes, add the number to a sum variable
//       add all the numbers in the variable
// Out - return the sum variable

// function findFunction(numberArray) {
//   let sum = 0;
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number > 0) {
//       sum += number;
//     }
//   }
//   return sum;
// }

// let numberArray = [66, 1, -10, -8, 50];
// let result;
// result = findFunction(numberArray);
// console.log(result);

// Write a function that takes an array of numbers and returns the minimum of all
// In - take an array of numbers as argument
// Cal - delcare a variable and make it equal to the first element
//       read the array
//       for each element
//       check if it is lower than the variable declared at point a
//       if it is lower make the variable equal to this number
// Out - return the variable

// function getMinimum(numberArray) {
//   let min = numberArray[0];
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }
// numberArray = [3, 9, 90, 2, 54];
// let result;
// result = getMinimum(numberArray);
// console.log(result);
