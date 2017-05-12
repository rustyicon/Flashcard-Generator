var Cloze = require("./ClozeCard.js");
var inquirer = require("inquirer");

//cloze card array
var clozeCardArr = [];

var score;
var x;


clozeCardArr.push(new Cloze("1 out of every 8 Americans is from California", "8"));
clozeCardArr.push(new Cloze("The richest 1% of the population owns 48% of the world's wealth", "48%"));
clozeCardArr.push(new Cloze("GPS is owned by the US Govenment and can be switched 'off' at any time", "GPS"));
clozeCardArr.push(new Cloze("Every Tweet Americans Send is being stored by the Library of Congress", "Library of Congress"));
clozeCardArr.push(new Cloze("Empty homes outnumber the homeless 6 to 1 in the US", "6"));
clozeCardArr.push(new Cloze("men were the first to wear high heals around the 1600’s", "Men"));

function startGame() {
    score = 0;

    if (x < 6) {

        inquirer.prompt([{
                name: "card",
                message: clozeCardArr[x].partial
            }

        ]).then(function(response) {
            if (response.card === clozeCardArr[x].cloze) {
                console.log("Score +1");
                x++;
                score++
                startGame();
            } else {
                console.log("Womp Womp Womp");
                console.log("The correct answer is:", clozeCardArr[x].cloze);
                x++
                startGame();
            }
        });
    } else {
        console.log("");
        console.log("==========================");
        console.log("==========================");
        console.log("");
        console.log("");
        console.log("GAME OVER");
        console.log("");
        console.log("Your Score:" + score);
        console.log("");
        console.log("");
        console.log("=========================");
        console.log("=========================");
        console.log("");

        inquirer.prompt([{
            type: "list",
            name: "playAgain",
            message: "Don't be a sucker, Play again!",
            choces: ["Y", "N"]
        }]).then(function(response) {
            if (response.playAgain === "Y") {
                score = 0;
                x = 0;
                startGame();
            }
        });

    }

}

startGame();
