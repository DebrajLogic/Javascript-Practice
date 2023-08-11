let randomNumber = parseInt(Math.random() * 100 + 1);

let score = 0;

console.log(randomNumber);
const submit = document.querySelector('#submit');
// console.log(submit);
const userInput = document.querySelector('#input');
const highOrLow = document.querySelector('#highOrLow');
const guessSlot = document.querySelector('#guessSlot');
const guessLeft = document.querySelector('#guessLeft');
const startOver = document.querySelector('#stats');
const alertMessage = document.querySelector('#alert');

const scoreValue = document.querySelector('#score');
// console.log(score);

const p = document.createElement('p');

let prevGuess = [];

let attemptsLeft = 10;

let playGame = true;

if(playGame){
    
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // highOrLow.innerHTML = `${guess}`;
        validateInput(guess);
    })
}

function validateInput(guess){
    // Check if the user input is valid
    if(isNaN(guess)){
        alertMessage.innerHTML = '!! Please enter a valid number !!';
        alertMessage.style.color = 'orange';
    }else if(guess < 1){
        alertMessage.innerHTML = '!! Please enter a number ≥ 1 !!';
        alertMessage.style.color = 'orange';
    }else if(guess > 100){
        alertMessage.innerHTML = '!! Please enter a number ≤ 100 !!';
        alertMessage.style.color = 'orange';
    }else{
        prevGuess.push(guess);
        attemptsLeft--;
        // alertMessage.innerHTML = 'Keep on Going...'
        // alertMessage.style.color = 'white';

        if(attemptsLeft < 1 && guess != randomNumber){
            displayGuess(guess);
            displayMessage(`!! GAME OVER !! Correct Guess was: ${randomNumber}`,'cyan');
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayScore(){
    scoreValue.innerHTML = `${score}`;
}


function checkGuess(guess){
    
    if(guess === randomNumber){
        displayMessage('Great Job, You guessed it right!!!', 'lightgreen');
        score++;
        displayScore();
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage('Guess is Too Low!!!', 'orange');
    }
    else{
        displayMessage('Guess is Too High!!!', 'orange');
    }
    
}


function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}    `;
    
    guessLeft.innerHTML = `${attemptsLeft}`;
}


function displayMessage(message, color = 'white'){
    // DOM manipulation
    alertMessage.innerHTML = message
    alertMessage.style.color = color;
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h1 id="newGame">New Game</h1>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){

    const StartNewGame = document.querySelector('#newGame');

    StartNewGame.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        attemptsLeft = 10;
        guessSlot.innerHTML = '';
        displayMessage('Guess New Number', 'white');
        userInput.removeAttribute('disabled','');
        startOver.removeChild(p);
        playGame = true;
        console.log(randomNumber);
        
    })
    
}


