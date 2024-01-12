// do a quiz based on javascript
// when start button is clicked show the first question
// have a choice of 4 questions to choose from 
// 3 questions are wrong , 1 question is correct
// update score after each question on highScores.html


var timerOnDisplay = 0;
var numberOfBlanks = 0;
var selectedWord = "";
var blanksOnDisplay = '';
var timerOnDisplay = 0;


//as a user, i want to start the game by clicking on a button
startButton.addeventlistener('click', function(){
    timerOnDisplay =10;
    selectedWord = words[Math.floor(Math.random())]
// display no of blanks = selectedWord.length
Array(selectedWord).fill("")


}
)