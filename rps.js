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
    if(playerSelection === 'rock' && computerSelection == 'scissors') {
        playerWins += 1;
        return console.log('You Win! Rock beats Scissors!');
    }
    else if(playerSelection === 'paper' && computerSelection == 'rock') {
        playerWins += 1;
        return  console.log('You Win! Paper beats Rock!');
    }
    else if(playerSelection === 'scissors' && computerSelection == 'paper') {
        playerWins += 1;
        return  console.log('You Win! Scissors beats Paper!');
    }
    else if(playerSelection === computerSelection) {
        return console.log("It's a Draw!");
    }
    else if(playerSelection === 'scissors' && computerSelection == 'rock') {
        computerWins += 1;
        return  console.log('You Lose! Rock beats Scissors!');
    }
    else if(playerSelection === 'rock' && computerSelection == 'paper') {
        computerWins += 1; 
        return console.log('You Lose! Rock beats Scissors!');
        
    }
    else if(playerSelection === 'paper' && computerSelection == 'scissors') {
        computerWins += 1;
        return  console.log('You Lose! Scissors beats Paper!');
    }
}

function playGame() {

    for(i = 0; i < 5; i++)
    {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock Paper or Scissors?: ").toLowerCase();
        console.log('Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');
        playRound(playerSelection, computerSelection);
    }
    
    console.log('Final Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');

    if(playerWins > computerWins) {
        return "Player Wins!";
    }
    else if(computerWins > playerWins) {
        return "Computer Wins!";
    }
    else {
        return "Draw!";
    }
    
}

//const computerSelection = getComputerChoice();
//const playerSelection = prompt("Rock Paper or Scissors?: ").toLowerCase();
let computerWins = 0;
let playerWins = 0;

console.log(playGame());