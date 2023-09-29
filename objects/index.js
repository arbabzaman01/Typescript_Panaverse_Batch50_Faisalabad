"use strict";
//write a program that print all  car company and year of number  from the list and car is an object
var Cars = [
    {
        company: "Honda",
        year: 2022
    },
    {
        company: "KIA",
        year: 2023
    },
    {
        company: "wagonor",
        year: 2020
    },
];
for (const Car of Cars) {
    console.log("List Of all Cars Company", Car.company);
    console.log("List of all Cars Year", Car.year);
}
/*//syntax
//  type of objects
type CarType={company:string,colour:string,year:number}// VarType={paramters:types}
var Car:CarType={                   //var VaribaleName (TypeVariableName)-> by which we declare the type of Different objects=
 company:"HONDA",// parameter:value
 colour:"black",
  year:2000
}
var car2={
    colour:"white",
    company:"Honda",
    year:2023,
    isUseCar:false,
    run:function()//propert against we can create and use function for the actions
    {

    }
}*/
// type carTypes={colour:string,company:string,year:number}
// var car1:carTypes=
// {
//     colour:"black",
//    company:"kia",
//    year:10
// }
// var car2=
// {
//     colour:"white",
//    company:"honda",
//    year:12
// }
// console.log(car1.year,car2.company);
// type CarType={colour:string,company:string,year:number}
// var Car1:CarType[]=[
//     {
//     colour:"white",
//        company:"honda",
//        year:12   
//     }]
//     var Car2:CarType[]=[
//         {
//             colour:"black",
//            company:"kia",
//            year:10
//         }
//         ]
//         console.log("Cars=",Cars);
