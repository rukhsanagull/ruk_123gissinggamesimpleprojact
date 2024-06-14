#!/user/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
const rendomNumber = Math.floor(Math.random() *10 + 1);
let answer = await inquirer.prompt([{
      name:"gissingGame",
      type:"input",
      message:`Guess a number between 1 and 10`
}]);
if(answer.gissingGame == rendomNumber){
    console.log(chalk.green("Congratulations! You guessed the number correctly!"));}
else{console.log("please try agine");}
