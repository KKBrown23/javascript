// Move the bucket when the mouse moves
// In - user moves the mouse
//           Target: window
//           Event Type: mouse moves
//           Event Handler: moveBucketWithMouse
// Cal - get the position of the mouse
// Out - move the bucket at the position of the mouse
let intervalsIdsList = [];
let points = 0;
let time = 0;
window.addEventListener("mousemove", moveBucketWithMouse);
let pageElement = document.querySelector(".page");
let basketElement = document.querySelector(".basket");
function moveBucketWithMouse(event) {
  let positionX = event.screenX - 150;
  // basketElement.style.transform = 'translate('+positionX+'px)';
  basketElement.style.transform = `translate(${positionX}px)`;
}

//spawn the apple in a random x position
// In - apple element
// Cal - generate a random number between 50-Screen Widths
// Out - move the apple by the random number
function spawnApple() {
  //create apple element
  let appleElement = document.createElement("img");
  appleElement.classList.add("apple");
  appleElement.src = "apple.png";
  //position the apple in a random place
  let windowSize = window.innerWidth - 100;
  let randomPositionX = Math.floor(Math.random() * (windowSize - 50)) + 50;
  let randomPositionY = -Math.floor(Math.random() * 200);
  appleElement.style.transform = `translateX(${randomPositionX}px) translateY(${randomPositionY}px)`;
  //add gravity
  addGravity(appleElement);
  //add the apple to the UI
  pageElement.append(appleElement);
}

function addGravity(appleElement) {
  let appleIntervalId = setInterval(() => {
    gravity(appleElement);
  }, 100);
  intervalsIdsList.push(appleIntervalId);
}

function respawnApple(appleElement) {
  let windowSize = window.innerWidth - 100;
  let randomPositionX = Math.floor(Math.random() * (windowSize - 50)) + 50;
  let randomPositionY = -Math.floor(Math.random() * 200);
  appleElement.style.transform = `translateX(${randomPositionX}px) translateY(${randomPositionY}px)`;
}

spawnApple();
spawnApple();
spawnApple();
spawnApple();
spawnApple();
spawnApple();
spawnApple();

//pull the apples down

//in    appleElement
//cal   get the coordinates of the apple using .getBoundingClientRect()
//      get the y coordinate
//
//out   move the apple down by y+10px every 100ms

function gravity(appleElement) {
  let coordinates = appleElement.getBoundingClientRect();
  let y = coordinates.y;
  let x = coordinates.x;
  y += 10;
  appleElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //check if the apple collided with the bucket
  if (checkCollision(appleElement, basketElement)) {
    respawnApple(appleElement);
    points += 1;
    displayPoints(points);
  }
  //check if the apple went out of the screen
  let windowHeight = window.innerHeight;
  if (y > windowHeight) {
    points -= 1;
    checkIfGameOver(points);
    displayPoints(points);
    respawnApple(appleElement);
  }
}

function checkIfGameOver(points) {
  if (points === 0) {
    displayGameOverPopUp();
    for (let index = 0; index < intervalsIdsList.length; index++) {
      const intervalId = intervalsIdsList[index];
      clearInterval(intervalId);
    }
    basketElement.removeEventListener("mousemove", moveBucketWithMouse);
  }
}

//Check if the apple and the bucket collide
//in    appleElement and bucketElement
//cal   check if the elements collide
//out   return true/false

function checkCollision(appleElement, bucketElement) {
  let appleCoordinates = appleElement.getBoundingClientRect();
  let bucketCoordinates = bucketElement.getBoundingClientRect();
  if (
    !(
      appleCoordinates.right < bucketCoordinates.left ||
      appleCoordinates.left > bucketCoordinates.right ||
      appleCoordinates.bottom < bucketCoordinates.top ||
      appleCoordinates.top > bucketCoordinates.bottom
    )
  ) {
    return true;
  }
  return false;
}

//show points to the user
// In - points
// Cal - select the pointsElement
// Out - display the points by changing the inner text

function displayPoints(points) {
  let pointsElement = document.querySelector(".points");
  pointsElement.innerText = "Points: " + points;
}

//HW: check if the userPoints go to 0 [after you decrease the points]
//    if points are 0, call the funcition showPopUp which displays a pop-up
//    and  a message that the game is over[based on the last project]
function displayGameOverPopUp() {
  let divElement = document.querySelector(".pop-up-bg");
  divElement.style.display = "flex";
  let scoreElement = document.querySelector(".score");
  scoreElement.innerText = "You survived for: " + time + "s";
}

//close pop-up
let btnElement = document.querySelector(".close-btn");
btnElement.addEventListener("click", closePopUp);

function closePopUp() {
  let divElement = document.querySelector(".pop-up-bg");
  divElement.style.display = "none";
  window.location.reload();
}

//time feature
//in    N/A
//cal   declare a time counter
//      that will start at 0
// increase the time by 1 every 1 second using setInterval
//out   declare  an HTML element for time at .html and style it at .css
//      select the html element for time then use innerText to display time

function increaseTime() {
  time += 1;
  let timeElement = document.querySelector(".time");
  timeElement.innerText = "Time: " + time + "s";
}

function displayTime() {
  let timeIntervalId = setInterval(increaseTime, 1000);
  intervalsIdsList.push(timeIntervalId);
}
displayTime();
