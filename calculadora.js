var cantidad = "";
var sumatoria = 0;

var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;

var porcentajes = false;
var raiz = false;

var potenciar = false;


function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
}

function multiplicacion() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
}

function division() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
}

function porcentaje() {
    sumatoria = parseInt(cantidad) / (100);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentajes = true;

}

function borrar() {
    document.getElementById("display").value = "";
    cantidad = "";
}


function raizc() {

    raiz = Math.sqrt(cantidad);

    sumatoria = sumatoria + parseInt(cantidad) * (10);
    document.getElementById("display").value = raiz;
    cantidad = "";

}


function potencia() {
    sumatoria = parseInt(cantidad) * cantidad;
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    potenciar = true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad);
    }
    if (multiplicar) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);
    }
    if (dividir) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);
    }
    if (porcentajes) {
        document.getElementById("display").value = sumatoria % parseInt(cantidad);

    } else if (potenciar == true) {
        document.getElementById("display").value = sumatoria ** parseInt(cantidad);

    }

}