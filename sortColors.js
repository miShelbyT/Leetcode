// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]

// Bubble sort! requires a nested loop. n^2, i.e., linear time.

var sortColors = function (nums) {
  let sorted = false
  while (!sorted) {
    //!sorted === true
    //         set sorted to true so we can then set it to false again if/when swap(s) is/are needed. if we don't have to set to false, then at line 12 we will kick out of the while loop.. this will loop as many times as necessary to get the array sorted properly.
    sorted = true
    let temp
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        sorted = false
        temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
      }
    }
  }
}
