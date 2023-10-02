function cadenaCaract() {

    //guardamos el valor de la cadena de caracteres introducida por el usuario
    let nombre = document.getElementById("texto").value;

    console.log(nombre);
    //longitud de una cadena de texto
    console.log(nombre.length)
    document.getElementById("salida").innerHTML = nombre;

    //el slice coge solo los valores deseados caracter a caracter
    document.getElementById("salida").innerHTML = nombre.slice(3, 7);

    //El substring convierte los negativos en 0
    document.getElementById("salida").innerHTML = nombre.substring(-3, 7);

    //El substr es una posicion inicial y una longitud (pos,long)
    document.getElementById("salida").innerHTML = nombre.substr(3, 7);

    //EL replace sustituye el primer caracter por otros (crctr,sust)
    document.getElementById("salida").innerHTML = nombre.replace("ABC", "XY");

    //El replaceall sutituye todos los caracteres que se encuentren por los deseados 
    document.getElementById("salida").innerHTML = nombre.replaceAll("ABC", "XY");

    //Concatena texto
    document.getElementById("salida").innerHTML = nombre.concat("caca");

    //EL trim quita todos los espacios en blanco que rodean el string
    // let nombre = document.getElementById("nombre").value.trim();
    document.getElementById("salida").innerHTML = nombre.trim();

    //Completa por el inicio la cadena hasta el numero indicado con el caracter inidcado (num,crctr)
    document.getElementById("salida").innerHTML = nombre.padStart(51, "-");

    //Completa por el final la cadena hasta el numero indicado con el caracter inidcado (num,crctr)
    document.getElementById("salida").innerHTML = nombre.padEnd(51, "-");

    //Coge el caracter deseado de la cadena
    //si vas a una posicion que no existe, da una cadena vacia ""
    document.getElementById("salida").innerHTML = nombre.charAt(3);

    //Coge el caracter deseado de la cadena
    //si vas a una posicion que no existe resultado es "undefined"
    document.getElementById("salida").innerHTML = nombre[2];

    //Divide la cadena de caracteres en arrays
    document.getElementById("salida").innerHTML = nombre.split(",");
    console.log(nombre.split(","));

    //Te da la posicion de la cadena a buscar, te permite empezar a buscar a partir de una posicion
    document.getElementById("salida").innerHTML = nombre.indexOf("ads", 3);
    //Te da la posicion de la cadena a buscar pero puedes utilizar expreisones regulares (/cadena/), siempre desde el principio
    //para buscar con mayus o minus
    document.getElementById("salida").innerHTML = nombre.search(/asdas/);

    //Busca una cadena de caracteres con el g, es en global, el gi es en globlal sin importar las mayus
    document.getElementById("salida").innerHTML = nombre.match(/da/g);

    //interpolacion de variables
    let firstName = "John";
    let lastName = "Doe";
    let text = `Welcome ${firstName}, ${lastName}!`;
    document.getElementById("demo").innerHTML = text;
}