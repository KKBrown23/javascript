//toggle the btn
//in    user clicks the toggle
//      target:     toggle btn
//      event type: click
//      handler:    moveTheBtn
//cal   select the toggle btn
//out   move the btn using transform: translate(100%);

let btnElement = document.querySelector(".toggle-btn");
btnElement.addEventListener("click", moveTheBtn);

function moveTheBtn(event) {
  //   btnElement.style.transform = "translate(100%)";
  btnElement.classList.toggle("move");
}
