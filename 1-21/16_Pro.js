const prompt = require('prompt-sync')({sigint:true});

// Array Methods

let num = [1,2,3,4,5,6,7,8,9]
console.log(num[1]*6)

// To string
let b = num.toString()
//String
console.log(b[1]*6)


//  Join

let c = num.join('d ' )
console.log(c)

// Pop

num.pop() // pop returns poped elements
console.log(num)

// Push

num.push(25)
console.log(num);

// Shift

num.shift()
console.log(num)