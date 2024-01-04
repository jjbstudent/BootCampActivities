Function: getRandomNumber(min, max)
    Return a random number between min and max (inclusive)

Function: dealInitialHands()
    playerScore = getRandomNumber(4, 21)
    dealerScore = getRandomNumber(2, 11)
    Display "Player's hand: playerScore"
    Display "Dealer's hand: dealerScore"

Function: checkWinner(score)
    If score is 21
        Display "Player wins!"
        End the game
    Else If score is over 21
        Display "Player busts! Dealer wins."
        End the game

Function: playerTurn()
    While player chooses to hit
        response = prompt("Would you like to hit? (Yes/No)").toLowerCase()
        If response is "yes"
            playerScore += getRandomNumber(2, 11)
            Display "Player's hand: playerScore"
            Check if playerScore is 21 using checkWinner function
            If playerScore is over 21, end the game
        Else If response is "no"
            Exit the loop

Function: dealerTurn()
    While dealerScore is less than 17
        dealerScore += getRandomNumber(2, 11)
        Display "Dealer's hand: dealerScore"
        Check if dealerScore is 21 using checkWinner function
        If dealerScore is over 21, end the game

Function: compareScores(playerScore, dealerScore)
    Determine the winner based on who is closer to 21
    Display the result

Function: playGame()
    Call dealInitialHands function
    Call playerTurn function
    If playerScore is 21, end the game
    If playerScore is less than 21, call dealerTurn function
    If dealerScore is 21, end the game
    If dealerScore is less than 21, call compareScores function

Call playGame function to start the game
