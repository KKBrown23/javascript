//When the btn is clicked add a red border to the first paragraph
// In - the user click
//          Event: the user clicks the btn -> the first paragraph red border
//               Target: button
//               Event Type: click
//               Event Handler: addRedBorder
// Cal -
//          select the first paragraph
//
// Out -     add a border using javascript

let btnElement = document.querySelector(".active-btn");

btnElement.addEventListener("click", addRedBorder);

function addRedBorder() {
  let pElement = document.querySelector(".first-text");
  pElement.style.border = "2px solid red";
}

//When the user double clicks remove the border from the first paragraph
// In - the user double-clicks
//          Event: the user double clicks the button -> first paragraph border gone
//          Target: button
//          Event Type: double-click
//          Event Handler: removeRedBorder
// Cal - select the first paragraph
// Out - remove the border using javascript

btnElement.addEventListener("dblclick", removeRedBorder);

function removeRedBorder() {
  let pElement = document.querySelector(".first-text");
  pElement.style.border = "0px";
}

//When the user clicks one of the paragraphs adda green border to that clicked p

//in    USER click
//          Event: uSER Clicks ONE of the p -> add a green border to the clicked p
//              Target:         one of the p (div)
//              Event Type:     click
//              Event Handler:  addGreenBorder
//cal   select the clicked paragraph
//out   add the border using javascript

let divElement = document.querySelector("div");
divElement.addEventListener("click", addGreenBorder);
function addGreenBorder(event) {
  let clickedPELement = event.target;
  clickedPELement.style.border = "3px solid green";
}

//When the user double clicks one of the p remove the green border
// In -      Event: the user double clicks one of the p -> removes a green border
//             Target:       one of the p (div)
//             Event Type:   double-click
//             Event Handler: removeGreenBorder
// Cal -     select the paragraph that was clicked from the event object
// Out -     remove the border using javascript

divElement.addEventListener("dblclick", removeGreenBorder);
function removeGreenBorder(event) {
  let clickedPELement = event.target;
  clickedPELement.style.border = "3px solid transparent";
}
