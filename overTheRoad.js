// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// noticed that the houses on each side of the street always add up to the same thing. so when you determine what the second row starts with (n*2) and add 1, you know what the sum should be. then just subtract the given address on row 1 and you get the address on row 2!

function overTheRoad(address, n){
  return (n * 2) + 1 - address
}