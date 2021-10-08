//Write a recursive function called capitalizeFirst. Given an array of strings capitalize the first letter of each string in the array.



function capitalizeFirst(array) {
  

  if(!array.length) return array

  let newWord = array[0]
  let updatedWord = newWord[0].toUpperCase() + newWord.substring(1)
  let resArray = [updatedWord]

  return resArray.concat(capitalizeFirst(array.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// recursively take one string at a time and set the first char .toUpperCase() maybe call substring(1) and str[0].toUpperCase()


function capitalizedWords(array) {
  
  if(!array.length) return array
  
  let resArray = [array[0].toUpperCase()]
  
  return resArray.concat(capitalizedWords(array.slice(1)))

}

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

let words = ['i', 'am', 'learning', 'recursion'];

console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

