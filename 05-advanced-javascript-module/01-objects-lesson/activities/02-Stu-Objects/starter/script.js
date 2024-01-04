var customerOrder = {
    // Properties are made up of key-value pairs
    drink: "coffee",
    sugars: 2,
    orderReady: true,
  };



//displays the variables and their values 
for (var key in customerOrder) {
  console.log(key + ": " + customerOrder[key]);
}


//usesd if else to displayt message 
if (customerOrder.orderReady===true) {
  console.log("Pick up ready!");
} else {
  console.log("Still in order queue");
}

console.log("Order for "+ customerOrder.drink+ " ");