#! /usr/bin/evn node
import inquirer from "inquirer";
// 1) Computer will generate a randome number
// 2) User input for guessing number
// 3) Compare user input with computer generated numder and show result - done
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congratulation you Win!");
}
else {
    console.log("You Lose!");
}
