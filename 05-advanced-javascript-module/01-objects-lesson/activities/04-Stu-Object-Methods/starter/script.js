// Menu object with item prices
var menu = {
    coffee: 2.50,
    tea: 2.00,
    water: 1.80,
    orange: 2.20,
    apple: 1.70,
}

// Display the keys (items) in the menu
console.log(Object.keys(menu));

// Display the key-value pairs (entries) in the menu
console.log(Object.entries(menu));

// Initialize a variable to store the total cost, defaulted to 0
var totalCost = 0;

// Loop through each item in the menu and accumulate the total cost
for (var item in menu) {
    totalCost += menu[item];
}



// Display the total cost to 2 decimal places
console.log("Total cost: $" + totalCost.toFixed(2));


