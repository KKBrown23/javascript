//   1. Create a function that calculates and returns a person's Body Mass Index (BMI).
// Use if statements to categorize the BMI as underweight, normal weight, overweight, or obese.
// In - The persons weight
// Cal - calculate whether the person is underweight, normal weight, overweight or obese.
// Out - return the reuslt

// function checkBMI(userweight, userheight) {
//   let BMI;
//   BMI = userweight / (userheight * userheight);
//   if (BMI <= 18) {
//     return "Underweight";
//   }
//   if (BMI >= 24) {
//     return "healthy";
//   }
//   if (BMI >= 29) {
//     return "overweight";
//   }
//   if (BMI >= 39) {
//     return "obese";
//   }
// }

// let userheight = +prompt("Please enter your height");
// let userweight =
//  +prompt("Please enter your weight");

// let result;
// result = checkBMI(userweight, userheight);
// console.log(result);

//  2. Create a function that plays a number guessing game. The function generates a random number,
// and the player has to guess it. Then it return win or if the guess is too high or too low.
// In - a number for the user
// Cal - generate a random number and compare it to the usernumber
// Out - return win if both numbers are the same else tell the user if the guess is high or low.

// function numberGame(usernumber, generatednumber) {
//   if (usernumber == generatednumber) {
//     return "win";
//   } else if (usernumber > generatednumber) {
//     return "too high";
//   } else if (usernumber < generatednumber) {
//     return "too low";
//   }
// }

// let usernumber = +prompt("Please enter a number");
// let generatednumber = Math.random() * 10;
// generatednumber = Math.floor(generatednumber);

// let result = numberGame(usernumber, generatednumber);
// console.log(result);

//   3. Create a function that takes a number (1-7) and returns the corresponding day of the week.
// In - A number from 1-7
// Cal - use if statements to match the numbers to the day
// Out - return the day

function getDay(userday) {
  if (userday == 1) {
    return "Monday";
  }
  if (userday == 2) {
    return "Tuesday";
  }
  if (userday == 3) {
    return "Wednesday";
  }
  if (userday == 4) {
    return "Thursday";
  }
  if (userday == 5) {
    return "Friday";
  }
  if (userday == 6) {
    return "Saturday";
  }
  if (userday == 7) {
    return "Sunday";
  }
}

let userday = +prompt("Please enter a number from 1-7");
let result = getDay(userday);
console.log(result);
