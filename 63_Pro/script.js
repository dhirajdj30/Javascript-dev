// const loadScript = async (src)=>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src=src
//         script.onload = ()=>{
//             resolve(src + " Done Success")
//         }
//         document.head.append(script)
//     })
// }

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{

//     console.log(value)
// })


// Problem 2


// const main2 = async ()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }

// main2()

// Problem 3

// let p = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Please this is a not execptable"))
//         }, 1000);
//     })
// }

// let a = async () =>{
//     try{
        
//         let c = await p()
//         console.log(c)
//     } catch(err){
//         console.log("These error has been handled")
//     }
// }
// a()

let p1 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000);
    })
}

let p2 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}
let p3 = async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000);
    })
}

const run = async ()=>{
    console.time("run")
    // let a1 = await p1() // Fetch time for Product 1
    // let a2 = await p2() // Fetch time for Product 1
    // let a3 = await p3() // Fetch time for Product 1

    let a1 =  p1() // Fetch time for Product 1
    let a2 =  p2() // Fetch time for Product 1
    let a3 =  p3() // Fetch time for Product 1
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1,a2,a3)
    console.timeEnd("run")
}

run()