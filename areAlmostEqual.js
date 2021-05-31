// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.



var areAlmostEqual = function(s1, s2) {
  if(s1 === s2) return true
  let freq1 = {}
  let freq2 = {}
  for(let i = 0; i < s1.length; i++){
//  create frequency counter objects, compare freq1. to freq2
      freq1[s1[i]] ? freq1[s1[i]] += 1 : freq1[s1[i]] = 1
      freq2[s2[i]] ? freq2[s2[i]] += 1 : freq2[s2[i]] = 1
  }
      for(let key in freq1){
          if(freq1[key] != freq2[key]) return false
      }
      
// then do separate counter to see how many elements are out of place
  let counter = 0
  for(let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]) counter ++
  } if(counter > 2) return false
  return true
};