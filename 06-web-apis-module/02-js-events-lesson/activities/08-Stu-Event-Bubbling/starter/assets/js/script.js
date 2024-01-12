// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox"); //carousel: is selecting the HTML element with the class "carouselbox."

// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next"); //button class next
var prev = carousel.querySelector(".prev"); //button class prev
var index = 0; //
var currentImage; 

var images = [ //Initializes variables for the current index, current image URL, and an array of image URLs.
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')"; //Sets the background image of the carousel element to the first image in the array.

function navigate(direction) { //Updates the index based on the given direction and sets the background image accordingly.
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() { //Redirects to the URL of the current image when the carousel is clicked.
  window.location.href = images[index]; 
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) { 
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();  //Prevents the click event from propagating up the DOM tree and navigates to the next image.

  navigate(1); //Initializes the carousel with the first image.
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); //The event.stopPropagation() calls prevent the click event from affecting other elements.

  navigate(-1);
});

navigate(0);
