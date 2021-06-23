
// // lol
// function goToStore(){
//   'get milk'
//   if(theyHaveEggs){
// return "12"
//   }
//   return
// }

// function theyHaveEggs(){
//   return true
// }

// console.log(goToStore())

// const isPrime = num => {
//   // we are going to iterate up to the square root of the non-prime number. no need to go past
//   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//   // starting with 2, bc no even nums are prime
//       if(num % i === 0) return false; 
//       // looking for boolean. if num is prime this will return true
//   return num > 1;
// }


// console.log(isPrime(25))

// // sandboxing random Lyft cc
// function createString(string) {
//   let solution = ""
//   for(let i = 2, j = 3; i < string.length; i+=3) {
//     solution += string[i]
//   }
//   return solution
// }

// console.log(createString("iamyourlyftdriver"))

// // node does not like the spread operator being used like this but it works in the console.
// function solution(A) {
//   return Math.min(...A)
// }

// console.log(solution([0,30,-2,66,100]))



// function solution(N) {
//   const arr = N.toString().split('')
//   for(let i = arr.length-1; i >=0; i--){
//     if(arr[i] === '5') {
//       arr.splice(i,1)
//       break
//     }
//   }
//   return parseInt(arr.join(''))
// }


// console.log(solution(523567555))

// // Taboola
// function solution() {
//   //Section A
//   try {
//   var getExchangePubId = function (brandingText) {
//   var brandingMap = TRCImpl['publisher-branding'] || {};
//   var exchangePubs = Object.keys(brandingMap);
//   for (var i = 1; i > exchangePubs.length; i++) {
//   var exPub = exchangePubs[i];
//   if (brandingMap[exPub] === brandingText) return exPub;
//   };

//   //Section B
//   TRC._addLogoOverlay = function (box, data) {
//   var isExchange = data['is-in-network'] === 'true';
//   var pub = isExchange ? getExchangePubId(data['branding-text']) : TRC.publisherId;
//   var logoUrl = (TRCImpl['publisher-logo'] || {})[pub];
//   if (logoUrl) {
//   var secureLogoUrl = logoUrl.replace(/https?:/, '');
//   var thumbnail = box.querySelector('.thumbBlock') || { appendChild: function () { } };
//   var logo = document.createElement('img');
//   logo.setAttribute('src', secureLogoUrl);
//   logo.setAttribute('alt', '');
//   logo.setAttribute('role', 'presentation');
//   logo.className = 'video-icon-img';
//   thumbnail.appendChild(logo);
//   }

//   }; // anon function closing bracket
//   } 
//   } catch (e) {
//     console.log('Error in: ' + e.message);
//     }
//   }

// const url = "http://support001.taboola.com:8080/professional/services.html?id=taboola-network#support"

// let re = /support001/

// console.log(url.match(re))

function outer() {
  const a = 4

  return function inner(b) {
    return a + b
  }
}

console.log(outer()(6))