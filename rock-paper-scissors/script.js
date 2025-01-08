// I am writing a function that will randomly return "rock", "paper", or "scissors"
// this game will be played against the computer
 // I need to have the function randomly return 1 of 3 values.
// math.random returns a value 0>1 
// i need an equal prob to select 1/3 choices
// for it to be equally probable for 2 choices, it can either be less than 0.5 or greater than 0.5 
//  for 3 choices, multiply math.random by 3 to get choices 0-3 and then use math.floor to round each choice to 0,1, or 2 
// now you have 3 options --> if the output is 0 return rock, if 1 return paper, if 2 return scissors

function getComputerChoice(){
    // generate random number thats either 0,1,2 --> assign to randomChoice    
    let randomChoice = Math.floor(Math.random() * 3);
    // map the choice to the correct move      
    if (randomChoice === 0) {
        return "Rock";
    }  else if (randomChoice === 1) {
        return "Paper";
    }  else {
        return "Scissors";
    }
}
    console.log(getComputerChoice())
