//iterative:

// this is with a node class but no Linked List class.

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addNode(val) {
    let newNode = new ListNode(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  //will need to double check/test after I've added a get method. seems to work for now
  deleteNode(idx){
    if(this.length <= idx || idx < 0) return null
    else if(idx === 0) {
      this.head = this.head.next
    }
    else{
      let current = this.head, prev = current
      let count = 0
      while(count !== idx){
        prev = current
        current = current.next
        count++
      }
      if(this.tail === current) {
        this.tail = prev
        prev.next = null
      } else prev.next = current.next
    }
    this.length--
  }



  //this does not reverse the list, but it does render as if it is reversed -- prev is our new head, head is our new tail
  reverseList() {
    let prev = null,
      current = this.head,
      next = null
    while (current !== null) {
      next = current.next
      current.next = prev
      //next two lines move prev and current ++ so to speak
      prev = current
      current = next
    }
    //prev is now our new head
    // return prev

    // we can print it correctly if we save this.head = prev and this.tail = head
    let temp = this.head
    this.head = prev
    this.tail = temp
    return this
  }

  reverseRecursively(){

    function helper(current, previous){

      if(current == null) return previous

      
      let next = current.next
      current.next = previous
      return helper(next, current)
    }
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    return helper(this.head, null)
  }

  
}

let newList = new LinkedList()
newList.addNode(1)
newList.addNode(2)
newList.addNode(3)
newList.addNode(4)
newList.addNode(5)
newList.deleteNode(15)
// newList.reverseRecursively()

console.log(newList)

//         1 => 2 => 3 => 4 => x
// prev  curr  next

//    prev  <= 1  2 => 3 => 4 => x
//current.next = prev

//   <= 1        2 =>   3 => 4 => x
//     prev   current next

//   <= 1    <=   2   3 => 4 => x
//current.next = prev

//   <= 1    <=   2   3 =>    4 => x
//             prev   current next

//   <= 1    <=   2   <=  3  4 => x
//current.next = prev

//   <= 1    <=   2   <=  3       4 => x
//                      prev   current next

//   <= 1    <=   2   <=  3  <=   4   x
//current.next = prev

//   <= 1    <=   2   <=  3  <=   4      x
//                               prev   current next

// current is now === null so we break out of loop and return prev which is our new head!
