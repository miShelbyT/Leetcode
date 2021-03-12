var longestCommonPrefix = function (strs) {

  let prefix = ""
  //     if there are no strings inside the array return null
  if (strs.length === 0) return null

  let firstWord = strs[0]
  //     iterate thru first word (of course)
  for (let i = 0; i < firstWord.length; i++) {
    let char = strs[0][i]
    //       compare first chars of first word to first chars of other words. if no match, leave second loop and return  
    for (let j = 1; j < strs.length; j++) {

      if (strs[j][i] !== char) return prefix
    }
    prefix += char
  }
  return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))

console.log(longestCommonPrefix(["dog", "racecar", "dogcar"]))

console.log(longestCommonPrefix([]))