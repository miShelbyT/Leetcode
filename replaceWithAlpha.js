// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
  let dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let result = ""
  text = text.toLowerCase().split("")
  for(letter of text){
   for(char in dictionary) {
     if(letter === dictionary[char]){
       result += (Number(char)+1) + " "
     }
   }
  }
  return result.trim()
}

// also, if using an array we don't need .trim()

function alphabetPosition(text) {
  let dictionary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let result = []
  text = text.toLowerCase().split("")
  for(letter of text){
   for(char in dictionary) {
     if(letter === dictionary[char]){
       result.push((Number(char)+1))
     }
   }
  }
  return result.join(" ")
}

// sexy solution!!!
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

// another great, easy to understand solution

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}


console.log(alphabetPosition("Hi there"))