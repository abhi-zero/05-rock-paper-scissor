
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