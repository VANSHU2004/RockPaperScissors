let resMsg = document.querySelector(".resMsg");
let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#computer-score");
let choices = document.querySelectorAll(".choices");
let resetButton = document.querySelector(".reset");
let userScoreCount = 0;
let computerScoreCount = 0;

choices.forEach((choice)=>{
    choice.addEventListener("click", (e)=>{
        
        let userChoice = e.target.id;
        let computerChoice = getComputerChoice();
        let result = playRound(userChoice, computerChoice);
        resMsg.textContent = result;
        checkWinner();
        
    })
})

function checkWinner(){
    if (userScoreCount === 5) {
    resMsg.textContent = `Congratulations! You won the game!`;
    setTimeout(resetGame,2000);
    
} else if (computerScoreCount === 5) {
    resMsg.textContent = "Sorry! You lost the game!";
    setTimeout(resetGame,2000);
}
}

function getComputerChoice(){
    let choice = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()* choice.length);
    return choice[randomIndex];
}

function playRound(userChoice , computerChoice){
    
    if(userChoice === computerChoice){
        return "It's a tie!";
    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice ==="rock") ||
        (userChoice ==="scissors" && computerChoice === "paper")
    ){
        userScoreCount++;
        userScore.textContent = userScoreCount;
        return `You win! ${userChoice} beats ${computerChoice}`;

    } else{
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }

}



resetButton.addEventListener("click", resetGame);

// Function to reset the game
function resetGame() {
    // Reset the scores and message
    let tl = gsap.timeline();
    tl.from( ".game",{
        y: -100,
        opacity: 0,
               
    },

    tl.from(".result",{
        y:-100,
        opacity: 0,
         
    }),
    
    )

    userScoreCount = 0;
    computerScoreCount = 0;
    userScore.textContent = userScoreCount;
    computerScore.textContent = computerScoreCount;
    resMsg.textContent = "Game reset! Start again.";
}










