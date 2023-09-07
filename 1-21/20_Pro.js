const prompt = require('prompt-sync')({sigint:true});
//  Practice Questions 

// Problem 1
// let arr = [1,2,3,4,5]
// let ar = prompt("Enter a Number: ")
// ar = Number.parseInt(ar)
// arr.push(ar)
// console.log(arr)

// Problem 2
// let a ;
// while (a !=0){
//     a = prompt("Enter a Number: ")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// }


// Using Do While Loop

// do {
//     a = prompt("Enter a Number: ")
//     a = Number.parseInt(a)
//     arr.push(a)
// }while(a != 0)
// console.log(arr)

// Problem 3

// let arr = [10,45,1,0,87,12,0,5,74,20,30,10]
// arr = Number.parseInt(arr)
// let a = arr.filter((i)=>{
//     return i%10==0;
// })

// console.log(a)

// Problem no 4
// let a = arr.map((x)=>{
//     // x = Number.parseInt(x)
//     return  x*x;
// })
// console.log(a)

// let 

// Problem no 5

let arr = [1,2,3,4,5,6]
let n = arr.reduce((x1,x2)=>{
    return x1 + x2
})

console.log(n)