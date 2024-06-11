// This is the logic to get the computer and human moves. 
// They can use the same logic as it's just rock paper scissors.

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

function getHumanChoice (num) {
    if (num === 1) {
        let choice = "Rock";
        return choice;
    } else if (num === 2) {
        let choice = "Paper";
        return choice;
    } else if (num === 3) {
        let choice = "Scissors";
        return choice;
    }
}


// Logic for the Game

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// This is the function to play a rock paper scissors round
function playRound(humanChoice, computerChoice) {
// This is to check if there is a draw by seeing if they have the same move chosen. 
    if (humanChoice === computerChoice) {
        console.log(`Human player chose ${humanChoice} and computer player chose ${computerChoice}`)
        console.log("It's a draw");
        return "draw";
    }
// Short circuiting lets us check for human victory condition.
// If no human victory conditions are met, then by default the computer wins
    if ((humanChoice === "Rock" && computerChoice === "Scissors") 
    || (humanChoice === "Scissors" && computerChoice === "Paper")
    || (humanChoice === "Paper" && computerChoice === "Rock")) {
        console.log(`Human player chose ${humanChoice} and computer player chose ${computerChoice}`)
        console.log("Congratulations, you have defeated the computer. +1 to your point total.");
        return "humanWon";
    } else {
        console.log(`Human player chose ${humanChoice} and computer player chose ${computerChoice}`)
        console.log("You have lost this round. +1 to the computer's point total");
        return "computerWon";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (true) {
        if(humanScore === 5 || computerScore === 5) {
            console.log("The game is over.")
            break;
        }
        let status = playRound(getHumanChoice(1), getComputerChoice());

        if(status === "humanWon") {
            humanScore += 1;
            console.log("Human's new score is: " + humanScore);
        }

        if(status === "computerWon") {
            computerScore += 1;
            console.log("Computer's new score is: " + computerScore);
        }
    }
}


playGame();