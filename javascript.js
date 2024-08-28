function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random()*computerChoices.length);

    return computerChoices[randomizer];
}

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
