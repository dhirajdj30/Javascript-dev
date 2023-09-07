const prompt = require('prompt-sync')({sigint:true});

// console.log("--------------------------------")
// console.log("               loop")
// console.log("--------------------------------")

// let n = prompt("Enter the value of n: ")
// n = Number.parseInt(n)
// for(let i = 1; i <= n; i++){
//     console.log(i+ ") DJ Rocks")
// }


// console.log("--------------------------------")
// console.log("Program for factorial")
// console.log("--------------------------------")

// let sum = 1;
// let num = prompt("Enter the value of n: ")
// num = Number.parseInt(num)

// for(let i = 0; i < num; i++){
//     sum = (i+1) * sum
//     // console.log(sum)
// }

// console.log(sum)



console.log("--------------------------------")
console.log("For IN")
console.log("--------------------------------")

let obj = {
    'harsh' : 10,
    'soham': 15,
    'vedant': 16,
    'Nachi': 45,
    'DJ':22
}

for(let a in obj){
    console.log(a + " obtained marks " + obj[a])
}