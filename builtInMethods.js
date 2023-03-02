// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();
console.log("Hello World".toLowerCase());

// The includes() method is called on the string "Hello World"
// There is one argument, "Hello". Ihe includes() method evaluate whether the string it is called on contains the specified argument. It will return a Boolean value.
// The return value is true.
"Hello World".includes("Hello");
console.log("Hello World".includes("Hello"));

// The endsWith() method is called on the string "Hello World"
// There is a different argument in each of the following examples. The endsWith() method evaluates whether the string ends with the specified argument. It returns a Boolean value

// The return value of this example is false
"Hello World".endsWith("Hello");
console.log("Hello World".endsWith("Hello"));

// The return value of this example is true
"Hello World".endsWith("rld");
console.log("Hello World".endsWith("rld"));


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The includes() method is called on the fullName variable, which stores the string object "Rachel Soae Prather".
// The includes() method evaluates the string declared by the variable fullName and evaluates whether the string includes what is specified in the argument, the letter "c".
// The console.log() prints the output of the includes() method, which is the Boolean value true because the string "Rachel Soae Prather" does include the letter "c".
var fullName = "Rachel Soae Prather";
console.log(fullName.includes("c"));

// The toLowerCase() method is called on the petsNames variable, which stores the string object "Joey, Bertram, & Myrtle".
// The toLowerCase() method returns the string with all letters lowercased. There is no argument.
// The console.log() prints the return value of the toLowerCase() method, which in this case is "joey, bertram, & myrtle".
var petsNames = "Joey, Bertram, & Myrtle";
console.log(petsNames.toLowerCase());


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The slice() method is called on the variable siblingAges, which stores an array of three integers.
// The slice() method has two arguments which represent index positions of elements in the array.
// The slice() method removes all array elements outside of the range specified by the arguments, including the element in the index position indicated by the second argument.
// The slice() method returns array elements that are inside the range specified by the arguments, including the first argument.
// The console.log() prints the return value of the slice() method to the terminal.
// The return value is [29, 36]; the integers represented by index positions 0 and 1 are included, while the integer represented by index position 2 has been removed.
var siblingAges = [29, 36, 42];
console.log(siblingAges.slice(0, 2));

// The pop() method is called on the array siblings, which stores a list of three string objects.
// The pop() method removes the last string object in the array and returns that string object.
// The first console.log() prints the return value of the pop() method, the string "Meagan".
// The second console.log() prints the resultant version of the variable siblings, which has already been acted upon by the pop() method (and therefore the last string object has been removed). The return value is "Rachel,", "Fay".
var siblings = ["Rachel", "Fay", "Meagan"];
console.log(siblings.pop());
console.log(siblings);