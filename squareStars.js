// function printStars(r) {
// // r is for rows
// let char = ''
// for(i = 0; i < r; i++) {
//   for(j = 0; j < r; j++) {
//     char += "*"
//   } char += "\n"
// } return char
// }

// console.log(printStars(2))

function printStarsTri(r) {
  let result = ''
for(i = r; i > 0; i--) {  // if r === 4, i = 4 (no spaces) // when i = 3, k is still === r so we add 1 x " " 
  // when i = 2, k === r so we add 2 x " " // when i = 1, k === r so we add 3 x " "
  for(k = r; k > i; k--) { // k = 4 no spaces during first loop bc k === r (4)
    //this places spaces before 2nd++ rows
    // as k decrements so k > i, we kick out of this loop
    result += " "
  }
  for(j = 0; j < i*2 - 1; j++) { // j = 0, if i === r (which only happens once during the first outer loop) we add "*" 4*2-1 => 7 times
    // when i <= 3, this first condition will not be not met
    if(i === r) {
      // this places first row of stars
      result += "*"
    } else if(j === 0 || j === i*2 - 2) {
      //i === 3 => (after spaces from k loop) stars are placed at j[0] and j[i/3*2-2] 0 and 4 indices 
      //i === 2 => (after spaces from k loop) stars are placed at j[0] && j[i/2*2-2] 0 and 2 indices
      // i === 1 => (after spaces from k loop) stars are placed at j[0] && j[i/1*2-2] which is 0 so only 1 star
      result += "*"
      //everything else is a space
    } else result += " "
    // at end of row, i.e., before we start outer i loop again, place a newline
  
  } result += "\n"
  //after newline we loop around, i === 0 (finally!) so we leave outer loop and return result
}
return result
}

console.log(printStarsTri(6))