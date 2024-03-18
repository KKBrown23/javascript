// Write a function that will take the name, the id, and the score of a student
// and save them into an object

// let student = {};
// student.name = prompt("Please enter your name");
// student.id = prompt("Please enter your id");
// student.score = +prompt("Please enter your score");

// console.log(student);

function getStudent() {
  let student = {};
  student.name = prompt("Please enter your name");
  student.id = prompt("Please enter your id");
  student.score = +prompt("Please enter your score");
  return student;
}

//Write a function that will generate a random student
//      with a random name in the format "S----",
//       a random id in the format "SID----",
//       a random score from 0-100

// In - no arg
// Cal -    declare a new object
//          generate a random name
//              1. generate a random number 0-10000
//              2. add "S" to this number
// Out - return the randon student object

function generateRandomStudent() {
  let student = {};
  let randomNumber = Math.floor(Math.random() * 10000);
  student.name = "S" + randomNumber;
  student.id = "SID" + randomNumber;
  let randomScore = Math.floor(Math.random() * 101);
  student.score = randomScore;
  return student;
}

// let result;

// result = getStudent();
// console.log(result);

//Write a function that will take the data for 5 students and return an array of students
// In - the number of students
// Cal -  declare an empty array
//        for 5 times
//          declare an empty object
//          call the function getStudent()
//          save the object into the array using .push()
// Out - return the array of students

function getStudentList(numberOfStudents) {
  let studentArray = [];
  for (let counter = 0; counter < numberOfStudents; counter += 1) {
    let student = {};
    student.name = prompt("Please enter your name");
    student.id = prompt("Please enter your id");
    student.score = +prompt("Please enter your score");
    studentArray.push(student);
  }
  return studentArray;
}

function getRandomStudentList(numberOfStudents) {
  let studentArray = [];
  for (let counter = 0; counter < numberOfStudents; counter += 1) {
    let student = generateRandomStudent();
    studentArray.push(student);
  }
  return studentArray;
}

let studentList = getRandomStudentList(3);
console.log(studentList);
