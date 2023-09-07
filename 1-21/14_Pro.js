const prompt = require('prompt-sync')({sigint:true});
// Practice Set 4

console.log("har\"".length)

let sentence = "There is a cow sittinfg beside the hut near the lower"

// let c = sentence.includes("per")
// let d = sentence.startsWith("Mon")
// let e = sentence.endsWith("lower")

// if(d){
//     console.log('The string starts with ')
// }
// else
// {
//     console.log("Msijdsd")
// }

// if(c){
//     console.log("Hurry")
// }
// else{
//     console.log("Missed")
// }

// 
let str2 = 'Please give Rs 1000'
let amount = str2.slice("Please give Rs ".length)
amount = Number.parseInt(amount)

if(amount < 5000){
    console.log("fuck Off")
}
else{
    console.log('Madarchod')
}
console.log(amount)

// Problem No 5

let set = "Were you able to do it?"
set[3]="r"
console.log(set) // Not changed
