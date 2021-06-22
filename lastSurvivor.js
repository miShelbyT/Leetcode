// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'


// my solution
function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i = 0; i < coords.length; i++) {
     letters.splice(coords[i], 1)
  }
  return letters.join('')
}

// sexier solution:
function lastSurvivor(string, indices) {
  const arr = [...string];
  for (const i of indices) arr.splice(i, 1)
  return arr[0];
}

// my optimized

function lastSurvivor(letters, coords) {
  let result = letters.split("")
  for(const i of coords) result.splice(i,1)
    return result[0]
  }

  // or using for in loop

  function lastSurvivor(letters, coords) {
    letters = letters.split("")
  for(let coord in coords) {
    letters.splice(coords[coord],1)
  }
    return letters[0]
  }