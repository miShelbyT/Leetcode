// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// create mega array, bigString but have to separate by space so array1 string doesn't straddle array2
function inArray(array1,array2){
  let result = []
  let bigString = array2.join(" ")
  for(let word of array1) {
    if (bigString.includes(word)) result.push(word)
  }
  return result.sort()
}

