
function MaxNumber (){

var firstNumeric = parseFloat(document.getElementById('firstNumber').value); 
var secondNumeric = parseFloat(document.getElementById('secondNumber').value);
var thirdNumeric = parseFloat(document.getElementById('thirdNumber').value);
  
  
  if (firstNumeric > secondNumeric && firstNumeric > thirdNumeric)
    {

    ViewNumber.innerHTML = firstNumeric;
    
    }
  
  else if (secondNumeric >firstNumeric && secondNumeric > thirdNumeric) 
    {
    
     ViewNumber.innerHTML = secondNumeric;

    
    }

  else if (thirdNumeric > firstNumeric && thirdNumeric > secondNumeric)

  	{

       ViewNumber.innerHTML = thirdNumeric;
  	}

  else {

     ViewNumber.innerHTML = "Они равны";

    }
  
 }


var button = document.getElementById("enter");

button.addEventListener("click", MaxNumber);
