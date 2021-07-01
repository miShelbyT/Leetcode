
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Euclidian Algorithm: https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// great solution!! gotta love a ternary

// divide x by y and take remainder.  set temp = x, x = y and y = temp % y. re-run as long as y !== 0

function mygcd(x,y){
  return y == 0 ? x : mygcd(y, x % y)
}