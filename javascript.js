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