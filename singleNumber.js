// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// first i will use frequency counter. even tho it does use add'l memory. good practice!

// var singleNumber = function(nums) {
//   let numsObj = {}
//   for(let i = 0; i < nums.length; i++){
//     let num = nums[i]
//     numsObj[num] ? numsObj[num] += 1 : numsObj[num] = 1
//   } 
//    for(num in numsObj) {
//      if(numsObj[num] < 2) return num
//    }
// };

// also using xor operator with zero additional space complexity
var singleNumber = function(nums) {
  // reduce compares nums[0] and nums[1] and then compares the result to nums[2] and so on. xor turns numbers into binary format
  return nums.reduce((a,b) => a ^ b)
}



console.log(singleNumber([8,1,2,1,2,7,8]))