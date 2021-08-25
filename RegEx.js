let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

/* Should :
You should use .test() to test the regex.
Passed
Your result should return true.
*/

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

/* Should :
Your regex waldoRegex should find the string Waldo
Passed
Your regex waldoRegex should not search for anything else.
Passed
You should perform a literal string match with your regex.
*/

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

/* Should :
Your regex petRegex should return true for the string John has a pet dog.
Passed
Your regex petRegex should return false for the string Emma has a pet rock.
Passed
Your regex petRegex should return true for the string Emma has a pet bird.
Passed
Your regex petRegex should return true for the string Liz has a pet cat.
Passed
Your regex petRegex should return false for the string Kara has a pet dolphin.
Passed
Your regex petRegex should return true for the string Alice has a pet fish.
Passed
Your regex petRegex should return false for the string Jimmy has a pet computer.
*/

// Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

/* Should :
Your regex should match the string freeCodeCamp
Passed
Your regex should match the string FreeCodeCamp
Passed
Your regex should match the string FreecodeCamp
Passed
Your regex should match the string FreeCodecamp
Passed
Your regex should not match the string Free Code Camp
Passed
Your regex should match the string FreeCOdeCamp
Passed
Your regex should not match the string FCC
Passed
Your regex should match the string FrEeCoDeCamp
Passed
Your regex should match the string FrEeCodECamp
Passed
Your regex should match the string FReeCodeCAmp
*/

// Extract Matches
