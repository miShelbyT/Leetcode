const dogs = [
  { name: 'TR', age: 4 },
  { name: 'Heidi', age: 3 },
  { name: 'Zelda', age: 5 },
]

function dogFilter(num) {
  return (dog) => dog.age === num
}

let oneDog = dogs.filter(dogFilter(4))

oneDog
