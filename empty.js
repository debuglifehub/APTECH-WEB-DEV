// 1. Variables

let age = 20;
let price = 3500.5;
let student = true;

console.log(age);
console.log(price);
console.log(student);

//also demonstrate reassignment

let score = 50;
console.log(score);

score = 80;
console.log(score);

//2. CONSTANTS

const PI = 3.14;
console.log(PI);
// PI = 5; Error: Assignment to constant variable.

const myName = "John Doe";
console.log(myName);

//3. DATA TYPES

//Number  data type
let integer = 10;
let float = 10.5;
let decimal = 15.75;
let negative = -5;
console.log(integer);
console.log(float);
console.log(decimal);
console.log(negative);

// Primitive data types
let name = "John";
let age = 20;
let isStudent = true;
let height = 5.9;
let weight = 70.5;
console.log(name, age, isStudent, height, weight);

//4. STRING DATA TYPE

let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName); // Concatenation

console.log(`&{firstName} ${lastName}`); // Template literal

let greeting = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greeting); // Template literal

console.log(firstName.length);

console.log(firstName.toUpperCase());

console.log(firstName.toLowerCase());

//5. BOOLEAN DATA TYPE
true;
false;

console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(5 == 5); // true
console.log(6 < 2); // false

//6. NULL AND UNDEFINED

let account = null;

console.log(account); // null
let undefinedValue;
console.log(undefinedValue); // undefined

//7. SYMBOL DATA TYPE

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1); // Symbol(id)
console.log(sym2); // Symbol(id)
console.log(sym1 === sym2); // false

//8. OBJECT DATA TYPE

let student = {
  name: "John",
  age: 56,
  department: "Computer Science",
  greet: function () {
    console.log("Hello");
  },
};

student.greet(); // Hello

console.log(student.name); // John

console.log(student.age); // 56

console.log(student.department); // Computer Science

//9. ARRAY DATA TYPE

let fruits = ["apple", "banana", "orange"];
console.log(fruits); // ["apple", "banana", "orange"]
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
console.log(fruits.length); // 3

fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

fruits.pop(); //

console.log(fruits); // ["apple", "banana", "orange"]

//10. TYPE CONVERSION

let num = 10;
let str = "20";
console.log(num + parseInt(str)); // 30
console.log(num + Number(str)); // 30
console.log(num + +str); // 30

//11. ESCAPE CHARACTERS

let message = 'Hello, "World"!';
console.log(message); // Hello, "World"!

let newline = "Line 1\nLine 2";
console.log(newline); // Line 1
//       Line 2

//12. BUILT-IN FUNCTIONS

let num1 = 10;
let num2 = 20;

console.log(parseFloat("10.5")); // 10.5
console.log(parseInt("10")); // 10

console.log(isNaN("abc")); // true
console.log(isNaN(10)); // false

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

console.log(Number("50")); // 50

console.log(String(100)); // "100"

console.log(Boolean(1)); // true

console.log(Boolean(0)); // false
