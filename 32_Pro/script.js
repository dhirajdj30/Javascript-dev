console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

console.log(document.body.childNodes[2])

// Convert Child Nodes into arrays

let arr = Array.from(document.body.childNodes)
console.log(arr)

for(let a of arr){
    console.log(a)
}