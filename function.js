// FUNCTION WITHOUT PARAMETERS

// Declaring a function named wisdom
function addition() {
  // Ask the user for the first number, prompt() returns a string, so parseInt() converts it into an integer.
  let num1 = parseInt(prompt("Enter Number 1"));

  let num2 = parseInt(prompt("Enter Number 2")); // Ask the user for the second number.

  let result = num1 + num2; // Add both numbers together and store the answer in result.

  document.write(`Sum of ${num1} and ${num2} is ${result}`); // Display the result on the webpage.
}

// INVOKING (CALLING) A FUNCTION

// This function simply calls the wisdom() function.
function result_result_function() {
  addition();
}

// PARAMETERIZED FUNCTION

// This function accepts two parameters (arguments) instead of asking the user with prompt().
// let num3 = 21;
// let num4 = 22;

function add(num3, num4) {
  // Calculate the sum.
  let sum = num3 + num4;

  // Display the result.
  console.log(`Sum of ${num3} and ${num4} is ${sum}`);
}
add(50,20);
add(100,20);

// PASS BY REFERENCE

// Arrays are composite (reference) data types.
let persons = ["Wisdom", "Kelvin", "Brad"];

console.log("<h2>Before updating (Pass by Reference)</h2><br><ul>"); // Display heading.
// Loop through every element inside the array. and display each item in a list
for (let name of persons) {
  console.log(`<li>${name}</li>`);
}

console.log("</ul><br>");

// Function that receives an array.
function chnageArr(arr) {
  // Change the first element, Since arrays are passed by reference,the original array will also change.
  arr[0] = "Stuart";

  return arr; // Return the modified array.
}

// Display the original array, Arrays displayed with document.write() are separated by commas.
console.log(persons);

// Call the function.
let returnArr = chnageArr(persons);

console.log("<h2>After updating (Pass by Reference)</h2><br><ul>");
console.log(persons); // Display updated array.
// Loop through the updated array.
for (let name of returnArr) {
  console.log(`<li>${name}</li>`);
}

console.log("</ul>");

// PASS BY VALUE

// Primitive data types are passed by value.
let guy = "lebron";

// Function receives a COPY of the variable.
function changeName(par) {
  // Only the copy changes.
  par = "Something else instead";

  // Display inside function.
  // NOTE: document.write() ignores commas.
  // Better: document.write("Inside the function: " + par);

  console.log("Inside the function", par);
}

// Call the function.
changeName(guy);

// Original variable is still unchanged.
console.log("Outside the function:", guy);

// FACTORIAL FUNCTION
// Calculates the factorial of a number. Example:  5! = 5×4×3×2×1 = 120

function factorial(num) {
  // NOTE: This is incorrect. Mathematically: 0! = 1

  if (num == 0) {
    return 0; // Should be return 1;
  }

  // 1! = 1
  else if (num == 1) {
    return 1;
  } else {
    // Store the starting number.
    let result = num;

    // Continue multiplying until num becomes 1.
    while (num > 1) {
      // Multiply by the previous number.
      result = result * (num - 1);

      // Decrease num by 1.
      num--;
    }

    return result;    // Return the factorial.
  }
}

// Display factorials.
console.log(factorial(6));
console.log(factorial(9));
console.log(factorial(5));

// OBJECTS

// Create an empty object.
let stud1 = new Object();

// Add properties.
stud1.first_name = "Samuel";
stud1.last_name = "Victor";
stud1.age = 18;

// Create another object.
let stud2 = new Object();

stud2.first_name = "Wisdom";
stud2.last_name = "Solomon";
stud2.age = 25;
stud2.course = "Web Development";

// Display the object.
console.log(stud1);

// Access using dot notation.
console.log(stud1.last_name);

// Access using bracket notation.
console.log(stud1["last_name"]);

// CONSTRUCTOR FUNCTION

// Constructor function creates multiple Employee objects.
function Employee(name, role, experience) {
  // "this" refers to the new object.
  this.name = name;
  this.role = role;
  this.experience = experience;
}

// Create Employee objects.
let employee1 = new Employee("David", "Software Engineer", 5);

let employee2 = new Employee("Kingsley", "Web Engineer", 18);

// Display one employee.
console.log(employee1);

// OBJECT METHODS

// Create an object.
let sq = new Object();

// Add property.
sq.length = 5;

// Add method.
sq.cal_area = function () {
  // Return area.
  return this.length ** 2;
};

// Display area.
console.log(sq.cal_area());

// CALCULATE DIAMETER
// NOTE: Parameter "rad" wasn't used.Since we use this.radius, you don't need the parameter.
function calc_diameter(rad) {
  return this.radius * 2;
}

// Constructor function.
function circle(rad) {
  // Store radius.
  this.radius = rad;

  this.calc_diameter = calc_diameter;
}

// Placeholder variable.
let userprompt;

// Create a new circle object.
let circ1 = new circle(12);
console.log(circ1.calc_diameter());
