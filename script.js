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
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper.";
        }
    }  else (playerSelection !== "paper" || "rock" || "scissors")
        return "Error! Please enter a valid selection and play again!";
}

////////////////////// GAME FUNCTION //////////////////////

let playerScore = 0;
let computerScore = 0;

const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let playerSelection = prompt("Let's play a game!", "Choose Rock, Paper or Scissors?").toLowerCase();
        console.log(`Player chose:  ${playerSelection}`);
        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
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
        } else if (playerSelection !== "paper" || "rock" || "scissors") {
            alert("Error!! Please enter a valid selection!");
            i--
        }
        console.log(result);
        console.log("Player score: " + playerScore + " Computer score: " + computerScore);
    }   
    if (playerScore > computerScore) {
        return "You win the game! Congratulations!";
    } else if (playerScore < computerScore) {
        return "You lose the game! Better luck next time!";
    } else {
        return "This is a tie! Your both tied!";
    }
}

console.log(game());