

//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
//From Celsius To Fahrenheit
var Celsius= 5;
//Formula Fahrenheit (°F) = (Celsius (°C) × 9/5) + 32
var Fahrenheit  = (Celsius  *9/5) + 32;
console.log("Fahrenheit To Celsius is:",Fahrenheit);
//From Fahrenheit To Celsius
var Fahrenheit=5;
var Celsius = 5;
//Formula Celsius (°C) = (Fahrenheit (°F) - 32) × 5/9
Celsius  = (Fahrenheit  - 32) * 5/9
console.log("Celsius To Fahrenheit is :",Celsius);
//Write a program that calculates the percentage
var Obtained=50;
var Total=100;
//Formula of calculating Percentage is: (Obtained %100) * Total
var Percentage = (Obtained /Total) * 100;
console.log("Percentage is :",Percentage);
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var Days =60;
//Assign  Days  divided by 7  and their reminder  left  is remaining  days 
var RemainingDays=Days%7;
//Assign Days divided by 7
var TotalWeeks=Math.floor(Days/7);
console.log(TotalWeeks,"Weeks and ",RemainingDays,"RemainingDays");
//Write a program that calculates the discount for a product based on its price. If the price is above $100,apply a 10% discount; otherwise, apply a 5% discount.
var PriceOfProduct = 10;
var ApplyDiscount;
//ApplyDiscount;
if( PriceOfProduct>=100)
{
  ApplyDiscount = 10;
var PriceAfterDiscount =PriceOfProduct- (PriceOfProduct * (ApplyDiscount / 100));
 console.log(" after 10 % Discount is:",PriceAfterDiscount);
 }
else
{
ApplyDiscount=5;
var PriceAfterDiscount =PriceOfProduct- (PriceOfProduct * (ApplyDiscount / 100));
 console.log("after 5 % discount is:",PriceAfterDiscount);
 }
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."*/
var Age = 10;
if(Age >= 0 && Age <= 12){
   console.log("Child");
}
else if(Age >= 13 && Age <=19)
{
   console.log("Teenager");
}
else
{
   console.log("Adult");
}
//Write a program that takes temperature and check it. If it is cold then suggest th user to wear warm clothes and so on according to the weather.assign any value to temprature to check
var temperature = 25;
 if( temperature >= 0 && temperature <=30)
 {
   console.log("Wear warm clothes");
}
else
 {
   console.log(" Summer Clothes")
 }
//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var Num = 45;
 if(Num % 3 == 0 || Num % 5 == 0) 
{
 console.log("Num is Divisible by 3 OR  5");
 }
else 
{
console.log("Not Divisble by 3 Or 5");
}
//Write a program that checks if the given year is leap year or not                             
var Year = 4;
if( Year % 4 == 0 && Year %  100 !==0 || Year % 400 == 0)
{
 console.log("Year is leap");
}
else 
{
      console.log("Year is not leap");
}
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var Day=5;
if (Day == 1){
   console.log("Sunday");
}
    else if(Day == 2){
      console.log(" Monday");
    }
     else  if(Day ==3){
         console.log("Tuesday");
     }
        else  if(Day ==4){
            console.log("Wednesday");
        }
           else if(Day ==5){
               console.log("Thursday");
           }
              else if (Day==6){
                  console.log("Friday");
              }
                 else if(Day ==7){
                     console.log("Saturday")
                 }
else{
   console.log("not valid");
      }
/*Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Wherethe tax amount will be calculated by the amount of bill*/      
 var ConsumedUnits=100;
 var UnitsPrice=20;
 var ApplyTax;
 var CalculatedUnits=UnitsPrice*ConsumedUnits;
 // Formula Amount of Bill = UnitsPrice * ConsumedUnits + ApplyTax*(UnitsPrice*ConsumedUnits);
 if(ConsumedUnits>=100){
   ApplyTax=10/100;
   console.log("Apply Tax is",ApplyTax);
  var AmountOfBill = CalculatedUnits+ ApplyTax*(CalculatedUnits);
   console.log("Amount With Tax is",AmountOfBill);
 }
 else if(ConsumedUnits >=200)
 {
   ApplyTax=15/100;
   var AmountOfBill = CalculatedUnits+ ApplyTax*(CalculatedUnits);
   console.log("Amount With Tax is",AmountOfBill);
 }
 else if (ConsumedUnits >= 500)
 {
  ApplyTax=25/100;
  var AmountOfBill = CalculatedUnits+ ApplyTax*(CalculatedUnits);
   console.log("Amount With Tax is",AmountOfBill);
 }
 else
 {
   console.log("error");
 }
 