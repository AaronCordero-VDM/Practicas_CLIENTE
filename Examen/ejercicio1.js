window.onload = pedirDatos;


let cadena = "";
//Comprobamos la longitud de la cadena
function comprobarLong(palabra){
    //Si la longitud es mayor que 5
    if(palabra.length <= 4){
        //
        alert("Error: Por favor ingrese mas de 4 caracteres")
        palabra = prompt("Introduce una palabra");
        comprobarLong(palabra);
    }else{
        cadena = cadena.concat(palabra.trim());
        console.log(cadena)
    }
}
//Pediremos al usuario que nos inserte cuantro cadenas de caracteres
function pedirDatos(){
    //declaramos las 4 cadenas
    let palabra1 = "";
    let palabra2 = "";
    let palabra3 = "";
    let palabra4 = "";
    
    //Solicitamos las cadenas al usuario por un prompt y las comprobamos
    palabra1 = prompt("Introduce una palabra");
    comprobarLong(palabra1);
    palabra2 = prompt("Introduce una palabra");
    comprobarLong(palabra2);
    palabra3 = prompt("Introduce una palabra");
    comprobarLong(palabra3);
    palabra4 = prompt("Introduce una palabra");
    comprobarLong(palabra4);
}