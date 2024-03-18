// When user clicks the document move containers to the side
//                  Target: window object
//                  Event Type: scroll
//                  Event Handler: slideCon

window.addEventListener("scroll", slideCon);
function slideCon(event) {
  console.log(event);
  let divElement = document.querySelector(".content-1");
  let divElement2 = document.querySelector(".content-2");
  //   divElement.style.transform = "translate(0)";
  //   divElement2.style.transform = "translate(0)";
  divElement.classList.add("move-start");
  divElement2.classList.add("move-start");
}
