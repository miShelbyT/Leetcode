
const isPrime = num => {
  // we are going to iterate up to the square root of the non-prime number. no need to go past
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
  // starting with 2, bc no even nums are prime
      if(num % i === 0) return false; 
      // looking for boolean. if num is prime this will return true
  return num > 1;
}


// console.log(isPrime(25))

// // node does not like the spread operator being used like this but it works in the console.
// function solution(A) {
//   return Math.min(...A)
// }

// console.log(solution([0,30,-2,66,100]))



function solution(N) {
  const arr = N.toString().split('')
  for(let i = arr.length-1; i >=0; i--){
    if(arr[i] === '5') {
      arr.splice(i,1)
      break
    }
  }
  return parseInt(arr.join(''))
}


// console.log(solution(523567555))



// function outer() {
//   const a = 4

//   return function inner(b) {
//     return a + b
//   }
// }

// console.log(outer()(6))

let array = ["happily", "market", "flowerbed"]
let array2 = ["happ", "ma", "not in there"]

function returnSubstringOnly(array1, array2) {
  let bigString = array1.join(" ")
  console.log(bigString)
  array2.forEach((string, idx) => {
    if(!bigString.includes(string)) array2.splice(idx,1)
})
return array2
}

console.log(returnSubstringOnly(["happily", "market", "flowerbed", "only"], ["happ", "ma", "not in there", "on"]))