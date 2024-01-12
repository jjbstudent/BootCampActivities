
import { quizData } from './questions.js';
import { calculateScore } from './scores.js';

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerHTML = `<p>${currentQuizData.question}</p>`;
    currentQuizData.options.forEach((option, index) => {
        questionContainer.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.innerHTML = `You scored ${calculateScore(score, quizData.length)}`;
}

loadQuestion();
