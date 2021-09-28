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