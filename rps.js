function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  

function getComputerChoice () {
    let randomNum = getRandomInt(3);
    
    switch(randomNum) {
        case 0:
            return 'rock';
            
        case 1:
            return 'paper';
            
        case 2:
            return 'scissors';
            
    }
    
}

function playRound(playerSelection, computerSelection) {
    console.log('Player Chose: ' + playerSelection + ' \nComputer Chose: ' + computerSelection);
    if(playerSelection == 'rock' && computerSelection == 'scissors') {
        return playerWins += 1; //'You Win! Rock beats Scissors!';
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        return playerWins += 1; //'You Win! Paper beats Rock!';
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        return playerWins += 1; //'You Win! Scissors beats Paper!';
    }
    else if(playerSelection == computerSelection) {
        return "It's a Draw!";
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        return computerWins += 1; //'You Lose! Rock beats Scissors!';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper') {
        return computerWins += 1; //'You Lose! Paper beats Rock!';
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        return computerWins += 1; //'You Lose! Scissors beats Paper!';
    }
}

function playGame() {

    for(i = 0; i < 5; i++)
    {
        playRound(playerSelection, computerSelection);
    }
    if(playerWins >= 3) {
        return "Player Wins!";
    }
    else if(computerWins >= 3) {
        return "Computer Wins!";
    }
    else {
        return "Draw!";
    }
    
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock Paper or Scissors?: ").toLowerCase();
let computerWins = 0;
let playerWins = 0;

console.log(playGame());