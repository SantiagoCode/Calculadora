var btn_calcular = document.getElementById('btn_calc');
btn_calcular.addEventListener("click", calcular);
var 

function calcular()
{
  var x = parseInt( document.getElementById('x').value );
  var y = parseInt( document.getElementById('y').value );

  var result = x + y;

  historial();
}


function historial()
{

}
