// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification: What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. 

var strStr = function(haystack, needle) {
  if(needle === "") return 0
  let found = haystack.indexOf(needle) 
  // have to add second conditional because technically 0 is falsey and would return -1
   if (found || found === 0) return found
  else return -1
  
};

// great Chris solution!!

var strStr = function(haystack, needle) {
  if(needle === "") return 0
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1
};

