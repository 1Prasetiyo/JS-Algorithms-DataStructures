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