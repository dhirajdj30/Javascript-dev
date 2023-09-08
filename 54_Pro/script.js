
let prom = new Promise(function(resolve, reject){
    console.log("hello")
    resolve(56)
})

console.log("Hello one")
setTimeout(() => {
    console.log("Hello in 3 seconds")
}, 3000);

console.log("Hello Three")
console.log(prom)

// Fetch Google.com homepage  ==> use for parallel execution
// Fecth data form the data api
// Fetch pictures from the server
// Print Downloading