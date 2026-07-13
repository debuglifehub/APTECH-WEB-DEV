/*Write a Javascript code to accept three numbers from the user and
print the largest and smallest number among them.*/
// const prompt = require("prompt-sync")(); node.js

let Num1 = Number(prompt("Enter the First number: "));
let Num2 = Number(prompt("Enter the Second number: "));
let Num3 = Number(prompt("Enter the Third number: "));

let largest = Math.max(Num1, Num2, Num3);

let smallest = Math.min(Num1, Num2, Num3);

document.write("The largest number is: " + largest + "<br>");
document.write("The smallest number is: " + smallest + "<br>");

/*write a javascript code that accepts name and password from the user 
and validates the data entered by the user.
The Validation criteria's are as follows: 

The Value accepted for the name field should contain only characters with
a maximum limit of 10characters

Similarly, value of the password field should be a combination of characters, 
digits and underscore. Also, the password should start with one or more
characters followed by the digits*/

let userName = prompt("Enter your name (max 10 characters): ");

let userPassword = prompt("Enter your password: ");

let namePattern = /^[A-Za-z]{5,10}$/; // Only letters, max 10 characters
let passwordPattern = /^[A-Za-z]+\d+$/; // Starts with letters followed by digits

if (!namePattern.test(userName)) {
  alert(
    "Invalid name. Please enter a name with only characters and a maximum of 10 characters.",
  );
} else { //nested if and else statement in an else statement
  if (!passwordPattern.test(userPassword)) {
    alert(
      "Invalid password. Please enter a password that starts with characters followed by digits.",
    );
  } else {
    alert("Valid credentials entered.");
  }
}

/* Write a Javascript code that contains an expression for e-mail matching pattern
This pattern is checked with the e-mail address provided by the user and displays whether it is valid or invalid*/

let email = prompt("Enter your email address: ");

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern

if (!emailPattern.test(email)) {
  alert("Invalid email address. Please enter a valid email.");
} else {
  alert("Valid email address entered.");
}


/* Write a Javascript code that accepts the name from the user and 
greets them depending upon the hour of time. For example, if it is 
morning, the Message displayed to the user will be 'Good Morning <name>'*/



let name = prompt("Enter Your name");

let hour = new Date().getHours();
console.log(hour)
// let hour = Number(prompt("Enter hour (0-23):"));

if (hour >= 5 && hour < 12) {
  document.write("Good morning " + name);
} else if (hour >= 12 && hour < 17) {
  document.write("Good Afternoon " + name);
} else if (hour >= 17 && hour < 21) {
  document.write("Good Evening " + name);
} else {
  document.write("Good Night " + name);
}


