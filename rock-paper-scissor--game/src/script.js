let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const genCompChoice = function () {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    /*math.random is used for generating random numbers from computer....
    *3 means numbers should be generated betwwen 0-2...
    math.floor removes decimal values*/
    return options[randIdx];
};

const drawGame = function () {
    msg.innerText = ("GAME WAS DRAW.");
    msg.style.backgroundColor = "#081b31";
};

const showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = function (userChoice) {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach(function (choice) {
    console.log(choice);
    choice.addEventListener("click", function () {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
