// function calculateBMI() {
//     let height = document.getElementById("height").value;
//     let weight = document.getElementById("weight").value;
//     let bmi = weight / (height ** 2)
//     if (bmi < 18.5){
//         alert ("Underweight");
//     }
//     if (bmi >= 18.5 && bmi <= 24.9){
//         alert("Optimum range");
//     }
//     if (bmi >= 25 && bmi <= 29.9){
//         alert("Overweight")
//     }
//     if (bmi >= 30 && bmi <= 34.9){
//         alert("Class I obesity");
//     }
//     if (bmi >= 35 && bmi <= 39.9){
//         alert("Class II obesity");
//     }
//     if (bmi > 40){
//         alert("Class III obesity");
//     }
// }
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        document.getElementById("result").innerText ="Please enter valid weight and height!";
        return;
    }

    const bmi = (weight / (height ** 2)).toFixed(2);// calculate BMI
    
    let message;
    if (bmi < 18.5){
        message = "Underweight";
    }else if (bmi >= 18.5 && bmi < 24.9){
        message = "Normal weight";
    }else if (bmi >= 25 && bmi < 29.9){
        message = "Overweight";
    }else {
        message = "Obese";
    }
   
     document.getElementById("result").innerHTML = `
      BMI : <strong>${bmi}</strong><br>
      Category : <strong>${message}</strong>      
      `; 
    }