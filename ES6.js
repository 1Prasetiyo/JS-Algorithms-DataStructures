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
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
// return to
const sum = (...args) => args.reduce((a, b) => a + b, 0);

/* Should :
The result of sum(0,1,2) should be 3
The result of sum(1,2,3,4) should be 10
The result of sum(5) should be 5
The result of sum() should be 0
sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.
*/

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
//  Return to
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

/* Should :
arr2 should be correct copy of arr1.
Passed
... spread operator should be used to duplicate arr1.
Passed
arr2 should remain unchanged when arr1 is changed.
*/

// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
// return to
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

/* Should :
You should remove the ES5 assignment syntax.
Passed
You should use destructuring to create the today variable.
Passed
You should use destructuring to create the tomorrow variable.
Passed
today should be equal to 77 and tomorrow should be equal to 80.
*/

// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
//  return to
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

/* Should :
You should remove the ES5 assignment syntax.
Passed
You should use destructuring to create the highToday variable.
Passed
You should use destructuring to create the highTomorrow variable.
Passed
highToday should be equal to 77 and highTomorrow should be equal to 80.
*/

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;
// return to
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

/* Should :
You should remove the ES5 assignment syntax.
Passed
You should use destructuring to create the lowToday variable.
Passed
You should use destructuring to create the highToday variable.
Passed
lowToday should be equal to 64 and highToday should be equal to 77.
*/

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];

/* Should :
The value of a should be 6, after swapping.
Passed
The value of b should be 8, after swapping.
Passed
You should use array destructuring to swap a and b.
*/

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);

/* Should : 
arr should be [3,4,5,6,7,8,9,10]
Passed
source should be [1,2,3,4,5,6,7,8,9,10]
Passed
Array.slice() should not be used.
Passed
Destructuring on list should be used.
*/

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; 
// return to
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

/* Should :
stats should be an object.
Passed
half(stats) should be 28.015
Passed
Destructuring should be used.
Passed
Destructured parameter should be used.
*/

// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);

/* Should :
failuresList should be an array containing result failure messages.
Passed
failuresList should be equal to the specified output.
Passed
Template strings and expression interpolation should be used.
Passed
An iterator should be used.
*/

// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
// return  to
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender
});

/* Should :
createPerson("Zodiac Hasbro", 56, "male") should return {name: "Zodiac Hasbro", age: 56, gender: "male"}.
Passed
Your code should not use key:value.
*/

// Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

/* Should :
Traditional function expression should not be used.
Passed
setGear should be a declarative function.
Passed
bicycle.setGear(48) should change the gear value to 48.
*/

// Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name=name;
  }
}

const carrot = new Vegetable('carrot');

/* Should :
Vegetable should be a class with a defined constructor method.
Passed
The class keyword should be used.
Passed
Vegetable should be able to be instantiated.
Passed
carrot.name should return carrot.
*/

// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 26;
temp = thermos.temperature;

/* Should :
Thermostat should be a class with a defined constructor method.
Passed
class keyword should be used.
Passed
Thermostat should be able to be instantiated.
Passed
When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.
Passed
A getter should be defined.
*/

// Create a Module Script
