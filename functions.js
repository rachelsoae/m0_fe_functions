// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "'sup";
}

var generalGreeting = greeting();
var hiThere = greeting();

console.log(generalGreeting);
console.log(hiThere);

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `'sup ${name}!`;
}

var sayHello = customGreeting("Rachel");
var happyToSeeYou = customGreeting("Sienna");

console.log(sayHello);
console.log(happyToSeeYou);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `It's so amazing to meet you, ${firstName} ${middleName} ${lastName}!`;
}

var name1 = greetPerson("Rachel", "Soae", "Prather");
var name2 = greetPerson("Meagan", "Martha", "Roepcke");

console.log(name1);
console.log(name2);

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    var squared = Math.pow(num, 2);
    return squared
}
var squareIt = square(3)
var powerOfTwo = square(6)

console.log(`3 squared is ${squareIt}`);
console.log(`6 to the power of 2 is ${powerOfTwo}`);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if (quantity === 0) {
        return `${item} - OUT of stock!`;
    } else if (quantity > 3) {
        return `${item} is stocked`;
    } else {
        return `${item} - running LOW`;
    }
    }

checkStock(4, "Coffee");
// => "Coffee is stocked"
console.log(checkStock(4, "Coffee"));

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"
console.log(checkStock(3, "Tortillas"));

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"
console.log(checkStock(0, "Cheese"));

checkStock(1, "Salsa");
// => "Salsa - running LOW"
console.log(checkStock(1, "Salsa"));