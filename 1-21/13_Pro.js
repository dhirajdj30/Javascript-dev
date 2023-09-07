const prompt = require('prompt-sync')({sigint:true});
// String Methods

console.log("-------------------------------------------------------")
console.log("               String Methods")     
console.log("-------------------------------------------------------")

// \ Escape Charcherters 


//Length
let name = prompt("Enter your name: ")
console.log("Your name has " + name.length + " Character")

// Upper case & and  Lower case method

console.log("Your name in Upper case looks like : "+ name.toUpperCase())
console.log("Your name in Lower case looks like : "+ name.toLowerCase())

// Replace 
console.log(name.replace('Dh','N'))

// Concateneate

let friend = "Naman"
console.log(name.concat(" is a friend of ", friend, " Ok"))

// Trim

let fr = "              Meena           ";
console.log(fr)
console.log(fr.trim())

let i = 0;
for(let a in fr){
    console.log(fr[a])
}
