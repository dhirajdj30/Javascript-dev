const prompt = require('prompt-sync')({sigint:true});

// Practice set 3

const obj = {
    Vasudev: 65,
    Shiv: 95,
    DJ: 25,
    MJ: 98,
    Chicku: 66,
    RJ: 94
}

// Using Program For Loop 


for( let i = 0; i < Object.keys(obj).length; i++){
    console.log( Object.keys(obj)[i] +" got " + obj[Object.keys(obj)[i]])
}

// Using For In 

for (let a in obj){
    console.log(a + " got " + obj[a] + " Marks in English!")
}


// Problem No 3

let cn = 4
let i ;

while(i !=cn){
    i = prompt("Guess the Number: ")
    if(i == cn){
        console.log("You guess it Right! ")
    }
    else{
        console.log("Next Try! ")
    }
}

//  Problem 5

const mean = (a, b, c, d) =>{
    return (a+b+c+d)/4
}

console.log(mean(5,6,7,4))