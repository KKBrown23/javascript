//save the questions and their answers into an array of objects
// every question is an object
//function-> display question
//      in- question object
//      cal- select the html elements(question+4answers)
//      out- change innerText

// Homework: declare an array of questions, with question objects inside
//           build the functions: displayQuestion and checkAnswer
let points = 0;
let currentQuestionIndex = 0;
let questionsList = [
  {
    title: "Which is the biggest country in the world?",
    answers: ["Canada", "USA", "Russia", "China"],
    correctAnswer: "Russia",
  },
  {
    title: "Which is the most famous sport in the world?",
    answers: ["Athletics", "Basketball", "Football", "Tennis"],
    correctAnswer: "Football",
  },
  {
    title: "In which american state is Slicon Valley located?",
    answers: ["Alabama", "San Fransisco", "Texas", "North Carolina"],
    correctAnswer: "San Fransisco",
  },
];
let currentQuestion = questionsList[currentQuestionIndex];

//function-> display question
//      in- question object
//      cal- select the html elements(question+4answers)
//      out- change innerText

function displayQuestion(question) {
  let questionElement = document.querySelector(".question");
  let answersElementsList = document.querySelectorAll(".answer");
  questionElement.innerText = question.title;
  for (let index = 0; index < answersElementsList.length; index++) {
    answersElementsList[index].innerText = question.answers[index];
  }
}

displayQuestion(currentQuestion);

//check answer
//in      user clicks one if the answers
//             Target:          answers container
//             Event Type:      click
//             Event Handler:   checkAnswer

//cal          get the answer button that was clicked from the event object
//              get the answer text from the btn in innerText
//              compare answer to the correct answer
//                  If correct, we add 1 to the points
//              check if there is any question left
//output        display next question

//function-> check answer
//      in- questionobject, answer
//      cal- compare the answer to question.correctAnswer
//      out- return 1 if correct, 0 otherwise

let answersContainer = document.querySelector(".answers");
answersContainer.addEventListener("click", checkAnswer);
function checkAnswer(event) {
  let answerBtnElement;
  answerBtnElement = event.target;
  let answer = answerBtnElement.innerText;
  console.log(answer);

  let result;
  result = compareAnswer(currentQuestion, answer);
  if (result == 1) {
    points += 1;
  }
  //check for next question
  currentQuestionIndex += 1;
  if (currentQuestionIndex == questionsList.length) {
    console.log(points);
    displayScore(points);
    restartGame();
    return;
  }
  currentQuestion = questionsList[currentQuestionIndex];
  displayQuestion(currentQuestion);
}

function compareAnswer(question, answer) {
  if (answer == question.correctAnswer) {
    return 1;
  } else {
    return 0;
  }
}

//display the score through the pop-up
// In - the points
// Cal - select the pop-up-bg
//       select the score element to display the score
// Out - change the inner text of the score element
//       change the pop up bg to be displayed as flex

function displayScore(points) {
  let divElement = document.querySelector(".pop-up-bg");
  let pElement = document.querySelector(".score");
  pElement.innerText = points;
  divElement.style.display = "flex";
}

//closing the pop-up
// In - the user clicking the X button
//          Target: the X button
//          Event Type: click
//          Event Handler: closePopUp
//
// Cal - select the pop-up-bg
// Out - change the pop-up-bg to be displayed none

let btnElement = document.querySelector(".close-btn");
btnElement.addEventListener("click", closePopUp);

function closePopUp() {
  let divElement = document.querySelector(".pop-up-bg");
  divElement.style.display = "none";
}

//restart the game
// In - N/A
// Cal - reset the points to 0
//       reset the question index
// Out - show the question

function restartGame() {
  points = 0;
  currentQuestionIndex = 0;
  displayQuestion(questionsList[currentQuestionIndex]);
}
