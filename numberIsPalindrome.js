

var isPalindrome = function(x) {
  if(Math.sign(x) === -1) return false
  let reversed = x.toString().split("").reverse().join("")
  return x === parseInt(reversed) ? true: false
};

// really intereresting solution (in C#, need to convert to JS). using combination of %10 and /10 to break down numbers without having to use built in methods or long iterations.

// public class Solution {
//   public bool IsPalindrome(int x) {
//       // Special cases:
//       // As discussed above, when x < 0, x is not a palindrome.
//       // Also if the last digit of the number is 0, in order to be a palindrome,
//       // the first digit of the number also needs to be 0.
//       // Only 0 satisfy this property.
//       if(x < 0 || (x % 10 == 0 && x != 0)) {
//           return false;
//       }

//       int revertedNumber = 0;
//       while(x > revertedNumber) {
//           revertedNumber = revertedNumber * 10 + x % 10;
//           x /= 10;
//       }

      // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
      // For example when the input is 12321, at the end of the while loop we get x = 12, revertedNumber = 123,
      // since the middle digit doesn't matter in palidrome(it will always equal to itself), we can simply get rid of it.
      return x == revertedNumber || x == revertedNumber/10;
  }
}