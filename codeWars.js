// 1. i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.

// Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).

// this is much simpler than it initially looks. we are just looking for the pattern returning (strings): '1', 'i', '-1', '-i'. i.e., 

// describe('Basic Tests', function(){
//   it('powers 0 through 10', function(){
//     Test.assertEquals(pofi(0),'1');
//     Test.assertEquals(pofi(1),'i');
//     Test.assertEquals(pofi(2),'-1');
//     Test.assertEquals(pofi(3),'-i');
//     Test.assertEquals(pofi(4),'1');
//     Test.assertEquals(pofi(5),'i');
//     Test.assertEquals(pofi(6),'-1');

// answer: 

function pofi(n){
  if(n % 4 === 0) return '1'
  else if(n % 4 === 2) return '-1'
  else if(n % 4 === 3) return '-i'
  return 'i';
}


// 2. looking for camelCasing adding spaces before uppercase, this is one way
// function solution(string) {
//   str = string.split("")
// for (const i in str){
//   if (str[i] === str[i].toUpperCase()){
//     str[i] = " " + str[i]
//   }
// }
// return str.join("")
// }

// or using regex
function solution(string) {
return string.replace(/[A-Z]/g, " $&") // "$1 $2" or " $1" also work
}

console.log(solution("ImmaHappyCamper"))

//  3. Write a function called repeatStr which repeats the given string exactly n times.

function repeatStr (n, s) {
  if(n === 1) return s
  return s.concat(repeatStr(n-1,s))
}

console.log(repeatStr (5, "S"))

// 4. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("ImmaHappyCamper"))

// 5. Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
  for(let i = 1; i < arr.length; i++){
    // check idx at arr[1] and compare to previous numnber in arr
    if(arr[i] !== arr[i - 1] + 1) return arr[i]
  }
    return null
  }

