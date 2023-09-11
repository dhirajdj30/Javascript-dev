let key = prompt("Enter Key ? ")
let value = prompt("Enter Value ? ")
localStorage.clear()

localStorage.setItem(key,value)
console.log(`The Value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "value"){
    localStorage.removeItem(key)
}

if(key==0){
}