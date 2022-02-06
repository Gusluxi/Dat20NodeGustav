// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
}; 

// Log the message 

console.log("1. msg: ",alienMessage.message)

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const myLife = {
	name: "Gustav",
	age: 23
}

console.log("2 My Object", myLife)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

stackOverflow.isAllowed = true;

console.log("3. The Object",stackOverflow);
// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

console.log("4. Removing pre", thisSong);

delete thisSong.description;
thisSong.about = "Just a Tribute";

console.log("4. Removing post", thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


