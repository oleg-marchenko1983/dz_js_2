
var TextWelcome = document.getElementById("result");

function pow()
{
  var number = parseInt(document.getElementById('number').value);

  var degree = parseInt(document.getElementById('degree').value);

  var result = number;

  for (var i = 1; i < degree; i++)
  {
    result *= number;
  }
  TextWelcome.innerHTML=result;
}

  var button = document.getElementById("button");

  button.addEventListener("click", pow);
