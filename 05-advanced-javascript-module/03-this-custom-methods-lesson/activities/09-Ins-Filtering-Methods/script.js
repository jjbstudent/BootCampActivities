var numbers = [2, 4, 6, 8, 10, 12];

var planets = [
  {
      name: 'Earth',
      moons: 1
  },
  {
      name: 'Mars',
      moons: 2
  },
  {
      name: 'Jupiter',
      moons: 79
  },
  {
      name: 'Saturn',
      moons: 82
  }
];

// Find & Filtering Methods

// Find all numbers in array greater then 10 
console.log(numbers.find(function(i) {
  return i > 10
}))

// Find 1st planet with more then 10 moons
console.log(planets.find(function(i) {
  return i.moons > 10
}))

// Filter all numbers 10 and over 
console.log(numbers.filter(function(i) {
  return i >= 10
}))

// filter all planets with over ten moons  
console.log(planets.filter(function(i) {
  return i.moons > 10
}))



