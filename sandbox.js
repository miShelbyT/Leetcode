
// // lol
// function goToStore(){
//   'get milk'
//   if(theyHaveEggs){
// return "12"
//   }
//   return
// }

// function theyHaveEggs(){
//   return true
// }

// console.log(goToStore())

// const isPrime = num => {
//   // we are going to iterate up to the square root of the non-prime number. no need to go past
//   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//   // starting with 2, bc no even nums are prime
//       if(num % i === 0) return false; 
//       // looking for boolean. if num is prime this will return true
//   return num > 1;
// }


// console.log(isPrime(25))

// // sandboxing random Lyft cc
// function createString(string) {
//   let solution = ""
//   for(let i = 2, j = 3; i < string.length; i+=3) {
//     solution += string[i]
//   }
//   return solution
// }

// console.log(createString("iamyourlyftdriver"))

// why does Infinity turn out to be less than the smallest number in the array? < does not work here
// function solution(A) {
//   let solution = Infinity
//   for(let i = 0; i < A.length; i++) {
//     if(solution > A[i]) solution = A[i]
//     console.log(solution)
//   }
//   return solution
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


console.log(solution(523567555))

