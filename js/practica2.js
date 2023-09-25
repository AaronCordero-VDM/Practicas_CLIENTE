//onload = inicio;  //evento para ejecutar el js una vez que carga el html y no antes

let suma = 0;
suma = 2 + 5;
console.log(suma);

function inicio(frase) {
    console.log("esto es una salida por consola de desarrollo");
    console.log(frase);

    document.getElementById("parrafo").innerHTML = 'adios';
};

function nuevaVentana(){
    window.open(document.write(5+1));
    
};