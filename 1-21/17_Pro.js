const prompt = require('prompt-sync')({sigint:true});

// Methods in arrays

// let num = [1,2,3,5,6,4,7,8,7,8]

// let num_more = [10,21,45,87,94,41]

// console.log("lenght of array before delete: "+ num.length)

// delete num[0]
// console.log(num)

// console.log("lenght of array after delete: "+ num.length)
// for (let a in num){
//     console.log(num[a])
// }

// let newArray = num.concat(num_more)

// console.log(newArray)

// 

// const compare = (a, b) => {
//     return a - b
// }

// let num = [5,4,79,14,64,15,21]
// console.log(num)
// num.sort()
// console.log(num)

// num.sort(compare)
// num.reverse()
// console.log(num)



// // Splice and slice

// num.splice(2,3,1022,125,122,55)
// console.log(num)

let num =  [0,1,2,3,4,5,6,7]

num.slice(2)
console.log(num.slice(2))

num.slice(3)
console.log(num.slice(3,2))