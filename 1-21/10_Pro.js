const prompt = require('prompt-sync')({sigint:true});

// Functions in JavaScript

// -------------------------------------------------
//              First Way
//--------------------------------------------------

function onePlusAvg(x, y){
    console.log("Done")
    return 1 + Math.round((x + y)/2)
}

let a = prompt("Enter First Number: ")
a = Number.parseInt(a)
let b = prompt("Enter Second Number: ")
b = Number.parseInt(b)
console.log(onePlusAvg(a,b))

//---------------------------------------------------------
//                   Second Way
//---------------------------------------------------------

const dj = (n , l) =>{
    for (let i =0; i <= n; i++){

        console.log(l+ "Times")
    }

}

let n = prompt("Enter the No. of Times: ")
n = Number.parseInt(n)
let l = prompt("Enter The text to print: ")

dj(n, l)