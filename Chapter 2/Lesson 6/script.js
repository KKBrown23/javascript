//The user clicks the bar btn -> rotation main, sidenav, sidelinks
//             Target: Button
//             Event Type: Click
//             Event Handleer: rotatePage
let btnElement = document.querySelector(".btn");
btnElement = addEventListener("click", rotatePage);

function rotatePage() {
  let divElement = document.querySelector(".main-div");
  let sideNavElement = document.querySelector(".sibenav");
  //   divElement.style.transform = "rotate(-20deg)";
  divElement.classList.toggle("rotated");
  //   sideNavElement.style.transform = "rotate(-20deg)";
  sideNavElement.classList.toggle("rotated");
}
