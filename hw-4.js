// SECTION 1
// Exercise 1: Formatting and Naming

var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
    console.log("Passed");
}

// Exercise 2: Defining Core Data Types
let stringVar = `This is a string.`;
let floatVar = 1.2;
let boolVar = true;
console.log("stringVar : " + stringVar);
console.log("floatVar: " + floatVar);
console.log("boolVar: " + boolVar);

// Exercise 3: Single-Line Comments

// int variable current score keeps track of user's score
let currentScore = 95;

// Exercise 4: Equality Comparison

console.log("`100` equals 100?: " + `100` == 100);
console.log("`100` equals 100?: " +`100` === 100);

// SECTION 2
// Exercise 5: Ternary Operator

let isWeekend = false;
let schedule;

isWeekend ? schedule = `Day off` : schedule = `Work day`;
console.log("Schedule: " + schedule);

// Exercise 6: If/Else Structure

let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}

// Exercise 7: Logical AND Operator

let hasPermission = true;
let itemCount = 3;

if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

// Exercise 8: For Loop

for (var n = 1; n < 6; n++) {
    console.log(n);
}

// Exercise 9: Looop Control

for (var n = 0; n < 10; n++) {
    console.log(n + "\n");
    if (n == 7) {
        break;
    }
}

/*
// Exercise 10: Ensuring Execution

let counter = 10;

do {
    console.log("Running once");
    counter--;s
}
while (counter > 9) {
    console.log("Failed");
}
*/

// SECTION 3
// Exercise 11: Function Definition
function calculateArea(width, height) {
    return width * height;
}

console.log("Output: " + calculateArea(5, 10));

// Exercise 12: Array Manipulation
let fruitList = [`Apple`, `Banana`];

// add string 'Grape' to end of array
fruitList.push(`Grape`);
console.log(fruitList);

// remove first item from array
fruitList.shift();
console.log(fruitList);

//log index number of 'Banana'
console.log(fruitList.indexOf(`Banana`));

// Exercise 13: Array Copying

let originalData = [1, 2, 3, 4];

let clonedData = originalData.slice();
console.log(clonedData);

// Exercise 14: Object Constructor

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

// Exercise 15: Object Instantiation
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");

let animalArray = [];
animalArray.push(dog);
animalArray.push(cat);
console.log(animalArray);
