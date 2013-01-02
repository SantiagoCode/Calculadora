let btn_calcular = document.getElementById('btn_calc');
let cambio = document.getElementById("operador");
let tercer_cuadro = document.querySelector(".resultados");
let txt_resultados;
let btn_space;
let operacion = document.getElementById('actualizar');
let contador = 1;
let signo = "+";
let last_value;

btn_calcular.addEventListener("click", calcular);
cambio.addEventListener("change", actualizar);




// aqui actualizamos los valores de X y Y
function calcular () {
  let x = parseInt( document.getElementById('x').value );
  let y = parseInt( document.getElementById('y').value );

  operar(x, y);
}

// aqui identificamos si es uns suma o resta
const operar = (x, y) => {
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
const historial = (x, y, result) => {
  if(contador == 1){
    tercer_cuadro.innerHTML = 
    "<h2>Resultados: </h2> <p id='contenedor_resultados'></p> <p id='btn_space'></p>";

    txt_resultados = document.getElementById('contenedor_resultados');
    btn_space = document.getElementById("btn_space");
  }

  txt_resultados.innerHTML +=
  "<strong> Operacion " + contador + ":</strong> <br />" +
  x + " " + cambio.value + " " + y + " = " + result + "<br />";

  last_value = result;

  contador++;

  btn_space.innerHTML =
  "<button class='select act' type='button' name='button'>Usar último valor</button>"

  btn_space.addEventListener("click", reusar);
}



// Asi actualizarmos la interfaz
function actualizar () {
  operacion.innerHTML = cambio.value;
}


// asi permitimos continuar el calculo
const reusar = () => {
  x.value = parseInt(last_value);
  y.value = 0;
}
