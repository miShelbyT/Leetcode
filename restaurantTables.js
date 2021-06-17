// In a small restaurant there are A tables for one person and B tables for two persons.

// It it known that N groups of people come today, each consisting of one or two people.

// If a group consist of one person, it is seated at a vacant one-seater table. If there are none of them, it is seated at a vacant two-seater table. If there are none of them, it is seated at a two-seater table occupied by single person. If there are still none of them, the restaurant denies service to this group.

// If a group consist of two people, it is seated at a vacant two-seater table. If there are none of them, the restaurant denies service to this group.

// You are given a chronological order of groups coming. You are to determine the total number of people the restaurant denies service to.

// Input:
// Input contains two integers A and B - the number of one-seater and the number of two-seater tables respectively, and a list of integers - the number of people in each group of clients in chronological order of their arrival.

// Output:
// Return the total number of people the restaurant denies service to.


// i set variables for a and b so I'd remember more clearly what they stand for. then reduce the number of available seats depending on the iteration of the array. Had to set up an overflow variable because if one person comes in to be seated and there is no one-top available but there is a two-top free, they sit at the two top. Then the next single only sits at a two top with that other single if there is no other one- or two-top available. (i had originally just increased the availability for one-tops if there was one seat free at a two-top but the instructions don't make it that simple.)

function restaurant(a,b,t){
  let oneSeater = a
  let twoSeater = b
  let overFlow = 0
  let reject = 0
  for(party of t) {
    if(party === 1 && oneSeater) oneSeater -= 1
    else if(party === 1 && !oneSeater && twoSeater) {
      twoSeater -= 1
      overFlow += 1
    } else if(party === 1 && !oneSeater && !twoSeater && overFlow) overFlow -= 1
      else if(party === 1 && !oneSeater && !twoSeater && !overFlow) reject += party
     else if (party === 2 && twoSeater)  twoSeater -= 1 
    else if(party === 2 && !twoSeater) reject += party
  }
    return reject
}