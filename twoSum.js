var twoSum = function(nums, target) {
  let numberObj = {}
  for(let i = 0; i < nums.length; i++){
     let diff = target - nums[i]
     
     if(diff in numberObj){
         return [numberObj[diff], i]
        //  if diff is found in numberObj then we know we've found a match! return the value of the obj (which is the index of diff) and i which is the index of the matching integer. together they will === target
     } else numberObj[nums[i]] = i
      // this inserts a key/value pair into the numberObj (if it wasn't already present). the key is the integer, the value is the index at which the integer can be found
  }    
};


console.log(twoSum([3,2,4,5,7,0],9))
console.log("heyyyy")
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice. -- this means there is no edge case to account for --

// You can return the answer in any order.