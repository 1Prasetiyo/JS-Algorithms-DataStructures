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
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/* Should :
Your regex myRegex should match 17 items.
Passed
Your regex myRegex should use the global flag.
Passed
Your regex myRegex should use the case insensitive flag.
*/

// Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

/* Should :
Your regex myRegex should match 9 items.
Passed
Your regex myRegex should use the global flag.
Passed
Your regex myRegex should use the case insensitive flag.
*/

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

/* Should :
Your regex myRegex should use the + sign to match one or more s characters.
Passed
Your regex myRegex should match 2 items.
Passed
The result variable should be an array with two matches of ss
*/

// Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

/* Should :
Your regex chewieRegex should use the * character to match zero or more a characters.
Passed
Your regex should match the string A in chewieQuote.
Passed
Your regex should match the string Aaaaaaaaaaaaaaaa in chewieQuote.
Passed
Your regex chewieRegex should match 16 characters in chewieQuote.
Passed
Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
Passed
Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.
*/

// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

/* Should :
The result variable should be an array with <h1> in it
Passed
myRegex should use lazy matching
Passed
myRegex should not include the string h1
*/

/* Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
*/

let reCriminals = /./; // Change this line
// Turn to:
let reCriminals = /C+/; // Change this line

/* Should :
Your regex should match one criminal (C) in the string C
Passed

Your regex should match two criminals (CC) in the string CC
Passed

Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.
Passed

Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
Passed

Your regex should not match any criminals in the empty string ""
Passed

Your regex should not match any criminals in the string P1P2P3
Passed

Your regex should match fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.
*/

/* Match Beginning String Patterns

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

The first test call would return true, while the second would return false.

Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
// Turn to:
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

/* Should :
Your regex should search for the string Cal with a capital letter.
Passed

Your regex should not use any flags.
Passed

Your regex should match the string Cal at the beginning of the string.
Passed

Your regex should not match the string Cal in the middle of a string.
*/

/* Match Ending String Patterns

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

The first test call would return true, while the second would return false.

Use the anchor character ($) to match the string caboose at the end of the string caboose.
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
// Turn to :
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

/* Should :
You should search for caboose with the dollar sign $ anchor in your regex.
Passed

Your regex should not use any flags.
Passed

You should match caboose at the end of the string The last car on a train is the caboose
*/

/* Match All Letters and Numbers


Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
// Turn to
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

/* Should :
Your regex should use the global flag.
Passed

Your regex should use the shorthand character \w to match all characters which are alphanumeric.
Passed

Your regex should find 31 alphanumeric characters in the string The five boxing wizards jump quickly.
Passed

Your regex should find 32 alphanumeric characters in the string Pack my box with five dozen liquor jugs.
Passed

Your regex should find 30 alphanumeric characters in the string How vexingly quick daft zebras jump!
Passed

Your regex should find 36 alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

/* Match Everything But Letters and Numbers
