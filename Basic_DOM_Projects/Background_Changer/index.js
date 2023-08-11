const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const selectedColor = document.querySelector('#palette');

console.log(selectedColor);


buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        console.log(e.target.id);

        body.style.backgroundColor = e.target.id;

        selectedColor.innerText = e.target.id;
        
    })
})