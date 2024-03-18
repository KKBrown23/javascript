// Display the time in hours, minutes and seconds
// In - N/A
// cal - take the time from the system
//          get the hours minutes and seconds from the time object
// Out - Display the hours, minutes and seconds (changing the h1s) every second

let hoursElement = document.querySelector("#hours");
let minutesElement = document.querySelector("#minutes");
let secondsElement = document.querySelector("#seconds");
function displayTime() {
  let time = new Date(); // for now
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
}
setInterval(displayTime, 1000);
