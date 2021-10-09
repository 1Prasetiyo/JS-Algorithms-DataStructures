/* Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    return 1;
  }
  
  sumAll([1, 4]);
// SOLUTION
/* Problem Explanation

You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1

Hints
Hint 1

Use Math.max() to find the maximum value of two numbers.
Hint 2

Use Math.min() to find the minimum value of two numbers.
Hint 3

Remember to that you must add all the numbers in between so this would require a way to get those numbers.
*/

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  
/*  Code Explanation
  
      First create a variable to store the max number between two.
      The same as before for the Smallest number.
      We create a accumulator variable to add the numbers.
  
  Since the numbers might not be always in order, using max() and min() will help organize.
*/

// SOLUTION 2
const sumAll = arr => {
  // Buckle up everything to one!
  const startNum = arr[0];
  const endNum = arr[1];

  // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
  // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
  const numCount = Math.abs(startNum - endNum) + 1;

  // Using Arithmetic Progression summing formula
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};

/* Code Explanation

    The formula for calculating the sum of a continuous range is “(startNum + endNum) * numCount / 2”.
    arr[0] and arr[1] can either be startNum or endNum, order doesn’t matter.
    We can get the count of numbers in range by “Math.abs(arr[0] - arr[1]) + 1”.
    Applying the formula by plugging in the numbers.
*/

// SOLUTION 3
function sumAll(arr) {
    let sumBetween = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  
/*  Code Explanation
  
      Creating a variable sum to store the sum of the elements.
      Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
      Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.
*/

// SOLUTION 4
function sumAll(arr) {
    const [first, last] = [...arr].sort((a, b) => a - b);
    return first !== last
      ? first + sumAll([first + 1, last])
      : first;
  }
  
  sumAll([1, 4]);

/* Should :
sumAll([1, 4]) should return a number.
Passed

sumAll([1, 4]) should return 10.
Passed

sumAll([4, 1]) should return 10.
Passed

sumAll([5, 10]) should return 45.
Passed

sumAll([10, 5]) should return 45.
END*/

/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// SOLUTION

/* Problem Explanation

Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

Hints
Hint 1

Merge the list to make it easy to compare functions.
Hint 2

Use filter to get the new array, you will need to create a callback function.
Hint 3

The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.
*/

//  (Imperative Solution)

function diffArray(arr1, arr2) {
var newArr = [];

function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      // Pushing the elements unique to first to newArr
      newArr.push(first[i]);
    }
  }
}

onlyInFirst(arr1, arr2);
onlyInFirst(arr2, arr1);

return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/* Code Explanation

Read the comments in the code.
*/

// SOLUTION 2 (Declarative Solution):

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*  Code Explanation

Explain solution here and add any relevant links
*/

// SOLUTION (Declarative Solution)

function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
}

/* Should :
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Passed

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Passed

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
Passed

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Passed

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Passed

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Passed

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Passed

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Passed

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Passed

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Passed

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Passed

[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Passed

[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Passed

[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Passed

[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
END*/

/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// SOLUTION
/* Problem Explanation

This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two or more but on the script you only see two. You will remove any number from the first argument that is the same as any other other arguments.

Hints
Hint 1

You need to work with arguments as if it was a regular array. The best way is to convert it into one.
Hint 2

You may want to use use various methods like: indexOf(), includes(), or filter(). When in doubt about any function, check those docs!
*/

function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}

/*  Code Explanation

    Create an array of valsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. We’ll use this to check against arr.

    Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. This second loop will iterate through valsToRemove .

        Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].

        If the value at the current index is equal in both arrays, use delete to remove it from arr.

    Outside of the nested loops: return the modified array, filtering out any null's created by the delete operator.
*/

// SOLUTION 2
function destroyer(arr) {
  var valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

/*  Code Explanation

    Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. Use the slice() method on the array of arguments, starting from the second index, 1.

    Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep the value in the original array or false to remove it.
*/

// SOLUTION 3
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

/*  Code Explanation

    Using spread operator to retrieve the arguments.
    Return the filtered array, using includes().
*/

/* Should :
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed

destroyer([2, 3, 2, 3], 2, 3) should return [].
Passed

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Passed

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
END*/

/* Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// SOLUTION
/* Problem Explanation

Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties and values in the Object passed as second parameter.

Hints
Hint 1

You may use for loop or the Array.prototype.filter method.
Hint 2

Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).
Hint 3

Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.
*/

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

/* Code Explanation

  We filter through the array using .filter().
  Using a for loop we loop through each item in the object.
  We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
  We return false if the above if statement is correct. Otherwise, we return true;
*/

// SOLUTION 2
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

/*  Code Explanation

    We filter through the collection using .filter().
    Next, we return a Boolean value for the .filter() method.
    Finally, we reduce to Boolean value to be returned for the .every() method.
*/

// SOLUTION 3
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function(obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

/*  Code Explanation

    We start by filtering through collection using Array.filter().
    Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
    Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
    This single Boolean will be used to filter through the collection.
*/

/* Should :
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
Passed

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
Passed

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
Passed

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
Passed

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
Passed

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
END*/

/* Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
// SOLUTION
/* Problem Explanation

Convert the given string to a lowercase sentence with words joined by dashes.


Hints
Hint 1

Create a regular expression for all white spaces and underscores.
Hint 2

You will also have to make everything lowercase.
Hint 3

The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with dashes using replace().
*/

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

/*  Code Explanation

    regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
    The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
    While returning the string, another replace() replaces spaces and underscores with dashes using regex.
*/

// SOLUTION 2
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

// test here
spinalCase("This Is Spinal Tap");

/*  Code Explanation

    Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
    Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.
*/

// SOLUTION 3
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

/*  Code Explanation

    Split the string at one of the following conditions (converted to an array)
        a whitespace character [\s] is encountered
        underscore character [_] is encountered
        or is followed by an uppercase letter [(?=[A-Z])]
    Join the array using a hyphen (-)
    Lowercase the whole resulting string
*/

/* Should :
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Passed

spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
Passed

spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
Passed

spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
Passed

spinalCase("AllThe-small Things") should return the string all-the-small-things.
END*/

/* Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
// SOLUTION
/* Problem Explanation

You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an “ay”. If a word begins with a vowel you just add “way” to the end. It might not be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.


Hints
Hint 1

You will probably want to use regular expressions. This will allow you to convert the words easily.
Hint 2

If the first character is a vowel, then take that whole word and add ‘way’ at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add ‘ay’. This might be confusing but, it is not just the first consonant but all of them before the first vowel.
Hint 3

You will need to use everything you know about string manipulation to get the last part right. However, it can be done with substr alone.
*/

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

/*  Code Explanation

    start at beginning and get longest match of everything not a vowel (consonants)

    if regex pattern found, it saves the match; else, it returns null

    if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end

    if regex pattern not found (starts with vowels), it just adds “way” to the ending
*/

// SOLUTION 2
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");

/*  Code Explanation

    Make an empty string to hold your Pig Latin word.
    Assign your appropriate regular expression to a variable.
    If the first character is a vowel, just add way to end of string and return it.
    If the first character is not a vowel:
        Find number of consonants before first vowel with help of indexOf(), match() and regex.
        Start Pig Latin string with first vowel till the end.
        Add letters before first vowel to end of string.
        substr() is used for string manipulation here.
        Add ay to end of string and return it.
*/

// SOLUTION 3

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");

/*  Code Explanation

    First, check to see if the string begins with a vowel.
        The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
        If it does, you only need to return the original string with “way” appended on the end.
    If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
        To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
        If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
    Now, we can start building our Pig Latin string to return. This can be built in three parts:
        The first part contains all of the characters in the original string, starting from the first vowel. We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
        The second part contains the consonant string we just built. (If you add the second and first parts of this string together, you will get the original string.)
        The final part contains “ay”.
*/

// SOLUTION 4

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");

/*  Code Explanation

    Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
    Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.
*/

// SOLUTION 5

function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

/* Should :
translatePigLatin("california") should return the string aliforniacay.
Passed

translatePigLatin("paragraphs") should return the string aragraphspay.
Passed

translatePigLatin("glove") should return the string oveglay.
Passed

translatePigLatin("algorithm") should return the string algorithmway.
Passed

translatePigLatin("eight") should return the string eightway.
Passed

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Passed

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
END*/

/* Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// SOLUTION
/* Problem Explanation

You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase if there is one.


Hints
Hint 1

  Find the index where before is in the string.

Hint 2

  Check first letter case.

Hint 3

  Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the changes where done using just that one variable.
*/

function myReplace(str, before, after) {
// Find index where before is on string
var index = str.indexOf(before);
// Check to see if the first letter is uppercase or not
if (str[index] === str[index].toUpperCase()) {
  // Change the after word to be capitalized before we use it.
  after = after.charAt(0).toUpperCase() + after.slice(1);
} else {
  // Change the after word to be uncapitalized before we use it.
  after = after.charAt(0).toLowerCase() + after.slice(1);
}
// Now replace the original str with the edited one.
str = str.replace(before, after);

return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Code Explanation

  Use indexOf() to find location of before in string.
  If first letter of before is capitalized, change first letter of after to uppercase.
  Replace before in the string with after.
  Return the new string.
*/

// SOLUTION 2
function myReplace(str, before, after) {
// Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
if (/^[A-Z]/.test(before)) {
  after = after[0].toUpperCase() + after.substring(1)
} else {
  after = after[0].toLowerCase() + after.substring(1)
}

// return string with argument "before" replaced by argument "after" (with correct case)
return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Code Explanation

  In this solution, regular expression ^[A-Z] is used to check (test) if the first character of before is uppercase.
  If first letter of before is capitalized, change the first letter of after to uppercase.
  Else: If first letter of before is lowercase, change the first letter of after to lowercase
  Return the new string replacing before with after.
*/

// SOLUTION 3
function myReplace(str, before, after) {
// create a function that will change the casing of any number of letter in parameter "target"
// matching parameter "source"
function applyCasing(source, target) {
  // split the source and target strings to array of letters
  var targetArr = target.split("");
  var sourceArr = source.split("");
  // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
  for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
    // find out the casing of every letter from sourceArr using regular expression
    // if sourceArr[i] is upper case then convert targetArr[i] to upper case
    if (/[A-Z]/.test(sourceArr[i])) {
      targetArr[i] = targetArr[i].toUpperCase();
    }
    // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
    else targetArr[i] = targetArr[i].toLowerCase();
  }
  // join modified targetArr to string and return
  return targetArr.join("");
}

// replace "before" with "after" with "before"-casing
return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Code Explanation

  Both the before and after are passed as arguments to applyCasing().
  The function applyCasing() is used to change the case of respective characters in targetArr i.e., after in accordance with that of characters in sourceArr i.e., before.
  replace() is used to replace before with after, whose casing is same as before.
*/

// SOLUTION 4
// Add new method to the String object, not overriding it if one exists already
String.prototype.capitalize =
String.prototype.capitalize ||
function() {
  return this[0].toUpperCase() + this.slice(1);
};

const Util = (function() {
// Create utility module to hold helper functions
function textCase(str, tCase) {
  // Depending if the tCase argument is passed we either set the case of the
  // given string or we get it.
  // Those functions can be expanded for other text cases.

  if (tCase) {
    return setCase(str, tCase);
  } else {
    return getCase(str);
  }

  function setCase(str, tCase) {
    switch (tCase) {
      case "uppercase":
        return str.toUpperCase();
      case "lowercase":
        return str.toLowerCase();
      case "capitalized":
        return str.capitalize();
      default:
        return str;
    }
  }

  function getCase(str) {
    if (str === str.toUpperCase()) {
      return "uppercase";
    }
    if (str === str.toLowerCase()) {
      return "lowercase";
    }
    if (str === str.capitalize()) {
      return "capitalized";
    }
    return "normal";
  }
}

return {
  textCase
};
})();

function myReplace(str, before, after) {
const { textCase } = Util;
const regex = new RegExp(before, "gi");
const replacingStr = textCase(after, textCase(before));

return str.replace(regex, replacingStr);
}



/* Should :
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
Passed

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
Passed

myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
Passed

myReplace("This has a spellngi error", "spellngi", "spelling") should return the string This has a spelling error.
Passed

myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
Passed

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.
END*/

/* DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  return str;
}

pairElement("GCG");

// SOLUTION
/* Problem Explanation

    You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

    Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together, and “G” and “C” are always paired together.
    This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
    E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
    The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
    The number of elements in the final output equals the number of characters in the input.

This problem does not involve rearranging the input into different combinations or permutations.

Hints
Hint 1

    There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.

Hint 2

    I would recommend using a switch, as it makes things a lot smoother.

Hint 3

    The result must be an array of arrays, so keep that in mind when pushing things.
*/

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");

/* Code Explanation

    The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
    Since we have to the original and the pair, I decided to take all four cases instead of the base two.
    Create an empty array and use the search function to push the right values to the array and return them.
*/

// SOLUTION 2
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");

/* Code Explanation

    First define an object with all pair possibilities, this allows us to easily find by key or value.
    Split str into a characters array so we can use each letter to find its pair.
    Use the map function to map each character in the array to an array with the character and its matching pair, creating a 2D array.
*/

/* Should :
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
END*/

/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
// SOLUTION
/* Problem Explanation

You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. Also, the letters are always provided in order so there is no need to sort them.

Hints
Hint 1

You will need to convert from character to ASCII code using the two methods provided in the description.
Hint 2

You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.
Hint 3

You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.
*/

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

/* Code Explanation

    This solutions makes use of a for loop.
    Code of encountered character is stored in code.
    It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
    If a character is missing, the missing character is found and the final string is returned.
    undefined is returned if there is no missing character in the string.
*/

// SOLUTION 2
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0);
  let missing = undefined;

  str
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

// test here
fearNotLetter("abce");

/* Code Explanation

    First we define variables to store the character code for the first letter in the string, and to store whatever missing letter we may find.
    We turn the string to an array in order to forEach through it instead of using for and while loops.
    As we forEach through our letters’ character codes, we go comparing with the one that should be in that position.
    If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
    If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
    If there are no missing characters, return undefined.
*/

// SOLUTION 3
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

/* Code Explanation

    Loop over the string
    Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
    Return the missing character ( +1 from where the gap was detected)
*/

// SOLUTION 4
function fearNotLetter(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

// test here
fearNotLetter("abce");

/* Code Explanation

    A new string allChars is created.
    Create a regular expression notChars which selects everything except str.
    The for loop is used to add all the letters in the range to allChars.
    match() is used to strip off the str letters from the newly created string and it is returned.
    If there are no missing characters, return undefined.
*/

/* Should :
fearNotLetter("abce") should return the string d.
Passed

fearNotLetter("abcdefghjklmno") should return the string i.
Passed

fearNotLetter("stvwx") should return the string u.
Passed

fearNotLetter("bcdf") should return the string e.
Passed

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
END*/

/* Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// SOLUTION
/* Problem Explanation

The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, and there shouldn’t be any duplicates.

Hints
Hint 1

Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.
Hint 2

It isn’t necessary to use loops. You can use functions such as map(), reduce() or others if you want.
Hint 3

You will have to check if the current value is already on the array to be returned for every value.
*/

function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* Code Explanation

    Create empty array finalResult to store the final result.
    Loop through the arguments object in the outer loop and store it in arrayArguments.
    The inner loop is used to loop through individual array elements.
    If the element doesn’t already exist in finalArray, add it.
    Return finalArray.
*/

// SOLUTION
function uniteUnique(arr) {
  var args = [...arguments];
  var result = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

/* Should :
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
Passed

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
Passed

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
END*/

/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
// SOLUTION
/* Problem Explanation

    You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you can use different methods.

Hints
Hint 1

    You can use regular Expressions however I didn’t in this case.

Hint 2

    You will benefit from a chart with all the html entities so you know which ones are the right ones to put.

Hint 3

    You should separate the string and work with each character to convert the right ones and then join everything back up.
*/

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

/* Code Explanation

    Assign temp to str.split(''), which creates an array containing each individual character in the passed in string.
    Pass each character in the newly created array into a switch() statement.
    Replace the HTML entities with their corresponding HTML entity string (i.e. '&' becomes '&amp;' in line 51)
    temp.join('') converts the array of characters into a string to be returned.
*/

// SOLUTION 2
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");

/* Code Explanation

    Create an object to use the Lookup functionality and easily find the characters.
    Use replace() to replace characters with regex.
    The first argument for replace() is a regex that catches all the target characters and puts them into a capturing group.
    The second arguments for replace() is a function with the matched character as a parameter. It returns the correspondant entity from htmlEntities.
*/

// SOLUTION 3
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");

/* Code Explanation

    Create an object to use the Lookup functionality and easily find the characters.
    Split the original string by characters and use map to check for the changed html entity or use the same one.
    The a function is added which is what returns the converted entity or the original one if there is no conversion.
    Lastly we join all the characters once again.

Note that if you went the regex route then you don’t need to join anything, just make sure you return the whole operation or save it to a variable and then return it.
*/

/* Should :
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Passed

convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Passed

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Passed

convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Passed

convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Passed

convertHTML("<>") should return the string &lt;&gt;.
Passed

convertHTML("abc") should return the string abc.
END*/

/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  return num;
}

sumFibs(4);
// SOLUTION
/* Problem Explanation

You will need to gather all the Fibonacci numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.
Relevant Links

Hints
Hint 1

To get the next number of the series, you need to add the current one to the previous and that will give you the next one.
Hint 2

To check if a number is even all you have to check is if number % 2 == 0.
Hint 3

As you get the next odd one, don’t forget to add it to a global variable that can be returned at the end. result += currNumber; will do the trick.
*/

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

/* Code Explanation

    Create a variable to keep record of the current and previous numbers along with the result that will be returned.
    Use a while loop to make sure we do not go over the number given as parameter.
    We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
    Complete the Fibonacci circle by rotating getting the next number and swapping values after.
    Return the result.
*/

// SOLUTION 2

function sumFibs(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
sumFibs(4);

/* Code Explanation

    Create an array of fibonacci numbers till num.
    Use filter() method to filter out even numbers.
    Use reduce() method to sum the remaining (odd) values.
    Return the sum.

Note that this solution will be slower than Solution 1, as dynamically creating an array is rather slow, especially in JavaScript.
*/

/* Should :
sumFibs(1) should return a number.
Passed

sumFibs(1000) should return 1785.
Passed

sumFibs(4000000) should return 4613732.
Passed

sumFibs(4) should return 5.
Passed

sumFibs(75024) should return 60696.
Passed

sumFibs(75025) should return 135721.
END*/

/* Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  return num;
}

sumPrimes(10);

// SOLUTION
/* Problem Explanation

For this problem will find all prime numbers up to the number you are given as a parameter and return their sum. It is a good idea to research algorithms for finding prime numbers.

Hints
Hint 1

You can use the definition of prime numbers 2.7k or try learning and implementing your own Sieve of Eratosthenes 3.8k. Check this link 3.3k to see a StackOverflow discussion on various ways of finding prime numbers.
Hint 2

This problem can be hard if you create your own code to check for primes, so don’t feel bad if you use someone’s algorithm for that part. Research is an important part of coding!
*/

// Divisibility
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

/* Code Explanation
We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible by any number in between 2 and the square root of the target number. We only need to check up to the square root because the square root of a number is the largest possible unique divisor.
*/

// SOLUTION 2
function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

/* Code Explanation
This solution is very similar to Solution 1.
In this solution we retain a list of all primes found so far and check if any of these numbers divide into each number in our range.
Note that this solution is actually less efficient than Solution 1 for very large values of n. Frequently growing the size of an array in JavaScript can be inefficient and slow.
*/

// SOLUTION 3
function sumPrimes(num) {
  // Prime number sieve
  let isPrime = Array(num + 1).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}

/* Code Explanation
This solution is based on the Sieve of Eratosethenes 3.8k.
We create a boolean array for the primality of each number in our range. All numbers except 0 and 1 are assumed to be prime.
Then, we start with 2 and proceed to num, marking every multiple of a prime number as false, or ‘not prime’.
Finally, we reduce our sieve array, returning the sum of all indices still marked as true or ‘prime’.
Note: many optimizations can be made to improve the efficiency of this sieve, but they have been omitted for the sake of simplicity and readability.
*/

/* Should:
sumPrimes(10) should return a number.
Passed

sumPrimes(10) should return 17.
Passed

sumPrimes(977) should return 73156.
END*/

/* Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
// SOLUTION ( Solution 1 - Looping approach )
/* Problem Explanation

The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended to more than two numbers as well.

We can first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.

Be careful - do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.

Hints
Hint 1

You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.
*/

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

/* In this solution, we check every multiple of the largest value in the range until we find a value that is divisible by every value in the range.

The upper bound for this loop is the product of all values in the provided range, because this number will be divisible by every value in the range.
*/

//  Solution 2 - ES6 looping
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

/* This solution uses ES6 syntax to condense the logic in Solution 1.
*/

//  Solution 3 - GCD and LCM
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);

/* This solution uses formulae and algorithms for the Greatest Common Divisor and Least Common Multiple off of Wikipedia to compactly and quickly compute the Smallest Common Multiple.
*/

// Solution 4 - Prime factorization
// Find the SCM of a range of numbers
function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j]
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i]
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while ((num % prime) === 0) {
      factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

smallestCommons([1, 5]);

/* This solution uses a prime factorization of the numbers in the range to compute the smallest common multiple. In general, Solution 3 is much faster, but with a very large range or very large values, sometimes Solution 3 may trigger a recursion limit in some browsers.
*/

/* Should :
smallestCommons([1, 5]) should return a number.
Passed

smallestCommons([1, 5]) should return 60.
Passed

smallestCommons([5, 1]) should return 60.
Passed

smallestCommons([2, 10]) should return 2520.
Passed

smallestCommons([1, 13]) should return 360360.
Passed

smallestCommons([23, 18]) should return 6056820.
END*/

/* Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

// SOLUTION
/* Problem Explanation

Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as the first argument.

Hints
Hint 1

You can use Array.prototype.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.
Hint 2

Shift returns the element that was removed which we don’t really need, all we need is the modified array that is left.
Hint 3

If you still can’t figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar with it, then you can make the code with shift.
*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

/* Code Explanation

    Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
    Return the filtered array.
*/

// SOLUTION 2
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

/* Code Explanation

    Use ES6 findIndex() function to find the index of the element that passes the condition
    Slice the array from the found index until the end
    There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.
*/ 

// SOLUTION 3
function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

/* Code Explanation

    Create a for loop to check each element.
    Then check for the function given if true then stop, otherwise remove that element.
    return the array.
*/

// SOLUTION 4
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

/* Code Explanation

    Use recursion to solve the challenge
*/

/* Should :
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Passed

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Passed

dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Passed

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Passed

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Passed

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
END*/

/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
// SOLUTION

/*Problem Explanation

This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

Hints
Hint 1

You need to check if an element is an array or not.
Hint 2

If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.
Hint 3

You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!
*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

/* Code Explanation

    Create a new variable to keep flattened arrays.
    Loop over the elements of the array
    If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
    If the element is not an array, then push that non-array element to the flattened array.
    Return the flattened array.
*/

// SOLUTION 2
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

/* Code Explanation

    Use spread operator to concatenate each element of arr with an empty array
    Use Array.some() method to find out if the new array contains an array still
    If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
    If it does not, return the flattened array
*/

// SOLUTION 3
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}

/* Code Explanation

    First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
    We replace the double comma with one, then split it back into an array.
    map through the array and fix object values and convert string numbers to regular numbers.
*/

// SOLUTION 4
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

// SOLUTION 5
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}

/* Should :
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Passed

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Passed

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Passed

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Passed

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
END*/

/* Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
// SOLUTION
/* Problem Explanation

This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into words. There is not a direct way to do this so you will have to translate twice.

Hints
Hint 1

You should first convert from binary to decimal before translating those values into characters.
Hint 2

Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.
Hint 3

Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also do not forget to turn everything back into one string.
*/

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/* Code Explanation

    Separate the string into an array of strings separated by whitespace.
    Create some variables that you will use along the way - the names are self explanatory for the most part.
    Iterate through each binary string in the new array.
    Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
    At the end, return the converted message.
*/

// SOLUTION 2
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(" ");
  var power;
  var decValue = 0;
  var sentence = "";

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += String.fromCharCode(decValue);

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/* Code Explanation

    For each of these binary strings, check for the ones and ignore the zeroes.
    For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
    Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
    Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
    Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.
*/

// SOLUTION 3
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map(function(char) {
      return parseInt(char, 2);
    })
  );
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

/* Code Explanation

    First we use split() to be able to work on each character as an Array element
    Then use map() to process each element from binary to decimal using pareseInt()
    Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
    However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. 
*/

// Alternative Advanced Code Solution:
const binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));
       
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/* Code Explanation

  Find all groups of one or more digits followed by one other character
  Replace with a string created from the specified sequence of UTF-16 code units
  Use 0b to lead the code unit to express that a binary integer literal is being converted.
*/

/* Should :
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return the string Aren't bonfires fun!?
Passed

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return the string I love FreeCodeCamp!
END*/

/* Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// SOLUTION
/* Problem Explanation

The program needs to check if the second argument is a truthy 2.7k element, and it must check this for each object in the first argument.

Hints
Hint 1

Remember to iterate through the first argument to check each object.
Hint 2

Only if all of them are truthy will we return true, so make sure all of them check.
Hint 3

You could use loops or callback functions, there are multiple ways to solve this problem.
*/

// Using for-in loop & hasOwnProperty

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

/* Code Explanation

    First I create a counter to check how many cases are actually true.
    Then check for each object if the value is truthy
    Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false
*/


// SOLUTION - Using Array.every()

function truthCheck(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

/* Code Explanation

    Uses the native “every” method to test whether all elements in the array pass the test.
    This link will help Array.prototype.every() 
*/

// SOLUTION 3

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

/* Code Explanation

    For every object in the collection array, check the truthiness of object’s property passed in pre parameter
    Array.prototype.every method internally checks if the value returned from the callback is truthy.
    Return true if it passes for every object. Otherwise, return false.
*/

/* Should :
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
Passed

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
Passed

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
Passed

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.
Passed

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true.
Passed

truthCheck([{"single": "yes"}], "single") should return true.
Passed

truthCheck([{"single": ""}, {"single": "double"}], "single") should return false.
Passed

truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false.
Passed

truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false.
END*/

/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  return false;
}

addTogether(2,3);

// SOLUTION
/* Problem Explanation

It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of the algorithm used, we have to create a program that does the following:

    It has to add two numbers passed as parameters and return the sum.
    It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
    It has to check if it has one or two arguments passed. More are ignored.
    If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

Hints
Hint 1

Every time you deal with an argument, you have to check if it is defined and if it is a number.
Hint 2

When working on the case that it needs to return a function, using closure can help you write the new function in terms of addTogether().
Hint 3

The early return pattern can simplify your code.
*/

function addTogether() {
  const [first, second] = arguments;
  // First argument is not a number
  if (typeof(first) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is not defined
  else if (second === undefined) {
    function addSecond(second) {
      // New argument is not a number
      if (typeof(second) !== "number") {
        return undefined;
      }
      // New argument is a number
      else {
        return first + second;
      }
    }
    // Note: returning a *function*
    return addSecond;
  }
  // First argument is a number
  //  and second argument is not a number
  else if (typeof(second) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is a number
  else {
    return first + second;
  }
}

// SOLUTION 2
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

/* Should :addTogether(2, 3) should return 5.
Passed

addTogether(23, 30) should return 53.
Passed

addTogether(5)(7) should return 12.
Passed

addTogether("http://bit.ly/IqT6zt") should return undefined.
Passed

addTogether(2, "3") should return undefined.
Passed

addTogether(2)([3]) should return undefined.
END*/

/* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
// SOLUTION
/* Problem Explanation

When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.

Hints
Hint 1

Use the this notation to create the keys instead of regular functions: This means instead of 
var varName = function() {...} you should use this.varName = function() {...}
Hint 2

The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: this.fullName = firstAndLast;
Hint 3

Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens to all of us at some point.
Hint 4

If you are having problems with writing the setter methods, below is a template for a set method:

this.setFullName = function(input) {
  // Insert your code here
};
*/

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

/* Code Explanation

    Create a variable that will make a copy of the full name that was passed as a parameter.
    Then we can proceed to create the six methods needed and return what is asked for.
    For the individual setters, we can use the split to turn the fullname into an array of first and last names and concatenate the unchanged portion of the name with what was passed as a parameter.
*/

/* Should :
Object.keys(bob).length should return 6.
Passed

bob instanceof Person should return true.
Passed

bob.firstName should return undefined.
Passed

bob.lastName should return undefined.
Passed

bob.getFirstName() should return the string Bob.
Passed

bob.getLastName() should return the string Ross.
Passed

bob.getFullName() should return the string Bob Ross.
Passed

bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Passed

bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Passed

bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Passed

bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Passed

bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
END*/