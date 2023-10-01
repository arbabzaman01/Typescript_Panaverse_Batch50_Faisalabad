"use strict";
// Develop a TS program that show the working of an ATM machine such
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  - User should login by entering his/her unique account number and a secret PIN
// - User can check account balance 
// - User can withdraw money 
// - User can check his/her previous transections in the current login
// - User should be asked at the end of each function that if he/she wants to end transections or perform any other transections if the user choose more transections he/she must be shown all the options again and he / she can perform any transections.
// In the current login means if user logged in and performed 5 transections he/she have an option to check these 5 transections
// If he/she choosed to end the transections the data should be removed.
//??   Library to import Data
const inquirer_1 = __importDefault(require("inquirer"));
const account = [
    {
        accountNumber: "Aqib545",
        pin: "545",
        balance: "20000",
        Transaction: []
    },
    {
        accountNumber: "Amir545",
        pin: "543",
        balance: "70000",
        Transaction: []
    },
];
let currentUser = null;
function display() {
    return __awaiter(this, void 0, void 0, function* () {
        const choices = [
            "Login",
            "Exit",
        ];
        while (true) {
            const { option } = yield inquirer_1.default.prompt({
                type: "list",
                name: "option",
                message: "Welcome to the ATM. Please choose an option:",
                choices: choices,
            });
            if (option === "Login") {
                yield Login();
            }
            else if (option === "Exit") {
                console.log("Thank you for using the ATM. Goodbye!");
                process.exit(0);
            }
        }
    });
}
function Login() {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "accountNumber",
                message: "Enter your account number:",
            },
            {
                type: "password",
                name: "pin",
                message: "Enter your PIN:",
            },
        ]);
        currentUser = account.find((account) => account.accountNumber === credentials.accountNumber &&
            account.pin === credentials.pin);
        if (currentUser) {
            console.log("Login successful!");
            yield performTransactions();
        }
        else {
            console.log("Invalid account number or PIN. Please try again.");
        }
    });
}
function performTransactions() {
    return __awaiter(this, void 0, void 0, function* () {
        const transactionChoices = [
            "Check Account Balance",
            "Withdraw Money",
            "Check Transaction History",
            "End Transactions",
        ];
        while (true) {
            const { transaction } = yield inquirer_1.default.prompt({
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
                    const { amount } = yield inquirer_1.default.prompt({
                        type: "input",
                        name: "amount",
                        message: "Enter the amount to withdraw:",
                        validate: (input) => input > 0 && input <= currentUser.balance
                            ? true
                            : "Invalid amount or insufficient balance.",
                    });
                    currentUser.balance -= Number(amount);
                    currentUser.transactions.push(`Withdrawn: $${amount}`);
                    console.log(`You have withdrawn $${amount}.`);
                    break;
                case "Check Transaction History":
                    console.log("Transaction history:");
                    currentUser.transactions.forEach((transaction) => console.log(transaction));
                    break;
                case "End Transactions":
                    currentUser = null;
                    console.log("Logged out.");
                    return;
                default:
                    break;
            }
        }
    });
}
// Start the ATM program.
display();
