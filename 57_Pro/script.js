let p1 = new Promise((resolve, reject) => {
    alert("Hey I am not resolved! ")
    setTimeout(() => {
        resolve(1)
    }, 3000);
})


p1.then((value)=>{
    console.log(value)
    console.log("Congrats! ")
})

p1.then(()=>{
    console.log("Hurray")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("In Second Promise")
            resolve(4)
        }, 2000);
    })
}).then((value)=>{
    console.log(value)
})