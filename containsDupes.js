// used frequency counter

var containsDuplicate = function(nums) {
  if(nums.length === 0) return false
  // create object
  let obj = {}
  for(let i = 0; i < nums.length; i++){
      let addNum = nums[i]
    obj[addNum] ? obj[addNum] += 1 : obj[addNum] = 1
  }   
  // check to see if value in any key > 1, which indicates duplicates
  for(key in obj){
      if(obj[key] > 1) return true
  }
  return false
};