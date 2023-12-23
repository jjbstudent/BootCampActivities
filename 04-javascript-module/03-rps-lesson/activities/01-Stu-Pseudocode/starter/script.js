// Display welcome message
alert("Welcome to Rock, Paper, Scissors Game!");

// Player choice
let player_choice = prompt("Enter your choice (r, p, or s):").toLowerCase();

// Map choices to full words for better readability
const choicesMapping = { r: "Rock", p: "Paper", s: "Scissors" };

// Generate computer choice
let computer_choice = randomlySelectFrom(["r", "p", "s"]);

// Display choices
alert(`You chose: ${choicesMapping[player_choice]}`);
alert(`Computer chose: ${choicesMapping[computer_choice]}`);

// Determine the winner
if (player_choice === computer_choice) {
  alert("It's a tie!");
} else if (
  (player_choice === "r" && computer_choice === "s") ||
  (player_choice === "p" && computer_choice === "r") ||
  (player_choice === "s" && computer_choice === "p")
) {
  alert(
    `You win! ${choicesMapping[player_choice]} beats ${choicesMapping[computer_choice]}.`
  );
} else {
  alert(
    `Computer wins! ${choicesMapping[computer_choice]} beats ${choicesMapping[player_choice]}.`
  );
}

// Function to randomly select from a list
function randomlySelectFrom(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
