const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    let light = document.querySelector('#check').checked;

    let colorGenerator;

    for(let i = 0; i < 6; i++){
        
        const sample = hex[(Math.floor(Math.random() * 16))];
        if(!light){
            if(sample < 'A'){
                i--;
                continue;
            }
        
        }
        else{
            if(sample > '6' && sample < '3'){
                i--;
                continue;
            }
        }
        color += sample;
    }
    return color;
}

document.querySelector('#start').addEventListener('click', startChaningColor);
document.querySelector('#stop').addEventListener('click', stopChaningColor);
document.querySelector('#reset').addEventListener('click',reset);

function startChaningColor(){
    colorGenerator = setInterval(function(){
        
        const color = randomColor();
        document.querySelector('body').style.backgroundColor = color;
        document.querySelector('#currentColor').innerHTML = color;

        light = document.querySelector('#check').checked;

    },1000);
}

function stopChaningColor(){
    clearInterval(colorGenerator);
    colorGenerator = null;
}


function reset(){
    document.querySelector('body').style.backgroundColor = '#FFFFFF';
    document.querySelector('#currentColor').innerHTML = '#FFFFFF';
}