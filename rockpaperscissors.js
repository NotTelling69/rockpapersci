// This is the logic to get the computer and human moves. 
// They can use the same logic as it's just rock paper scissors.

let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let rng = Math.floor(Math.random() * 3) + 1;
    let choice;

    if (rng === 1) {
        let choice = "Rock";
        return choice;
    } else if (rng === 2) {
        let choice = "Paper";
        return choice;
    } else {
        let choice = "Scissors";
        return choice;
    }
}



// This is the function to play a rock paper scissors round
function playRound(humanChoice) {
// This is to check if there is a draw by seeing if they have the same move chosen. 
    const computerChoice = getComputerChoice();
    let resultMessage = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.`

    if (humanChoice === computerChoice) {
        resultMessage += "It's a draw.";
        
    }
// Short circuiting lets us check for human victory condition.
// If no human victory conditions are met, then by default the computer wins
    if ((humanChoice === "Rock" && computerChoice === "Scissors") 
    || (humanChoice === "Scissors" && computerChoice === "Paper")
    || (humanChoice === "Paper" && computerChoice === "Rock")) {
        resultMessage += " Congratulations, you have defeated the computer. +1 to your point total.";
        updateResult(resultMessage);
        humanScore++;
    } else {
        resultMessage += " You have lost this around. +1 to the computer's point total.";
        updateResult(resultMessage);
        computerScore++;
    }

    updateScore();

    if (humanScore === 5 || computerScore === 5) {
        
        endGame();
    }

    updateResult(resultMessage);
}


// Logic to control the buttons

function updateResult(message) {
    const resultDiv = document.getElementById("results");
    resultDiv.textContent = message;
}

function updateScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function endGame() {
    if (humanScore === 5) {
        alert("Congratulations! You've won the game.");
    } else {
        alert("Sorry, you've lost the game. Better luck next time.");
    }
    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

document.querySelector("#rockbtn").addEventListener("click", () => playRound("Rock"));
document.querySelector("#paperbtn").addEventListener("click", () => playRound("Paper"));
document.querySelector("#scissorsbtn").addEventListener("click", () => playRound("Scissors"));

