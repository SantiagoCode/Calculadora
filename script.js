var btn_calcular = document.getElementById('btn_calc');
var cambio = document.getElementById("operador");
var txt_resultados = document.getElementById('contenedor_resultados');
var btn_space = document.getElementById("btn_space");
var operacion = document.getElementById('actualizar');
var contador = 1;
var signo = "+";
var last_value;

btn_calcular.addEventListener("click", calcular);
cambio.addEventListener("change", actualizar);




// aqui actualizamos los valores de X y Y
function calcular()
{
  var x = parseInt( document.getElementById('x').value );
  var y = parseInt( document.getElementById('y').value );

  operar(x, y);
}

// aqui identificamos si es uns suma o resta
function operar(x, y)
{
  switch (cambio.value) {
    case "+":
      var result = x + y;
      break;
    case "-":
      var result = x - y;
      break;
    case "x":
      var result = x * y;
      break;
    case "/":
      var result = x / y;
      break;
    default:

  }

  historial(x, y, result);
}

// aqui creamos un historial de operaciones
function historial(x, y, result)
{
  txt_resultados.innerHTML +=
  "<strong> Operacion " + contador + ":</strong> <br />" +
  x + " " + cambio.value + " " + y + " = " + result + "<br />";

  last_value = result;

  contador++;

  btn_space.innerHTML =
  "<button class='select' type='button' name='button'>Usar último valor</button>"

  btn_space.addEventListener("click", reusar);
}



// Asi actualizarmos la interfaz
function actualizar()
{
  operacion.innerHTML = cambio.value;
}


// asi permitimos continuar el calculo
function reusar()
{
  x.value = parseInt(last_value);
  y.value = 0;
}
