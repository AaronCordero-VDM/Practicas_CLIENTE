//CARGAMOS LA PALABRA ANTES DE EMPEZAR
onload = ocultarPalabra;

//DECLARAMOS LAS VARIABLE NECESARIAS
let letra;
let palabras = ["CAMION", "LUZ", "PANTALLA", "CONEJO"]; //Array de palabras
let palabraAlt = palabras[Math.floor(Math.random() * 4)]; //Palabra aleatoria del array
let contadorVidas = 6; //Contador para las vidas
let palabraOculta = []; //Variable para guardar la palabra aleatoria en forma de "_"

//CREAMOS LA FUNCION PARA COMPARAR LA LETRA SELECCIONADA CON LA PALABRA EN SI
function comparar(letra) {

    let boton = document.getElementById(letra);  //Guardo el boton clickado en una variable

    if (contadorVidas >= 0) { //Si tienes vidas compararemos la letra
        if (palabraAlt.match(letra)) { //Si la letra esta en la palabra
            boton.disabled = true; //Desabilita el boton seleccionado
            boton.style.color = "white";
            boton.style.background = "green";
            mostrarLetra(letra); //Llamo al metodo para mostrar la letra en la palabra oculta
            victoria(); //Compruebo si ya ha ganado o le quedan mas letras por adivinar
        } else { //Si no esta la letra en la palabra
            boton.disabled = true; 
            boton.style.color = "white";
            boton.style.background = "red";
            contadorVidas--; //Quitamos una vida 
            seleccionarIMG(); //Llamo al metodo para cambiar la imagen del ahoracado
            derrota(); //Compruebo si ya ha perdido
        }
    }
}

function mostrarLetra(letra) { //Metodo para mostar las letras
    for (let i = 0; i < palabraAlt.length; i++) { //Bucle para recorrer la palabra
        if (palabraAlt[i] == letra) { //Si la letra coincide con la letra en la posicion de la palabra
            palabraOculta[i] = letra; //cambio la "_" por la letra
        }
    }
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" "); //Mostramos como quedaria la palabra oculta
}

function ocultarPalabra() { //Metodo para ocultar palabra
    for (let i = 0; i < palabraAlt.length; i++) { //Bucle para recorrer la palabra
        palabraOculta[i] = "_" //Por cada caracter en la palabra introduzco una posicion en el array de palabra oculta
    }
    document.getElementById("palabraOculta").innerHTML = palabraOculta.join(" "); //Muestro la palabra oculta
}

function desactivarBotones(){ //Metodo para desactivar los botones
    let botones = document.querySelectorAll(".boton");
    botones.forEach(b => {
        b.disabled = true;
    })
   /* for(b of document.getElementsByClassName("boton")){
        b.disabled = true;
    }
    */
}

function victoria(){ //Metodo para comprobar victoria
    if(!palabraOculta.includes("_")){ //Si la palabra no incluye "_"
        desactivarBotones(); //Desactivamos todos los botones
        document.getElementById("final").innerHTML += " OLE OLE HAS GANDO" //Mensaje de victoria
    }
}

function derrota(){ //Metodo para comprobar derrota
    if (contadorVidas < 1) { //Si tienes menos de 1 vida
        desactivarBotones(); //desactivamos los botones
        document.getElementById("final").innerHTML += "\nOH OH TE HAS QUEDADO SIN VIDAS!" //Mensaje de derrota
    }
}

function seleccionarIMG(){ //Metodo para cambiar imagen
    document.getElementById("imagen").src = "img/ahorcado"+contadorVidas+".jpg"; //Cambiamos el atributo "src" de
    // la imagen con una nueva ruta
}

function nuevoJuego(){ //Metodo de nuevo juego del onClick()
    location.reload(); //Recargamos la pagina
}