//Open one of the images
//in        Event: user clicks on the image
//              Target:         the image element
//              Event Type:     click
//              Handler:        openTheImage
//cal       select the image
//          change the width of the image
//out

function openTheImage(event) {
  for (let index = 0; index < imgElementsList.length; index++) {
    const imgElement = imgElementsList[index];
    imgElement.style.width = "5%";
  }
  event.target.style.width = "70%";
}

let imgElementsList = document.querySelectorAll("img");

for (let index = 0; index < imgElementsList.length; index++) {
  const imgElement = imgElementsList[index];
  imgElement.addEventListener("click", openTheImage);
}
