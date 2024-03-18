// let h1Element = document.querySelector("#main-title");
// // let pElementList = document.querySelectorAll("p");

// let mainTitleElement = document.querySelector("h1");
// mainTitleElement.innerText = "Changed by JS";

// let pElement = document.querySelector(".different-content");
// pElement.innerText = "I am changing this using JS";

// let pElementList = document.querySelectorAll(".content");
// for (let index = 0; index < pElementList.length; index += 1) {
//   let pElement = pElementList[index];
//   pElement.innerText = "I am changing this using JS and loops";
//   pElement.style.borderRadius = "10px";
//   pElement.style.backgroundColor = "green";
// }

// let pElementList = document.querySelectorAll("p");
// for (let index = 0; index < pElementList.length; index += 1) {
//   let pElement = pElementList[index];
//   pElement.style.backgroundColor = "lightgreen";
// }

//Using only JS
// 1. Add a diffrent bg-color to the last 2 paragraphs

let pElementList = document.querySelectorAll(".different-content");
for (let index = 0; index < pElementList.length; index += 1) {
  let pElement = pElementList[index];
  pElement.style.backgroundColor = "lightblue";
}
// 2. Add a border to the main-title
let h1Element = document.querySelector("#main-title");
h1Element.style.border = "2px solid red";

// 3. Change the color of the text of the first 3 paragraphs
//HINT[Select first, modify next]
let pElementList2 = document.querySelectorAll(".content");
for (let index = 0; index < pElementList2.length; index += 1) {
  let pElement = pElementList2[index];
  pElement.style.color = "purple";
}
