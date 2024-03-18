//write a function that takes an array as argument
// and returns the sum of aall the postive numbers
// In - take an array of numbers as an argument
// Cal - read all the numbers
//       create a sum variable for all the positive numbers
//       for each number
//       check if it is above zero
//       if yes, add to the positive numbers variable
//       in the variable
//       add all the numbers together
// Out - return the sum variable

// function checkIfPositive(numberArray) {
//   let positivesum = 0;
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number > 0) {
//       positivesum += number;
//     }
//   }
//   return positivesum;
// }

// let numberArray = [16, -5, 2, -4, 7];
// let result;
// result = checkIfPositive(numberArray);
// console.log(result);

//Write a function that takes an array and finds the max number
// In - take a number array as an argument
// Cal - declare a max variable and set equal to the first element
//       read the array
//       for each number
//       check if it's above the max varaible
//          if it is make max = the number
// Out - return max

// function findMaxNumber(numberArray) {
//   let maxNumber = numberArray[0];
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// }

// let numberArray = [6, 2, 7, 9, 3];
// let result;
// result = findMaxNumber(numberArray);
// console.log(result);

//Write a function that takes an array and
//turn a new array with all the negative numbers
// In - take an array of numbers as an argument
// Cal - create a new array
//       read the 1st array
//       for each number
//       check if it is a negative number
//       if yes, add it to the new array using .push
// Out - return the negative array

// function getNegativeNumbers(numberArray) {
//   let negativeArray = [];
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number < 0) {
//       negativeArray.push(number);
//     }
//   }
//   return negativeArray;
// }

// let numberArray = [-1, -5, 4, 7, -6];
// let result;
// result = getNegativeNumbers(numberArray);
// console.log(result);

// write a function that gets and array and reverses it
// In - an array of numbers as argument
// Cal - declare a new array
//       read the array backwards
//       for each number
//       add to the new array
// Out - return the new array

// function reversingAnArray(numberArray) {
//   let reverseArray = [];
//   let index = numberArray.length - 1;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index -= 1;
//     reverseArray.push(number);
//   }
//   return reverseArray;
// }

// let numberArray = [6, 4, 2, 9, 5];
// let result;
// result = reversingAnArray(numberArray);
// console.log("Old: ");
// console.log(numberArray);
// console.log("New: ");
// console.log(result);
