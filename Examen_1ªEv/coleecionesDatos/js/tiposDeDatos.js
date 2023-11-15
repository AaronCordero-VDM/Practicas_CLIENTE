function trataDato( a, b) {
    let dato = document.getElementById("dato").value;

    let suma = a + b;
    
    document.getElementById("salida").innerHTML = suma;


    //----------------------------------------------------------------------------------

    /*
    El tipo numero acoge todos los numero sean enteros o decimales, y con la funcion Number()
    podemos convertir el tipo de dato a numero
    
    hacer un dato tipo numero:
    let datoNum = Number(document.getElementById("dato").value);
    document.getElementById("salida").innerHTML = typeof datoNum;
    */
    let datoNum = Number(dato);

    /*
    Las variables indefinidas son variables las cuales no tienen tipo, no
    apuntan a ningun lado
    */
    let datoIndefinido;

    /*
    variables nulas, objeto que no contiene nada
    */
    let datoNull = null;

    /*
    Dato objet puede contener tres tipos de datos, {Un objeto, un array o uns fecha}
    pero seguira siendo tipo objeto aunque tenga un array
    */
    let datoObjet;

    //Con javascipt los tipos de variable son dinamicos
    let x;       // Ahora x es indefinida
    x = 5;       // Ahora x es un numero
    x = "John";  // Ahora x es un string

    //Exponenciales
    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123

    /*
    Los objetos
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    */

}