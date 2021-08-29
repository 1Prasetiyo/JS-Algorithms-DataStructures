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

You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

The first match call would return the value ["%"] and the second would return ["!"].

Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

Your regex should use the global flag.

Your regex should find 6 non-alphanumeric characters in the string The five boxing wizards jump quickly..

Your regex should use the shorthand character to match characters which are non-alphanumeric.

Your regex should find 8 non-alphanumeric characters in the string Pack my box with five dozen liquor jugs.

Your regex should find 6 non-alphanumeric characters in the string How vexingly quick daft zebras jump!

Your regex should find 12 non-alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
//  Trun to
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

/* Should :
Your regex should use the global flag.
Passed

Your regex should find 6 non-alphanumeric characters in the string The five boxing wizards jump quickly..
Passed

Your regex should use the shorthand character to match characters which are non-alphanumeric.
Passed

Your regex should find 8 non-alphanumeric characters in the string Pack my box with five dozen liquor jugs.
Passed

Your regex should find 6 non-alphanumeric characters in the string How vexingly quick daft zebras jump!
Passed

Your regex should find 12 non-alphanumeric characters in the string 123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.
*/

/* Match All Numbers

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
// Turn to :
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

/* Should :
Your regex should use the shortcut character to match digit characters
Passed

Your regex should use the global flag.
Passed

Your regex should find 1 digit in the string 9.
Passed

Your regex should find 2 digits in the string Catch 22.
Passed

Your regex should find 3 digits in the string 101 Dalmatians.
Passed

Your regex should find no digits in the string One, Two, Three.
Passed

Your regex should find 2 digits in the string 21 Jump Street.
Passed

Your regex should find 4 digits in the string 2001: A Space Odyssey.
*/

/* Match All Non-Numbers

The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.
*/

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
// Turn to
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

/* Should :
Your regex should use the shortcut character to match non-digit characters
Passed

Your regex should use the global flag.
Passed

Your regex should find no non-digits in the string 9.
Passed

Your regex should find 6 non-digits in the string Catch 22.
Passed

Your regex should find 11 non-digits in the string 101 Dalmatians.
Passed

Your regex should find 15 non-digits in the string One, Two, Three.
Passed

Your regex should find 12 non-digits in the string 21 Jump Street.
Passed

Your regex should find 17 non-digits in the string 2001: A Space Odyssey.
*/

/* Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

    Usernames can only use alpha-numeric characters.

    The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

    Username letters can be lowercase and uppercase.

    Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
*/

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
// Turn to
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

/* Code Explanation
    ^ - start of input
    [a-z] - first character is a letter
    [a-z]+ - following characters are letters
    \d*$ - input ends with 0 or more digits
    | - or
    ^[a-z] - first character is a letter
    \d\d+ - following characters are 2 or more digits
    $ - end of input
*/
// or
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);

/* Code Explanation
    ^ - start of input
    [a-z] - first character is a letter
    [0-9]{2,0} - ends with two or more numbers
    | - or
    [a-z]+ - has one or more letters next
    \d* - and ends with zero or more numbers
    $ - end of input
    i - ignore case of input
*/

/* Should :
Your regex should match the string JACK
Passed

Your regex should not match the string J
Passed

Your regex should match the string Jo
Passed

Your regex should match the string Oceans11
Passed

Your regex should match the string RegexGuru
Passed

Your regex should not match the string 007
Passed

Your regex should not match the string 9
Passed

Your regex should not match the string A1
Passed

Your regex should not match the string BadUs3rnam3
Passed

Your regex should match the string Z97
Passed

Your regex should not match the string c57bT3
Passed

Your regex should match the string AB1
Passed

Your regex should not match the string J%4
*/

/* Match Whitespace

The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

This match call would return [" ", " "].

Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
// Turn to
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

/* Should :
Your regex should use the global flag.
Passed

Your regex should use the shorthand character \s to match all whitespace characters.
Passed

Your regex should find eight spaces in the string Men are from Mars and women are from Venus.
Passed

Your regex should find three spaces in the string Space: the final frontier.
Passed

Your regex should find no spaces in the string MindYourPersonalSpace
*/

/* Match Non-Whitespace Characters

You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

The value returned by the .length method would be 32.

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
// Turn to
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace).length;

/* Should :
Your regex should use the global flag.
Passed

Your regex should use the shorthand character \S to match all non-whitespace characters.
Passed

Your regex should find 35 non-spaces in the string Men are from Mars and women are from Venus.
Passed

Your regex should find 23 non-spaces in the string Space: the final frontier.
Passed

Your regex should find 21 non-spaces in the string MindYourPersonalSpace
*/

/* Specify Upper and Lower Number of Matches

Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

The first test call would return true, while the second would return false.

Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
*/

let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
// Turn to
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);

/* Should :
Your regex should use curly brackets.
Passed

Your regex should not match the string Ohh no
Passed

Your regex should match the string Ohhh no
Passed

Your regex should match the string Ohhhh no
Passed

Your regex should match the string Ohhhhh no
Passed

Your regex should match the string Ohhhhhh no
Passed

Your regex should not match the string Ohhhhhhh no
*/

/* Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

In order, the three test calls would return true, false, and true.

Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
*/

let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
// Turn to
let haStr = "Hazzzzah";
let haRegex = /haz{3,}zah/i; // Change this line
let result = haRegex.test(haStr);

/* Should :
Your regex should use curly brackets.
Passed

Your regex should not match the string Hazzah
Passed

Your regex should not match the string Hazzzah
Passed

Your regex should match the string Hazzzzah
Passed

Your regex should match the string Hazzzzzah
Passed

Your regex should match the string Hazzzzzzah
Passed

Your regex should match the string Hazzah with 30 z's in it.
*/

/* Specify Exact Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);

In order, the three test calls would return false, true, and false.

Change the regex timRegex to match the word Timber only when it has four letter m's.
*/

let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
// Turn to
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/i; // Change this line
let result = timRegex.test(timStr);

/* Should :
Your regex should use curly brackets.
Passed

Your regex should not match the string Timber
Passed

Your regex should not match the string Timmber
Passed

Your regex should not match the string Timmmber
Passed

Your regex should match the string Timmmmber
Passed

Your regex should not match the string Timber with 30 m's in it.
*/

/* Check for All or None

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

Both uses of the test method would return true.

Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
*/

let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
// Turn to
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/* Should :
Your regex should use the optional symbol, ?.
Passed

Your regex should match the string favorite
Passed

Your regex should match the string favourite
Passed

Your regex should not match the string fav
*/

/* Positive and Negative Lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
// Turn to
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);

/* Should :
Your regex should use two positive lookaheads.
Passed

Your regex should not match the string astronaut
Passed

Your regex should not match the string banan1
Passed

Your regex should match the string bana12
Passed

Your regex should match the string abc123
Passed

Your regex should not match the string 12345
Passed

Your regex should match the string 8pass99
Passed

Your regex should not match the string 1a2bcde
Passed

Your regex should match the string astr1on11aut
*/

/* Check For Mixed Grouping of Characters

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
*/

let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
// Turn to
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString);

/* Should :
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString);
*/

/* Reuse Patterns Using Capture Groups

Say you want to match a word that occurs multiple times like below.

let repeatStr = "row row row your boat";

You could use /row row row/, but what if you don't know the specific word repeated? Capture groups can be used to find repeated substrings.

Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

The example below matches a word that occurs thrice separated by spaces:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

Using the .match() method on a string will return an array with the matched substring, along with its captured groups.

Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
*/

let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
// Trun to
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

/* Should :
Your regex should use the shorthand character class for digits.
Passed

Your regex should reuse a capture group twice.
Passed

Your regex should match the string 42 42 42.
Passed

Your regex should match the string 100 100 100.
Passed

Your regex should not match the string 42 42 42 42.
Passed

Your regex should not match the string 42 42.
Passed

Your regex should not match the string 101 102 103.
Passed

Your regex should not match the string 1 2 3.
Passed

Your regex should match the string 10 10 10.
*/

/* Your regex should use the shorthand character class for digits.
Passed
