var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total); //
  document.querySelector("#tip-amount").textContent = tipAmount; //updates the html textarea
  document.querySelector("#new-total").textContent = newTotal.toFixed(2); //updates html textarea
  
  console.log(tipAmount)
  console.log(newTotal)
  event.preventDefault(); //stops page refreshing after displaying the returned values
}
 
submitEl.addEventListener("click", addTip);
