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
const s = [5, 7, 2];
function editInPlace() {
  s[0]=2;
  s[1]=5;
  s[2]=7;
}

editInPlace();

/* Should :
You should not replace const keyword.
Passed
s should be a constant variable (by using const).
Passed
You should not change the original array declaration.
Passed
s should be equal to [2, 5, 7].
*/

// Prevent Object Mutation

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/* Should :
You should not replace the const keyword.
Passed
MATH_CONSTANTS should be a constant variable (by using const).
Passed
You should not change the original declaration of MATH_CONSTANTS.
Passed
PI should equal 3.14.
*/

// Use Arrow Functions to Write Concise Anonymous Functions
var magic = function() {
  return new Date();
};
// return to :
const magic = () => new Date();

/* Should :
You should replace the var keyword.
magic should be a constant variable (by using const).
magic should be a function.
magic() should return the correct date.
The function keyword should not be used.
*/

// Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
//  return to :
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

/* Should :
You should replace the var keyword.
Passed
myConcat should be a constant variable (by using const).
Passed
myConcat should be an arrow function with two parameters
Passed
myConcat() should return [1, 2, 3, 4, 5].
Passed
The function keyword should not be used.
*/

// Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

/* Should :
The result of increment(5, 2) should be 7.
Passed
The result of increment(5) should be 6.
Passed
A default parameter value of 1 should be used for value.
*/

// Use the Rest Parameter with Function Parameters
