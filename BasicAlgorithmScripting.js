/* Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit;
  }
  
  convertToF(30);
// Turn to
function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

/* Should :
convertToF(0) should return a number
Passed

convertToF(-30) should return a value of -22
Passed

convertToF(-10) should return a value of 14
Passed

convertToF(0) should return a value of 32
Passed

convertToF(20) should return a value of 68
Passed

convertToF(30) should return a value of 86
END*/

/* Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    return str;
  }
  
  reverseString("hello");
// Turn to
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
// Or
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

/* Should :
reverseString("hello") should return a string.
Passed

reverseString("hello") should return the string olleh.
Passed

reverseString("Howdy") should return the string ydwoH.
Passed

reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
END*/

/* Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    return num;
  }
  
  factorialize(5);
// Turn to
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);
// Or
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);
// Or
function factorialize(num, factorial = 1) {
    if (num == 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
  
  factorialize(5);
// Or
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
      new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1)
    );
  }
  factorialize(5);

/* Should :
factorialize(5) should return a number.
Passed

factorialize(5) should return 120.
Passed

factorialize(10) should return 3628800.
Passed

factorialize(20) should return 2432902008176640000.
Passed

factorialize(0) should return 1.
END*/

/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Turn to
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
// Or
function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
}
// Or
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}
// Or
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* Should :
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Passed

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Passed

findLongestWordLength("May the force be with you") should return 5.
Passed

findLongestWordLength("Google do a barrel roll") should return 6.
Passed

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Passed

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
END*/

/* Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// Turn to
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  } 
  return results;
}
/* Code Explanation

    Create a variable to store the results as an array.
    Create an outer loop to iterate through the outer array.
    Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
    Create said inner loop to work with the sub-arrays.
    Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
    After the inner loop, save the largest number in the corresponding position inside of the results array.
    And finally return said array.
*/
// Or
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
/* Code Explanation

    we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
    within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
    the callback function passed to the reduce method takes the previous value and the current value and compares the two values
    if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
*/
// Or
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
/* Code Explanation

TL;DR: We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments.

    We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.
    Now the need a callback function to find the max of each inner array provided by the map.

So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

    To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.

i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

    Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.
    Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind on Function.prototype.apply i.e. Function.prototype.apply.bind.
    Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).
    Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to pass it a bogus context.

        So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.

        Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.

        Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays.
*/
// Or
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

/* Should :
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Passed

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Passed

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Passed

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
END*/

/* Confirm the Ending
