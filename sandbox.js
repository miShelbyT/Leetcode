// // from Set and map video: https://www.youtube.com/watch?v=hLgUTM3FOII

// // Set only contains unique elements. Can contain a variety of data whether primitive datatypes or objects (object literals, arrays, can even pass in functions and those values are returned!). primitive datatype is not an object and has no methods. There are 7 primitive data types: string, number, boolean, undefined, null, symbol and bigint.

// // Set is an unordered list. so if we try to run Set[3] to access the 4th element, this will return undefined.

// const myArray = [1,2,4,16,2,5]
// // const newArray = myArray.reduce((a,b) => a^b)
// // console.log(newArray)

// // xor converts numbers to binary and compares them:
// //     1
// //    10
// // p  11

// //   100
// //p  111

// // 10000
// //p10111   

// //    10
// //p10101

// //   101
// //r10000 --> 16
// // this removes duplicates but also removes the 1/4 as a duplicate to 5. unintended consequences!


// const mySet = new Set(myArray)
// mySet.add('0')
// mySet.delete(2)

// // returns boolean
// console.log("does my set have 16:", mySet.has(16))

// // if(mySet.has(1)) mySet.delete(1)

// // empties Set
// // mySet.clear()

// // returns number of elements in Set
// console.log(mySet.size)


// // mySet.add(myArray.sort((a,b)=> b-a))
// console.log("this is my set:", mySet)

// // spread operator helps us avoid nested data inside our array
// // const myNewArray = new Array(...mySet)
// // console.log(myNewArray)

// // Map is an ordered list of key value pairs, introduced with ES6. looks different from regular object. can also contain a variety of primitive and non-primitive datatypes. Map allows duplicates of keys, while Object literals do not.

// const myMap = new Map([['name', 'Shelby'], ['surname', 'Talbert'], ['age', 20]])

// console.log(myMap)
// // looks like this: Map(3) { 'name' => 'John', 'surname' => 'Doe', 'age' => 20 }

// // this is like mySet.add. Adds attributes to Map.
// myMap.set({'school': 'current'}, 'Flatiron')
// console.log(myMap)

// // deletes key/value pair but you have to delinate the KEY not the value
// myMap.delete('name')
// console.log(myMap)

// // returns boolean
// console.log(myMap.has('surname'))

// // same as Set.clear() - empties the Map
// myMap.clear()

// //same as mySet.size()
// myMap.size()

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

const isPrime = num => {
  // we are going to iterate up to the square root of the non-prime number. no need to go past
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
  // starting with 2, bc no even nums are prime
      if(num % i === 0) return false; 
      // looking for boolean. if num is prime this will return true
  return num > 1;
}


console.log(isPrime(25))