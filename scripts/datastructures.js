
export let choices = ['rock', 'paper', 'scissor'];

export let choicesImage = {
    rock : {
        imgSrc : "../assets/images/rock.jpg"
    },
    paper : {
        imgSrc : "../assets/images/paper.jpg"
    },
    scissor : {
        imgSrc : "../assets/images/scissor.jpg"
    }
}

export let scores = {
    userScore : 0,
    computerScore : 0,
}

export let rounds = {
    totalRounds : 0,
    userWins : 0,
    computerWins : 0,
    ties : 0,
}

export let trophies = [
    {
        id : 1,
        name : "Wooden",
        smallIcon : "../assets/images/03-trophy/wooden-trophy/wooden-trophy-32.png",
        largeIcon : "../assets/images/03-trophy/wooden-trophy/wooden-trophy-64.png",  
    },
    {
        id : 2,
        name : "Bronze",
        smallIcon : "../assets/images/03-trophy/bronze-trophy/bronze-trophy-32.png",
        largeIcon : "../assets/images/03-trophy/bronze-trophy/bronze-trophy-64.png",
    },
    {
        id : 3,
        name : "Iron",
        smallIcon : "../assets/images/03-trophy/iron-trophy/iron-trophy-32.png",
        largeIcon : "../assets/images/03-trophy/iron-trophy/iron-trophy-64.png",
    },
    {
        id : 4,
        name : "Silver",
        smallIcon : "../assets/images/03-trophy/silver-trophy/silver-trophy-32.png",
        largeIcon : "../assets/images/03-trophy/silver-trophy/silver-trophy-64.png",
    },
    {
        id : 5,
        name : "Gold",
        smallIcon : "../assets/images/03-trophy/gold-trophy/gold-trophy-32.png",
        largeIcon : "../assets/images/03-trophy/gold-trophy/gold-trophy-64.png",
    }
]

export let userAchivements = {
    id : 1,
    level : 1,
};

export  let computerAchivements = {
    id : 1
}

export function saveGameData(){
    localStorage.setItem('scores', JSON.stringify(scores));
    localStorage.setItem('rounds', JSON.stringify(rounds));
    localStorage.setItem('userAchivements', JSON.stringify(userAchivements));
    localStorage.setItem('computerAchivements', JSON.stringify(computerAchivements));
}

export function loadGameData(){
    try{
        if(localStorage.getItem('scores')){
            Object.assign(scores = JSON.parse(localStorage.getItem('scores')));
        }
        if (localStorage.getItem("rounds")) {
            Object.assign(rounds, JSON.parse(localStorage.getItem("rounds")));
          }
        if (localStorage.getItem("userAchivements")) {
            Object.assign(userAchivements, JSON.parse(localStorage.getItem("userAchivements")));
          }
        if (localStorage.getItem("computerAchivements")) {
            Object.assign(computerAchivements, JSON.parse(localStorage.getItem("computerAchivements")));
          }
    }catch (error) {
        console.error("Error loading game data:", error);
    }
}

export function resetGame(){
    localStorage.clear();
    scores.userScore = 0;
    scores.computerScore = 0;
    rounds.totalRounds = 0;
    rounds.userWins = 0;
    rounds.computerWins = 0;
    rounds.ties = 0;
    userAchivements.id = 1;
    userAchivements.level = 1;
    computerAchivements.id = 1;
}