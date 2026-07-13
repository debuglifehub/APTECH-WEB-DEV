// /*Array: collection of items stored side by side in internal memory
// Single deimensional Array-single row in the allocated memory
// Multi-dimensional Array*/

let marital_status = new Array(3);

marital_status[0] = "Single";
marital_status[1] = "Divorced";
marital_status[2] = "Married";

console.log(marital_status);

//Declare and initialize same time
let maritalStatus = new Array("Single", "Divorced", "Married");

console.log(maritalStatus);

//Literal Syntaz- Make use of Square Bracket
let maritalStatus2 = ["Single", "Married", "Divorced"];
console.log(maritalStatus2);

//Accessing an aitem in an array
let marriage_Status = maritalStatus[2];

console.log(maritalStatus[2]);

// Take 5 score from user and calculate/Display the average

let marks = new Array(5); //declare the array memory
let sum = 0;
//using for loop
for (let i = 0; i < marks.length; i++) {
  marks[i] = parseInt(prompt(`Enter Mark ${+i}`)); //Pre increment using template string
  sum += marks[i];
}
let average = sum / marks.length;
//Get Average
console.log(average);

// Multi Dimensional Array Implementation
// Arrays stored in An array

let students = new Array(3);

students[0] = new Array("John", "65", "Angeles");
students[1] = new Array("David", "46", "Lagos");
students[2] = new Array("Wisdom", "100", "Calabar");

console.log(students);
console.log(
  `The Location of the second person in the array is ` + " " + students[1][2],
);

let employees = [
  ["James", "New Jersey"],
  ["John", "California"],
];
for (let i = 0; i < employees.length; i++) {
  document.writeln(`Name: ${employees[i][0]}<br> 
    Location: ${employees[i][1]} <br> <br>`);
}

let employee = [
  ["Lovelyn", "Berlin"],
  ["Wisdom", "Lagos"],
];
for (let i = 0; i < employee.length; i++) {
  for (let j = 0; j < employee[i].length; j++)
    if (j == 1) {
      document.writeln(`Location: ${employee[i][j]}<br>`);
    } else {
      document.writeln(`Name: ${employee[i][j]} <br>`);
    }
}

// Table Display

// Create a 2D array to store product details.
// Each inner array contains:
// Index 0 = Product Name
// Index 1 = Product Price
let products = [
  ["Monitor", "21000"],
  ["Keyboard", "230000"],
];

// Display the opening <table> tag and create the table headings.
document.writeln(`<Table border = 1>
  <tr>              
  <th> Name</th>    
  <th> Price</th>   
  </tr>`);

// Outer loop: Moves through each product (each row in the array)
for (let i = 0; i < products.length; i++) {
  // Start a new table row for the current product
  document.write("<tr>");

  // Inner loop: Moves through each value in the current product
  // j = 0 → Product Name
  // j = 1 → Product Price
  for (let j = 0; j < products[i].length; j++) {
    // Create a table cell (<td>) and display the current value
    document.write("<td>" + products[i][j] + "</td>");
  }

  // Close the current table row
  document.write("</tr>");
}


// Array Methods

let flower = ["daisy", "sunflower", "rose"];

// Length
document.writeln("Number of flowers in the array is: ", flower.length, "<br>");

// Join
document.writeln("Flowers are: ", flower.join(", "), "<br>");

// Push
flower.push("Orchid", "Lilly");
document.writeln("After push: ", flower.join(", "), "<br>");

// Sort
flower.sort();
document.writeln("Sorted flowers: ", flower.join(", "), "<br>");

// Pop
let removed = flower.pop();
document.writeln("Removed flower: ", removed, "<br><br>");

// for...in
document.writeln("Using for...in:<br>");
for (let index in flower) {
    document.writeln(index, " : ", flower[index], "<br>");
}

// for...of
document.writeln("<br>Using for...of:<br>");
for (let item of flower) {
    document.writeln(item, "<br>");
}