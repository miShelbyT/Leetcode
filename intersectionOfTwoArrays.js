//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example #1: Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example #2: Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// // does not work if arrays are the same size....
// var intersect = function(nums1, nums2) {
//   let result;
//   if(nums1.length < nums2.length) {
//     result = nums1.filter(el => nums2.includes(el))
//   } else if(nums2.length < nums1.length) {
//     result = nums2.filter(el => nums1.includes(el))
//   } else {

//   }

//    return result
// };

// standard frequency counter
var intersect = function (nums1, nums2) {
  let result = [];
  let objOne = {}
  for (let i = 0; i < nums1.length; i++) {
    objOne[nums1[i]] ? objOne[nums1[i]] += 1 : objOne[nums1[i]] = 1
  }

  // iterate thru second array and decrement first array, also push intersecting nums into result []
for(let i = 0; i < nums2.length; i++){
  if(objOne[nums2[i]] > 0) {
    objOne[nums2[i]]--
    result.push(nums2[i])
  }
}
  return result;

}
console.log(intersect([1, 2, 2, 1], [2, 2]))

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))