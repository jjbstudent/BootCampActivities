// Get references to HTML elements
var typefaceEl = document.querySelector('#typeface');
var clearEl = document.querySelector('#clear');
var h1El = document.querySelector('#h1');
var h2El = document.querySelector('#h2');
var h3El = document.querySelector('#h3');
var pEl = document.querySelector('#p');
var textAreaEl = document.querySelector('#textarea');

// Create an array of heading elements for easy iteration
var elements = [h1El, h2El, h3El, pEl];

// Variable to store the selected typeface
var typeface;

// Change event listener for the typeface selector
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  // Update the typeface variable with the selected value
  typeface = typefaceEl.value;
  // Apply the selected typeface to the entire container
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event listener for the textarea
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  var key = event.key.toLowerCase();
  // Define valid characters for the textarea
  var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
    ''
  );
  // Check if the pressed key is a valid character
  if (alphabetNumericCharacters.includes(key)) {
    // Append the pressed key to the text content of each heading element
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

// Click event listener for the clear button
clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  // Clear the textarea value
  textAreaEl.value = '';

  // Reset the text content of each heading element
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
