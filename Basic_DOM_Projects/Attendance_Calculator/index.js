const submit = document.querySelector('#submit');
 console.log(submit);

const classesAttended = document.querySelector('#classes-attended');
// console.log(classesAttended);

const totalClasses = document.querySelector('#total-classes');
// console.log(totalClasses);

const display = document.querySelector('#attendance');
// console.log(display);

const classListHeading = document.querySelector('#class-list-heading');

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
    const attendance = ((attended / total) * 100).toFixed(0);
    if(attendance >= 75){
        dropAttendance(attended, total, minAttendance);
    }
    else{
        climbAttendance(attended, total, minAttendance);
    }
    return attendance;
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



function percetange(a, b){
    return ((a/b)*100).toFixed(0);
}




function climbAttendance(A= 5, T = 20, safeZone= 75){
    
    console.log('ClimbAttendance:');

    let i = 1;
    let result;
   

    while(true){
        result = percetange(A++, T++);

        // if(result >= safeZone){
        //     break;
        // }

        // if(i > 10){
        //     console.log('NGMI');
        //     break;
        // }

        displayClassList(i , result);

        console.log(`Class #${i}: Attendance: ${result}`);

        i++;

        if(result >= safeZone){
            break;
        }

    }
    if(i-1 === 1){
        classListHeading.innerHTML = `<h1>You need to ATTEND: <span id="attend-drop">${i - 1}</span> Class</h1>`
    }
    else{
        classListHeading.innerHTML = `<h1>You need to ATTEND: <span id="attend-drop">${i - 1}</span> Classes</h1>`
    }
    if(i - 1 >= 10){
        generateAlert();
    }
     

    classListHeading.style.color = 'red';
    
}


function generateAlert(){
    const alertHeading = document.createElement('h1');
    alertHeading.innerHTML = 'WHY EVEN BOTHER ???'

    classListHeading.appendChild(alertHeading);
}


// check if attendance > 75 (safeZone)
function dropAttendance(A= 5, T = 10, safeZone= 75){

    console.log('DropAttendance:');

    let result;
    let i = 1;

    while(true){
        result = percetange(A--, T++);

        if(result <= safeZone){
            break;
        }

        displayClassList(i, result);

        console.log(`Class #${i}: Attendance: ${result}`);

        i++

    }

    if(i-1 === 1){ 
        classListHeading.innerHTML = `<h1>You can Bunk: <span id="attend-drop">${i - 1}</span> Class</h1>`;
    }
    else{
        classListHeading.innerHTML = `<h1>You can Bunk: <span id="attend-drop">${i - 1}</span> Classes</h1>`;
    }

    classListHeading.style.color = '#04AF70';
}



function displayClassList(classNo, percentage){

    const list = document.querySelector('ul');

    const li = document.createElement('li');

    li.setAttribute('class', 'class_list')
    li.innerHTML = `<div>Class ${classNo} <span id="class-percentage">${percentage}%</span></div>`;

    list.parentElement.appendChild(li);

    console.log(li);
}



function clearList(){

}