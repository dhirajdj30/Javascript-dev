let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

console.log(first.innerHTML)
first.innerHTML = '<h1> DHIRAJ JAGTAP </h1>'

console.log(first.outerHTML )
first.outerHTML = "<div> Dhiraj </div>"
console.log(document.body.textContent)