const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const report = document.querySelector('#report');
    
    // console.log(height);
    // console.log(weight);
    // console.log(results);
    // console.log(report);

    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = '<p style="color:yellow">!! Please give a valid height !!</p>';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = '<p style="color:yellow">!! Please give a valid weight !!</p>';
    }else{

        const bmi = (weight/((height ** 2)/10000));

        // results.innerHTML = `BMI = ${bmi.toFixed(0)}`;

        if(bmi < 18.6){
            report.innerHTML = '<p style="color:red">!!You are Under Weight!!</p>';
            document.getElementById('under').style.color = 'yellow';
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            report.innerHTML = '<p style="color:green">!!You are in Normal Range!!</p>';
            document.getElementById('normal').style.color = 'green';
        }else{
            report.innerHTML = '<p style="color:yellow">!!You are Over Weight!!</p>'
            document.getElementById('over').style.color = 'red';
        }
    }

   

})