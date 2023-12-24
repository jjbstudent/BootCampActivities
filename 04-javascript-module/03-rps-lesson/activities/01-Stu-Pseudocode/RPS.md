# Rock, Paper, Scissors Game Pseudocode

# Display welcome message

print("Welcome to Rock, Paper, Scissors Game!")

# Get player choice

input_prompt = "Enter your choice (Rock, Paper, or Scissors): "
player_choice = input(input_prompt)

# Generate computer choice

computer_choice = randomly_select_from(["Rock", "Paper", "Scissors"])

# Display choices

print("You chose:", player_choice)
print("Computer chose:", computer_choice)

# Determine the winner

if player_choice == computer_choice:
print("It's a tie!")
elif player_choice == "Rock" and computer_choice == "Scissors":
print("You win! Rock crushes Scissors.")
elif player_choice == "Paper" and computer_choice == "Rock":
print("You win! Paper covers Rock.")
elif player_choice == "Scissors" and computer_choice == "Paper":
print("You win! Scissors cut Paper.")
else:
print("Computer wins!")

# Function to randomly select from a list

function randomly_select_from(choices):
index = random_integer_in_range(0, length(choices) - 1)
return choices[index]

# Function to generate a random integer in a given range

function random_integer_in_range(min, max):
return random_integer >= min && random_integer <= max
