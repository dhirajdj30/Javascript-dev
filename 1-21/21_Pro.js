const prompt = require('prompt-sync')({sigint:true});

//  Guess the number game  By -DJ

console.log("---------------------------------------------------------------------")
console.log("               Guess The Number! If U Can!")
console.log("---------------------------------------------------------------------")

console.log(" ")
console.log("Let Set Go...")

console.log(" ")
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

const GuessTheNum = () =>{
    var guessNum = getRandomArbitrary(0,100);
   
    let Score = 10;
    let guess;

    for(let i =1; i <=10; i++){

        guess = prompt("Enter your Guess No. " + i + " : ");
        guess = Number.parseInt(guess)
        if(guess==guessNum){
            console.log("You got it right!")
            console.log("Your Score: " + Score)
            break;
        }
        else if (guess < guessNum){
            console.log("The Number is larger than "+ guess);
            Score--;
            console.log(" ")
        }
        else if(guess > guessNum){
            console.log('The Number is Smaller than '+ guess);
            Score--;
            console.log(" ")
        }
        else{
            console.log("Error")
        }

        
    }
    console.log(guessNum)
    console.log("You Lost The Game!")
}   



GuessTheNum();