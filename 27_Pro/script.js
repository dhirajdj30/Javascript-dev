
// Using prompt function and alert Show you can drive or not on age

// let age = prompt("Enter your age: ")
// age = Number.parseInt(age)

// if(age < 1){
//     alert("Plz Enter Proper Input age cant be less than 1 year")
// }
// else if(age < 18){
//     alert("Sorry! you cant Drive the Car!")
// }
// else{
//     alert("Welcome You can drive the car!")
// }

// Problem 2
// Confirm

// let runAgain= true;
// while(runAgain){
//     let age = prompt("Enter your age: ")
//     age = Number.parseInt(age)

//     if(age < 1){
//         alert("Plz Enter Proper Input age cant be less than 1 year")
//         break;
//     }
//     else if(age < 18){
//         alert("Sorry! you cant Drive the Car!")
//     }
//     else{
//         alert("Welcome You can drive the car!")
//     }
//     runAgain = confirm("Do you want to play again?")
// }

// Problem 3
// Redirect to another website 


// let num = prompt('Enter a Number: ')
// num = Number.parseInt(num)

// if(num == 4){
//     location.href = "https://google.com"
// }
// else{
//     location.href = "https://www.oneplus.com/"
// }

let color = prompt("Enterthe page background color: ")
// color = Number.parseInt(color)
document.body.style.backgroundColor = color
