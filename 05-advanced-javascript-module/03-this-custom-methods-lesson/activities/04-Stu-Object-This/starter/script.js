// Logging the global object (usually 'window' in a browser context) to the console
console.log(this);

// Defining a function named helloThis
function helloThis() {
  // Logging a message with the value of 'this' inside the function
  console.log('Inside this function, this is ' + this);
}

// Creating an object named 'child' with an 'age' property and a method 'ageTenYears'
var child = {
  age: 10,
  ageTenYears: function () {
    // Logging the value of 'this.age' plus 10
    console.log(this.age + 10);
    console.log(this)
  },
};

// Creating an object named 'investor' with 'name' and 'investment' properties
var investor = {
  name: 'Cash Saver',
  // Nested 'investment' object with 'initialInvestment' property and 'investmentGrowth' method
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      // Logging the result of multiplying 'this.initialInvestment' by 1.15
      console.log(this.initialInvestment * 1.15);
    },
  },
};

//
investor.investment.investmentGrowth();
child.ageTenYears();

