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
