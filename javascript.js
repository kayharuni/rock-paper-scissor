


//const playerSelection = getPlayerChoice;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
    return "That's a draw.";
} else if (playerSelection  === "rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You win ! Rock beats Scissors";
} else if (playerSelection  === "scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You win ! Scissors beats paper";
} else if (playerSelection === "paper" && computerSelection === "Rock") {
    playerScore++;
    return "You win ! Paper beats Rock";
} else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    return "You lose ! Paper beats Rock";
} else if (playerSelection  === "scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You lose ! Rock beats Scissors";
} else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You lose ! Scissors beats Paper";
}else {
    return ("You must choose between rock, paper, and scissors! Try again!")
}
}

//let playerSelection = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase()
//console.log("You chose " + playerSelection);

let computerChoice = Math.random();
 function getComputerChoice (){
   if (computerChoice < 0.33) {
    return "Rock"
    }
    else if (computerChoice <= 0.67) {
     return "Scissors"
    }
    else if (computerChoice <=1) {
     return "Paper"
    }
}


//let computerSelection = getComputerChoice()
//console.log("Computer chose " + computerSelection)


// let computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));

//const playerSelection = getPlayerChoice()
//console.log(playRound(playerSelection, computerSelection));

let computerScore = 0
let playerScore = 0

//console.log(playRound(playerSelection, computerSelection));

function game() {
    for(i=0 ;i<5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
        console.log("You chose " + playerSelection);
        let computerChoice = Math.random();
        function getComputerChoice (){
          if (computerChoice < 0.33) {
            return "Rock"
           } else if (computerChoice <= 0.67) {
            return "Scissors"
           } else if (computerChoice <=1) {
             return "Paper"
           }
       }

       computerSelection = getComputerChoice()
       console.log("Computer chose " + computerSelection)
      console.log(playRound(playerSelection, computerSelection))
    }
    if(playerScore > computerScore) {
        return "Your score is " + playerScore + " " + "and the Computer scores " + computerScore + ". You win!"
    } else if (playerScore === computerScore) {
        return "Your score is " + playerScore + " " + "and the Computer scores " + computerScore + ". That's a tie!"
    } else {
        return "Your score is " + playerScore + " and the Computer scores " + computerScore + ". You lose"
    }
}

console.log(game());
