// paste in Giphy API key below
$("button").on("click", function () {
  var animal = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=[place-api-key-here]&limit=10";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Step 1: Run this file, click a button, and see what the data object looks like in the browser's console.
      // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

      console.log(data);

      // Step 2: since the image information is inside of the data key,
      // make a variable named results and set it equal to data.data

      // =============== put step 2 in between these dashes ==================

      // ========================

      // for (var i = 0; i < results.length; i++) {

      // Step 3: uncomment the for loop above and the closing curly bracket below.
      // Make a div with jQuery and store it in a variable named animalDiv.
      // Make a paragraph tag with jQuery and store it in a variable named p.
      // Set the inner text of the paragraph to the rating of the image in results[i].
      // Make an image tag with jQuery and store it in a variable named animalImage.
      // Set the image's src to results[i]'s fixed_height.url.
      // Append the p variable to the animalDiv variable.
      // Append the animalImage variable to the animalDiv variable.
      // Prepend the animalDiv variable to the element with an id of gifs-appear-here.

      // ============= put step 3 in between these dashes ======================

      // ==================================
      // }

    });
});