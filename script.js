class Calculadora {
    constructor(){
        this.btn_calcular = document.getElementById('btn_calc');
        this.cambio = document.getElementById("operador");
        this.cambio_value = this.cambio.value;
        this.tercer_cuadro = document.querySelector(".resultados");
        this.operacion = document.getElementById('actualizar');
        this.contador = 1;
        this.signo = "+";
        this.last_value;
        this.txt_resultados;
        this.btn_space;
    }
    
    // aqui actualizamos los valores de X y Y
    calcular () {
        let x = parseInt( document.getElementById('x').value );
        let y = parseInt( document.getElementById('y').value );

        this.operar(x, y);
    }


    // aqui identificamos si es uns suma o resta
    operar = (x, y) => {
        switch (this.cambio_value) {
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
    historial = (x, y, result) => {
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
    actualizar () {
        operacion.innerHTML = cambio.value;
    }


    // asi permitimos continuar el calculo
    reusar = () => {
        x.value = parseInt(last_value);
        y.value = 0;
    }
}

let miCalculadora = new Calculadora();



miCalculadora.btn_calcular.addEventListener("click", miCalculadora.calcular);
miCalculadora.cambio.addEventListener("change", miCalculadora.actualizar);
