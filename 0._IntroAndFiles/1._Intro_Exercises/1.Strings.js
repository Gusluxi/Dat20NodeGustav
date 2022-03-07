// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
// --------------------------------------

const total = parseFloat(numberOne) + parseFloat(numberTwo)
console.log("+", +numberOne + +numberTwo);
console.log("1. parseFloat", total);

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherTotal = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log("2. anotherTotal", parseFloat(anotherTotal.toFixed(2)));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

console.log("3. Decimals and average",(one,two,three / 3).toFixed(5))



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("4.letters",letters.charAt(2))


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("5. upper case replace, ", fact.replace("j","J"))

// --------------------------------------



