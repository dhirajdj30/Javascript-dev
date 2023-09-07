let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + "<h1> Dhiraj Jagtap </h1>"

let div = document.createElement('div')
div.innerHTML = "<h2> This is new created Div </h2>"
// a.appendChild(div)
// a.prepend(div)

// a.before(div)
// a.after(div)
a.replaceWith(div)