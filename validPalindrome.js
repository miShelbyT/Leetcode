// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// had to remove all non-alphanumeric and white space for both the string and the reversed string. then compare them both .toLowerCase()


var isPalindrome = function(s) {
  let otherS = s.split("").reverse().join("")
  s = s.replace(/[^A-Za-z0-9]/gi, '')
  otherS = otherS.replace(/[^A-Za-z0-9]/gi, '')
  return otherS.toLowerCase() === s.toLowerCase() ? true : false
};