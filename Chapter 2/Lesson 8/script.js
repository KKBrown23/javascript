// when user presses the up arrow the box moves up, and so on for the rest of the arrows
//in    user presses one of the arrows
//      target          window
//      type of event   keydown
//      handler         moveTheBox

//cal   select the box-div
//      find what arrow was pressed using the 'event' object
//      based on the arrow move using translateX and translateY
//out   change the style of the box directly

window.addEventListener("keydown", moveTheBox);
let boxElement = document.querySelector(".box");
let xPosition = 0;
let yPosition = 0;
function moveTheBox(event) {
  let arrowCode = event.code;
  console.log(arrowCode);
  if (arrowCode == "ArrowRight") {
    xPosition += 10;
  }
  if (arrowCode == "ArrowDown") {
    yPosition += 10;
  }
  if (arrowCode == "ArrowLeft") {
    xPosition -= 10;
  }
  if (arrowCode == "ArrowUp") {
    yPosition -= 10;
  }
  boxElement.style.transform =
    "translateX(" + xPosition + "px) translateY(" + yPosition + "px)";
}

//When the user moves the mouse move the circle container
//in        User moves the mouse
//               Target: window
//               Event Type: mousemove
//               Event Handler: moveCircle
//cal       get the coordinates of the mouse using the 'event' object
//
//out           move the circle container at the coordinates of the circle

window.addEventListener("mousemove", moveCircle);
let circlEelement = document.querySelector(".circle");
function moveCircle(event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  circlEelement.style.top = mouseY + "px";
  circlEelement.style.left = mouseX + "px";
}
