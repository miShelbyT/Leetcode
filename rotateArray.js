// Given an array, rotate the array to the right by k steps, where k is non-negative.
// @return {void} Do not return anything, modify nums in-place instead. 

// not sure why we wouldn't return anything....



var rotate = function(nums, k) {
  for(let i = 0; i < k; i++) {
    let firstNum = nums.pop()
    nums.unshift(firstNum)
  }
    return nums
};

console.log(rotate([2,5,7,7,3,1],4))