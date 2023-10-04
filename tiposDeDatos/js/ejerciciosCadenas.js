function separarEnLineas() {

    //Varaible apra guardar el texto del imput
    let texto = document.getElementById("texto").value;

    let salida = "";//componer la salia en parafos y una en cada <p>

    for (letra of texto) { //array tipo for-of para recorrer el string
        salida = salida + `<p>${letra}</p>`; //cada letra se crea un elemento <p>
    }
    //Se crean los elementos <p> del DOM dentro del div salida
    document.getElementById("salida1").innerHTML = salida;
}

function contarLetras() {

    //Varaible apra guardar el texto del imput
    let texto = document.getElementById("texto").value;

    let contador = 0;

    for (letra of texto.toUpperCase()) {
        if ((letra >= "A") && (letra <= "Z")) {
            contador++;
        }
    }

    document.getElementById("salida1").innerHTML = `<p>${contador}</p>`;
}

function darVuelta() {
    //Varaible apra guardar el texto del imput
    let texto = document.getElementById("texto").value;

    let inverso = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        inverso += texto[i];
    }

    /*for (letra of texto){
        inverso = letra + inverso;
    }
    */
    document.getElementById("salida1").innerHTML = inverso;
}

function buscarPalabra() {

    //Varaible apra guardar el texto del imput y la palabra
    let texto = document.getElementById("texto").value;
    let palabra = document.getElementById("palabra").value;

    //funcion para buscar la palabra dentro del texto
    buscarP(texto, palabra);

    //variable con el elemento p de salida
    let salida = "La palabra no existe";

    if (buscarP(texto, palabra)) {
        salida = "La palabra existe";
    }

    document.getElementById("salida1").innerHTML = salida;
}

function buscarP(t, p) {

    //variable que contenga el resultado de la palabra
    let res = false;

    //condicional para saber si esta la palabara dentro del texto, -1 si no esta
    if ((t.indexOf(p) != -1)) {
        res = true;
    }

    return res;
}

function buscarLetra() {
    //Varaible apra guardar el texto del imput y la palabra
    let texto = document.getElementById("texto").value;
    let letra = document.getElementById("letra").value;

    let contador = 0;
    if (letra.length == 1) {
        for (l of texto) {
            if (l == letra) {
                contador++;
            }
        }
        document.getElementById("salida1").innerHTML = contador;
    }else{
        document.getElementById("salida1").innerHTML = `${letra} no es valido`;
    }
}

function buscarVocales(){
    
    //Varaible apra guardar el texto del imput y la palabra
    let texto = document.getElementById("texto").value;

    let a = 0
    let e = 0
    let i = 0
    let o = 0
    let u = 0

    for (l of texto.toUpperCase()) {
        if (l == "A") {
            a++
        }
        else if (l == "E"){
            e++
        }
        else if (l == "I") {
            i++
        }
        else if (l == "O") {
            o++
        }
        else if (l == "U") {
            u++
        }
    }

    document.getElementById("salida1").innerHTML = `Hay \n ${a} "A", ${e} "E", ${i} "I", ${o} "O", ${a} "U"`;

}

function dividirPalabras(){

    //Varaible apra guardar el texto del imput y la palabra
    let texto = document.getElementById("texto").value;
    let salida = "";
    let dividido = dividir(texto);
    for (p of dividido){
        salida = salida + `<p>${p}</p>`; //cada letra se crea un elemento <p>
    }
    document.getElementById("salida1").innerHTML = salida;
}

function darVueltaPalabras(){

    //Varaible apra guardar el texto del imput y la palabra
    let texto = document.getElementById("texto").value;
    //Dividimos las palabras por los espacios
    let dividido = dividir(texto);
    let inverso = "";
    for (p of dividido){
        inverso = p + " " + inverso;

    }
    document.getElementById("salida1").innerHTML = inverso;
}

function dividir(texto){
    return texto.split(" ");
}