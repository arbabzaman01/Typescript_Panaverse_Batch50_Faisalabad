//  Create a function that takes an array, an index, and a value as parameters. Inside the function, use
//  the splice method to insert the valueat the specified index in the array. Return the modified array

function ModifiedArray(array:number[],index:number,value:number)
{
   array=array.splice(index,0,value);
   return array;
}
var array:number[]=[1,2,3,4,5];
var index:number=3;
var value:number=23;
console.log(`Before Modification ${array}`);
ModifiedArray(array,index,value);
console.log(`After Modification ${array}`);

// Implement a simple shopping cart program using an array. Create functions to add items, remove items,
//  and update quantities using the splice method. Print the cart's contents after each operation
 
var cart:string[]=["Coke","Pizza","Burger","Junks"]
//add item
function AddItem(cart:string[]) {
   cart=cart.splice(cart.length-2,0,"Sandwich")
   return cart;
}
//remove item
function RemoveItem(cart:string[]) {
   cart=cart.splice(cart.length-1,1);
   return cart;
}
//update item
function UpdateItem(cart:string[]) {
   cart=cart.splice(cart.length-3,1,"Cake")
   return cart;
}
//call add item 
AddItem(cart);
console.log( `Add Item =${cart}`);
//remove item
RemoveItem(cart);
console.log(`Remove Item = ${cart}`);
//update item
UpdateItem(cart);
console.log(`After updateitem function ${cart}`);

// Write a program that uses a while loop to print the first 25 integers.

let Num:number=0;
console.log(`Num`);
while(Num<=25)
{
   console.log(Num);
   Num++;
}

// Write a program that uses a while loop to print the first 10 even numbers.

let num:number=1;
console.log(`First 10 even numbers = `);
while(num <=10)
{
if(num % 2 ==0)
{
    console.log(num);
}
num++;
}

//  Create a function that takes a positive integer as parameter and usesa while loop to calculate and return 
// the factorial of that number.

function factorial(num:number)
{
   var factorialCal:number=1;
   while(num != 0)
   {
       factorialCal = factorialCal* num;
       num--;
   }
   return factorialCal;
}
   var result=factorial(10);
   console.log(`factorial of num`,result);

//Write a program having an array of numbers if the number is negative it should remove the 
// negative number from the array.

var array : number[] =[-1,2,-3,4,5];
console.log(`Array Before Removing ${array}`);
function RemoveNegativeNum(array:number[]) {
    for(let i=0;i<array.length;i++){
        if(array[i]<0){
            array.splice(i,1);
        }
    }
}
 RemoveNegativeNum(array);
console.log( `After Removing Negative Number From Array ${array}`);

// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the
//  sum of all the numbers in the array.

let  arrayNum=[11,12,13,14,15];
function sum(arrayNum:number[]) {
    let i=0;
    let sum=0;
    while(i<arrayNum.length){
        sum=sum+arrayNum[i];
        i++;
    }
    return sum;
}
var SumNum:number=sum(arrayNum);
console.log(`Sum  of all numbers in array = ${SumNum}`);

// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each
// temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures 
// in an array. Use a while loop to perform the conversion for each temperature
let temperature = [20 , 30, 40, 45, 50];
 var Fahrenheit: number[] = [];
function InFarhenheit(temperature: number[]) {
    let i = 0;
    while (i < temperature.length) {
        Fahrenheit[i] = (temperature[i] * 9 / 5) + 32;
        i++;
    }
}
InFarhenheit(temperature);
console.log(`Temprature to farhenheit is = ${Fahrenheit}`);