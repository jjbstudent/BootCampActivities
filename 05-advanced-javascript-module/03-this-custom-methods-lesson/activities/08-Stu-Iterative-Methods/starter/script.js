var originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
var doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});
// double output
console.log("Doubled Array:",doubledArray);

// original array
console.log("Original Array:",originalArray);


// The map() method is used to create a new array (tripledArray) by applying a function to each element of the original array.

// Tripling each element of the original array using map()
var tripledArray = originalArray.map(function(data) {
  // The anonymous function takes each element (data) of the original array.
  
  // The map() method creates a new array (tripledArray) with each element tripled (data * 3).
  return data * 3;
});

// Log the tripled array
console.log("Tripled Array:", tripledArray);

// Determining whether each element in the original array is odd or even using map()
var oddOrEven = originalArray.map(function(num) {
  // The anonymous function takes each element (num) of the original array.
  
  // Check if the number is even or odd
  if (num % 2 === 0) {
    // If even, 'even' is returned.
    return 'even';
  } else {
    // If odd, 'odd' is returned.
    return 'odd';
  }
});

// Log whether each number in the original array is odd or even
console.log("Odd or Even:", oddOrEven);
