// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
  console.log("Hello, what is your name?");
}

askForName()
// Corrected syntax per proper formatting conventions: moved console.log statement to new line, moved closing curly brace to another new line below that. Added semicolon at end of console.log statement mark end of statement and reinforce best practices.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// Indented variable and return statements for readability. Added semicolon at end of variable statement to mark end of statement. Removed indentations before closing bracket. Added console.log to the 2 statements calling the function in order to view outputs in terminal and ensure running correctly.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// Corrected func to function per proper function format. Added space between makeFreshPesto() and opening curly brace. Moved ending curly brace to new line. No console.log needed to run this one, confirmed in terminal.

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}

console.log(average(1, 2));
console.log(average(5, 8));
console.log(average(5, 5));
// Moved opening curly brace to be on the same line as function statement, marking opening of function code block. Indented first variable statement and removed 1 indent from second variable statement to put them on the same level, for readability. Deleted extra blank line between var and return statements. Indented return statement to put it on same level as other statements in code block, for readability. Added semicolon at end of return statement to indicate end of statement. Removed indentation in front of closing curly brace. Added several console.log statement outside of function code block to test function.