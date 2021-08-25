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
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

/* Should :
The result should have the string coding
Passed
Your regex codingRegex should search for the string coding
Passed
You should use the .match() method.
*/

// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

/* Should :
Your regex starRegex should use the global flag g
Passed
Your regex starRegex should use the case insensitive flag i
Passed
Your match should match both occurrences of the word Twinkle
Passed
Your match result should have two elements in it.
*/

// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run|sun|fun|pun|nun|bun./; // Change this line
let result = unRegex.test(exampleStr);

/* Should :
You should use the .test() method.
Passed
You should use the wildcard character in your regex unRegex
Passed
Your regex unRegex should match run in the string Let us go on a run.
Passed
Your regex unRegex should match sun in the string The sun is out today.
Passed
Your regex unRegex should match fun in the string Coding is a lot of fun.
Passed
Your regex unRegex should match pun in the string Seven days without a pun makes one weak.
Passed
Your regex unRegex should match nun in the string One takes a vow to be a nun.
Passed
Your regex unRegex should match bun in the string She got fired from the hot dog stand for putting her hair in a bun.
Passed
Your regex unRegex should not match the string There is a bug in my code.
Passed
Your regex unRegex should not match the string Catch me if you can.
*/

// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

/* Should :
You should find all 25 vowels.
Passed
Your regex vowelRegex should use a character class.
Passed
Your regex vowelRegex should use the global flag.
Passed
Your regex vowelRegex should use the case insensitive flag.
Passed
Your regex should not match any consonants.
*/

// Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

/* Should :
Your regex alphabetRegex should match 35 items.
Passed
Your regex alphabetRegex should use the global flag.
Passed
Your regex alphabetRegex should use the case insensitive flag.
*/

// Match Numbers and Letters of the Alphabet
