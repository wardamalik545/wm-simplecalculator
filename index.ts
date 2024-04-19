#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication","Division"]
  },
]);

//condition statement
if (answer.operator === "Addition") {
    let result = answer.firstNumber + answer.secondNumber
    console.log("Your answer is: " + result);
} else if (answer.operator === "Subtraction") {
    let result = answer.firstNumber - answer.secondNumber
    console.log("Your answer is: " + result);
    } else if (answer.operator === "Multiplication") {
        let result = answer.firstNumber * answer.secondNumber
        console.log("Your answer is: " + result);
    } else if (answer.operator === "Division") {
        let result = answer.firstNumber / answer.secondNumber
        console.log("Your answer is: " + result);
    } else {
        console.log("please select valid operator")
    }

    console.log("Thanks for using my Calculator")




