

async function harry () {

    let DelhiW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 5000);
    })

    let PuneW = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22 Deg")
        }, 6000);
    })

    // DelhiW.then((value)=>{
    //     console.log(value)
    // })
    // PuneW.then((value)=>{
    //     console.log(value)
    // })
    console.log("Fetching Delhi Weather...")
    let delhi = await DelhiW
    console.log("Delhi Weather: "+delhi)
    console.log("Fetching Pune Weather...")
    let Pune = await PuneW
    console.log("Pune Weather: "+Pune)
    return [delhi, Pune]
}
console.log("Welcome to weather control room! ")
let a = harry()
a.then((value)=>{
    console.log(value)
})

// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })

//     // delhiWeather.then(alert)
//     // bangaloreWeather.then(alert)
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     return [delhiW, bangaloreW]
// }

// const cherry = async () => {
//     console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()

// }
// main1()
