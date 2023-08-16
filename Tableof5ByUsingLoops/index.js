"use strict";
//Create Tabel of 5 by using Loops
// For Loop
let Num = 5;
console.log("Table of 5 by using For loop");
for (let i = 1; i <= 10; i++) {
    console.log(`i x ${Num} = ${i * Num}`);
}
// While Loop
let count = 1;
console.log("Tbale of 5 by using For loop");
while (count <= 10) {
    console.log(`i x ${Num} = ${count * Num}`);
    count++;
}
// Do while Loop
let i = 1;
console.log("Table of 5 by using Do While loop");
do {
    console.log(`i x ${Num} = ${i * Num}`);
    i++;
} while (i <= 10);
// Switch 
const num = 5;
console.log("table of by using swich statement");
for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log(`1 x ${num} = ${i * num}`);
            break;
        case 2:
            console.log(`2x ${num} = ${i * num}`);
            break;
        case 3:
            console.log(`3 x ${num} = ${i * num}`);
            break;
        case 4:
            console.log(`4 x ${num} = ${i * num}`);
            break;
        case 5:
            console.log(`5 x ${num} = ${i * num}`);
            break;
        case 6:
            console.log(`6 x ${num} = ${i * num}`);
            break;
        case 7:
            console.log(`7 x ${num} = ${i * num}`);
            break;
        case 8:
            console.log(`8 x ${num} = ${i * num}`);
            break;
        case 9:
            console.log(`9 x ${num} = ${i * num}`);
            break;
        case 10:
            console.log(`10 x ${num} = ${i * num}`);
            break;
        default:
            console.log("not in range");
            break;
    }
}
