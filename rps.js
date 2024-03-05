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
        roundsPlayed += 1;
        return //console.log('You Win! Rock beats Scissors!');
    }
    else if(playerSelection === 'paper' && computerSelection == 'rock') {
        playerWins += 1;
        roundsPlayed += 1;
        return  //console.log('You Win! Paper beats Rock!');
    }
    else if(playerSelection === 'scissors' && computerSelection == 'paper') {
        playerWins += 1;
        roundsPlayed += 1;
        return  //console.log('You Win! Scissors beats Paper!');
    }
    else if(playerSelection === computerSelection) {
        return //console.log("It's a Draw!");
    }
    else if(playerSelection === 'scissors' && computerSelection == 'rock') {
        computerWins += 1;
        roundsPlayed += 1;
        return  //console.log('You Lose! Rock beats Scissors!');
    }
    else if(playerSelection === 'rock' && computerSelection == 'paper') {
        computerWins += 1; 
        roundsPlayed += 1;
        return //console.log('You Lose! Rock beats Scissors!');
        
    }
    else if(playerSelection === 'paper' && computerSelection == 'scissors') {
        computerWins += 1;
        roundsPlayed += 1;
        return  //console.log('You Lose! Scissors beats Paper!');
    }
}




function playGame() {

    function checkWin() {
        if(roundsPlayed >= 5 && playerWins >= 5) {
            return announceWin.textContent = "Player Wins!";
        }
        else if(roundsPlayed >= 5 && computerWins >= 5) {
            return announceWin.textContent = "Computer Wins!";
        }
        else
            return;
        
    }
    
    
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    score.textContent = ('Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');
    checkWin()
    })

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    score.textContent = ('Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');
    checkWin()
    })

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    score.textContent = ('Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');
    checkWin()
    })

    const results = document.querySelector('#results');

    const score = document.createElement('p');
    score.classList.add('score');
    score.textContent = ('Score: P1 (' + playerWins + ') CPU (' + computerWins + ')');

    const announceWin = document.createElement('p');
    announceWin.classList.add('announceWin');

    
    

    results.appendChild(score);
    results.appendChild(announceWin);
}
    

let computerWins = 0;
let playerWins = 0;
let roundsPlayed = 0;

console.log(playGame());