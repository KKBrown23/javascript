//Write a program that takes 2 numbers from the user and displays the sum if the first number is greater
// and displays the product if the second number is greater

// Input: The two random numbers that the user chooses
// Calculation: They compare both of the numbers
// Output: If the first number is greater than the second then the console will display the sum and vice versa but it will display a product.

// let usernumber;
// usernumber = +prompt("Please enter a number");

// let usernumber2;
// usernumber2 = +prompt("Please enter another number");

// if(usernumber > usernumber2){
//   let sum;
//   sum = usernumber + usernumber2;
//   console.log(sum);
// }

// if(usernumber <= usernumber2){
//     let product;
//     product = usernumber * usernumber2;
//     console.log(product);
// }

// Simulate a traffic light system using if statements. The program should change the color of the traffic light in sequence.

//in:  Take the traffic light as input "red", "yellow", "green"
//cal: check the traffic light
//out: if TL is red display -> "STOP"
//    if TL is yellow display -> "SLOW DOWN"      
//    if TL is green display -> "Go GO GO"      

// let usertraffic;
// usertraffic = prompt("Please enter the current state of your traffic light")

// if(usertraffic == "red"){
//     console.log("STOP");
// }

// if(usertraffic == "yellow"){
//  console.log("SLOW DOWN");
// }

// if(usertraffic == "green"){
//     console.log("GO GO GO!");
// }

//Write a program that takes the height of the user in meters and the weight in kg
// Then it calculates the BMI = weight / (height * height) 
// Then it prints a message based on the BMI
// if BMI less than 18.5 -> "Underweight"
// if BMI greater or equal than 18.5 and BMI les than 24.9 -> "Normal weight"
// if BMI greater or equal than 25 and BMI les than 29.9 -> "Overweight"
// if BMI greater or equal 30 -> "Obese"

let userweight;
userweight = +prompt("Please enter your weight in kg(EX: 100)")

let userheight;
userheight = +prompt("Please enter your height in m (EX: 1.85")

let BMI;
BMI = userweight / (userheight * userheight);

if(BMI < 18.5){
    console.log("Underweight");
}

if(BMI >= 18.5 && BMI < 24.9){
    console.log("NormalWeight");
}

if(BMI >= 25 && BMI < 29.9){
    console.log("Overweight");
}

if(BMI >= 30){
    console.log("Obese");
}