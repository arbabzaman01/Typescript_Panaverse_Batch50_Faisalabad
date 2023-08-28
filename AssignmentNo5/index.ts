// Write a program that uses filter to remove all negative numbers from an array of numbers

const num:number[]=[1,-2,3,5,-6,3,-10];
const PositiveNumArray:number[]=num.filter(function(removeNegative)
{
return removeNegative>=0;
}
);
console.log(`Positive Num Array = ${PositiveNumArray}`);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number
// is multiplied by 2.
const arr:number[]=[1, 2, 3, 4, 5];
const newArr:number[]=arr.map(function(a)
{
  return a*2;
}
);
console.log(`Array After Multiplying with 2=${newArr}`)

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to
//  create a new array containing only the fruits with more than 5 characters.

const fruits:string[]=["apple", "banana", "cherry", "date", "grape"];
const newFruits:string[]=fruits.filter(function(a){
return a.length>5;
}
);
console.log(`New array ${newFruits}`);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to
// create a new array containing the squares of even numbers.
const even:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareEven:number[]=even.map(function(a)
{
  if(a%2 ==0)
  {
    return a*2;
  }
  else
  {
    return a;
  }
}
);
console.log(`New array Square of Even Number=${squareEven}`);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array
// where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const celsius:number[]=[0, 10, 20, 30, 40];
const farheinheit:number[]=celsius.map(function(a)
{
return (a * 9/5) + 32;
}
);
console.log(`Farheinheit= ${farheinheit}`);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new
// array containing the doubled values of odd numbers.
const odd:number[]=[3, 6, 9, 12, 15, 18];
const doubleOdd:number[]=odd.map(function(a){
if(a%2 !==0)
{
  return a*2;
}
else
{
return a;
}
 } 
);
 console.log(`Doubled Values of Odd Numbers=${doubleOdd}`);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each
// name with an exclamation mark at the end, e.g., "Alice!"
const names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
console.log(`Names with exclamation marks=`);
names.forEach(function(a)
{
console.log(a+"!");
});
