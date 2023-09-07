const prompt = require('prompt-sync')({sigint:true});

console.log("Dhiraj")
let b = prompt("Enter Name: ")

console.log("Hello "+b+" Welcome to VIIT")

let c = prompt("Enter your age: ")

c = Number.parseInt(c)  // These will convert string into Int 

if(c <= 18){
    console.log("you are under age")
}
else{
    console.log("You can proceed")
}


// if...elseif...else

if(c <=0){
    console.log("Enter Proper age.. ")
}
else if(c >= 100){
    console.log("You adres")
}
else{
    console.log("Mother Fucker")
}

//  Switch Case statement in JS

let age = prompt("Enter your age")
age = Number.parseInt(age)

switch(age){
    case age<=10:
        console.log("Kid!")
        break;
    case age>10 && age<18: 
        console.log("Teenager!")
        break;
    case age>= 18 && age<45:
        console.log("Adult!")
        break;
    case 45:
        console.log("Senior Citizens")
        break;
    default:
        console.log("Madarchod")
}