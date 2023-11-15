//Contador que me permite saber cuantos <li> hay en el <ul>
let contadorLista = 0;

//Contador que me permite iterar por los tamaños de la fuente
let contadorFuente = 0;

//Boolean que me permite saber si el elemento está oculto o no
let oculto = false;

function addTexto() { //Añade texto al div miDiv
    //Obtiente el valor del input en el html
    let entradaTexto = document.getElementById("entradaTexto").value;
    //Mete el elemento con id "miDiv" en la variable
    let miDiv = document.getElementById("miDiv");

    //Crea un elemento <p> lo mete en una variable
    let parrafo = document.createElement("p");
    //Mete el valor de la variable en el <p>
    parrafo.innerHTML = entradaTexto;

    //Mete el elemento <p> en el elemento con id "miDiv"
    miDiv.appendChild(parrafo);

}

function addLista() { //Crea <li> con el texto "Elemento de la lista <numero>"
    //Cada vez que se le de al boton aumenta el contador en 1
    contadorLista++;
    //Trae el elemento con id "miLista" y lo mete en una variable
    let miLista = document.getElementById("miLista");

    //Crea un elemento <li> y lo mete en una variable
    let li = document.createElement("li");
    //Concatena el texto de los <li> con el contador y lo mete a un <li>
    li.innerHTML = `Elemento de la lista ${contadorLista}`;

    //Mete el elemento <li> en el elemento con id "miLista"
    miLista.appendChild(li);
}

function addEnlace() { //Inserta enlaces a w3schools en el elemento con id "miDiv"
    //Guarda la dirección de enlace a w3schools
    const enlacew3 = "https://www.w3schools.com/"
    //Mete el elemento con id "miDiv" en la variable
    let miDiv = document.getElementById("miDiv");
    //Crea elemento <p> y lo mete en una variable
    let parrafo = document.createElement("p");

    //Crea elemento <a> y lo mete en una variable
    let enlace = document.createElement("a");
    //Crea un atributo en <a> que acabamos de crear donde se mete el enlace
    enlace.setAttribute("href", enlacew3);
    //Mete el texto en el <a>
    parrafo.innerHTML = "Visitar w3school";

    //Mete el elemento <p> en el enlace
    enlace.appendChild(parrafo);
    //Mete el elemento <a> en el elemento con id "miLista"
    miDiv.appendChild(enlace);
}

function cambiarColorMiElemento() { //Cambia de color del fondo de un elemento a un color aleatorio
    //Mete el elemento con id "miElemento" en una variable
    let miElemento = document.getElementById("miElemento");

    //Genera un número entre 0 y 255 para el rojo, verde y azul
    let rojo = Math.round(Math.random() * (255 - 0 + 1) + 1);
    let verde = Math.round(Math.random() * (255 - 0 + 1) + 1);
    let azul = Math.round(Math.random() * (255 - 0 + 1) + 1);

    //Pone la combinación de colores en el elemento con id "miElemento"
    miElemento.style.background = `rgb(${rojo}, ${verde}, ${azul})`;
}

function cambiarFuente() { //Itera entre 10-20-30px para el tamaño de letra en un elemente
    //Mete el elemento con id "miTexto" en una variable
    let miTexto = document.getElementById("miTexto");

    //Comprueba el iterador y actúa en consecuencia
    switch (contadorFuente) {
        case 0:
            //Cambia de 10px a 20px
            contadorFuente++;
            miTexto.style.fontSize = `20px`;
            break;
        case 1:
            //Cambia de 20px a 30px
            contadorFuente++;
            miTexto.style.fontSize = `30px`;
            break;
        case 2:
            //Cambia de 30px a 10px
            contadorFuente = 0;
            miTexto.style.fontSize = `10px`;
            break;
    }
}

function ocultarElemento(){ //Oculta o muestra un elemento
    //Mete el elemento con id "elementoOculto" en la variable
    let elementoOculto = document.getElementById("elementoOculto");
    //Comprueba si el elemento esta oculto o no
    //Si lo está lo muestra y si no lo está, lo oculta
    if(oculto){
        elementoOculto.style.opacity = `100%`
        oculto = false;
    } else {
        elementoOculto.style.opacity = `0%`
        oculto = true;
    }
}

function colorTexto(over){ //Cambia el color de un texto cuando se pasa el ratón por encima y cuando sale
    //Definición de los colores a usar
    const blueViolet = "#8a2be2"
    const maroon = "#800000"
    //Mete el elemento con id "textoCambiante" en la variable
    let textoCambiante = document.getElementById("textoCambiante");

    //Si el raton está encima usa blueViolet, de no ser así, se queda en maroon
    if(over){
        textoCambiante.style.color = blueViolet;
    }else{
        textoCambiante.style.color = maroon;
    }
}