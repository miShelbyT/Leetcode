// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// first i will use frequency counter. even tho it does use add'l memory. good practice!

var singleNumber = function(nums) {
  let numsObj = {}
  for(let i = 0; i < nums.length; i++){
    let num = nums[i]
    numsObj[num] ? numsObj[num] += 1 : numsObj[num] = 1
  } 
   for(num in numsObj) {
     if(numsObj[num] < 2) return num
   }
};

console.log(singleNumber([7,1,2,1,2,7,8]))