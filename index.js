function Random(min, max){

    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function rollDice(){
    
    return Random(1,6);
}

let highScore = 0;

let prompt = require('prompt-sync')();

let response = 1;

while(response != 'N'){
    
    response = prompt('Roll Dice? (<return / Enter key> to roll the dice, N to quit): ');

    let output = rollDice();

    if(output === 6 || output === 1){

        highScore++;
    }

    console.log();
    console.log(`HighScore: ${highScore}`);
    console.log(output);
    console.log();

    if(highScore === 10){

        console.log("Well done You have reached the high score Limit!!!");
        break;
    }
    
}


console.log(`HighScore: ${highScore}`);
console.log();