const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const RandNum = Math.floor(Math.random() * 3) + 1;

    switch(RandNum){
        case 1: 
            computer = "ROCK";
            break;
        case 2: 
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
    }
}

function checkWinner(){
    if(player == computer)
        return "DRAW!";
    else if(player == "ROCK")
        return (computer == "PAPER") ? "YOU LOSE!" : "YOU WIN!";
    else if(player == "PAPER")
        return (computer == "SCISSORS") ? "YOU LOSE!" : "YOU WIN!";
    else if(player == "SCISSORS")
        return (computer == "ROCK") ? "YOU LOSE!" : "YOU WIN!";
}