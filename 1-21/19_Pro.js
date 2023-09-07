const prompt = require('prompt-sync')({sigint:true});

//  Mapp filter and reduce



// Array Map Method

let arr = [45,32,21]
let a = arr.map((value)=>{
    console.log(value)

    return value+"a"
})

console.log(a)

// Array Filter method

let arr2 = [45,2,8,4,5,1]
let a2 = arr2.filter((a)=>{
    return a<10
})

console.log(a2)

// Reduce

let arr3 = [1,2,3,4,5,2,1]
let nera=arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(nera)
