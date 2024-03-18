//Write a progeam that will take as input 5 scores 0-100
// and save them into an array
// Then it will delete all the scores under 60

// In - take 5 scores from 0-100
//          using an array or a loop
// Cal -  deleting all the scores under 60
//              reading all the score
//              for each score
//                  check if its under 60,
//                      delete it by using .splice(index,1)

// Out - print the score array

// let studensScores = [];
// for (let counter = 0; counter < 5; counter += 1) {
//   let userScores = +prompt("Please enter a number");
//   studensScores.push(userScores);
// }

// let index = 0;
// for (let counter = 0; counter < 5; counter += 1) {
//   let score = studensScores[index];
//   if (score < 60) {
//     studensScores.splice(index, 1);
//     continue; //skip everything under here and go back to the head of the loop
//   }
//   index += 1;
// }
// console.log(studensScores);
