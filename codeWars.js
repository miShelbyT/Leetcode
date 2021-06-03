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

// function pofi(n){
//   if(n % 4 === 0) return '1'
//   else if(n % 4 === 2) return '-1'
//   else if(n % 4 === 3) return '-i'
//   return 'i';
// }


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
// function solution(string) {
// return string.replace(/[A-Z]/g, " $&") // "$1 $2" or " $1" also work
// }

// console.log(solution("ImmaHappyCamper"))

//  3. Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  if(n === 1) return s
  return s.concat(repeatStr(n-1,s))
}

console.log(repeatStr (5, "S"))

