// //  Using Logical operator define a person age is betweeen 10 to 20
const prompt = require('prompt-sync')({sigint:true});

// console.log("--------------------------------------------")
// console.log(" Program to define if else! ")
// console.log("---------------------------------------------")
// let age = prompt("Enter your age: ")

// if (age>=10 && age<=20){
//     console.log("The persons is in between 10 - 20  age!!")
// }
// else{
//     console.log("The person is not")
// }

// // Promblem Statement 2


// console.log("----------------------------------------------")
// console.log("   Program to demonstrate Switch case!")
// console.log("----------------------------------------------")


// let a = prompt('Enter your Age: ')
// switch(a){
//     case '12':
//         console.log("Your age is 12!")
//         break
//     case '13':
//         console.log("Your age is 13!")
//         break
//     case '14':
//         console.log("Your age is 14!")
//         break
//     case '15':
//         console.log("Your age is 15!")
//         break
//     case '16':
//         console.log("Your age is 16!")
//         break
//     default:
//         console.log("Plz Niklo!!!!!!!!!!!!!!")
// }

// Problem 3

console.log("----------------------------------------------")
console.log("           Program to find divisible!")
console.log("----------------------------------------------")

// let num = prompt("Enter a Number: ")

// if(num%2==0 && num%3==0){

//     console.log(num+" is divisible by 6 !")

//     if(num%2==0){
//         console.log(num + " Divisble by 2 Not by 3")
//     }
//     else{
//         console.log(num+" Divisible by both 2 and 3")
//     }
// }
// else{
//     console.log(num + " is not Divisible by 6 !")
// }

// Problem no 5

let age = prompt("Enter any number")
let a = age > 18 ? "You can drive":"you cannot drive"
console.log(a)