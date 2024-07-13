let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. play again!";
    msg.style.backgroundColor = "pink";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = 'you win';
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText = 'you lose! ';
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();
   
    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? flase : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});