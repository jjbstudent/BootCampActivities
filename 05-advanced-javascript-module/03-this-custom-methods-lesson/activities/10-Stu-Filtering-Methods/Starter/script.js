// Create an array of account objects with specific names and balances
const accounts = [
  {
    firstName: "Alice",
    lastName: "Smith",
    balance: 500000,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    balance: 300000,
  },
  {
    firstName: "Charlie",
    lastName: "Williams",
    balance: 150000,
  },
  {
    firstName: "David",
    lastName: "Brown",
    balance: 250000,
  },
  {
    firstName: "Emma",
    lastName: "Jones",
    balance: 100000,
  },
];

// Display the array
console.log(accounts);

// Use the find method to search for the first account with a balance of $250,000
const targetBalance = 250000;
const accountWithTargetBalance = accounts.find(
  (account) => account.balance === targetBalance
);

// Print the result to the console
if (accountWithTargetBalance) {
  console.log("Account with balance $250,000 found:", accountWithTargetBalance);
} else {
  console.log("No account found with balance $250,000.");
}

// Another Find method to use
var findResult = accounts.find(function (obj) {
  return obj.balance === 250000;
});

console.log(findResult);

// Specify the letter you want to filter by
const targetLetter = "J";

// Use the filter method to create a new array of users with last names starting with the target letter
const accountsWithTargetLastName = accounts.filter(
  (accounts) => accounts.lastName.charAt(0).toUpperCase() === targetLetter.toUpperCase()
);

// Print the result to the console
console.log(accountsWithTargetLastName);
