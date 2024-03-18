//Add a todo
//in        get the text from the user using the input element
//              Event: User clicks the + btn
//                      Event Target:   The HTML element where the event accures(+ btn)
//                      Event type:     What type of action did the user take (click)
//                      Event Handler:  The function that will run
//                                              everytime the event happends (addTask)
//cal       create a new div using JS for a new todo
//              1. Take the user input from the inputElement.value
//              2. create a new div using document.createElement()
//              3. create a p element and a btn element
//              4. append the p and btn to the todo div
//out       attach this div to the todos container

// let addBtnElement = document.querySelector("#add-btn");
// addBtnElement.addEventListener("click", addTask);
// function addTask(event) {
//   let addInputElement = document.querySelector(".add-input");
//   let newTodoTitle = addInputElement.value;
//   let newTodoDivElement = document.createElement("div");
//   newTodoDivElement.classList.add("task");
//   let newTitleElement = document.createElement("div");
//   newTitleElement.classList.add("task-title");
//   newTitleElement.innerText = newTodoTitle;
//   let newBtnElement = document.createElement("div");
//   newBtnElement.classList.add("task-delete");
//   newBtnElement.innerText = "Delete";
//   newTodoDivElement.appendChild(newTitleElement);
//   newTodoDivElement.appendChild(newBtnElement);
//   let tasksContainerElement = document.querySelector(".tasks-container");
//   tasksContainerElement.appendChild(newTodoDivElement);
// }
