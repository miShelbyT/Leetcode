function reverseString(myString) {
  if(myString.length < 2){
      return myString
  } else {
    // console.log(myString) 
      return reverseString(myString.substring(1)) + myString[0]  
     
  }
}


// console.log(reverseString("Hello"))

//recursive palindrome -- returns the same whether read forward or backward

function isPalindrome(string){

  function helper(str){
    if(str[0] === str[str.length - 1]) return helper(str.slice(1))
    if(str.length === 1 || str.length === 2 && )
  }
  
  //try substring on string
  //compare [0] and .length - 1
}



// console.log(isPalindrome("hello"))
// console.log(isPalindrome("Panamanap"))

//also try 2 pointer recursive // also try string builder recursive



function flattenArrays(array) {
let resultArr = []

for(let i = 0; i < array.length; i++) {
  if(Array.isArray(array[i])) {
    // console.log(array[i])
    //.concat keeps indices from being pushed as nested arrrays
    resultArr = resultArr.concat(flattenArrays(array[i]))
  } else resultArr.push(array[i])
}
return resultArr
}


console.log(flattenArrays([1, 2, 3, [4, 5] ]))
// console.log(flattenArrays([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

//returns flattened array with only the values