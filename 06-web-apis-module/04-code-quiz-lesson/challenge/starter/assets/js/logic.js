// Import the questions array from questions.js
import questions from './questions.js';

// Get references to the necessary DOM elements
const startButton = document.getElementById('start');
const questionsContainer = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById('choices');

// Add event listener to the "Start Quiz" button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // Display the questions container
  questionsContainer.classList.remove('hide');

  // Get the first question from the array
  const currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
  const currentQuestion = questions[currentQuestionIndex];

  // Display the question title
  questionTitle.textContent = currentQuestion.question;

  // Display the choices
  displayChoices(currentQuestion.choices);
}

function displayChoices(choices) {
  // Clear existing choices
  choicesContainer.innerHTML = '';

  // Loop through choices and create buttons
  choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.textContent = choice;

    // Add click event listener to handle user's choice
    choiceButton.addEventListener('click', () => handleChoice(index));

    // Append the button to the choices container
    choicesContainer.appendChild(choiceButton);
  });
}

function handleChoice(choiceIndex) {
  // Implement logic to check if the chosen answer is correct
  const currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex')) || 0;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedChoice = currentQuestion.choices[choiceIndex];

  if (selectedChoice === currentQuestion.correctAnswer) {
    // Correct answer handling (e.g., update score)

    // Increment the score in Local Storage
    const score = parseInt(localStorage.getItem('score')) || 0;
    localStorage.setItem('score', score + 1);
  } else {
    // Incorrect answer handling (e.g., penalize time)
  }

  // Move to the next question
  const nextQuestionIndex = currentQuestionIndex + 1;

  if (nextQuestionIndex < questions.length) {
    // There are more questions, update the current question index
    localStorage.setItem('currentQuestionIndex', nextQuestionIndex);

    // Display the next question
    startQuiz();
  } else {
    // Quiz is over, show the final score or perform other actions
    const finalScore = parseInt(localStorage.getItem('score')) || 0;
    console.log('Final Score:', finalScore);

    // Clear stored data for the next quiz or session
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('score');
  }
}
