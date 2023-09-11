
const createToDo =async (todo)=>{
    let options = {
        method: "POST",
        headers: {'Content-type':"application/json"},
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    let r = await response.json()
    return r
}

mainFunc = async ()=>{
    let todo = {
        title: 'Harry',
        body: 'Bhai',
        userId: 1100,
    }
    let tod = await createToDo(todo)
    console.log(tod)
    console.log(await getTodo(5))
}


mainFunc()