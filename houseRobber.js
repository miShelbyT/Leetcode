

var rob = function(nums) {
  if(nums.length === 1) return nums[0]
  if(nums.length === 2) return Math.max(nums[0], nums[1])
  let robArray = []
  robArray[0] = nums[0]
//     this sets up our ongoing status for comparing
  robArray[1] = Math.max(nums[0], nums[1])
  for(let i = 2; i < nums.length; i++) {
      robArray.push(Math.max((nums[i] + robArray[i-2]),robArray[i-1]))
  } return robArray[robArray.length-1]
};


//      i   index starts at 2. which is bigger? 9 + 2 or 7?
// [2,7,9,3,1]
//        i   index is now at 3. which is bigger? 3 + 7 or 11?
// [2,7,11]
 //   -7, + 11
//    [11] + 1