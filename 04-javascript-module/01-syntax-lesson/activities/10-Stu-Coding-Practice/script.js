// Player salaries
var player1Salary = 10000000; 
var player2Salary = 10000000; 
var player3Salary = 50000000; 

// Team spending limit
var spendingLimit = 40000000; // var created for spending limit max $40,000,000

// Calculates total salary
var totalSalary = player1Salary + player2Salary + player3Salary; //new var created for totalsalary

// Calculates luxury tax on the amount exceeding the spending limit
var excessAmount = totalSalary - spendingLimit;
var luxuryTax = excessAmount * 0.18; // 18% luxury tax rate

//displays each players salary
console.log("Total salary for each player:");
console.log("Player 1 salary = ",player1Salary);
console.log("Player 1 salary = ",player2Salary);
console.log("Player 1 salary = ",player3Salary);


// Check if the team exceeded the spending limit
if (totalSalary > spendingLimit) {
    console.log("Total Salary: $" + totalSalary);
    console.log("Team exceeded spending limit!");
    console.log("Luxury Tax: $" + luxuryTax);
} else {
    console.log("Total Salary: $" + totalSalary);
    console.log("Team is within the spending limit.");
}
