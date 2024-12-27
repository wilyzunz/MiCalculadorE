var segundoTexto = false;
var operador = ""; 
function sumar() { 
    segundoTexto = true;
    operador = "+";
 }
//    alert("su reultado es " + (Number(txtNume1.value) + Number(txtNume2.value)));
    //}
function resta() {
    segundoTexto = true;
    operador = "-";
//    alert("su resta es " + (Number(txtNume1.value) - Number(txtNume2.value)));
}
    function multiplicar() {
        segundoTexto = true;
        operador = "*";
/*    alert("su multiplicación es " + (Number(txtNume1.value) * Number(txtNume2.value)));*/
}

    function dividir() {
        segundoTexto = true;
        operador = "/";
/*    alert("su división es " + (Number(txtNume1.value) / Number(txtNume2.value)));*/
}
//function Escribir(numboton) {
//    txtNume1.value += numboton;
/*}*/
function Escribir(numBoton) {
    if (!segundoTexto) {
        txtNume1.value += numBoton;
    }
    if (segundoTexto) {
        txtNume2.value += numBoton;
    }


}

function operacion() {
    if (operador == "+") {
        alert("el resultado es = " + (Number(txtNume1.value) + Number(txtNume2.value)));

    }
    if (operador == "-") {
        alert("el resultado es = " + (Number(txtNume1.value) - Number(txtNume2.value)));
    }

    if (operador == "*") {
        alert("el resultado es = " + (Number(txtNume1.value) * Number(txtNume2.value)));
    }

    if (operador == "/") {
        alert("el resultado es = " + (Number(txtNume1.value) / Number(txtNume2.value)));
    }
}
function borrar() {
    txtNume1.value = "";
    txtNume2.value = "";
    segundoTexto = false;
    operador = "";


}
function operacion() {
    switch (operador) {
        case "+":
            alert("el resuldado es = " + (Number(txtNume1.value) + Number(txtNume2.value)));
            break;
        case "-": 0
            alert("el resuldado es = " + (Number(txtNume1.value) - Number(txtNume2.value)));
            break;
        case "*":
            alert("el resuldado es = " + (Number(txtNume1.value) * Number(txtNume2.value)));
            break;
        case "/":
            alert("el resuldado es = " + (Number(txtNume1.value) / Number(txtNume2.value)));
            break;
    }
}
