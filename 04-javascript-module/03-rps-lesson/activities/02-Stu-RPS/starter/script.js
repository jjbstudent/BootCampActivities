//STEP 1
// Display welcome message
alert("Welcome to Rock, Paper, Scissors Game!");

var totalWins = 0;
var totalTies = 0;
var totalLosses = 0;

//STEP 2
// Included a loop to run the game 10x
for (var round = 1; round <= 10; round++) {
  // Get player lowercase input for player_choice
  var player_choice = prompt(
    `Round ${round}: Enter your choice (r, p, or s):`
  ).toLowerCase();

  // Generate computer choice at random
  var computer_choice = randomlySelectFrom(["r", "p", "s"]);

  //STEP 3
  // creates a case for each choice name
  var player_choice_name, computer_choice_name;

  switch (player_choice) {
    case "r":
      player_choice_name = "Rock";
      break;
    case "p":
      player_choice_name = "Paper";
      break;
    case "s":
      player_choice_name = "Scissors";
      break;
  }

  switch (computer_choice) {
    case "r":
      computer_choice_name = "Rock";
      break;
    case "p":
      computer_choice_name = "Paper";
      break;
    case "s":
      computer_choice_name = "Scissors";
      break;
  }
  //STEP 3
  //Display the choices
  alert(`You chose: ${player_choice_name}`);
  alert(`Computer chose: ${computer_choice_name}`);

  //STEP 4
  // Determine the winner
  if (player_choice === computer_choice) {
    //player tie statement
    alert("It's a tie!");
    totalTies++; //adds 1 value to players total wins
  } else if (
    //player win statements
    (player_choice === "r" && computer_choice === "s") ||
    (player_choice === "p" && computer_choice === "r") ||
    (player_choice === "s" && computer_choice === "p")
  ) {
    alert(`You win! ${player_choice_name} beats ${computer_choice_name}.`);
    totalWins++;
  } else {
    alert(
      `Computer wins! ${computer_choice_name} beats ${player_choice_name}.`
    );
    totalLosses++;
  }

  // Display total results after each game
  alert(
    `Results so far:\nWins: ${totalWins}\nTies: ${totalTies}\nLosses: ${totalLosses}`
  );

  // Ask if the user wants to play again after each game
  var playAgain = confirm("Do you want to play again?");

  // If the user chooses not to play again, exit the loop
  if (!playAgain) {
    //if (NOT) !playAgain end the game
    break;
  }
}

// Display final results after ten games
alert(
  `Game Over!\nTotal Wins: ${totalWins}\nTotal Ties: ${totalTies}\nTotal Losses: ${totalLosses}` //use \n for new line in alert
);

// Function to randomly select from a list
function randomlySelectFrom(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
