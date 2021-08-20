// Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

/* Should :
var should not exist in the code.
Passed
catName should be the string Oliver.
Passed
quote should be the string Oliver says Meow!
*/

// Compare Scopes of the var and let Keywords
