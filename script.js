"use strict";


const messageDisplay = function (message) {
  document.querySelector(".message").textContent = message ;
}
const numberDisplay = number => document.querySelector(".number").textContent = number; 

let secretNumber = (numberDisplay(Math.trunc(Math.random() * 20 + 1)));
numberDisplay( "?");
let score = 20;
let highScore = 0;



document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  score;

  if (!guess) {
    messageDisplay(" No Number 🚫 ");
  } else if (guess > 20) {
    messageDisplay(" Guess Between 1 - 20 ");
  } else if (guess === secretNumber) {
    messageDisplay("You Won");
    numberDisplay(guess);

    document.querySelector("body").style.background = "green";

    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageDisplay (guess > secretNumber ? "Too High" : "Too Low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageDisplay(" You Lost");
      document.querySelector("body").style.background = "red";

      document.querySelector(".score").textContent = "0";

      numberDisplay(secretNumber);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = numberDisplay(Math.trunc(
    Math.random() * 20 + 1
  ));
  console.log(secretNumber);
  score = 20;
  document.querySelector(".score").textContent = score;
 
  numberDisplay("?");

  messageDisplay ("Start guessing...");

  const guess = Number((document.querySelector(".guess").value = ""));

  document.querySelector("body").style.background = "#222";

  document.querySelector(".number").style.width = "15rem";
});
