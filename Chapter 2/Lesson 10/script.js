// Generate a random word
// In - an array of 20 words
// Cal - generate a random number from 0 - 20.
//               use the random number as index
//               select the random word using the index
// Out - return the random word

function generateWord(array) {
  let randomNumber = Math.random() * 20;
  randomNumber = Math.floor(randomNumber);
  console.log(randomNumber);
  let randomWord = array[randomNumber];
  return randomWord;
}
let array = [
  "ham",
  "bag",
  "ball",
  "interesting",
  "food",
  "goal",
  "spectacular",
  "quite",
  "ultimate",
  "abuse",
  "country",
  "culture",
  "car",
  "date",
  "amazing",
  "perseverance",
  "mathematics",
  "biology",
  "bottle",
  "formula",
];

let points = 0;
let gameTime = 10;
let highScore = 0;

let randomWord;
randomWord = generateWord(array);
displayRandomWord(randomWord);

// Display the randomWord variable on the h1
// In - the randomWord variable
// Cal - select the h1
// Out - change the innerText

function displayRandomWord(randomWord) {
  let pElement = document.querySelector(".word");
  pElement.innerText = randomWord;
}

//Check users word
// In - get the user word
//       Target: input element
//              Type: keyUp
//              Event Handler: checkWord
// Cal - select the input element
//       get the userword from input element
//       using if statements, check if userword is = to random word
// Out - add to the score and generate a new word

let inputElement = document.querySelector("input");
inputElement.addEventListener("keyup", checkWord);

function checkWord(event) {
  let userWord;
  userWord = inputElement.value;
  if (randomWord == userWord) {
    points += 1;
    gameTime += 2;
    displayTime(gameTime);
    displayPoints(points);
    inputElement.value = "";
    randomWord = generateWord(array);
    displayRandomWord(randomWord);
  }
}

//HW: Define the function display points:
// 1. write the algorithm 2. write the function
// 3. call the function at line 72
// In - the points variable
// Cal - select the points element
// Out - display the fucntion at line 72

function displayPoints(points) {
  let pElement = document.querySelector(".score");
  pElement.innerText = "Score: " + points;
}
function displayTime(gameTime) {
  let pElement = document.querySelector(".timer");
  pElement.innerText = "Time Left: " + gameTime;
}

// Add a timer that runs backwards
// In -  declare a variable for gameTime and start at 10 seconds
// Cal - reduce it by 1 every 1 second
//       add one second to the timer when the word is correct
// Out - display the time every 1 second

function decreaseTime() {
  gameTime -= 1;
  if (gameTime == 0) {
    restartGame();
  }
  displayTime(gameTime);
}
setInterval(decreaseTime, 1000);
function restartGame() {
  alert("Game Over");
  checkHighScore(points);
  points = 0;
  displayPoints(points);
  gameTime = 10;
  displayTime(gameTime);
}

// HW: Add a highscore feature
// Hints: 1. Declare a pElement for high score, beside the score element.
// 2. Keep a highscore variable which starts at 0
// 3. If the game is over, compare the user points with the high score
// if the the user points are great set the high score to user points
// 4. Display the high score before restarting the game

let pElement = document.querySelector(".hs");

function checkHighScore(points) {
  if (points > highScore) {
    highScore = points;
  }
  let pElement = document.querySelector(".hs");
  pElement.innerText = "High Score:" + points;
}
