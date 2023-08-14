const submit = document.querySelector('#submit');
 console.log(submit);

const classesAttended = document.querySelector('#classes-attended');
// console.log(classesAttended);

const totalClasses = document.querySelector('#total-classes');
// console.log(totalClasses);

const display = document.querySelector('#attendance');
// console.log(display);

let minAttendance = 75;

// console.log(document.querySelector('#minimum-attendance'));

displayAttendance(90);


submit.addEventListener('click', (e)=>{

    e.preventDefault();
    minAttendance = parseInt(document.querySelector('#minimum-attendance').value);
    console.log(minAttendance);
    [a,b] = getValues();
    const attendance = calculateAttendance(a, b);
    displayAttendance(attendance)
})

function getValues(){

    let noOfClasses = parseInt(classesAttended.value);
    // console.log(noOfClasses);
    let total = parseInt(totalClasses.value);
    // 
    
    return [noOfClasses, total];
}


function calculateAttendance(attended  = 80, total = 100){

    return ((attended / total) * 100).toFixed(0);
}


function displayAttendance(attendance){
    console.log(attendance);
    if(attendance > 100){
        attendance = 100;
    }
    display.innerHTML = `${attendance}%`;

    if(attendance < minAttendance){
        display.style.color = 'red';
    }
    else if(attendance >= minAttendance && attendance < 80){
        display.style.color = 'orange';
    }
    else if(attendance >= 80 && attendance < 85){
        display.style.color = '#51A5B5';
    }
    else if(attendance >= 85 && attendance < 90){
        display.style.color = '#0CBAA6';
    }
    else{
        display.style.color = '#04AF70';
    }
    
}

