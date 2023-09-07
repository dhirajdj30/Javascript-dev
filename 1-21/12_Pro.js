// Strings in Java Script
const prompt = require('prompt-sync')({sigint:true});


let n = prompt("Enter Your String: ")

console.log("Length of String is "+ n.length)

// We can use string as array
for(let i = 0; i < n.length; i++){
    console.log(n[i])
}


let boy1 = prompt("Enter Name of First Person: ")
let boy2 = prompt("Enter Name of First Person: ")


// back Tick Literals 

// String Interpolation

let sent = `${boy1} is a friend of ${boy2}`

console.log(sent)

// Escape Squence 

let fruit = 'bannaa\'na'
console.log(fruit)