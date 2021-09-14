var countPrimes = function(n) {
  let count = 0
  
  function isPrime(num){
      if(num <= 1) return false
//         will start call at 3 because 1 and 0 are not prime in this example. or in life.
      if(num % 2 === 0) return num === 2
      // the above code returns true for 2 but false for all other even numbers, brilliant!

      // Math.sqrt allows us to run so many less loops....
      for(let i = 3; i <= Math.sqrt(num); i += 2){
          if(num % i === 0) return false
      }
      return true
  }
  
  
  for(let j = 0; j < n; j++){
      if(isPrime(j)) count ++
  }
  return count
  
};

console.log(countPrimes(5000000))