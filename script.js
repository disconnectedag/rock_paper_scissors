console.log("rock paper scissors");

function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
    let num = Math.floor(Math.random() * 3);
    return (choices[num]);
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return ("Draw");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("lose");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return ("win");
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return ("win");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("lose");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return ("lose");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("win");
    }
}

function game(){
    let outcome;
    let playerWins = 0;
    let cpuWins = 0;
        for(i = 0; i < 5; i++){
            playerSelection = prompt("What's your choice?", "Rock, Paper or Scissors?");
            computerSelection = getComputerChoice();
            outcome = playRound(playerSelection, computerSelection);
            console.log(outcome);
            if(outcome == "win"){
                playerWins++;
            } else if (outcome == "lose"){
                cpuWins++;
            }
        }
    console.log("player won: " + playerWins);
    console.log("cpu won: " + cpuWins);

    if(playerWins > cpuWins){
        alert("The player wins!");
    } else if(cpuWins > playerWins){
        alert("The computer wins!");
    }
}



/* 
 if (playerSelection == computerSelection) {
        return ("Draw");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You lose! Paper beats rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return ("You win! Rock beats scrissors");
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return ("You win! Paper beats rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("You lose! Scissors cut paper");
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return ("You lose! Rock crushes scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("You win! Scissors cuts paper");
    }
*/

game();