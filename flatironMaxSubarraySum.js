// Given an array of integers find a sequence with the largest sum.

function largestSubarraySum(array) {
  // code to write here
  // iterate thru array, use two pointers. 
  // start solution at first index
  let solution = array[0]
  
  for(i = 1; i < array.length; i++) {
    // which is larger? array at 0th index, or array at i (which starts at 1) + array at (0)?
    // set array[i] to whichever amount is higher so you can carry over to the next iteration
    array[i] = Math.max(array[i], array[i] + array[i-1])
    solution = Math.max(solution, array[i])
  }

  
  return solution
}

console.log(largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4]))
//  answer should be 16: the largest subarray in this example is [5, 3, -7, 4, 5, 6], and its sum is 5 + 3 - 7 + 4 + 5 + 6 = 16
