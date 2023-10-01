// Develop a TS program that show the working of an ATM machine such

//  - User should login by entering his/her unique account number and a secret PIN
// - User can check account balance 
// - User can withdraw money 
// - User can check his/her previous transections in the current login
// - User should be asked at the end of each function that if he/she wants to end transections or perform any other transections if the user choose more transections he/she must be shown all the options again and he / she can perform any transections.
// In the current login means if user logged in and performed 5 transections he/she have an option to check these 5 transections
// If he/she choosed to end the transections the data should be removed.


//??   Library to import Data
import inquirer from "inquirer";
import chalk from "chalk";

const account=[
  {
      accountNumber:"Aqib545",
      pin:"545",
      balance:"20000",
      Transaction:[]
  },
  {
    accountNumber:"Amir545",
    pin:"543",
    balance:"70000",
    Transaction:[]
  },]

  let currentUser:any =null;

async function display() {

    const choices=[
        "Login",
        "Exit",
    ];
    while (true) {
        const  {option} = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Welcome to the ATM. Please choose an option:",
        choices: choices,
    })
   
    if (option ==="Login") {
          await Login();
    }
     else if (option ==="Exit") {
         console.log("Thank you for using the ATM. Goodbye!");
         process.exit(0);
    }}}
    async function Login() {
      const credentials = await inquirer.prompt([
        {
          type: "input",
          name: "accountNumber",
          message: "Enter your account number:",
        },
        {
          type: "password",
          name: "pin",
          message: "Enter your PIN:",
        },]);
    
        currentUser = account.find(
          (account) =>
            account.accountNumber === credentials.accountNumber &&
            account.pin === credentials.pin
        );
      
        if (currentUser) {
          console.log("Login successful!");
          await performTransactions();
        } else {
          console.log("Invalid account number or PIN. Please try again.");
        }
      }
    
      async function performTransactions() {
        const transactionChoices = [
          "Check Account Balance",
          "Withdraw Money",
          "Check Transaction History",
          "End Transactions",
        ];
      
        while (true) {
          const { transaction } = await inquirer.prompt({
            type: "list",
            name: "transaction",
            message: "Choose a transaction:",
            choices: transactionChoices,
          });
      
          switch (transaction) {
            case "Check Account Balance":
              console.log(`Your account balance: $${currentUser.balance}`);
              break;
      
            case "Withdraw Money":
              const { amount } = await inquirer.prompt({
                type: "input",
                name: "amount",
                message: "Enter the amount to withdraw:",
                validate: (input) =>
                  input > 0 && input <= currentUser.balance
                    ? true
                    : "Invalid amount or insufficient balance.",
              });
      
              currentUser.balance -= Number(amount);
              currentUser.transactions.push(`Withdrawn: $${amount}`);
              console.log(`You have withdrawn $${amount}.`);
              break;
      
            case "Check Transaction History":
              console.log("Transaction history:");
              currentUser.transactions.forEach((transaction: string) =>
                console.log(transaction)
              );
              break;
      
            case "End Transactions":
              currentUser = null;
              console.log("Logged out.");
              return;
      
            default:
              break;
          }
        }
      }
// Start the ATM program.

display()