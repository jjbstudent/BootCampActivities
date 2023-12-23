# Rock, Paper, Scissors Game Pseudocode

# Display welcome message

alert("Welcome to Rock, Paper, Scissors Game!");

# Initialize counters for total wins, ties, and losses

var totalWins = 0
var totalTies = 0
var totalLosses = 0

# Loop for each round (up to 10 rounds)

for var round = 1 to 10: # Get player choice
var player_choice = prompt("Round " + round + ": Enter your choice (r, p, or s):").toLowerCase()

    # Generate computer choice
    var computer_choice = randomlySelectFrom(['r', 'p', 's'])

    # Display choices
    var player_choice_name = mapChoiceToName(player_choice)
    var computer_choice_name = mapChoiceToName(computer_choice)

    alert("You chose: " + player_choice_name)
    alert("Computer chose: " + computer_choice_name)

    # Determine the winner
    if player_choice == computer_choice:
        alert("It's a tie!")
        totalTies++
    elif (
        (player_choice == 'r' and computer_choice == 's') or
        (player_choice == 'p' and computer_choice == 'r') or
        (player_choice == 's' and computer_choice == 'p')
    ):
        alert("You win! " + player_choice_name + " beats " + computer_choice_name + ".")
        totalWins++
    else:
        alert("Computer wins! " + computer_choice_name + " beats " + player_choice_name + ".")
        totalLosses++

    # Display total results after each game
    alert("Results so far:\nWins: " + totalWins + "\nTies: " + totalTies + "\nLosses: " + totalLosses)

    # Ask if the user wants to play again after each game
    var playAgain = confirm("Do you want to play again?")

    # If the user chooses not to play again, exit the loop
    if not playAgain:
        break

# Display final results after ten games

alert("Game Over!\nTotal Wins: " + totalWins + "\nTotal Ties: " + totalTies + "\nTotal Losses: " + totalLosses)

# Function to randomly select from a list

function randomlySelectFrom(choices):
var index = Math.floor(Math.random() \* choices.length)
return choices[index]

# Function to map choice to its name (Rock, Paper, or Scissors)

function mapChoiceToName(choice):
switch choice:
case 'r':
return 'Rock'
case 'p':
return 'Paper'
case 's':
return 'Scissors'
