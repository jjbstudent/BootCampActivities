var container = document.querySelector(".container");

container.addEventListener("click", function(event) {

  var element = event.target;
  console.log(element);
  if (element.matches(".box")){
    var state = element.getAttribute("data-state");
    if(state==="hidden")
    console.log(thisnumber);
  }

  // TODO: Complete function
});
