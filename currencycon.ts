#! /usr/bin/env node

import inquirer from "inquirer"
const currency : any = {
    USD:  1, //Base Currency
    GPP: 0.94,
    EUR: 0.75,
    SAR: 78.59,
    PKR: 310,
};

let userAns = await inquirer.prompt(
  [
      {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD','GBP','EUR','SAR','PKR']

      },
      
      {
        name: "to",
        message: "Enter from currency",
        type: "list",
        choices: ['USD','GBP','EUR','SAR','PKR']

      },
      
      {
        name: "amount",
        message: "Enter from amount",
        type: "number",
      },
  ]
);

let fromAmount = currency[userAns.from]
let toAmount = currency[userAns.to]
let amount = userAns.amount
let baseAmount = amount / fromAmount
let convertAmount = baseAmount * toAmount

console.log(fromAmount);
console.log(toAmount);
console.log(convertAmount);
