const prompt = require('prompt-sync')({sigint:true});

// For loops in arrays

let num = [3,25,4,7,4,8,4,5,55]

// for(let i=0; i< num.length; i++){
//     console.log(num[i])
// }

// num.forEach((element) =>{

//     console.log(element*element)
// }
// )

// Array.form

let name = "harry"

// let arr = Array.from(name)
// console.log(arr)

// for off
for(let i of name){
    console.log(i)
}
