//declare variables
var count = 0; // default starting count to zero
var incrementEl = document.querySelector("#increment"); //button to increase count
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count; //function of the text content
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function () {
  count++; //increases count by 1
  setCounterText();
  console.log(count);
});

// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", function () {
  if (count > 0) {
    count--; //decreased count by zero
    setCounterText();
    console.log(count);
  }
});

/* decrement will go below zero in to the minus
decrementEl.addEventListener("click", function () {
  count--; //increases count by 1
  setCounterText();
  console.log(count);
});
*/
// Initialize counter text
setCounterText();
