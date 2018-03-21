let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  //Allow the computer to make a random choice
  let computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  //Compare the playerSelection to the computerSelection
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore+=1;
    return "You win! Rock beats Scissors.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore+=1;
    return "You lose! Paper beats Rock.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore+=1;
    return "You win! Scissors beats Paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore+=1;
    return "You lose! Rock beats Scissors.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore+=1;
    return "You win! Paper beats Rock.";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore+=1;
    return "You lose! Scissors beats Paper.";
  } else {
    return "You tied!";
  }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click");
btnPaper.addEventListener("click");
btnScissors.addEventListener("click");