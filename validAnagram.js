// i've seen this before! algos course. used frequency counter to solve

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let obj1 = {}
  for(let i = 0; i < s.length; i++){
      let char = s[i]
      obj1[char] ?  obj1[char] += 1 : obj1[char] = 1
  }
  for(let j = 0; j < t.length; j++){ 
     if (!obj1[t[j]]) return false
     else obj1[t[j]] -= 1
  }
 return true
};