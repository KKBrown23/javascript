//When user clicks the 'x' btn 3 containers should shift left
//In - the user click
//                Target: btn (X, =)
//                Event Type: click
//                Event Handler: shift3Con
//Cal - select the containters
//      declare a class at css
//Out - add a class to the containers

let btnElement = document.querySelector(".btn-close");
btnElement.addEventListener("click", shift3Con);
let divElement = document.querySelector(".black-bg");
let divElement2 = document.querySelector(".red-bg");
let divElement3 = document.querySelector(".main-bg");

function shift3Con() {
  divElement.classList.remove("shift-in-black");
  divElement2.classList.remove("shift-in-red");
  divElement3.classList.remove("shift-in-white");
}

//When user clicks the '=' btn 3 containers should shift right

//In - the user click
//                Target: btn (=)
//                Event Type: click
//                Event Handler: shift3ConRight
//Cal - select the containters
//Out - remove a class to the containers

let btnMenuElement = document.querySelector(".btn-menu");
btnMenuElement.addEventListener("click", shift3ConRight);

function shift3ConRight() {
  divElement.classList.add("shift-in-black");
  divElement2.classList.add("shift-in-red");
  divElement3.classList.add("shift-in-white");
}
