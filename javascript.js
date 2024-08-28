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
                    break;
                case 'paper':
                    alert("Sorry. You Lose.");
                    break;
            }
        break;

        case 'scissor':
            switch (computerChoice){
                case 'rock':
                    alert("Sorry. You Lose.");
                    break;
                case 'scissor':
                    alert("It is a tie");
                    break;
                case 'paper':
                    alert("Congratulations, You win!");
                    break;
            }
        break;

        case 'paper':
            switch (computerChoice){
                case 'rock':
                    alert("Congratulations, You win!");
                    break;
                case 'scissor':
                    alert("Sorry. You lose.");
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

