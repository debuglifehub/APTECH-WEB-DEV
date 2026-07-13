// ===============================
// DECISION MAKING (if, else if, else)
// ===============================

// Store the user's age
let age = 20;

// Check if the user is an adult
if (age >= 18) {
  console.log("You are an adult.");
}
// If not an adult, check if the user is a teenager
else if (age >= 13) {
  console.log("You are a teenager.");
}

// ===============================
// Quantity Validation
// ===============================

// Ask the user to enter the quantity of items
let quantity = prompt("Enter the quantity of items you want to buy:");

// Check if the input is negative or not a number
if (quantity < 0 || isNaN(quantity)) {
  alert("Please enter a valid number.");
}
// Check if the quantity is greater than zero
else if (quantity > 0) {
  console.log("You have selected " + quantity + " items.");
}

// ===============================
// Division Program
// ===============================


let fNum = prompt("Enter the first number:"); // Get the first number from the user

let sNum = prompt("Enter the second number:"); // Get the second number from the user

let result; // Variable to store the division result

// Prevent division by zero
if (sNum == 0) {
  alert("ERROR: Division by zero is not allowed.");
} else {
  // Perform division
  result = fNum / sNum;

  // Display the result
  alert("Result: " + result);
}

// ===============================
// Grade Checker
// ===============================

// Ask the user for their percentage
let percentage = prompt("Enter your percentage:");

// Determine the grade using if...else if
if (percentage >= 70) {
  alert("You've got an A!");
} else if (percentage >= 60 && percentage < 70) {
  alert("You've got a B!");
} else if (percentage >= 50 && percentage < 60) {
  alert("You've got a C!");
} else if (percentage >= 45 && percentage < 50) {
  alert("You've got a D!");
} else {
  alert("You've Failed!");
}

// ===============================
// Login System
// ===============================

// Ask the user for username
let userName = prompt("Enter your name: ");

// Ask the user for password
let password = prompt("Enter your password: ");

// Check if both fields are not empty
// NOTE: A better check would be userName !== "" instead of " "
if (userName !== " " && password !== " ") {

  // Verify the username and password
  if (userName == "admin" && password === "admin123") {
    alert("Login successful!");
  } else {
    alert("Invalid admin username or password.");
  }

} else {
  alert("Please enter both username and password.");
}

// ===============================
// SWITCH CASE
// ===============================

// Ask the user for their job role
let role = prompt("Enter your role: ");

// Convert the input to lowercase to make comparison case-insensitive
switch (role.toLowerCase()) {

  // If the role is manager
  case "manager":
    alert("Salary 210,000");
    break;
 
  case "dev":  // If the role is dev
    alert("Salary 160,000");
    break;

  default:    // If no role matches or a fall back statement
    alert("Role not found.");
}

// ===============================
// REGULAR EXPRESSIONS (Back Reference)
// ===============================

// String containing repeated words
// Regular expression to detect repeated words
// (\w+)   -> Capture one or more word characters
// \s+     -> One or more spaces
// \1      -> Match the same word captured earlier
// g       -> Global search

let data2 = "Hello Hello";

let patt = /(\w+)\s+\1/g;

let patter = /(\w+)\s+\1/g; // Same pattern stored in another variable


console.log(patt.test(data2)); // Returns true if repeated words exist

console.log(patter.test(data2)); // Returns true again because it's the same pattern

// ===============================
// WHILE LOOP
// Sum of first 10 natural numbers
// ===============================


let sum = 0; // Variable to store the total
let i = 1;  // Loop counter

// Continue while i is less than or equal to 10
while (i <= 10) {

  // Add current value of i to sum
  sum += i;

  // Move to the next number
  i++;
}

// Display the final sum
alert(`The sum of first 10 natural numbers is: ${sum}`);

// ===============================
// FOR LOOP
// Sum of first 20 natural numbers
// ===============================

// Variable to store the total
let sum1 = 0; // Variable to store the total

// Loop from 1 to 20
for (let j = 1; j <= 20; j++) {

  // Add j to the total
  sum1 += j;
}

// Display the result
alert(`The sum of first 20 natural numbers is: ${sum1}`);

// ===============================
// Multiplication Table using WHILE LOOP
// ===============================

// Ask the user for a number
let number = prompt("Enter a number: ");
let i = 1;  // Counter starts from 1

// Repeat until i reaches 10
while (i <= 10) {
  document.writeln(`${number} × ${i} = ${number * i}<br>`);   // Display multiplication result
  i++;   // Increase counter
}

// ===============================
// Multiplication Table using FOR LOOP
// (Starts from 2 because 1-10 was already displayed above)
// ===============================

for (let j = 2; j <= 20; j++) {

  // Display multiples from 2 to 20
  document.writeln(`${number} × ${j} = ${number * j}<br>`);
}

// ===============================
// CONTINUE
// Skip number 15
// ===============================

for (let i = 10; i <= 20; i++) {

  // Skip 15
  if (i == 15) {
    continue;
  }

  // Print every other number
  console.log(i);
}

// ===============================
// BREAK
// Stop at 16
// ===============================

for (let i = 10; i <= 20; i++) {

  // Exit the loop when i becomes 16
  if (i == 16) {
    break;
  }

  // Print numbers before 16
  console.log(i);
}

// ===============================
// DO...WHILE LOOP
// Runs at least once
// ===============================


let answer; // Variable to store user's answer
do {        // Ask repeatedly until the correct answer is entered
  answer = prompt("Nigeria's capital is? ");
} while (answer.toLowerCase() != "abuja");
document.writeln(`<br>Correct! The answer is ${answer}.<br>`); // Display success message

// ===============================
// WHILE LOOP
// Sum of numbers from 0 to 10
// ===============================

// Variable to hold total
let sum = 0; // Variable to hold total
let i = 0; // Loop counter- Counter starts at zero- 
while (i <= 10) { // Continue until i reaches 10
  sum = sum + i; // Add i to sum
  i++; // Increase i
}
console.log(sum); // Print total

// ===============================
// FOR LOOP
// Running total from 0 to 10
// ===============================

// Variable to hold total
let forSum = 0;

// Loop from 0 to 10
for (let x = 0; x <= 10; x++) {

  // Keep adding x
  forSum = forSum + x;

  // Print the running total after every iteration
  document.write(forSum, "<br>");
}

// ===============================
// Multiplication Table using FOR LOOP
// ===============================

// Ask the user for a number
let userNum = prompt("Get multiple of a number, input: ");

// Loop from 1 to 10
for (let j = 1; j <= 10; j++) {

  // Display multiplication table
  document.writeln(`${userNum} * ${j} = ${userNum * j}<br>`);
}

// ===============================
// Multiplication Table using WHILE LOOP
// ===============================

// Counter variable
let y = 1;

// Continue until y reaches 10
while (y <= 10) {
  document.writeln(`${userNum} * ${y} = ${userNum * y}<br>`); // Display multiplication table
  y++; // Increase counter
}