"use strict";
// 1.Personal Message: Store a person’s name in a variable, and print a message to that person. Your 
// message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var PersonName = "Arbab";
console.log(`"Hello ${PersonName}, would you like to learn some Python today?"`);
//2. Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and 
// titlecase.
var Person = "ArBab";
console.log(`Person =${Person}`);
//for uppper Case Letter
console.log(`Upper Case Letter ${Person.toUpperCase()}`);
var UpperCaseLetter = Person.toUpperCase();
//for lower Case Letter
console.log(`Lower Case Letter ${Person.toLowerCase()}`);
var LowerCaseLetter = Person.toLowerCase();
//display 
console.log(`Lower Case Letter = ${LowerCaseLetter}`);
console.log(`Upper Case Letter = ${UpperCaseLetter}`);
// 3.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your  output should look something like the following,including the quotation marks:Albert Einstein once
// said, “A person who never made a mistake never tried anything new.”
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
//4. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
// famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var Quote = "A person who never made a mistake never tried anything new.";
console.log(`${famous_person} once said,${Quote}`);
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of
//  the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
//  so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var Name1 = " \t Arbab \n Zaman \t";
console.log(`Name1= ${Name1}`);
// Strip the whitespace using trim() method
console.log(Name1.split(" "));
//7 .Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the 
// number 8. Be sure to enclose your operations in print statements to see the results.
//Additon
var num1 = 2;
var num2 = 6;
var result1 = num1 + num2;
console.log(`Addition Result = ${result1}`);
//Substraction
var num3 = 1;
var num4 = 9;
var result2 = num4 - num3;
console.log(`Substraction Result= ${result2}`);
//Multiplication
var num5 = 2;
var num6 = 4;
var result3 = num5 * num6;
console.log(`Multiplication Result= ${result3}`);
//  Divison
var num7 = 64;
var num8 = 8;
var result4 = num7 / num8;
console.log(`Divison Result= ${result4}`);
//8.  You should create four lines that look like this:
// console.log(5 + 3)
var num = 0;
while (num < 4) {
    console.log(`---------------------------------------------------------------------------------------------\n`);
    console.log(`                                     ${5 + 3}                                                    \n`);
    num++;
}
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
// reveals your favorite number. Print that message.
var favNum = 1;
console.log(`Favourite Number= ${favNum}`);
//10 .Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you
//don’thave anything specific to write because your programs are too simple at this point, just add your name
// and the current date at the top of each program file. Then write one sentence describing what the program
// does.
// first program store number in variable 
var Num1 = 6;
// calculate sum 
var Sum = Num1 + Num1;
// print
console.log(`Sum= ${Sum}`);
//second program
var Multiply = Num1 * Num1;
console.log(`Multiply=${Multiply}`);
//in 1st program sum of Num1 in itself  Num1+Num1 &  in second program Multiply Num1 by itself Num1*Num1
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
// accessing each element in the list, one at a time.
var names = ["arbab", "areeba", "rajia", "wazuha", "aiman"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//12.  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.
var names = ["arbab", "ayesha", "aiza", "amna"];
for (let i = 0; i < names.length; i++) {
    console.log(`Print Person Names= ${names[i]}`);
}
//13 .Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a
//list that stores several examples. Use your list to print a series of statements about these items, such as
//“I would like to own a Honda motorcycle.”
var Favtransport = ["motorcycle", "car", "parado"];
for (let i = 0; i < Favtransport.length; i++) {
    console.log(`I would like to own a  ${Favtransport[i]}`);
}
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
//  that includes at least three people you’d like to invite to dinner. Then use your list to print a message
//   to each person, inviting them to dinner.
var inviteGuest = ["riya", "ayesha", "uswa", "mariyam", "marwa", "urwa", "areeba", "samia"];
//function of invitation send
function SendInvitation1(inviteGuest) {
    console.log(inviteGuest, "i invited you for dinner tonight");
}
for (let i = 0; i < Math.min(3, inviteGuest.length); i++) {
    var guestName = inviteGuest[i];
    console.log(` ${guestName}, I Invited you to for  dinner Today`);
}
//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
var array = ["Ayesha", "Areeba", "Arooj", "Noor", "Aiza"];
console.log("before update");
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]},You are invited for dinner`);
}
//Name of guest wo can't make it
console.log(`${array[2]} Name of guest who can't make it`);
//name of guest who can make  name of someone else to invite
array[2] = "shazia";
console.log(`${array[2]} Name of guest who can make it`);
console.log(`\nAfter update who can't make a dinner`);
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]},"You Are invited for dinner`);
}
//16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
//  guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your 
// list. • Print a new set of invitation messages, one for each person in your list.
const Guest = ["Amna", "Fatima", "Arzu", "Naima"];
function SendInvitation(Guest) {
    console.log("Send Invittation to thes guest=", Guest);
}
SendInvitation(Guest);
//Think of three more guests to invite to dinner.
const NewGuest = ["Arooj", "Zara", "Mariyam"];
//Add one new guest to the beginning of your array
Guest.unshift(NewGuest[0]);
console.log("Adding new guest at start", Guest);
// Use append() to add one new guest to the end of your list
Guest.push(NewGuest[2]);
console.log("adding at last new guest", Guest);
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two 
// guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a 
// message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the 
// end of your program.
const Guestarray = ["ayesha", "arzu", "mariyam", "fatima", "aiza"];
//Remove guests 
while (Guestarray.length > 2) {
    //pop remove the last elements from and return it
    var removeGuest = Guestarray.pop();
    console.log(removeGuest, " Sorry,guest you are no  invited for dinner");
}
//Remaining Guests
for (const RemainGuest of Guestarray) {
    console.log(RemainGuest, "You are invited for Dinner");
}
//Remove the last two names from your list, so you have an empty list
Guestarray.pop();
console.log("Empty List", Guestarray); //output---["ayesha"]
Guestarray.pop();
console.log("Empty List", Guestarray); //ouput----[]
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//  not in alphabetical order.
const NotAlphabetical = ["China", "Austrailia", "Africa", "England", "Toronto"];
//in its original order.
console.log("Original Array in its order", NotAlphabetical);
// in alphabetical order without modifying the actual list.
var sortInAlphabetical = NotAlphabetical.sort();
console.log("In alphabetical order without modifying the actual list", sortInAlphabetical);
//Show that your array is still in its original order by printing it.
console.log("Original Array in its order", NotAlphabetical);
//Print your array in reverse alphabetical order without changing the order of the original list.
var ReverseOrder = NotAlphabetical.sort().reverse();
console.log("In reverse alphabetical order without changing the order of the original list=", ReverseOrder);
//Show that your array is still in its original order by printing it again.
console.log("Original Array in its order", NotAlphabetical);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("In reverse alphabetical order without changing the order of the original list=", ReverseOrder);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var Sorted = ReverseOrder.sort();
console.log("stored in alphabetical order=", Sorted);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var ReverseOrdering = Sorted.sort().reverse();
console.log("In  reverse alphabetical order=", ReverseOrdering);
//19.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people 
//you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//Dinner working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to 
// dinner.
const GuestCount = ["Ayesha", "Areeba", "Ramia", "Aima", "Munaza", "Areeba", "Zunaira", "Aiman", "Laraib"];
function SendInvitation2(GuestCount) {
    console.log("invite=", GuestCount);
}
for (let i = 0; i < Math.min(3, GuestCount.length); i++) {
    SendInvitation2(GuestCount[i]);
}
console.log("Count total guest Invited=", Math.min(3, GuestCount.length));
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or
//  anything else you’d like. Write a program that creates a list containing these items.
const Things = ["Mountains", "Rivers", "Countries", "Cities", "Languages"];
var list = Things;
console.log("List containing these items=", list);
//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.
var Info = {
    Name: "Aisha",
    Gender: "Female",
    Age: 30,
    Address: "679 Block D Ground Faisalabad"
};
console.log("Name=", Info.Name);
console.log("Gender=", Info.Gender);
console.log("Gender=", Info.Age);
console.log("Gender=", Info.Address);
//22.  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one 
// of your programs to produce an index error. Make sure you correct the error before closing the program.
const myArray = [1, 2, 3, 4, 5];
// Intentionally access an out-of-bounds index to produce an error
// This will result in an "Index out of bounds" error
const element = myArray[10];
// This line will not be reached due to the error
console.log(element);
//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';
//TEST 1
if (car == 'subaru') {
    console.log("Car is subaro");
}
//TEST 2
if (car != 'grandy') {
    console.log("Car is not Honda");
}
//TEST 3
if (car = 'number') {
    console.log("Car is not a number");
}
//TEST 4
if (car = 'string') {
    console.log("Car is string");
}
//TEST 5
if (car.length <= 6) {
    console.log("length=", car.length);
    console.log("Car lenth is 6");
}
//TEST 6
if (car === 'null') {
    console.log("Car is not null");
}
//TEST 7
if (car == 'undefined') {
    console.log("Car is not undefined");
}
//TEST 8
if (car.length > 6) {
    console.log("Car length is not greater than 6");
}
//TEST 9
if (car == 'number') {
    console.log("Car is not a Number");
}
//TEST 10
if (typeof car == 'boolean') {
    console.log("Car is not Bool type");
}
//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//  equality and inequality with strings
if (car == 'string') {
    console.log("Print if it is string");
}
if (car != 'string') {
    console.log("Prnt if it is not string");
}
// lower case function
var city1 = "fsd";
var city2 = "fsd";
var city3 = "isb";
if (city1 == city2) {
    console.log(" city1==city2(True)");
}
if (city1 == city3) {
    console.log("city1==city3 (True)");
}
// toLowerCase()
if (city1 == city1.toLowerCase()) {
    console.log(" city1==city1.toLowerCase() (True)");
}
if (city1 == city2.toLowerCase()) {
    console.log("city1==city2.toLowerCase() (True)");
}
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
var age = 29;
//equality
if (age == 29) {
    console.log("age ==29 (true)");
}
//inequality
if (age != 45) {
    console.log("age !=45 (true)");
}
//greater than
if (age > 20) {
    console.log("age >20 (true)");
}
if (age < 20) {
    console.log("age < 19 (true)");
}
if (age >= 25) {
    console.log("age>=25 (true)");
}
if (age <= 29) {
    console.log("age<=29 (true)");
}
// "and" and "or" operators
if (age > 20 && city1 == "fsd" && city3 == "isb") {
    console.log("( And Condition (true)");
}
if (age >= 30 || city1 == "pashawar" || city3 == "isb") {
    console.log(" Or condition true");
}
// whether an item is in a array
var arr = ["apple", "mango", "coconut", "pomegrantte"];
if (arr[3] == "grapes") {
    console.log("arr[3]==grapes (true)");
}
if (arr[2] == "coconut") {
    console.log("grapes=", arr[2]);
}
// Test whether an item is not in a array
if (arr[2] == 'grapes') {
    console.log("true");
}
var Include = "grapes";
if (arr.includes(Include)) {
    console.log(" yes include in array ");
}
else {
    console.log("not include");
}
//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and
//  assign it a value of 'green',
//  'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the
//  player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails
//  will have no output.)
var alien_color1 = 'green';
if (alien_color1 == 'green') {
    console.log("Player Just Five 5 Points");
}
var alien_color1 = "blue";
if (alien_color1 == 'green') {
    // No output because the condition is not met
}
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color2 = 'yellow';
if (alien_color2 == 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points.");
}
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color3 = "red";
if (alien_color3 == 'green') {
    console.log("player earned 5 points.");
}
else if (alien_color3 == 'yellow') {
    console.log("player earned 10 points");
}
else {
    console.log(" Color is red player earned 15 points.");
}
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
var personAge = 20;
if (personAge < 2) {
    console.log("person is a baby.");
}
if (personAge >= 2 && personAge < 4) {
    console.log("person is a kid.");
}
if (personAge >= 13 && personAge < 20) {
    console.log("person is a teenager.");
}
if (personAge >= 20 && personAge < 65) {
    console.log("person is an adult.");
}
else {
    console.log("person is an elder.");
}
//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in
//  your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block 
// should print a statement, such as You really like bananas!
var Fruits = ["apple", "banana", "pineapple", "grapes", "orange"];
for (const fav of Fruits) {
    console.log(Fruits.includes(fav));
    (console.log(` ${fav}  certain fruits in your array.`));
}
//  three favorite fruits 
var favFruits = ["pineapple", "grapes", "orange"];
for (const fav of favFruits) {
    console.log(favFruits.includes(fav));
    (console.log(` ${fav} is in your favourite fruits.`));
}
//  certain kind of fruit is in your array
for (const fav of Fruits) {
    console.log(Fruits.includes(fav));
    console.log(`Yes, You Really Like  ${fav}s.`);
}
//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print
//  a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var UserNames = ["admin", "ayesha", "fatima", "zoha", "batool"];
for (const greeting of UserNames) {
    if (greeting == "admin") {
        console.log("Hello! special one");
    }
    else {
        console.log("Hello not special greeting");
    }
}
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var age = 29;
var usernames = ["ayesha", "fatima", "abeera"];
if (usernames.length == 0) {
    console.log("find some user");
}
else {
    if (age < 2) {
        console.log("Peron is less than 2 years old");
    }
    else if (age >= 2 && age < 4) {
        console.log(" person is at least 2 years old but less than 4");
    }
    else if (age >= 4 && age < 13) {
        console.log("person is at least 13 years old but less than 20");
    }
    else if (age >= 13 && age < 20) {
        console.log("person is at least 13 years old but less than 20,");
    }
    else {
        console.log("older");
    }
}
//Remove all usernames from the array
usernames = [];
if (usernames.length === 0) {
    console.log("array is empty");
}
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
// in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a
//  message that the person will need to enter a new username. If a username has not been used, print a message 
//  saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
var current_users = ["Ayesha", "Fatma", "Arooj", "Zainab", "Hira"];
var new_users = ["Arbab", "Fatma", "Mariyam", "Hina", "Ayesha"];
for (const tmpstore of new_users) {
    if (current_users.includes(tmpstore)) {
        console.log(tmpstore, "Sorry Give another Username");
    }
    else {
        console.log(tmpstore, "Username is availabale");
    }
}
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
//  numbers
//   end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output
//  should
//  read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i < 9; i++) {
    let ordinalNumber;
    if (i === 1) {
        ordinalNumber = "st";
    }
    else if (i === 2) {
        ordinalNumber = "nd";
    }
    else if (i === 3) {
        ordinalNumber = "rd";
    }
    else if (i === 4) {
        ordinalNumber = "th";
    }
    else if (i === 5) {
        ordinalNumber = "th";
    }
    else if (i === 6) {
        ordinalNumber = "th";
    }
    else if (i === 7) {
        ordinalNumber = "th";
    }
    else if (i === 8) {
        ordinalNumber = "th";
    }
    else
        (i == 9);
    {
        ordinalNumber = "th";
    }
    console.log(i, ordinalNumber);
}
//34.  Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
// and then use a for loop to print th
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of
//  the pizza. For each pizza you should have one line of output containing a simple statement like I like 
//  pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional
//  sentence, such as I really love pizza!
const Pizza = ["BBQ Chicken Pizza", "Hawaiian Pizza", "Pepperoni Pizza"];
console.log("Pizza Use For Loop to print=");
for (let i = 0; i < Pizza.length; i++) {
    console.log(Pizza[i]);
}
// Modify
for (const modify of Pizza) {
    console.log("I like", modify, "Pizza");
}
// Add a line at the end of your program
for (const moreModify of Pizza) {
    console.log("Enjoy a", moreModify, " Pizza with its perfect balance of Tomato, Mozzarella, and .Onion\n");
    console.log(" When I crave something a bit spicier,Pizza with its slices and melted cheese hits the spot.");
    console.log("But my all-time favorite has to be a loaded Supreme  ", moreModify, "pizza");
}
//35. Animals: Think of at least three different animals that have a common characteristic. Store the names 
//of these  animals in a list, and then use a for loop to print out the name of each animal. • Modify your
// program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the
//end of your program stating what these animals have in common. You could print a sentence such as Any of 
//  these animals  would make a great pet!
const Animals = ["Bird", "Dog", "Monkey"];
for (let i = 0; i < Animals.length; i++) {
    let EachAnimal = Animals[i];
    let AboutAnimal = "";
    let characteristic = "";
    switch (EachAnimal) {
        case "Birds":
            AboutAnimal = " creature with feathers and wings, usually able to fly";
            break;
        case "Dog":
            AboutAnimal = "are omnivores";
            break;
        case "Monkey":
            AboutAnimal = "are smart animals";
            break;
        default:
            AboutAnimal = "intersting creature";
    }
    console.log("Animal Name", EachAnimal, "Sentence", EachAnimal, AboutAnimal);
    console.log(EachAnimal, characteristic, " vertebrates ,complex animals and warm blooded(endothermic)");
}
// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
// should be printed on the shirt. The function should print a sentence summarizing the size of the shirt 
// and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(` Size ${size} Text printed on the shirt is Medium ${text}`);
}
make_shirt(10, "Medium");
//37 .Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
//  size with a different message.
function modify_makeShirt(size = "Large", text = "I love typescript") {
    console.log(`Size ${size} Message ${text}`);
}
// Make large shirt with default message
modify_makeShirt("Large");
// Make large shirt with default message
modify_makeShirt("Medium");
// shirt of any size with a different message.
modify_makeShirt("Small", "Shirt is SMALL ");
//38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The 
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not
//  in the default country.
function describe_city(City, Country = "Pakistan") {
    console.log(`${City} is in ${Country}`);
}
describe_city("Lahore");
describe_city("Islamabad");
describe_city("Faisalabad");
// 39.City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(City, Country) {
    return `${City},${Country}`;
}
var city_country_pair1 = city_country("Lahore", "Pakistan");
console.log(`${city_country_pair1}`);
var city_country_pair2 = city_country("faisalabad", "pakistan");
console.log(`${city_country_pair2}`);
var city_country_pair3 = city_country("islamabad", "pakistan");
console.log(`${city_country_pair3}`);
// Function to create an album object
function makeAlbum(artist, title, numberOfTracks) {
    const album = {
        artist,
        title,
    };
    if (numberOfTracks !== undefined) {
        album.numberOfTracks = numberOfTracks;
    }
    return album;
}
// Create three different album dictionaries
const album1 = makeAlbum(`Artist1`, `Album Title 1`);
const album2 = makeAlbum(`Artist2`, `Album Title 2`, 12);
const album3 = makeAlbum(`Artist3`, `Album Title 3`);
// Print album information
console.log(album1);
console.log(album2);
console.log(album3);
//  41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//    which prints the name of each magician in the array.
function Magicians_show(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// magician's names
const magiciansArray1 = ["Magician1", "Magician2", "Magician3", "Magician4"];
Magicians_show(magiciansArray1);
// 42.  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
//    that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
//     show_magicians() to see that the list has actually been modified.
// show magicians
function showMagicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// magicians great
function makeGreat1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
const magiciansArray2 = ["Magician1", "Magician2", "Magician3", "Magician4"];
makeGreat(magiciansArray2);
showMagicians1(magiciansArray2);
//   Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
//   the array of magicians’ names. Because the original array will be unchanged, return the new array and store
//    it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it
//   in a separate array. Call show_magicians() with each array to show that you have one array of the original 
//   names and one array with the Great added to each magician’s name.
// Function to show magicians
function showMagicians2(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Function to make magicians great
function makeGreat(originalMagicians) {
    const greatMagicians = [];
    for (const magician of originalMagicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
// Array of magician's names
const magiciansArray = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Create a copy of the array with "the Great" added to each name
const greatMagiciansArray = makeGreat([...magiciansArray]);
// Call showMagicians to display the original list
console.log("Original Magicians:");
showMagicians2(magiciansArray);
// Call showMagicians to display the modified list with "the Great"
console.log("\nGreat Magicians:");
showMagicians2(greatMagiciansArray);
// 44.  Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
//   have one parameter that collects as many items as the function call provides, and it should print a summary 
//   of the sandwich that is being ordered. Call the function three times, using a different number of arguments 
//   each time.
function make_sandwich(...itemsOfArray) {
    console.log("Sandwich Order Summary:");
    if (itemsOfArray.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of itemsOfArray) {
            console.log(`${item}`);
        }
    }
    console.log("\n");
}
// Call the function three times with different numbers of arguments
make_sandwich("Piza", "Cheese", "Burger", "Tomato");
make_sandwich("Paratha Roll", "Burger");
make_sandwich();
function Car_Create(manufacturer, modelName, ...options) {
    const car = {
        manufacturer,
        modelName,
    };
    for (const option of options) {
        for (const key in option) {
            if (option.hasOwnProperty(key)) {
                car[key] = option[key];
            }
        }
    }
    return car;
}
// with required information and additional name-value pairs
const Car = Car_Create("Toyota", "grandy", { color: "blue" }, { year: 2022 });
// Print the car object
console.log(Car);
