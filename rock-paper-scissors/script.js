
//  for 3 choices of equall probability, multiply math.random by 3 to get choices 0-3 and then use math.floor to round each choice to 0,1, or 2 
// now you have 3 options --> if the output is 0 return rock, if 1 return paper, if 2 return scissors

// function to get a random computer choice
function getComputerChoice(){ 
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    }  else if (randomChoice === 1) {
        return "paper";
    }  else {
        return "scissors";
    }
}

// Function to get the human choice from a prompt
// inside the input is converted to lowercase and validated
function getHumanChoice(input) {
    if (input.toLowerCase() === "rock") {
        return "rock";
    } else if (input.toLowerCase() === "paper") {
        return "paper";
    } else if (input.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        console.log("invalid response")
        return null;
    }
}


// function to play one round to determind the winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie! Play Again";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return "you win!";
    } else {
        return "you lose!";
    }
}

// initialize scores
let humanScore = 0
let computerScore = 0



// Best of 5 game
while (humanScore < 3 && computerScore <3 ) {
    let answer = prompt("choose rock, paper, or scissors:");
    if (answer) { // proceed only if input is valid
        let humanChoice = getHumanChoice(answer);
        if (humanChoice) { //proceed only if the input is valid
            let computerChoice = getComputerChoice();
            console.log(`you chose: ${humanChoice} `);
            console.log(`Computer chose: ${computerChoice}`);
            let result = playRound(humanChoice, computerChoice);
            console.log(result);
       
            //update scores
            if (result === "you win!") {
            humanScore++;
            } else if (result === "you lose!") {
            computerScore++;
            }
    

            //display scores
            console.log(`Scores --> You: ${humanScore}, Computer: ${computerScore}`);
        }
    }
}

// Final game Outcome
if (humanScore === 3) {
    console.log("Congratulations! You won the best-of-5 game!");
} else {
    console.log("Sorry, the computer won the best-of-5 game.");
}



