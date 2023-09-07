// The Stone paper Scessior game 
// let a = prompt("Enter Your name")

const getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


const forma = (ans)=>{

    if(ans == 1){
        return answer = 'paper'
    }
    else if(ans == 2){
        return answer = 'stone'
    }
    else if(ans == 3){
        return answer = 'scissor'
    }
    
}




let score =10
let guess

do{
    let ans = getRandomInt(1,3)
    let answer;
    answer = forma(ans)
    guess = prompt("Enter your ans: ")

    if(answer== guess){
        alert("Same")
    }
    else if(answer=='stone' && guess == 'paper'){
        alert("You won and your score: " + score )
        break;
    }
    else if(answer=='stone' && guess=='scissor'){
        alert("Try again! ")
        guess = 'sd'
        score--
    }
    else if(answer=='paper' && guess == 'stone'){
        alert("Try again! ")
        guess = 'sd'
        score--
    }
    else if(answer=='paper' && guess == 'scissor'){
        alert("You won and your score: " + score )
        break;
    }
    else if(answer=='scissor' && guess == 'stone'){
        alert("You won and your score: " + score )
        break;
    }
    else if(answer=='scissor' && guess == 'paper'){
        alert("Try again! ")
        score--
    }
    else{
        alert("Plz enter correct spelling! ")
        guess = 'sd'
    }

}while(guess == answer || guess == 'sd')

document.write("Your Score: " + score)
document.body.style.color = 'green'