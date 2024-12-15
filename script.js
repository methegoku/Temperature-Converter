const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
            temp = Number(textBox.value);
            temp = temp * 9 / 5 + 32;
            result.textContent = temp.toFixed(1) + "°F";
    }
    
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = temp * 5 / 9 + 32;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please Select an Option";
    }
}
