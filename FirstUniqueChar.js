var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++){
//         if the string's index of 'l' is 0 and the string's NEXT index of 'l' is -1 (meaning it doesn't exist)
     if (s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1) {
    return i;
  }
  }
return -1
  };

  // Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

  // Note the second argument if indexOf is indexFrom - in this case, from the index directly after i