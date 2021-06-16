// Given a VPS (valid parentheses string) represented as string s, return the nesting depth of s.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:

// Input: s = "(1)+((2))+(((3)))"
// Output: 3
// Example 3:

// Input: s = "1+(2*3)/(2-1)"
// Output: 1
// Example 4:

// Input: s = "1"
// Output: 0


var maxDepth = function(s) {
  let currentNested = 0
  let maxNested = 0
  for(char of s) {
    // represents entering parens(, 1 level
     if(char === "(") currentNested += 1
    //  represents exiting parens), 1 level
     else if(char === ")") currentNested -= 1
      maxNested = Math.max(currentNested, maxNested)  
  }
  return maxNested
};