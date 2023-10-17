//CARGAMOS LA PALABRA ANTES DE EMPEZAR
onload = ocultarPalabra;

//DECLARAMOS LAS VARIABLE NECESARIAS
let letra;
let palabras = ["CAMION", "LUZ", "PANTALLA", "CONEJO"];
let palabraAlt = palabras[Math.floor(Math.random() * 4)];
let contadorVidas = 6;
let palabraOculta = [];

//CREAMOS LA FUNCION PARA COMPARAR LA LETRA SELECCIONADA CON LA PALABRA EN SI
function comparar(letra) {
    let boton = document.getElementById(letra);
    if (contadorVidas >= 0) {
        if (palabraAlt.match(letra)) {
            boton.disabled = true;
            boton.style.color = "white";
            boton.style.background = "green";
            mostrarLetra(letra);
            console.log(palabraOculta);
            victoria();
        } else {
            boton.disabled = true;
            boton.style.color = "white";
            boton.style.background = "red";
            contadorVidas--;
            derrota();
            seleccionarIMG();
        }
    }
}

function mostrarLetra(letra) {
    for (let i = 0; i < palabraAlt.length; i++) {
        if (palabraAlt[i] == letra) {
            palabraOculta[i] = letra;
        }
    }
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");
}

function ocultarPalabra() {
    for (let i = 0; i < palabraAlt.length; i++) {
        palabraOculta[i] = "_"
    }
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" ");
}

function desactivarBotones(){
    let botones = document.querySelectorAll(".boton");
    botones.forEach(b => {
        b.disabled = true;
    })
}

function victoria(){
    if(!palabraOculta.includes("_")){
        desactivarBotones();
        document.getElementById("palabraOculta").innerHTML += " OLE OLE HAS GANDO"
    }
}

function derrota(){
    if (contadorVidas < 1) {
        desactivarBotones();
        document.getElementById("palabraOculta").innerHTML += " OH OH TE HAS QUEDADO SIN VIDAS!"
    }
}

function seleccionarIMG(){
    document.getElementById("imagen").src = "img/ahorcado"+contadorVidas;
}