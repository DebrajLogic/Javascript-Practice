const input = document.querySelectorAll('.input-btn');

const output = document.querySelector('#calculate');

let cursor = document.querySelector('#display');

const clearValue = document.querySelector('#CE');

array = [];

let operator = '';

let buttonID;

input.forEach((button)=>{
    clearFlag = true
    button.addEventListener('click', ()=>{
        if(button.parentElement.id === 'operator'){
            button.className = 'pressed';
            buttonID = button;
            // console.log('buttonid:', button.id);
        }
        
        let value = button.innerHTML;
        // console.log(value);
         if(clearFlag){
            clear();
            clearFlag = false;
         }

        setOperator(value);
        
        getValue(value);
        
    })
})

clearValue.addEventListener('click',()=>{
    buttonID.className = 'input-btn';
    clear();
})


output.addEventListener('click', (e)=>{
    buttonID.className = 'input-btn';
    // console.log('buttonId', buttonID.className);
    result();  
})


function setOperator(value){
    switch(value){
        case '+': operator = '+';
        break;
        case '-': operator = '-';
        break;
        case '*': operator = '*';
        break;
        case '/': operator = '/';
        break;
    }
   
}

function extract(string){

    let answer;
    let operandA;
    let operandB;

    if(operator === '+'){
        array = string.split('+');
        console.log(array);
        answer = array.reduce((acc, e)=>(acc += parseInt(e)), 0);    
    }
    if(operator === '-'){
        array = string.split('-');
        console.log(array);
        operandA = parseFloat(array[0]);
        operandB = parseFloat(array[1]);
        answer = subtract(operandA, operandB); 
    }
    if(operator === '*'){
        array = string.split('*');
        console.log(array);
        operandA = parseFloat(array[0]);
        operandB = parseFloat(array[1]);
        answer = multiply(operandA, operandB);
    }
    if(operator === '/'){
        array = string.split('/');
        console.log(array);
        operandA = parseFloat(array[0]);
        operandB = parseFloat(array[1]);
        if(operandB == 0){
            answer = 'undefined'
            return;
        }
            
        answer = divide(operandA, operandB);    
    }
    
    console.log(operandA);
    console.log(operandB);
    console.log(answer);
    
    return answer;
}


function result(){
    string = cursor.innerHTML;
    let answer = extract(string);  
    answer = `${answer}`;
    console.log(typeof answer);
    showResult(answer);
}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    let quotient = a/b;
    console.log('quotient = ', quotient);
    
    let remainder = (a % b)/100;
    console.log('remainder = ', remainder);

    return (quotient) + remainder;
}

function clear(){
    cursor.innerHTML = '';
}

function getValue(value){
    cursor.innerHTML += value;
}

function showResult(answer){
    cursor.innerHTML = answer;
}
