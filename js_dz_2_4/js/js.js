
function LogIn (){

var UserLogin = document.getElementById('login').value; 
 
var UserPassword = +document.getElementById('password').value;  
  
  if (UserLogin === "ivan" && UserPassword === 333)
    {

    TextWelcome.innerHTML = "Добро пожаловать";

    }
  
  else if (UserLogin === "ssss" && UserPassword === 666) 
    {
    
    TextWelcome.innerHTML = "Добро пожаловать";

    }

  else if (UserLogin === "gibs" && UserPassword === 0000)

     {

     TextWelcome.innerHTML = "Добро пожаловать";

     }

  else {

     TextWelcome.innerHTML = "Ошибка";
    }
  
 }


var button = document.getElementById("enter");

button.addEventListener("click", LogIn);
