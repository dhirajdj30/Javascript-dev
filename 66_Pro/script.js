

let p = fetch("http://api.weatherapi.com/v1/current.json?key=15e843d96f594a1cb4d133317230909&q=Pune&aqi=no")

p.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    // console.log(value)
    return value.json()
}).then((value)=>{
    console.log(value.current)
})

