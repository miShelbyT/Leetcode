// Hash Table Class built from the ground up!

//hash function does an operation to determine what the key should be 
//for each string when we insert it into the Hashtable
let hash = function(string, max) {
  let hash = 0
  for(let i = 0; i < string.length; i++) {
    // console.log(hash, string.charCodeAt(i))
    hash += string.charCodeAt(i)
  }
  return hash % max
}

let Hashtable = function() {
  let storage = []
  const storageLimit = 4

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    let index = hash(key, storageLimit)
    let inserted
    //if key is not in array
    if(storage[index] === undefined) {
      storage[index] = [key, value]
    } else {
      inserted = false
      for(let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = value
          inserted = true
        } 
      }if(inserted === false) storage[index].push([key, value])
      
    }
  }

  this.remove = function(key) {
    let index = hash(key,storageLimit) 
      if(storage[index].length === 1 && storage[index[0][0]] === key) {
        delete storage[index]
    } else {
      for(let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          delete storage[index][i]
        }
      }
    }
  }

  //need to figure out what is wrong with this function -- everything returns undefined
  this.lookup = function(key) {
    let index = hash(key,storageLimit)
    if(storage[index] === undefined) return undefined // means there is nothing in this bucket
    else {
      for(let i = 0; i < storage[index].length; i++) {
        // console.log(storage[index].length)
        if(storage[index][i][0] === key) return storage[index][i][1] // this is the value
      }
    }
  }

}

//add up ASCII char codes and mod by max length
// console.log(hash('Tracy and Michael', 4))
// console.log(hash('Chris', 4))

let hashtable = new Hashtable()
hashtable.add('Tiger Rose', 'fur person')
hashtable.add('Chris', 'dude')
hashtable.add('Shelby', 'coder girl')
hashtable.add('Sue', 'friend')
// console.log(hashtable.lookup('Chris'))
// hashtable.print()
// hashtable.remove('Sue')
// hashtable.print()
console.log('looking up', hashtable.lookup('Shelby'))

