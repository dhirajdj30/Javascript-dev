// let a=  document.getElementsByTagName('img')[0]
// a.addEventListener('click',function(){
//     window.location = "https://www.google.com"
//     win.focus()
// })

// let b=  document.getElementsByTagName('img')[1]
// b.addEventListener('click',function(){
//     window.location = "https://www.instagram.com"
//     win.focus()
// })

// let c=  document.getElementsByTagName('img')[2]
// c.addEventListener('click',function(){
//     window.location = "https://onlyfans.com"
//     win.focus()
// })

// let d=  document.getElementsByTagName('img')[3]
// d.addEventListener('click',function(){
//     window.location = "https://www.getbootstrap.com"
//     win.focus()
// })

// const fetchContent = async (url) =>{
//     con = await fetch(url)
//     let a = await con.json()
//     return a;
// }


// setInterval(async function(){

//     let url ="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// },3000)

setInterval( async function(){
    document.querySelector("#bulb").classList.toggle("bulb")
},300)