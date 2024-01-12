// logic.js

import { quizData } from './questions.js';
import { calculateScore } from './scores.js';

// ... your other functions

export function startQuiz() {
    const startScreen = document.getElementById("start-screen");
    const questionsContainer = document.getElementById("questions");
    const timeElement = document.getElementById("time");
    const choicesContainer = document.getElementById("choices");

    let currentQuestion = 0;
    let score = 0;
    let time = 60; // Set your desired time limit

    function loadQuestion() {
        const currentQuizData = quizData[currentQuestion];
        document.getElementById("question-title").textContent = currentQuizData.question;

        // Clear choices container before adding new options
        choicesContainer.innerHTML = "";

        currentQuizData.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            choicesContainer.appendChild(button);
        });
    }

    function checkAnswer(answer) {
        const currentQuizData = quizData[currentQuestion];
        if (answer === currentQuizData.correctAnswer) {
            score++;
        } else {
            // Penalize 10 seconds for incorrect answers
            time -= 10;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        // Add logic to end the quiz, show final score, and handle user input for initials
        const endScreen = document.getElementById("end-screen");
        const finalScoreElement = document.getElementById("final-score");
        const initialsInput = document.getElementById("initials");

        endScreen.classList.remove("hide");
        finalScoreElement.textContent = calculateScore(score, quizData.length);
    }

    function startTimer() {
        const timerInterval = setInterval(() => {
            time--;
            timeElement.textContent = time;

            if (time <= 0 || currentQuestion >= quizData.length) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    // Hide start screen and show questions container
    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");

    // Load the first question
    loadQuestion();

    // Start the timer
    startTimer();
}
