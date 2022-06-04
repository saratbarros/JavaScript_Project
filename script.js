const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";        
    }
}

//////////////////////////// SINGLE PLAY ROUND ////////////////////////////

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "This is a tie!";
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }            
}

////////////////////// GAME FUNCTION //////////////////////

let playerScore = 0;
let computerScore = 0;

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        console.log(playerSelection.toLowerCase());
        const computerSelection = computerPlay();
        console.log(computerSelection);
        const result = playRound(playerSelection, computerSelection);
        if (result === "You win! Rock beats scissors.") {
            playerScore++;
        } else if (result === "You win! Paper beats rock.") {
            playerScore++;
        } else if (result === "You win! Scissors beats paper.") {
            playerScore++;
        } else if (result === "You lose! Paper beats rock.") {
            computerScore++;
        } else if (result === "You lose! Scissors beats paper.") {
            computerScore++;
        } else if (result === "You lose! Rock beats scissors.") {
            computerScore++;
        } else if (result === "This is a tie!") {
            continue;
        }
    }
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose!";
    } else {
        return "This is a tie!";
    }
}

console.log(game());
console.log("Player score: " + playerScore + " Computer score: " + computerScore);