//Write a function that will generate a random product object
// containing the fields: name, id, price, stockAmount

// In -
// Cal - create a object
//       using Math.random
//           generate a name, id, price and stock amount
//           save it in the object
// Out - return the object

function getRandomObject() {
  let product = {};
  let randomNumber = Math.floor(Math.random() * 1000);
  product.name = "P" + randomNumber;
  randomNumber = Math.floor(Math.random() * 1000);
  product.id = "PID" + randomNumber;
  let randomPrice = Math.floor(Math.random() * 100);
  product.price = randomPrice;
  let randomStock = Math.floor(Math.random() * 10);
  product.stock = randomStock;
  return product;
}

//write a function that takes as arg a number and returns
// an array of random objects
// In - take a number as an argument
// Cal - create an array
//       make a loop that repeats as many times as the arg
//       for each rep
//          create a random object using getRandomObject()
//          save it into the array
// Out - return the array

function getRandomLisOfObjects(numberOfObjects) {
  let array = [];
  for (let counter = 0; counter < numberOfObjects; counter += 1) {
    let randomObject = getRandomObject();
    array.push(randomObject);
  }
  return array;
}
// let result;
// result = getRandomLisOfObjects(5);
// console.log(result);

//write a function that will take an array of objects and
// print out the object with less than 5 stockAmount
// In - take in an array of objects
// Cal - read the array
//       for each element
//       check if it has less than 5 stockamount using if statements
// Out - print out the object with less than 5 stockamount

// function findLesserObject(array) {
//   let index = 0;
//   for (let counter = 0; counter < array.length; counter += 1) {
//     let object = array[index];
//     index += 1;
//     if (object.stock < 5) {
//       console.log(object);
//     }
//   }
// }

// let arrayOfObjects = getRandomLisOfObjects(10);

// console.log(arrayOfObjects);
// findLesserObject(arrayOfObjects);

//Write a function that takes an array of random objects and returns
//the amount of products with a price greater than 50
// In - take an array of random objects, price
// Cal - create the object counter
//       read the array
//       for each object
//       check if the price is above 50 using if statements
//       if yes, add +1 to the object counter
// Out - return the object counter

// function getAmoutOver30(array, price) {
//   let objectCounter = 0;
//   let index = 0;
//   for (let counter = 0; counter < array.length; counter += 1) {
//     let object = array[index];
//     index += 1;
//     if (object.price > price) {
//       objectCounter += 1;
//     }
//   }
//   return objectCounter;
// }

// let arrayOfRandomObjects = getRandomLisOfObjects(5);
// let amount = getAmoutOver30(arrayOfRandomObjects, 30);
// console.log(arrayOfRandomObjects);
// console.log(amount);

//write a function that takes as argument an array of objects and returns
// a new array with only the products with a price less than 40
// In - take an array of objects as argument
// Cal - create a new array
//       read the first array
//       for each product
//       check if it is less than 40
//       if yes, add the product to the new array
// Out - return the new array

// function getLessPrices(array) {
//   let newArray = [];
//   let index = 0;
//   for (let counter = 0; counter < array.length; counter += 1) {
//     let object = array[index];
//     index += 1;
//     if (object.price < 40) {
//       newArray.push(object);
//     }
//   }
//   return newArray;
// }
// let arrayOfObjects = getRandomLisOfObjects(5);
// let result;
// result = getLessPrices(arrayOfObjects);
// console.log(result);
