// iterate thru string using sliding window. if string is nice, use Math.max to store longest substring that is nice
// oof this one is too hard. might revisit...

//two helper functions -- iterate thru string and look to see if there is an uppercase or lowercase version of each letter

// function checkIsNice(str){
    //     for(let i = 0; i < str.length; i++) {
    //         if(str[i] === str[i]).toUpperCase()) {
    //             if(str.indexOf(str[i].toLowerCase()) === -1) return false
    //         } else if (str[i] === str[i].toLowerCase()) {
    //             if(str.indexOf(stri[i].toUpperCase()) === -1) return false
    //         }
    //     }
    //         return true
    // }...or
    
    function checkIsNice(str){
      for(let i = 0; i < str.length; i++) {
          if(str.charCodeAt(i) <= 91) { // we know it is uppercase
              if(str.indexOf(str[i].toLowerCase()) === -1) return false
          } else {                      // otherwise we know it is lower case
              if(str.indexOf(str[i].toUpperCase()) === -1) return false
          }
      }
          return true
  }
      
  console.log(checkIsNice("AaBBBbzZ"))