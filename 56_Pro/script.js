

const loadscript = (src)=>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src =src
        document.body.appendChild(script)
        script.onload = ()=>{
            console.log("Dj")
            resolve(1)
        }
        script.onerror = () =>{ reject(0)}
    })  
}

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")

p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are sorrry but we are having problems! ")
})