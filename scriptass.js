let firstName = "Wisdom";
let lastName = "Ajah";

const country = "Nigeria";

let statement = `Hello,  ${firstName} ${lastName} is from ${country}`;
console.log(statement);

document.writeln(statement);

let age = 25;
age++;


document.writeln(`<br>Next year i'll be ${age} years old.`);

let Question = prompt("What is your favorite food?");
document.writeln(`<br>My favorite food is ${Question}!`);


// Shopping Cart Calculator

let Item1 = 8000
let Item2 = 5000
let Item3 = 3000


const TAX_RATE = 0.08;

subtotal = Item1 + Item2 + Item3;
console.log(subtotal);



const TAX_amount = subtotal * TAX_RATE;
console.log(TAX_amount);

const final_total = subtotal + TAX_amount;
console.log(final_total);

document.writeln(`<br>Subtotal: ${subtotal}`);
document.writeln(`<br>Tax: ${TAX_amount}`);
document.writeln(`<br>Total: ${final_total}`);



let array = ["Mango", "Orange", "Grape"];

let order = Prompt("What item would you like to order?");



