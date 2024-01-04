// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to check if the player wins
  function checkPlayerWin(score) {
    if (score === 21) {
      // Display a prompt if the player's score is 21
      alert("Player wins!");
    }
  }
  
  // Function to check if the dealer wins
  function checkDealerWin(score) {
    if (score === 21) {
      // Display a prompt if the dealer's score is 21
      alert("Dealer wins!");
    }
  }
  
  // Function to play the game
  function playGame() {
    var playerScore = getRandomNumber(4, 21);
    var dealerScore = getRandomNumber(4, 21);
  
    alert("Player's hand: " + playerScore);
    alert("Dealer's hand: " + dealerScore);
  
    // Check if the player wins
    checkPlayerWin(playerScore);
  
    // Player's turn
    while (true) {
      var hit = confirm("Would you like to hit?");
  
      if (hit) {
        // Update player's score
        playerScore += getRandomNumber(2, 11);
        alert("Player's hand: " + playerScore);
  
        // Check if the player wins
        checkPlayerWin(playerScore);
  
        // Check if player busts
        if (playerScore > 21) {
          alert("Player busts! Dealer wins.");
          return; // End the game
        }
      } else {
        break; // Player chooses to stay
      }
    }
  
    // Dealer's turn
    while (dealerScore < 17) {
      // Dealer hits as long as their score is less than 17
      dealerScore += getRandomNumber(2, 11);
      alert("Dealer's hand: " + dealerScore);
  
      // Check if the dealer wins
      checkDealerWin(dealerScore);
  
      // Check if the dealer busts
      if (dealerScore > 21) {
        alert("Dealer busts! Player wins.");
        return; // End the game
      }
    }
  
    // Compare final scores and determine the winner
    if (playerScore > dealerScore && playerScore <= 21) {
      alert("Player wins!"  +playerScore);
    } else if (dealerScore > playerScore && dealerScore <= 21) {
      alert("Dealer wins! "+dealerScore, " " );
    } else {
      alert("It's a tie!"+dealerScore, " " +playerScore);
    }

  }
  

  // Start the game
  playGame();
  