function reverseString(myString) {
  if(myString.length < 2){
      return myString
  } else {
    // console.log(myString) 
      return reverseString(myString.substring(1)) + myString[0]  
     
  }
}


console.log(reverseString("Hello"))