var btn_calcular = document.getElementById('btn_calc');
var cambio = document.getElementById("operador");
var txt_resultados = document.getElementById('contenedor_resultados');
var operacion = document.getElementById('actualizar');
var contador = 1;
var signo = "+";

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
  x + " " + cambio.value + " " + y + " = " + result + ". <br />";

  contador++;
}

// Asi actualizarmos la interfaz
function actualizar()
{
  operacion.innerHTML = cambio.value;
}
