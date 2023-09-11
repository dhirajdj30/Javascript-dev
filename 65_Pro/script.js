let a = [

    "Starting Hack....",
    "Initializing System...",
    "System Initialized...",
    "Hacking System",
    "User Found",
    "Main Stream hacked.....",
    "Rebooting System....",
    "Connecting to Server al154....",
    "Server Access Denied...",
    "Connecting to Server al133....",
    "Server Permission Granted...",
    "Fetching User ID...",
    "Fetched User ID: DJ57....",
    "Using Brute Force...",
    "500k passwords tried...",
    "Not Found...",
    "500k passwords tried...",
    "Password Found...",
    "Access Granted...",
    "Hack Successful...."
]

const sleep = (t)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, t*1000);
    })
}

const showHack = async (message) =>{
    await sleep(2)
    let test = document.getElementById("hack-text")
    test.innerHTML = test.innerHTML +   message + "<br> <br>"
}

(async () =>{
    for(let i =0; i < a.length; i++){
        await showHack(a[i])
    }
})()