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