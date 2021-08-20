// Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/* Should :
var should not exist in the code.
Passed
catName should be the string Oliver.
Passed
quote should be the string Oliver says Meow!
*/

// Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
      console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

/* Should :
var should not exist in code.
Passed
The variable i declared in the if statement should equal the string block scope.
Passed
checkScope() should return the string function scope
*/

// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

/* Should :
var should not exist in your code.
Passed
SENTENCE should be a constant variable declared with const.
Passed
i should be declared with let.
Passed
console.log should be changed to print the SENTENCE variable.
*/

// Mutate an Array Declared with const
