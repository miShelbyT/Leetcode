// NOTE: this solution only works for sorted lists

var removeDuplicates = function (nums) {
  let i = 0
  let j = 1
  while (j < nums.length) {
    console.log(nums)
    if (nums[i] !== nums[j]) {
      // we want to increment i+1 so we don't overwrite the unique number/index
      i+=1
      // replace nums at this index, this effectively shifts all unique nums to the front of the array
      nums[i] = nums[j]
      j++
    } else j++
    // here we are moving forward until we find the next unique number
  }
  return i + 1
};



console.log(removeDuplicates([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))