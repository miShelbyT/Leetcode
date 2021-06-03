// 1. Given a list of integers sorted in ascending order nums, square the elements and give the output in sorted order.

function sortSquared(nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b)
}

// 2. Given a list of integers nums, sort the array such that:

// All even numbers are sorted in increasing order
// All odd numbers are sorted in decreasing order
// The relative positions of the even and odd numbers remain the same

function mixedSorting(nums) {
  // set up and complete two arrays, one for even and one for odd (sort in ascending and descending order). then do modulo while iterating thru nums. if modulo === 0 the number is even. do .push(.shift from the even array)
  let evens = []
  let odds = []
  let result = []
  for (let num of nums) {
    num % 2 === 0 ? evens.push(num) : odds.push(num)
  }
  evens.sort((a, b) => a - b)
  odds.sort((a, b) => b - a)
  for (let num of nums) {
    num % 2 === 0 ? result.push(evens.shift()) : result.push(odds.shift())
  }
  return result
}

// 3. Given a two dimensional list of integers votes, where each list has two elements [candidate_id, voter_id], report whether any voter has voted more than once.

function voterFraud(votes) {
  const freq = {}
  for (let i = 0; i < votes.length; i++) {
    let voter = votes[i][1]
    freq[voter] ? freq[voter] += 1 : freq[voter] = 1
    // TWO other great ways to increment the frequency counter:
    // freq[voter] = freq[voter]++ || 1
    // freq[voter] = freq[voter] + 1 || 1
  }
  let tally = Object.values(freq)
  // console.log(tally, freq)
  for (let i = 0; i < tally.length; i++) {
    if (tally[i] > 1) return true
  }
  return false
}
// console.log("should return false", voterFraud([[3,1], [4,3], [5,2], [6,0]]))

// 4. Given an integer n, return whether n = k * k for some integer k.
// This should be done without using built-in square root function.

function isSquared(n) {
  let i = 0
  while (i * i <= n) {
    if (i * i === n) return true
    i++
  }
  return false
}

// 5. Given a list of unique integers nums sorted in ascending order, return the minimum i such that nums[i] == i. If there's no solution, return -1.

// This should be done in \mathcal{O}(log(n))O(log(n)) time.

function fixedPoint(nums) {
  let smallest = Infinity
        let temp = smallest
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === i) {
                temp = i
                smallest = Math.min(smallest, temp)
            }
        }
       return smallest !== Infinity ? smallest : -1
}

console.log(fixedPoint([-5, -2, 0, 3, 4]))
console.log(fixedPoint([-5, -4, 0]))
