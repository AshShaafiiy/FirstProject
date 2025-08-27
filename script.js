'use strict';
let again = document.querySelector(".btn.again");
let guessInput = document.querySelector(".guess");
let guessAnswer = document.querySelector(".number");
let msg = document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let check = document.querySelector(".btn.check");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let higherScore = 0;

function AddMessage(messag) {
    msg.textContent = messag; // add the message to the page
}

function checkGameOver(messag) {
    AddMessage(messag);
    currentScore--;
    score.textContent = currentScore;
    if (currentScore == 0) {
        AddMessage("💣 GAME OVER!");
        document.body.style.backgroundColor = "red";
        check.disabled = true;
    }
}

check.addEventListener("click", function () {
    let inputValue = Number(guessInput.value)
    if (!inputValue) {
        AddMessage("⛔ Please Input Something.");
    } else if (inputValue == randomNumber) {
        AddMessage("🥳 Hurray you won!!!");
        document.body.style.backgroundColor = "green";
        let previousHighscore = Number(highScore.textContent);
        if (previousHighscore < currentScore) {
            highScore.textContent = currentScore;
        }
        highScore.textContent = currentScore;
        guessAnswer.textContent = randomNumber;
    } else if (inputValue > randomNumber) {
        checkGameOver("📈 Greater than the actual Number");
    } else if (inputValue < randomNumber) {
        checkGameOver("📉 Lesser than the actual Number");
    }
});

again.addEventListener("click", function () {
    document.body.style.backgroundColor = "#222";
    currentScore = 20;
    score.textContent = currentScore;
    AddMessage("Start guessing...");
    guessAnswer.textContent = "?";
    guessInput.value = "";
    randomNumber = Math.trunc(Math.random() * 20) + 1;
});




// for (let i = 5; i <= 50; i++) {
//     if (i%5 === 0 && i%3 === 0) {
//         console.log(i);
//     }
// }

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }


// let day = "wednesday";
// switch (day) {
//     case "tuesday": console.log("today is tuesday");
//         break;
//     case "wednesday": console.log("today is wednesday");
//         break;
// }

// for (let i = 0; i < 3; i++) {
//     switch (i) {
//         case "1": console.log("today is tuesday");
//             break;
//         case "2": console.log("today is wednesday");
//             break;
//     }
// }
