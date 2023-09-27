// No usar Var a no ser que el navegador sea antiguo
var y = 1;

// Asignacion del valor a una variable, se puede cambiar el valor
let x = 1;

// Asignacion de un array alores constantes, no se puede cambiar el valor
const cars = ["Saab", "Volvo", "BMW"];

    cars = ["Audi", "Mercedes", "Ferrari"]; // Da error ya que no se puede cambiar el valor de un const


    // Crear un objeto constante
    const car = {type:"Fiat", model:"500", color:"white"};

    // Puedes cambiar las propiedades del objeto, pero no los prototipos
    car.color = "red";

    // Tambien se pueden añadir propiedades nuevas pero no se podran cambiar solo el valor de la propiedad
    car.owner = "Johnson";

/*
    TIPOS DE COMPARACION

        ==	equal to
        ===	equal value and equal type
        !=	not equal
        !==	not equal value or not equal type
        >	greater than
        <	less than
        >=	greater than or equal to
        <=	less than or equal to
        ?	ternary operator

    
    TIPOS DE OPERADORES 

        &&	logical and
        ||	logical or
        !	logical not
*/


function myFuncion() {
    let x = 2;
    var y = 3;

    if (x) {
        x = 3;
        /*
        En este caso estamos cambiando el valor de la variable "x" del bloque de la funcion
        ya que las variables son locales dentro de cada bloque, por lo que esta "x" es del 
        bloque de la funcion no del codigo entero


        What is Good?

            let and const have block scope.

            let and const can not be redeclared.

            let and const must be declared before use.

            let and const does not bind to this.

            let and const are not hoisted.

        What is Not Good?
            var does not have to be declared.

            var is hoisted.

            var binds to this.
        */
    }
}
