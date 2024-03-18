//write a program that will read 5 scores and save them into an array
//then it will read all the scores and find the avg of the class
// In - 5 scores and save them in an array u5sing:
//              declare an array
//              a loop that repeats 5 times
//              .push()
// Cal -
//       then find the average of the class by adding them all together using
//       by declaring a variable sum and starting it at 0
//          Read all the score using an index and a loop
//              for each score
//              selecte the score
//              add it to the sum
//       avg = sum / amount (amount is scoresList.length)
// Out - display the avg

// let scoresList = [];
// for (let counter = 0; counter < 5; counter += 1) {
//   let userscores = +prompt("Please enter your scores");
//   scoresList.push(userscores);
// }

// let scoresSum;
// scoresSum = 0;

// let index = 0;
// for (let counter = 0; counter < scoresList.length; counter += 1) {
//   let score = scoresList[index];
//   scoresSum += score;
//   index += 1;
// }

// let avg;
// avg = scoresSum / scoresList.length;
// console.log("The average is: " + avg);

//Write a program that will take 5 numbers as input and save them into an array
//Read all the numbers and print only the ones above 60
// In - take in 5 numbers and save them into an array
//                declare an array
//                save 5 numbers in the array
// Cal - Read all the numbers and check if they are above 60
//                Read all the numbers using an index and a loop
//                use if statements to check if its above 60
// Out - print out the ones above 60

// let numbersList = [];
// for (let counter = 0; counter < 5; counter += 1) {
//   let usernumbers = +prompt("Please enter a number");
//   numbersList.push(usernumbers);
// }

// let index = 0;
// for (let counter = 0; counter < 5; counter += 1) {
//   let number = numbersList[index];
//   index += 1;

//   if (number > 60) {
//     console.log(number);
//   }
// }

//Write a program that will read the salary of 5 emploies  and save them into an array
//Then declare another empty array
// read all the salaries and decrease each salary by 20% tax
// then save this salary after taxing into the new array
// In - taking 5 employees salaries and saving them in an array
//             taking 5 employees salaries using a loop
//             saving it in an array
// Cal - declaring a new array
//       read all the salaries
//       for each salary
//          select the salary using index
//          cal the tax = salary * (20/100)
//          cal salary after tax = salary - tax
//          save salary after tax to the new array using .push()
// Out - display the new array

// let userSalariesList = [];
// for (let counter = 0; counter < 5; counter += 1) {
//   let userSalaries = +prompt("Please enter your salary");
//   userSalariesList.push(userSalaries);
// }

// let salariesCal = [];

// let index = 0;
// for (let counter = 0; counter < 5; counter += 1) {
//   let salary = userSalariesList[index];
//   let taxCal;
//   taxCal = salary * (20 / 100);
//   let salAfterTax;
//   salAfterTax = salary - taxCal;
//   salariesCal.push(salAfterTax);
//   index += 1;
// }

// console.log(salariesCal);
