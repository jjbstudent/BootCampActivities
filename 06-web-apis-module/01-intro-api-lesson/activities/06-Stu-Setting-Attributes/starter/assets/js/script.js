var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");


// Setting content and attributes for elements within site1El
site1El.children[0].textContent = "Site 1"; // Set text content of the first child 
site1El.children[1].setAttribute("href", "https://google.com"); // Set href attribute of the first child's first child
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg"); // Set src attribute of the first child's first child's first child 
site1El.children[1].children[0].setAttribute("alt", "man working");  // Set alt attribute of the same img element to "man working"
site1El.children[1].children[0].setAttribute("style", "padding:10px;"); // Set inline style (padding) for the same img element

// Setting content and attributes for elements within site2El
site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

// Setting content and attributes for elements within site3El
site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

var siteElements = [site1El, site2El, site3El];

for (var i = 0; i < siteElements.length; i++) {
  var currentSite = siteElements[i];
  var titleElement = currentSite.children[0];

  // Set common styles for the title element
  titleElement.textContent = "Site " + (i + 1);
  titleElement.style.paddingLeft = "10px";
  titleElement.style.margin = "0";

}

// The rest of your code
document.addEventListener('DOMContentLoaded', function() {
  var allH2Elements = document.querySelectorAll('h2');

  allH2Elements.forEach(function(h2Element) {
    h2Element.style.color = 'blue';
    h2Element.style.fontSize = '30px';
    h2Element.style.fontWeight = 'bold';
    h2Element.style.fontFamily = "system-ui";
  });
});
  
