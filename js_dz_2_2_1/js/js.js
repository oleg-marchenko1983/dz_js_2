
function MaxNumber (){

var FirstNumber = parseFloat(document.getElementById('FirstInput').value); 
var SecondNumber = parseFloat(document.getElementById('SecondInput').value);  
var ThreeNumber = parseFloat(document.getElementById('ThreeInput').value);  
 

  if (FirstNumber > SecondNumber && FirstNumber > ThreeNumber)
    {

    TextNumber.innerHTML = FirstNumber;

    }
  
  else if (SecondNumber > FirstNumber && SecondNumber > ThreeNumber) 
     {
    
      TextNumber.innerHTML = SecondNumber;

  }

  else if ( ThreeNumber > FirstNumber && ThreeNumber > SecondNumber )

   {

   TextNumber.innerHTML = ThreeNumber;

    }

     else {

     TextNumber.innerHTML = "Они Равны";
    }
  
 }


var button = document.getElementById("enter");

button.addEventListener("click", MaxNumber);
