function solution(str, ending){
  // this is a function?!?!
  return str.endsWith(ending);
}

function solution(str, ending){
  // i means case insensitive i think .test!!!!
  return new RegExp(ending+"$", "i").test(str);
}

function solution(str, ending){
  // seems exactly like .slice() but specifically for strings!
return str.substr(str.length - ending.length, ending.length) === ending;
}