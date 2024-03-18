//Write a program that takes 1 number from the user and  prints as many even numbers as the number inputed
// ex: n1: 10 out: 2,4,6,8,10,12,14,16,18,20

//in    take 1 number from user
//cal   reps:   the number of user(10)
//          startingPoint:  0
//          endingpoint:    usernumber(10)
//          step:           +1
//out   decalre a variable evenNumber outside the loop and started at 2
//      print it inside the loop
//      change it inside the loop by +2

// let usernumber;
// usernumber = +prompt("Please enter a random number");

// let evenNumber = 2;
// for (let counter = 0; counter < usernumber; counter += 1) {
//   console.log(evenNumber);
//   evenNumber += 2;
// }

//Write a program that takes 1 number from the user and  prints as many 100 numbers as the number inputed
// ex: n1: 5 out: 100, 200, 300, 400, 500

//in    take 1 number from user
//cal   reps: usernumber
//          startingPoint:  0
//          endingpoint:    usernumber(5)
//          step:           +1
//out     declare a variable inside the loop and start at 100
//        print it inside the loop
//        change by 100

// let userNUmber;
// userNUmber = +prompt("Please enter a number of your choice");

// let hundredNUMber = 100;
// for (let counter = 0; counter < userNUmber; counter += 1) {
//   console.log(hundredNUMber);
//   hundredNUMber += 100;
// }
// let randomNumber = Math.random() * 100;
// randomNumber = Math.floor(randomNumber);
// console.log(randomNumber);

//write a program that generates 10 random numbers and prints them out
// In - None.
// Cal - Generate 10 random numbers using the Math.random command.
// Out - the 10 generated numbers.

// let tennumbers = Math.random() * 10;
// tennumbers = Math.floor(tennumbers);
// console.log(tennumbers);

// Write a program that takes a number from the user then generates the random number from 0 to 10.
// Then it checks if the usernumber is the same as the random number.
// If its the same its prints "You won" else "You lost"

// In - Takes a number from the user
// Cal - Generate a Random number from 0 - 10
// check if the user number is the same.
// Out - If the generated number is the same as the user number then Print "You won" and vice versa you print "You lost"

// let randomNumber = Math.random() * 10;
// randomNumber = Math.floor(randomNumber);

// let usernumber;
// usernumber = +prompt("Please enter a random number");

// if (usernumber == randomNumber) {
//  console.log("You won!");
// } else {
//  console.log("You lost!");
// }

//1.  Write a program that will display the following 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 using a loop

// In - Nothing.
// Cal -  Reps: 10
//          starting point: 0
//          ending point: 10
//          step: +1
// Out - Numbers from 5 - 50
// let number = 5;
// for (let counter = 0; counter < 10; counter += 1) {
//   console.log(number);
//   number += 5;
// }

// Write a program that displays 100, 90, 80, 70, 60 using a loop#
// In - Nothing.
// Cal - Reps: 5
//       starting point: 0
//       ending point: 5
//       step: +1
// Out - use the strategy for loops that change:
//       starting point: 100
//       cheange: -10

// let number = 100;
// for (let counter = 0; counter < 5; counter += 1) {
//   console.log(number);
//   number -= 10;
// }

// Write a program that will get the age of the user and say "Hello" as many times as the age of the user
// In - Age of the user.
// Cal - Reps: (userage)
//       starting point: 0
//       ending point: (userage)
//       step: +1
// Out - Print "Hello"

// let userage;
// userage = +prompt("Please enter your age");

// for (let counter = 0; counter < userage; counter += 1) {
//   console.log("Hello");
// }
