var reverse = function(x) {
  let reverse = parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x)
  if(reverse > Math.pow(2,31)-1 || reverse < Math.pow(-2,31)+1) return 0
  return reverse
};

/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. 
-231 <= x <= 231 - 1 */