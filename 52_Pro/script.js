// const prompt = require('prompt-sync')({sigint:true});
//  Call back

// // Synchronus Programing
// let a = prompt("What is Your Name: ");
// let b = prompt("What is your age: ");
// let c = prompt("What is your favorite color: ");
// console.log( a + " is "+b+" years old and has "+c+" favorite color.");


//  Asynchronus Programming
// console.log("start")
// setTimeout(function(){
//     console.log("Hey I am good")
// },3000)

// console.log("end")

/* Callback function */

function greet(name, callback){
    console.log('hi'+ " "+ name);
    callback();
}

function callme(){
    console.log('I am a callback function !');
}

// passing function as an argument

greet('dhiraj',callme);


//  Second function

const cal = (a,b,operation) => {
    return operation(a,b);
}

const add = (a,b)=>{
    console.log("Addition");
    console.log(a+b);
}

const sub = (a,b) => {
    console.log("Subtraction")
    if(a < b){
        console.log(b-a);
    }
    else{
        console.log(a-b);
    }
}
const mul = (a,b)=>{
    console.log("Multiplication")
    console.log(a*b);
}
const div = (a,b)=>{
    console.log("Division")
    if( a <b){
        console.log(b/a)
    }
    else{
        console.log(a/b)
    }
}



cal(10,20,add);
cal(10,20,sub);
cal(10,20,mul);
cal(10,20,div);