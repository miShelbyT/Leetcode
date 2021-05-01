// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// i believe this problem is just asking us to turn the array into an integer and increment it by one.

var plusOne = function(digits) {
  
  for(let i = digits.length - 1; i >= 0; i--) {
  if(digits[i] < 9) {
    digits[i]++
    return digits
  } else {
    digits[i] = 0
  }
}
// this handles the edge case of if one/all numbers in array are nines!
digits.unshift(1)  
return digits
};

console.log(plusOne([9,8]))