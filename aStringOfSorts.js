// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"
// sortString("string", "gnirts") => "gnirts"
// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

// with help from Andrew!! when splicing, i had been trying to delete the index of set from string. ooops wrong index....

function sortString(string, ordering) {
  let tempString = []
  string = string.split('')
  let set = [...new Set(ordering)]

  set.forEach((char) => {
    while (string.includes(char)) {
      string.splice(string.indexOf(char), 1)
      tempString.push(char)
    }
  })
  // this also works
  //     string = [...tempString, ...string]
  string = tempString.concat(string)
  return string.join('')
}
