
function findApartament (){

var numberPorch = parseInt(document.getElementById('apartaments').value); 
  
  
  if (numberPorch >= 1 && numberPorch  <= 20)
    {

    TextWelcome.innerHTML = "Это подъезд номер №1";

    }
  
  else if (numberPorch >= 21 && numberPorch  <= 64) 
    {
    
    TextWelcome.innerHTML = "Это подъезд номер №2";

    }

  else if (numberPorch >= 65 && numberPorch  <= 80)

     {

     TextWelcome.innerHTML = "Это подъезд номер №3";

     }

  else {

     TextWelcome.innerHTML = "Нет такого подъезда";
    }
  
 }


var button = document.getElementById("enter");

button.addEventListener("click", findApartament);
