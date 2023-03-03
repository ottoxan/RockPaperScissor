const rpsPic = [
    {
        id: "rock",
        img: "Pics/Rock.svg",
    },
    {
        id: "paper",
        img: "Pics/Paper.svg",
    },
    {
        id: "scissor",
        img: "Pics/Scissors.svg",
    },
];

const pScore = document.querySelector(".playerScore");
const oScore = document.querySelector(".oppScore");

const player = document.querySelector(".player");
const opp = document.querySelector(".opp");

const play = document.querySelectorAll(".btn");
const imgs = document.querySelectorAll(".img");

console.log(document.querySelectorAll(".btn"));

// 1 > 3 , 2 > 1 , 3 > 1

let currentOpp = 0;
let currentPlayer = 0;

window.addEventListener("DOMContentLoaded", function () {
    const item = rpsPic[(currentOpp, currentPlayer)];
    opp.src = item.img;
    player.src = item.img;
});

function showRps(rps) {
    const item = rpsPic[rps];
    opp.src = item.img;
}
function showRpsPlayer(rps) {
    const item = rpsPic[rps];
    player.src = item.img;
}

play.forEach(function (start) {
    start.addEventListener("click", function () {
        currentOpp = Math.floor(Math.random() * 3);
        currentPlayer = start.classList[1];
        showRps(currentOpp);
        showRpsPlayer(currentPlayer);

        pResult = start.classList[2];
        oResult = rpsPic[currentOpp].id;
        result = document.querySelector(".result");

        if (pResult == "rock" && oResult == "scissor") {
            pScore.innerHTML++;
            result.innerHTML = "You Won!";
        } else if (oResult == "rock" && pResult == "scissor") {
            oScore.innerHTML++;
            result.innerHTML = "You Lost!";
        }

        if (pResult == "scissor" && oResult == "paper") {
            pScore.innerHTML++;
            result.innerHTML = "You Won!";
        } else if (oResult == "scissor" && pResult == "paper") {
            oScore.innerHTML++;
            result.innerHTML = "You Lost!";
        }

        if (pResult == "paper" && oResult == "rock") {
            pScore.innerHTML++;
            result.innerHTML = "You Won!";
        } else if (oResult == "paper" && pResult == "rock") {
            oScore.innerHTML++;
            result.innerHTML = "You Lost!";
        }

        if (oResult == pResult) {
            result.innerHTML = "Draw!";
        }
        // console.log(
        //     currentPlayer,
        //     currentOpp,
        //     rpsPic[currentPlayer].id,
        //     rpsPic[currentOpp].id
        // );
        console.log(start.classList[1]);
    });
});
