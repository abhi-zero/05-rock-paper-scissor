import { choices, choicesImage, scores, rounds, userAchivements, trophies } from "./datastructures.js";

let userChoice;
let computerChoice;

displayScore();
function getcomputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

const userChoiceSection = document.querySelector(".choices");

userChoiceSection.addEventListener("click", (event) => {
  const choiceBtn = event.target.closest(".option-cta");
  if (!choiceBtn) return;
  getUserChoice(choiceBtn);
  const result = compairChoices();
  displayChoice();
  displayResultsMsg(result);
  updateScore();
  displayScore();
  updateUserAchivements();
});
function getUserChoice(choiceBtn) {
  userChoice = choiceBtn.dataset.choice;
  console.log(userChoice);
  rounds.totalRounds += 1;
}

function compairChoices() {
  computerChoice = getcomputerChoice();
  console.log(`User: ${userChoice}, Computer: ${computerChoice}`);
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    rounds.ties += 1;
    console.log(rounds);
    console.log(scores);
    return "Tie";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log("You Win!");
    rounds.userWins += 1;
    console.log(rounds);
    console.log(scores);
    return "Win";
  } else {
    console.log("You Lose!");
    rounds.computerWins += 1;
    console.log(rounds);
    console.log(scores);
    return "Lose";
  }
}

function displayChoice() {
  const userChoiceImgTag = document.querySelector(".user-choice-img");
  const computerChoiceImgTag = document.querySelector(".computer-choice-img");
  userChoiceImgTag.src = choicesImage[userChoice].imgSrc;
  computerChoiceImgTag.src = choicesImage[computerChoice].imgSrc;
}

function displayResultsMsg(result) {
  const resultsMsg = document.querySelector(".congrates-text");
  resultsMsg.classList.remove("hide");
  resultsMsg.textContent = resultMsg(result);
}

function resultMsg(result) {
  switch (result) {
    case "Tie":
      return `It\'s a tie! Both chose ${userChoice}  .`;
    case "Win":
      return `You win! ${userChoice} beats ${computerChoice} .`;
    case "Lose":
      return `You lose! ${computerChoice} beats ${userChoice} .`;
    default:
      return "Error: Invalid result";
  }
}

function updateScore(){
  scores.userScore = (rounds.userWins * 10) + (rounds.ties * 5);
  scores.computerScore = (rounds.computerWins * 10) +  (rounds.ties * 5);
  return true;
}

function displayScore(){
  const userScore = document.querySelector("[data-score='user']");
  const computerScore = document.querySelector("[data-score='computer']");
  userScore.textContent = scores.userScore;
  computerScore.textContent = scores.computerScore;
  displayUserAchivements()
}

function calculateLevelAndTrophy(playerPoints){
  let level = 0;
  let id = 0;
  if(playerPoints >= 201){
    level = 5;
    id = 5;
  }else if(playerPoints >= 151){
    level = 4;
    id = 4;
  }else if(playerPoints >= 101){
    level = 3;
    id = 3;
  }else if(playerPoints >= 51){
    level = 2;
    id = 2;
  }else{
    level = 1;
    id = 1;
  }

  return {id, level };
}

function updateUserAchivements(){
  const userAchivement = calculateLevelAndTrophy(scores.userScore);
  userAchivements.id = userAchivement.id;
  userAchivements.level = userAchivement.level;
}

function findAchivements(id){
  const userTrophy = trophies.find((trophy) => trophy.id === id);
  return userTrophy;
}

function displayUserAchivements(){
  const userTableTrophy = document.querySelector("[data-achivement='userTableTrophy']");
  const userTableText = document.querySelector("[data-achivement='userTableText']");
  const userTrophy = document.querySelector('[data-achivement="userTrophy"]');
  const userAchivement = findAchivements(userAchivements.id);
  console.log(userAchivement);
  userTableText.textContent = userAchivement.name + " " + "Trophy";
  userTableTrophy.src = userAchivement.smallIcon;
  userTrophy.src = userAchivement.largeIcon;
}