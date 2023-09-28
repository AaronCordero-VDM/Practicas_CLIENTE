function calculaIMC() {

    // Leeer los datos del formulario
    let n1 = Number(document.getElementById("peso").value); // Obtenemos el valor del primer numero con id="num1"
    let n2 = Number(document.getElementById("altura").value); // Obtenemos el valor del segundo numero con id="num2"

    //Calculamos el resultado del IMC con los dos datos aportados por el cliente
    res = (n1 / (n2 * n2));

    //redondeamos el resultado a 2 decimales
    res = res.toFixed(2);

    //Incrustamos la solucion al HTML 
    document.getElementById("IMC").innerHTML = res + "kg/m^2";

    //Comparamos el resultado con los valores estipulados y proponemos una respuesta para cada uno
    if (res < 18.5) {
        alert("Estas demasiado delgado!! A comer");
    } else if (18, 5 <= res && res < 25) {
        alert("Enhorabuena!! Estas en tu peso");
    } else if (25 <= res && res < 30) {
        alert("Cuidado!! Tienes sobrepeso");
    } else if (res >= 30){ 
        alert("Ponte las pilas que te mueres");
    } else if (0 < res ){
        alert("No has introducido los campos")
    }


}