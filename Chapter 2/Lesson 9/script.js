//when the user presses the space dino will jump

//In -        user hitting the space button
//                 Target: window
//                 Event Type: keyup
//                 Event Handler: dinoJump
//Cal -       select the dino

//Out -       use transform and translate to move it
//            use transition to make it smoother
let points = 0;
let hiScore = localStorage.getItem("hiscore");
if (hiScore == undefined) {
  hiScore = 0;
}

window.addEventListener("keyup", dinoJump);
let dinoElement = document.querySelector(".dino");
let cactus1Element = document.querySelector(".cactus1");
let cactus2Element = document.querySelector(".cactus2");
let pointsElement = document.querySelector(".points");
let hiScoreElement = document.querySelector(".hiScore");
hiScoreElement.innerText = hiScore;

function dinoJump() {
  dinoElement.style.transform = "translateY(-200px)";
  setTimeout(goDown, 1000);
}

function goDown() {
  dinoElement.style.transform = "translateY(0)";
}

setInterval(() => {
  doDivsCollide(dinoElement, cactus1Element);
}, 50);

setInterval(() => {
  doDivsCollide(dinoElement, cactus2Element);
}, 50);

setInterval(addpoints, 50);

function doDivsCollide(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();

  if (
    !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    )
  ) {
    console.log("collision");
    if (points > hiScore) {
      hiScore = points;
      hiScoreElement.innerText = hiScore;
      localStorage.setItem("hiscore", hiScore);
    }
    points = 0;
  }
}

function addpoints() {
  points += 1;
  pointsElement.innerText = points;
}
