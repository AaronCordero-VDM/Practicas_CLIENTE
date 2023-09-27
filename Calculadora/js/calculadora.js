function calcula(){
    console.log("Funciona")

    // Leeer los datos del formulario
    let n1 = Number(document.getElementById("num1").value); // Obtenemos el valor del primer numero con id="num1"
    let n2 = Number(document.getElementById("num2").value); // Obtenemos el valor del segundo numero con id="num2"


    // Leer la operacion que quereos hacer
    let suma = document.getElementById("suma").checked;
    let resta = document.getElementById("resta").checked;
    let multi = document.getElementById("multi").checked;
    let div = document.getElementById("div").checked;


    if (suma){
        resultado = (n1 + n2);
        oper = "+"
    }
    if (resta){
        resultado = (n1 - n2);
        oper = "-"
    }
    if (multi){
        resultado = (n1 * n2);
        oper = "*"
    }
    if (div){
        resultado = (n1 / n2);
        oper = "/"
    }

    
    document.getElementById("numero1").innerHTML = num1.value
    document.getElementById("signo").innerHTML = oper
    document.getElementById("numero2").innerHTML = num2.value
    document.getElementById("salida").innerHTML = resultado

    
    

    // Realizar la operacion


    // Mostrar el resultado
}