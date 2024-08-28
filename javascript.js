// Write the logic to get the computer choice
function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random()*computerChoices.length);

    return computerChoices[randomizer];
}

//Write the logic to get the computer choice
function getHumanChoice(){
    let choice = prompt("What is your choice?").toLowerCase();

    if (choice ==="rock"){
        return choice
    }

    else if (choice === "paper"){
        return choice
    }

    else if (choice === "scissor"){
        return choice
    }

}

//Declare the players score variables
let humanScore = 0;
let computerScore = 0;

//Write the logic to play a single round
function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case 'rock':
            switch (computerChoice){
                case 'rock':
                    alert("It is a tie");
                    break;
                case 'scissor':
                    alert("Congratulations, You win!");
                    humanScore += 1;
                    break;
                case 'paper':
                    alert("Sorry. You Lose.");
                    computerScore += 1;
                    break;
            }
        break;

        case 'scissor':
            switch (computerChoice){
                case 'rock':
                    alert("Sorry. You Lose.");
                    computerScore += 1;
                    break;
                case 'scissor':
                    alert("It is a tie");
                    break;
                case 'paper':
                    alert("Congratulations, You win!");
                    humanScore += 1;
                    break;
            }
        break;

        case 'paper':
            switch (computerChoice){
                case 'rock':
                    alert("Congratulations, You win!");
                    humanScore += 1;
                    break;
                case 'scissor':
                    alert("Sorry. You lose.");
                    computerScore += 1;
                    break;
                case 'paper':
                    alert("It is a tie");
                    break;
            }
        break;

        default:
            alert("Invalid Input. Please play rock, paper, scissor.");
    }
}

//Write the logic to play the entire game
function playGame(){
    for(let roundCounter=0; roundCounter<5; roundCounter++ ){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    alert(`User score is: ${humanScore}, Computer score is: ${computerScore}`);

    if (humanScore === computerScore){
        alert("The game is a draw.");
    }else if (humanScore > computerScore){
        alert("Congrats. You have won the game.");
    }else {
        alert("Sorry. You lost the game.");
    }
    
}

playGame();