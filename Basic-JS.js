// Passing Values to Functions with Arguments
function functionWithArgs(a, b) {
    console.log(a+b);
}

functionWithArgs(1, 2)

functionWithArgs(7, 9)

// Global Scope and Functions
var myGlobal = (10);

function fun1() {
    oopsGlobal = (5);
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
    var myVar = "apple";
    console.log(myVar);
}

myLocalScope();

console.log(myVar);

// Global vs. Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}

myOutfit();

// Return a Value from a Function with Return
function timesFive(num) {
    return num * 5
}

var answer = timesFive(5)

// Understanding Undefined Value returned from a Function
var sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive () {
    sum = sum + 5;
}

addThree();
addFive();

// Assignment with a Returned Value
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

var processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
function welcomeToBooleans() {
    return true;
}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
}

// Comparison with the Equality Operator
function testEqual(val) {
    if (val ==12) {
      return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) {
      return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// Practice comparing different values
// Setup
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }

    if (val > 10) {
      return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }

    if (val >= 10) { 
      return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val <25) {  
      return "Under 25";
    }

    if (val <55) {  
      return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
      return "Yes";
    }
    return "No";
}

testLogicalAnd(10);

// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);

// Introducing Else Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }

    else {
      result = "5 or Smaller";
    }

    return result;
}

testElse(4);

// Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);

// Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20)  {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
    return "huge";
  }
}

testSize(7);

// Golf Code
var names = ["Hole-in-one", "Eagle", "Birdie", " Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]: "";
}

golfScore(5, 4);

// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1 :
      answer = "alpha";
      break;
    case 2 :
      answer = "beta";
      break;
    case 3 :
      answer = "gamma";
      break;
    case 4 :
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a" :
      answer = "apple";
      break;
    case "b" :
      answer = "bird";
      break;
    case "c" :
      answer = "cat";
      break;
    default :
      answer = "stuff";
  }
  return answer;
}

switchOfStuff(1);

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
  }
  return answer;
}

sequentialSizes(1);

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}

chainToSwitch(7);

// Returning Boolean Values from Functions
function isLess(a, b) {
  return (a <= b) ;
}

isLess(10, 15);

// Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

// Counting Cards
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "A":
    case "J":
    case "K":
    case "Q":
      count--;
      break;
}

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Build JavaScript Objects
var myDog = {
  "name" : "Doggy",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["Balls", "Plates"]
};

/* Should:
Passed
myDog should contain the property name and it should be a string.
Passed
myDog should contain the property legs and it should be a number.
Passed
myDog should contain the property tails and it should be a number.
Passed
myDog should contain the property friends and it should be an array.
Passed
myDog should only contain all the given properties.
*/

// Accessing Object Properties with Dot Notation
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;       
var player = testObj[playerNumber];   

/* Should :
playerNumber should be a number
Passed
The variable player should be a string
Passed
The value of player should be the string Montana
Passed
You should use bracket notation to access testObj
Passed
You should not assign the value Montana to the variable player directly.
Passed
You should be using the variable playerNumber in your bracket notation
*/

// Updating Object Properties
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
  myDog.name = "Happy Coder";

/* Should :
You should update myDog's name property to equal the string Happy Coder.
Passed
You should not edit the myDog definition.
*/

// Add New Properties to a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

/* Should :
You should add the property bark to myDog.
Passed
You should not add bark to the initialization of myDog.
*/

// Delete Properties from a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

/* Should :
You should delete the property tails from myDog.
Passed
You should not modify the myDog setup.
*/

// Using Objects for Lookups
