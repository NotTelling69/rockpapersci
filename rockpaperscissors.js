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

// function getHumanChoice (num) {
//     if (num === 1) {
//         let choice = "Rock";
//         return choice;
//     } else if (num === 2) {
//         let choice = "Paper";
//         return choice;
//     } else if (num === 3) {
//         let choice = "Scissors";
//         return choice;
//     }
// }



// This is the function to play a rock paper scissors round
function playRound(humanChoice) {
// This is to check if there is a draw by seeing if they have the same move chosen. 
    const computerChoice = getComputerChoice();
    let resultMessage = `Human player chose ${humanChoice} and computer player chose ${computerChoice}.`

    if (humanChoice === computerChoice) {
        resultMessage += "It's a draw.";
        updateResult(resultMessage);
        return "draw";
    }
// Short circuiting lets us check for human victory condition.
// If no human victory conditions are met, then by default the computer wins
    if ((humanChoice === "Rock" && computerChoice === "Scissors") 
    || (humanChoice === "Scissors" && computerChoice === "Paper")
    || (humanChoice === "Paper" && computerChoice === "Rock")) {
        resultMessage += " Congratulations, you have defeated the computer. +1 to your point total.";
        updateResult(resultMessage);
        return "humanWon";
    } else {
        resultMessage += " You have lost this around. +1 to the computer's point total.";
        updateResult(resultMessage);
        return "computerWon";
    }
}


// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     while (true) {
//         if(humanScore === 5 || computerScore === 5) {
//             console.log("The game is over.")
//             break;
//         }
//         let status = playRound(getHumanChoice(1), getComputerChoice());

//         if(status === "humanWon") {
//             humanScore += 1;
//             console.log("Human's new score is: " + humanScore);
//         }

//         if(status === "computerWon") {
//             computerScore += 1;
//             console.log("Computer's new score is: " + computerScore);
//         }
//     }
// }


// playGame();


// Logic to control the buttons

function updateResult(message) {
    const resultDiv = document.getElementById("results");
    resultDiv.textContent = message;
}

document.querySelector("#rockbtn").addEventListener("click", () => playRound("Rock"));
document.querySelector("#paperbtn").addEventListener("click", () => playRound("Paper"));
document.querySelector("#scissorsbtn").addEventListener("click", () => playRound("Scissors"));

