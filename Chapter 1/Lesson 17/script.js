//write a function that takes 2 numbers as argument
// and return the product of them
// In - taking two numbers as an argument
// Cal - finding the product of them
// Out - returning the product answer

// function findProduct(number1, number2) {
//   let product;
//   product = number1 * number2;
//   return product;
// }

// let result;
// result = findProduct(2, 4);
// console.log(result);

//write a function that will take as argument an array and a number
//the function returns true if the number is found,
//otherwise it returns false
// In - take an array and a number as arguements
// Cal - read all the elements of the array
//       for each element you check if it's  the number you are searching for
// Out - If it is a number, return true otherwise return false

// function findNumber(numberArray, number) {
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let numberFromArray = numberArray[index];
//     index += 1;
//     if (numberFromArray == number) {
//       return true;
//     }
//   }
//   return false;
// }

// let array = [1, 55, 44, 63, 72];
// let result;
// result = findNumber(array, 16);
// console.log(result);

//write a function that takes an array of numbers
// and returns the amount of negative numbers in the array
// In - take an array of numbers
// Cal -     declare a negative counter
//           read the array
//         for each element
//          check if it's a negative number
//          if it is then add to the negative counter
// Out - return the amount of negative numbers in the array

// function checkNegativeNumbers(numberarray) {
//   let negativeCounter = 0;
//   let index = 0;
//   for (let counter = 0; counter < 5; counter += 1) {
//     let number = numberarray[index];
//     index += 1;
//     if (number < 0) {
//       negativeCounter += 1;
//     }
//   }
//   return negativeCounter;
// }

// let array = [-1, 77, -9, -10, -6];
// checkNegativeNumbers(array);
// let result;
// result = checkNegativeNumbers(array);
// console.log(result);

//write a function that takes an array of names and counts all the names starting with the letter 'k'
// In - an array of names
// Cal - declare a name counter
//       read the array
//       for each name
//       check if it starts with the letter 'k'
//       if it does then add to the name counter
// Out - print the name counter

// function checkNames(namearray) {
//   let namecounter = 0;
//   let index = 0;
//   for (let counter = 0; counter < namearray.length; counter += 1) {
//     let name = namearray[index];
//     index += 1;
//     let firstLetter = name[0];

//     if (firstLetter == "k" || firstLetter == "K") {
//       namecounter += 1;
//     }
//   }
//   return namecounter;
// }

// let nameList = ["KK", "Harry", "Bane", " Jack", "Karl"];
// let result = checkNames(nameList);
// console.log('The amount of names starting with the letter "k" is: ' + result);

//HW:
//1. Write a function that takes as argument an array of numbers and return the
//amount of the numbers above 50
// In - an array of numbers as an argument
// Cal - declare a variable for counting the amount of the numbers above 50
//      read all the array
//       for each element
//       check if it above 50, if yes add to the counter
// Out - the amount of numbers above 50

// function countNumbersAboveFifty(numberArray) {
//   let numbersCounter = 0;
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     if (number > 50) {
//       numbersCounter += 1;
//     }
//   }
//   return numbersCounter;
// }
// numberArray = [66, 88, 23, 90, 10];

// let result;
// result = countNumbersAboveFifty(numberArray);
// console.log(result);

//2. Write a function   that numbers takes as argument an array
//  and finds the sum of all the numbers of the array
// In - take numbers as an argument and save them in an array
// Cal - declare a sum variable
//      read the array
//      for each number
//      add it to the sum variable
// Out - return the sum

// function findSumOfArray(numberArray) {
//   let sum;
//   sum = 0;
//   let index = 0;
//   for (let counter = 0; counter < ; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     sum += number;
//   }
//   return sum;
// }
// let numberArray = [5, 3, 7, 9, 1];
// let result;
// result = findSumOfArray(numberArray);
// console.log(result); I

//3. write a function that takes as argument an array
// of numbers and return the average
// In - take an array of numbers as an argument
// Cal - find the sum of all the numbers in the array
//           declare a sum that starts at 0
//           read all the numbers
//           for each number
//           add to the sum
//        calculate the average by dividing the sum by the amount of numbers
// Out - return the average

// function findTheAvg(numberArray) {
//   let sum;
//   sum = 0;
//   let index = 0;
//   for (let counter = 0; counter < numberArray.length; counter += 1) {
//     let number = numberArray[index];
//     index += 1;
//     sum += number;
//   }
//   let numberavg;
//   numberavg = sum / numberArray.length;
//   return numberavg;
// }

// let numberArray = [6, 9, 4, 3, 5];
// let result;
// result = findTheAvg(numberArray);
// console.log(result);
