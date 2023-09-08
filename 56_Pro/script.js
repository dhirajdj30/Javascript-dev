let p = new Promise((resolve, reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        // console.log("I am a Promise and I am fulfilled")
        resolve(true)
        // reject(new Error("I am an Error"))
    },5000)
})

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        // console.log("I am a Promise No 2")
        // resolve(true)
        reject(new Error("I am an Error"))
    },5000)
})
p.then((value)=>{
    console.log(value)
})

p2.catch((err)=>{
    console.log("Some error occured in P2")
})

console.log(p)
console.log(p2)