let groceryList = {
  'cherry': 6,
  'soy milk': 3,
  'broccoli': 4,
  'orange': 3,
  'apple': 6,
  'bread': 4
}

/* gets us the n items on our list with the highest number (i.e., 6 apples, 3 oranges)
 altho we haven't yet accounted for what there are multiple items with the same amount to buy. we should put those in alpha order:
 */

// function sortByObjectEntries(obj, n) {
//   return Object.entries(obj).sort((a,b) => b[1] - a[1]).map(el=> el[0]).slice(0,n)
// }



  function sortObjectEntries(obj, n){
    let sortedList = []
    //Sorting by values asc
    sortedList = Object.entries(obj).sort((a,b)=>{
          if(b[1] > a[1]) return 1;
          else if(b[1] < a[1]) return -1;
    //if values are same do edition checking if keys are in the right order
          else {
             if(a[0] > b[0]) return 1;
             else if(a[0] < b[0]) return -1;
             else return 0
      }
     })
     // return first n values from sortedList
      return sortedList.map(el=>el[0]).slice(0,n)
}

// console.log(sortObjectEntries(groceryList, 3))

const anObj = { 100: 'a', 2: 'b', 7: 'c' };

console.log(Object.entries(anObj));
