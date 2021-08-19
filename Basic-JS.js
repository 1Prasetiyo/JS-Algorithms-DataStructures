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
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

/* Should :
hatValue should be a string
Passed
The value of hatValue should be the string ballcap
Passed
shirtValue should be a string
Passed
The value of shirtValue should be the string jersey
Passed
You should use dot notation twice
*/

// Accessing Object Properties with Bracket Notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj ["an entree"];   
var drinkValue = testObj ["the drink"];    

/* Should :
entreeValue should be a string
Passed
The value of entreeValue should be the string hamburger
Passed
drinkValue should be a string
Passed
The value of drinkValue should be the string water
Passed
You should use bracket notation twice
*/

// Accessing Object Properties with Variables
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
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    "": undefined
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

/* Should :
phoneticLookup("alpha") should equal the string Adams
Passed
phoneticLookup("bravo") should equal the string Boston
Passed
phoneticLookup("charlie") should equal the string Chicago
Passed
phoneticLookup("delta") should equal the string Denver
Passed
phoneticLookup("echo") should equal the string Easy
Passed
phoneticLookup("foxtrot") should equal the string Frank
Passed
phoneticLookup("") should equal undefined
Passed
You should not modify the return statement
Passed
You should not use case, switch, or if statements
*/

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]; 
  } else {  
    return "Not Found";
  }
}

/* Should :
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
Passed
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
Passed
checkObj({city: "Seattle"}, "city") should return the string Seattle.
Passed
checkObj({city: "Seattle"}, "district") should return the string Not Found.
Passed
checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/

// Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push({
  "artist": "Ebit",
  "title": "Rumput Bergoyang",
  "release_year": 1995,
  "formats": [
    "CD",
    "mp3",
    "DVD"
  ]
}
);

/* Should :
myMusic should be an array
Passed
myMusic should have at least two elements
Passed
The elements in the myMusic array should be objects
Passed
Your object in myMusic should have at least 4 properties
Passed
Your object in myMusic should contain the property artist which is a string
Passed
Your object in myMusic should contain the property title which is a string
Passed
Your object in myMusic should contain the property release_year which is a number
Passed
Your object in myMusic should contain a formats property which is an array
Passed
formats should be an array of strings with at least two elements
*/

// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

/* Should :
gloveBoxContents should equal the string maps.
Passed
Your code should use dot and bracket notation to access myStorage.
*/

// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];

/* Should :
secondTree should equal the string pine.
Passed
Your code should use dot and bracket notation to access myPlants.
*/

// Record Collection (hard)
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

/*
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
Passed
After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last element.
Passed
After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
Passed
After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
Passed
After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
Passed
After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
Passed
After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
*/

// Iterate with JavaScript While Loops
var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

/* Should :
You should be using a while loop for this.
Passed
myArray should equal [5,4,3,2,1,0].
*/

// Iterate with JavaScript For Loops
var myArray = [];
for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

/* Should :
You should be using a for loop for this.
Passed
myArray should equal [1,2,3,4,5].
*/

// Iterate Odd Numbers With a For Loop
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
} 
/* Should :
You should be using a for loop for this.
Passed
myArray should equal [1,3,5,7,9].
*/

// Count Backwards With a For Loop
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

/* Should :
You should be using a for loop for this.
Passed
You should be using the array method push.
Passed
myArray should equal [9,7,5,3,1].
*/

// Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/* Should :
total should be declared and initialized to 0.
Passed
total should equal 20.
Passed
You should use a for loop to iterate through myArr.
Passed
You should not attempt to directly assign the value 20 to total.
*/

// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  } return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

/* Should :
multiplyAll([[1],[2],[3]]) should return 6
Passed
multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
Passed
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) should return 54
*/

// Iterate with JavaScript Do...While Loops
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 10);
while (i < 5) {
  myArray.push(i);
  i++;
}

/* Should :
You should be using a do...while loop for this exercise.
Passed
myArray should equal [10].
Passed
i should equal 11
*/

// Replace Loops using Recursion
function sum(arr, n) {
  if (n <=0 ) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n -1];
  }
}

/* Should :
sum([1], 0) should equal 0.
Passed
sum([2, 3, 4], 1) should equal 2.
Passed
sum([2, 3, 4, 5], 3) should equal 9.
Passed
Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
Passed
You should use recursion to solve this problem.
*/

// Profile Lookup
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

/* Should :
lookUpProfile("Kristian", "lastName") should return the string Vos
Passed
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Passed
lookUpProfile("Harry", "likes") should return an array
Passed
lookUpProfile("Bob", "number") should return the string No such contact
Passed
lookUpProfile("Bob", "potato") should return the string No such contact
Passed
lookUpProfile("Akira", "address") should return the string No such property
*/

// Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
  return 0;
}
/* Should :
randomFraction should return a random number.
Passed
The number returned by randomFraction should be a decimal.
Passed
You should be using Math.random to generate the random decimal number.
*/

// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

/* Should :
The result of randomWholeNum should be a whole number.
Passed
You should use Math.random to generate a random number.
Passed
You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
Passed
You should use Math.floor to remove the decimal part of the number.
*/

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax-myMin + 1)) + myMin;
  return 0;
}
/* Should :
The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
Passed
The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
Passed
The random number generated by randomRange should be an integer, not a decimal.
Passed
randomRange should use both myMax and myMin, and return a random number in your range.
*/

// Use the parseInt Function
function convertToInteger(str) {
  var a = parseInt(str);
  return a;
}

convertToInteger("56");

/* Should :
convertToInteger should use the parseInt() function
Passed
convertToInteger("56") should return a number
Passed
convertToInteger("56") should return 56
Passed
convertToInteger("77") should return 77
Passed
convertToInteger("JamesBond") should return NaN
*/

// Use the parseInt Function with a Radix
function convertToInteger(str, radix) {
  var a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");

/* Should :
convertToInteger should use the parseInt() function
Passed
convertToInteger("10011") should return a number
Passed
convertToInteger("10011") should return 19
Passed
convertToInteger("111001") should return 57
Passed
convertToInteger("JamesBond") should return NaN
*/

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/* Should :
checkEqual should use the conditional operator
Passed
checkEqual(1, 2) should return the string Not Equal
Passed
checkEqual(1, 1) should return the string Equal
Passed
checkEqual(1, -1) should return the string Not Equal
*/

// Use Multiple Conditional (Ternary) Operators
