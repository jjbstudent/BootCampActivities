var menu = {
    drinks: [
        {
            name: "Latte",
            price: 3.50,
            sizeOptions: ['small', 'medium', 'large'],
            milkOptions: ['whole', 'skim', 'oat'],
            iced: true,
            sugar: true
        },
        {
            name: "Espresso",
            price: 2.00,
            sizeOptions: ['single', 'double'],
            milkOptions: ['whole', 'skim', 'oat'],
            iced: false,
            sugar: false
        }
    ],
    food: ['Sandwich', 'Burger', 'Fries', 'Salad'],
    milk: ['whole', 'skim', 'oat'],
    sizes: ['small', 'medium', 'large']
};

// Print the price of a drink
console.log("Price of a Latte: $" + menu.drinks[0].price);

// Print the price of two drinks
console.log("Price of two Espressos: $" + (menu.drinks[1].price * 2));

// Print milk and size options
console.log("Milk options: " + menu.milk);
console.log("Size options: " + menu.sizes);
