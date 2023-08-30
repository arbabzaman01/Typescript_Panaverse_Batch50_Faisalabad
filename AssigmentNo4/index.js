"use strict";
// 1. Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum = 0;
let n = 50;
for (let i = 0; i <= n; i += 2) {
    sum = sum + i;
}
console.log(`Sum of  First n Even Numbers= ${sum}`);
// 2. Implement a program that uses a for loop to iterate through an array of numbers and print only the even
//numbers. 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Arrays of Even Numbers;`);
for (let i = 0; i <= arr.length; ++i) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}
// 3.Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers 
//from them and just leave the odd ones
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(` Arrays of Odd Numbers:`);
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr1[i] % 2 !== 0) {
        console.log(arr1[i]);
    }
}
//  4. Write a program that defines a function to calculate the area of a circle. The function should take the 
//radius as input and return the calculated area.
const pi = 3.14;
function AreaOfCircle(radius) {
    var CalculateArea = Math.floor(Math.PI * radius * radius);
    return CalculateArea;
}
var CalculateArea = AreaOfCircle(2);
console.log(`Area of Circle :${CalculateArea}`);
//  5.Develop a program that reads a list of grades and uses the splice method to remove failing grades 
//(below 50) from the array.
var grades = [89, 45, 90, 100, 65, 67, 34, 32, 43, 12, 120];
function RemoveGrades(grades) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
}
RemoveGrades(grades);
console.log(` Removing Failing Grades below(50): ${grades}`);
// 6. Write a program that uses a function to find the largest element in an array of numbers.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largest = num[0];
function LargestElement(num) {
    for (let i = 1; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
largest = LargestElement(num);
console.log(`Largest Element = ${largest}`);
