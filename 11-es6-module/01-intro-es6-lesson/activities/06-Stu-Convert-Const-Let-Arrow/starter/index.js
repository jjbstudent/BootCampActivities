//TODO: Update the following variables on this file to the new ES6 variables.
const $root = document.querySelector("#root");

let score;
let targetScore;

//TODO: Update this function to an arrow function.
const makeGuess = () => {
  let $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

//TODO: Does this function require an arrow function?
const Crystal = (color) => {
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  //TODO: Can we update this function to an arrow function?
  this.element.addEventListener(
    "click",
     () => {
      score += this.value;
      makeGuess();
    },
    false
  );
};

Crystal.prototype.render = (target) =>{
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

const crystals = [new Crystal("red"), new Crystal("blue"), new Crystal("green")];

//TODO: Update this function to an arrow function.
const playRound = () =>{
  const fragment = document.createDocumentFragment();
  const $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
    .sort(() => {
      return 0.5 - Math.random();
    })
    .forEach((crystal) => {
      crystal.render(fragment);
    });
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
 

// a call back function is when you provide a function as a value for a perameter
// everything in javascript is an object
// method is a prebuilt function that can bne used in javascript