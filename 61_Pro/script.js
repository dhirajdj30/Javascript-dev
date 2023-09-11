

try {
    let age = prompt("Enter Your Age: ")
    age = Number.parseInt(age)
    if(age>150){
        throw new Error("This is Probably not True")
    } 
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}