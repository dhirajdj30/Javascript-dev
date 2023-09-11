// prnp

let key = prompt("Enter Your Key: ")
let value = prompt("Enter Your Value: ")
document.cookie = `${encodeURI(key)}=${encodeURI(value)}`
console.log(document.cookie)
console.log(decodeURI(document.cookie))
