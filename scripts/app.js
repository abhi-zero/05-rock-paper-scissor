import {
  choices,
  choicesImage,
  scores,
  rounds,
  userAchivements,
  trophies,
  computerAchivements,
  saveGameData,
  loadGameData,
  resetGame
} from "./datastructures.js";


document.addEventListener('DOMContentLoaded', () =>{
  loadGameData();
const computerTableTrophy = document.querySelector(
  "[data-achivement='computerTableTrophy']"
);
const computerTableText = document.querySelector(
  "[data-achivement='computerTableText']"
);

const userTableTrophy = document.querySelector(
  "[data-achivement='userTableTrophy']"
);
const userTableText = document.querySelector(
  "[data-achivement='userTableText']"
);
const userTrophy = document.querySelector('[data-achivement="userTrophy"]');
const userLevelText = document.querySelector('[data-lvl]');

const resetBtn = document.querySelector('.reset-cta');
const winVideo = document.querySelector('[data-result="win"]').querySelector('video');
const loseVideo = document.querySelector('[data-result="lose"]').querySelector('video');

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
  updateUserAchivements(userAchivements);
  computerAchivement(computerAchivements);
  saveGameData();
});

resetBtn.addEventListener('click', resetGame)
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
      winVideo.style.height = "0px";
      loseVideo.style.height = "0px";
      return `It\'s a tie! Both chose ${userChoice}  .`;
    case "Win":
      loseVideo.style.height = "0px";
      winVideo.style.height = "200px";
      return `You win! ${userChoice} beats ${computerChoice} .`;
    case "Lose":
      loseVideo.style.height = "200px";
      winVideo.style.height = "0px";
      return `You lose! ${computerChoice} beats ${userChoice} .`;
    default:
      return "Error: Invalid result";
  }
}

function updateScore() {
  scores.userScore = rounds.userWins * 10 + rounds.ties * 5;
  scores.computerScore = rounds.computerWins * 10 + rounds.ties * 5;
  return true;
}

function displayScore() {
  const userScoreText = document.querySelector("[data-score='user']");
  const computerScoreText = document.querySelector("[data-score='computer']");
  userScoreText.textContent = scores.userScore;
  computerScoreText.textContent = scores.computerScore;
  displayAchivement(userTableTrophy, userTableText, userAchivements.id);
  displayAchivement(computerTableTrophy, computerTableText, computerAchivements.id);
  displayLevel(userAchivements)
}

function calculateLevelAndTrophy(playerPoints) {
  let level = 0;
  let id = 0;
  if (playerPoints >= 200) {
    level = 5;
    id = 5;
  } else if (playerPoints >= 150) {
    level = 4;
    id = 4;
  } else if (playerPoints >= 100) {
    level = 3;
    id = 3;
  } else if (playerPoints >= 50) {
    level = 2;
    id = 2;
  } else {
    level = 1;
    id = 1;
  }

  return { id, level };
}

function updateUserAchivements(achivement) {
  const userAchivement = calculateLevelAndTrophy(scores.userScore);
  achivement.id = userAchivement.id;
  achivement.level = userAchivement.level;
}

function findAchivements(id) {
  const userTrophy = trophies.find((trophy) => trophy.id === id);
  return userTrophy;
}

function computerAchivement(achivement) {
  const computerAchivement = calculateLevelAndTrophy(scores.computerScore);
  achivement.id = computerAchivement.id;
}

function displayAchivement(tableTrophyIcon, tableText, id) { 
  const achivement = findAchivements(id);
  tableText.textContent = achivement.name + " " + "Trophy";
  tableTrophyIcon.src = achivement.smallIcon;
  tableTrophyIcon.alt = achivement.name + " " + "Trophy"
}

function displayLevel(achivements){
  const achivement = findAchivements(achivements.id);
  userLevelText.textContent = achivements.level;
  userTrophy.src = achivement.largeIcon;
}

function progressBar(){
  const progress = document. 
}

})