// Selecting the form and the shopping list
    var shoppingFormEl = $('#shopping-form');
    var shoppingListEl = $('#shopping-list');
  
    // Function to handle form submission
    function addToList(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      console.log("form submitted");
  
      // Get the input value from the form
      var shoppingInputEl = $('#shopping-input');
      var newItem = shoppingInputEl.val();
  
      // Check if the input is not empty
      if (newItem.trim() !== '') {
        // Create a new list item and append it to the shopping list
        var listItem = $('<li>').text(newItem);
        shoppingListEl.append(listItem);
  
        // Clear the input field after adding the item
        shoppingInputEl.val('');
      }
    }
  
    // Event listener for form submission
    shoppingFormEl.on('submit', addToList);
  