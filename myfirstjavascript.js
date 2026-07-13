// Introduction
console.log("hello world from external javascript");

// Variables
// Initialize and assign mean the same thing.
let num1;
num1 = 5;
num1 = 10;

// "var" is deprecated (not recommended anymore).
var text = "kontrolla is a web dev student at aptech lekki center";

// Constants
const earthShape = "oval"; // A constant cannot be reassigned.
// earthShape = "whatever shape"

document.writeln("<br>");
document.writeln(num1);
document.writeln(text);
document.writeln(earthShape);

let firstName = "John";
let lastName = "Doe";

// DATA TYPES
// Primitive data types:

// Number
let ten = 10;

// String: "", '', or `` (template literals use ${}).
let sentence = "Hello world from js " + " " + ten;
console.log(sentence);

let data = `hello ${ten} is a number
1 + 2 = ${1 + 2}
`;
console.log(data);

// Boolean: true or false (often represented as 1 or 0).
let bool1 = true;
let bool2 = false;

// Null
let nullVar = null;

// Undefined
let myVar;
let myVar1 = undefined;

console.log(myVar);

// Symbol, used to create unique values.
let sym1 = Symbol(1);
let sym2 = Symbol(1);

// COMPOSITE DATA TYPES (collections)

// Object
let myCar = {
  // Properties
  name: "mercedes",
  year: 2025,

  // Method (function)
  drive: function () {
    console.log("car is being driven");
  },
};

myCar.drive();

// Array
let myFruits = ["mango", "orange", "grape"];

/*
All your
multi-line comments
go here.
*/

// Escape character (\)

// "Nigeria is the "best" country in the world"
let mySentence = 'Nigeria is the "best" \ncountry\\nation in the world';
console.log(mySentence);

// Other built-in functions

// confirm("Are you currently in Aptech?");
console.log(parseInt("20"));
console.log(parseInt("20"));

eval("console.log(myCar)"); // Runs the string as JavaScript code.

isNaN("30"); // false

// let inputtedName = prompt("What is your name?")
// document.write(`<br> Hi ${inputtedName}!`)

// OPERATORS: Unary, binary, and ternary.

// Arithmetic operators (binary)
console.log(10 + 2);
console.log(10 - 2 - 2); // 6
console.log(10 / 2);
console.log(10 % 2); // 0 (remainder)
console.log(10 * 2); // 20

// Increment (+1) and decrement (-1): Unary operators.
let myNum = 20;

// Post-increment
console.log("myNum++: ", myNum++); // Display the value before adding 1.
console.log(myNum); // 21

// Post-decrement
console.log("myNum++: ", myNum--); // Display the value before subtracting 1.
console.log(myNum); // 20

// Pre-increment
console.log("myNum++: ", ++myNum); // Add 1 first, then display the value (21).

// Pre-decrement
console.log("myNum++: ", --myNum); // Subtract 1 first, then display the value (20).
console.log(myNum); // 20

// Relational (comparison) operators
90 == 91; // Equal value
90 != 91; // Not equal
90 === "90"; // Strictly equal (checks both value and data type): false
90 !== "90"; // Strictly not equal: true
90 > 90;
90 < 90;
90 >= 90; // true
90 <= 90; // true

// Logical operators (binary)
console.log(91 > 90 && 40 < 20 && 30 == 30); // false (AND: every condition must be true.)
console.log(91 > 90 || 40 < 20); // true (OR: at least one condition must be true.)

// Unary
console.log(!(91 > 90 || 40 < 20)); // false (NOT: reverses the result.)

// Assignment operator (=)
let myNumber = 50;

// myNumber = myNumber + 6
myNumber += 6;
myNumber -= 6;
myNumber %= 6;
myNumber /= 6;

// Bitwise operators: &, |, ~
let a = 9; // 00001001
let b = 14; // 00001110

// Bitwise AND
console.log(a & b); // 00001000 = 8

// Bitwise OR
console.log(a | b); // 00001111 = 15

// Bitwise NOT
console.log(~a); // 11110110 = -10

// Bitwise XOR (Exclusive OR)
console.log(a ^ b); // 00000111 = 7

// Special operators

// Comma operator (,), used in arrays, objects, etc.

// Ternary operator, used to choose between two options.
let canDrive;
let hasLicense = true;

// Decision making using the ternary operator.
hasLicense ? (canDrive = true) : (canDrive = false);

console.log("can they drive? ", canDrive);

console.log(typeof hasLicense); // Do the same for the other data types discussed above.

let result = (12 * 5) / 2 - 1;

// Regular Expressions (RegExp)
// An advanced way to search, replace, and work with strings.

// Types:
// Literal: /pattern/flags
// Constructor: RegExp("pattern", "flags")

// Methods
let myText = "hello world Hello";

// match()
console.log(myText.match(/hello/gi));

// replace()
console.log(myText.replace(/hello/gi, "Hi"));

// search()
console.log(myText.search(/world/));

// Alternation
let text1 = "Black, white, red, green, blue, yellow.";

console.log(text1.match(/white|red|green/g));

// Metacharacters
let text2 = "Give_ 100%!";

console.log(text2.match(/\d/g)); // Digits
console.log(text2.match(/\D/g)); // Non-digits
console.log(text2.match(/\w/g)); // Letters, digits, and underscore
console.log(text2.match(/\s/g)); // Spaces
console.log(text2.match(/\S/g)); // Everything except spaces

// Quantifiers

// ? : Zero or one occurrence
let text3 = "1, 100 or 1000?";
const pattern = /10?/g;

console.log(text3.match(pattern));

// + : One or more occurrences
// One or more 'l' characters followed by one or more 'o' characters.
let text4 = "hellooo World, Hello Schools!";
console.log(text4.match(/l+o+/g)); // ['llooo', 'llo']

// + : One or more occurrences
// Exactly one 'l' followed by one or more 'o' characters.
console.log(text4.match(/lo+/g)); // ['looo', 'lo']

// * : Zero or more occurrences
// Exactly one 'l' followed by zero or more 'o' characters.
console.log(text4.match(/lo*/g)); // ['l', 'looo', 'l', 'l', 'lo', 'l']

// * : Zero or more occurrences
// Zero or more 'l' characters followed by zero or more 'o' characters.
console.log(text4.match(/l*o*/g));
// Returns many matches, including empty strings, because both l* and o* can match zero characters.

// {n} Quantifier: Exactly n occurrences
// Exactly two 'l' characters followed by exactly two 'o' characters.
console.log(text4.match(/l{2}o{2}/g)); // ['lloo']

// {n} Quantifier: Exactly n occurrences
// Matches exactly four consecutive digits.
console.log(text3.match(/\d{4}/g));

// Expression assertions
let text5 = "The rain in SPAIN stays mainly in the plain";

let patern1 = /ain/g; // Matches all occurrences of "ain".

let patern2 = /ain/i; // Matches the first occurrence of "ain", ignoring case.

let patern3 = /ain/gi; // Matches all occurrences of "ain", ignoring case.

let patern4 = /ain$/g; // Matches "ain" at the end of the string.

let patern5 = /^The/g; // Matches "The" at the beginning of the string.

console.log(patern1.test(text5)); // true
console.log(patern2.test(text5)); // true
console.log(patern3.test(text5)); // true
console.log(patern4.test(text5)); // true
console.log(patern5.test(text5)); // true

let text6 = "HELLO, LOOK AT YOU";
let pattern6 = text6.search(/\bLO/g); // Matches "LO" at the beginning of a word.
console.log(pattern6); // 7

// Character classes
let text7 = "More tha 1000 times 678";

console.log(text7.match(/[0-9]/g)); // Matches any digit.
console.log(text7.match(/[a-z]/g)); // Matches any lowercase letter.
console.log(text7.match(/[A-Z]/g)); // Matches any uppercase letter.
console.log(text7.match(/[a-zA-Z]/g)); // Matches any letter.
console.log(text7.match(/[0-9a-zA-Z]/g)); // Matches any letter or digit.

