
function BirthDay (){

var yearsOld = +document.getElementById('InputYears').value;

var result;

if (yearsOld > 17)
  {

    result = 2017 - yearsOld;

    alert ("You are " + result + " years old");

  }

  else if (yearsOld < 17)
  {

  result = 17 - yearsOld;

  alert ("You are " + result + " years old");

  }

  	else

  	{

  		alert("Unreported format")
  	}

     }


var button = document.getElementById("enter");

button.addEventListener("click", BirthDay);
