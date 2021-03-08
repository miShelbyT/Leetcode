// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// had to remove all non-alphanumeric and white space for both the string and the reversed string. then compare them both .toLowerCase()


var isPalindrome = function(s) {
  s = s.replace(/[^A-Za-z0-9]/gi, '')
  otherS = s.split("").reverse().join("")
  return otherS.toLowerCase() === s.toLowerCase() ? true : false
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))

console.log(isPalindrome("hdnslgbODH"))