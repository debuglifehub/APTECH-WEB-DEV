// STRINGS

/*length	Returns the number of characters in a string (property, not a method)	"Hello".length → 5
charAt(index)	Returns the character at the specified index	"Hello".charAt(1) → "e"
at(index)	Returns the character at the specified index (supports negative indexes)	"Hello".at(-1) → "o"
charCodeAt(index)	Returns the Unicode value of the character	"A".charCodeAt(0) → 65
concat()	Joins two or more strings	"Hi".concat(" There") → "Hi There"
includes()	Checks if a string contains another string	"JavaScript".includes("Script") → true
startsWith()	Checks if a string starts with specified text	"Hello".startsWith("He") → true
endsWith()	Checks if a string ends with specified text	"Hello".endsWith("lo") → true
indexOf()	Returns the first occurrence of a substring	"banana".indexOf("a") → 1
lastIndexOf()	Returns the last occurrence of a substring	"banana".lastIndexOf("a") → 5
search()	Searches using a string or regular expression	"Hello".search("l") → 2
match()	Returns matches found using a regular expression	"abc123".match(/\d+/) → ["123"]
matchAll()	Returns an iterator of all matches	"a1b2".matchAll(/\d/g)
replace()	Replaces the first matching substring	"cat dog".replace("dog", "fish")
replaceAll()	Replaces all matching substrings	"a,a,a".replaceAll("a", "b")
slice(start, end)	Extracts part of a string	"JavaScript".slice(0,4) → "Java"
substring(start, end)	Returns characters between two indexes	"Hello".substring(1,4) → "ell"
substr(start, length)	Extracts characters by length (deprecated)	"Hello".substr(1,3) → "ell"
split()	Splits a string into an array	"A,B,C".split(",")
toUpperCase()	Converts to uppercase	"hello".toUpperCase()
toLowerCase()	Converts to lowercase	"HELLO".toLowerCase()
trim()	Removes spaces from both ends	" Hello ".trim()
trimStart()	Removes spaces at the beginning	" Hello".trimStart()
trimEnd()	Removes spaces at the end	"Hello ".trimEnd()
padStart()	Pads the beginning of a string	"5".padStart(3,"0") → "005"
padEnd()	Pads the end of a string	"5".padEnd(3,"0") → "500"
repeat()	Repeats a string	"Hi".repeat(3) → "HiHiHi"
localeCompare()	Compares two strings alphabetically	"a".localeCompare("b") → -1
toString()	Converts a value to a string	(123).toString() → "123"
valueOf()	Returns the primitive string value	"Hello".valueOf() */

let str = new String('david taylor swift')
let str1 = 'samuel chuks mary'

//Methods
console.log(str.charAt(6)) //t

let newStr = str.concat(str1)

console.log(newStr); //adds both str and str1

//Split

console.log(str1.split(" ")) //this means split by space

console.log(str.length);

//Math Object
/* Math.abs(x)	Returns the absolute (positive) value	Math.abs(-15)	15
Math.ceil(x)	Rounds a number up to the nearest integer	Math.ceil(4.2)	5
Math.floor(x)	Rounds a number down to the nearest integer	Math.floor(4.9)	4
Math.round(x)	Rounds to the nearest integer	Math.round(4.5)	5
Math.trunc(x)	Removes the decimal part	Math.trunc(4.9)	4
Math.max()	Returns the largest number	Math.max(5, 8, 2)	8
Math.min()	Returns the smallest number	Math.min(5, 8, 2)	2
Math.pow(x, y)	Raises x to the power of y	Math.pow(2, 3)	8
Math.sqrt(x)	Returns the square root	Math.sqrt(25)	5
Math.cbrt(x)	Returns the cube root	Math.cbrt(27)	3
Math.random()	Returns a random number between 0 and 1	Math.random()	0.456...
Math.sign(x)	Returns the sign of a number	Math.sign(-9)	-1
Math.exp(x)	Returns Euler's number (e) raised to x	Math.exp(1)	2.718...
Math.log(x)	Returns the natural logarithm	Math.log(10)	2.302...
Math.log10(x)	Returns the base-10 logarithm	Math.log10(100)	2
Math.sin(x)	Returns the sine of an angle (radians)	Math.sin(Math.PI/2)	1
Math.cos(x)	Returns the cosine of an angle (radians)	Math.cos(0)	1
Math.tan(x)	Returns the tangent of an angle (radians)	Math.tan(0)	0
Common Math Properties
Property	Description	Example
Math.PI	Value of π (3.14159...)	Math.PI
Math.E	Euler's number	Math.E
Math.SQRT2	Square root of 2	Math.SQRT2
Math.SQRT1_2	Square root of 1/2	Math.SQRT1_2*/


//Date methods

let dateObj = new Date() // Leaving it empty gives u current date
let dateObje = new Date('2023') // adding parameter would give u same day in 2023
console.log(dateObj);
console.log(dateObj.getDay);
console.log(dateObj.getFullYear);
console.log(dateObj.getMonth);
console.log(dateObj.getMinutes);



//1337x with statement = gives direct access to properties/methods of the obj in context

with (dateObj) {
  console.log(getDate());
}

let newWith = new Object ()
newWith.name = "Samuel"

with (newWith) {
  console.log(name)
}



// Browser Object 

/*Method	Description	Example
alert()	Displays an alert box with a message	alert("Welcome!");
prompt()	Displays a dialog box to get input from the user	prompt("Enter your name");
confirm()	Displays a dialog box with OK and Cancel	confirm("Are you sure?");
open()	Opens a new browser window or tab	window.open("https://example.com");
close()	Closes the current browser window (if allowed)	window.close();
setTimeout()	Executes code once after a specified delay	setTimeout(showMessage, 3000);
clearTimeout()	Cancels a timeout	clearTimeout(timer);
setInterval()	Repeats code at specified intervals	setInterval(showTime, 1000);
clearInterval()	Stops an interval	clearInterval(intervalId);
print()	Opens the browser's print dialog	window.print();
focus()	Brings the window to the front (limited browser support)	window.focus();
blur()	Removes focus from the current window (limited browser support)	window.blur(); */



// if (confirm("Do you want to open a new page?")) {
//     window.open();
// } else {
//     console.log("New page not opened!");
// }

//HISTROTY

/*history.back()	Goes back to the previous page	history.back();
history.forward()	Goes forward to the next page	history.forward();
history.go(n)	Moves to a specific page in the history	history.go(-1); */

// if (confirm("Do you want to go back to the previous page?")) {
//     window.history.back();
// } else {
//     console.log("Stayed on the current page.");
// }


//Navigator
console.log(navigator.appName)
console.log(navigator.appVersion)
console.log(navigator.platform)

console.log("<br>")


//location
console.log(location.pathname);
console.log(location.protocol);
console.log(location.host);
console.log(location.href);

//ASAign
// location.assign("link of where u want to be assigned to")

//RELOAD- doesent take any parameter

// location.reload()

// replace replace prefereend  history

//Document Object Model- DOM -Tree of HTML element and Objects, 
