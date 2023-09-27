function calculaIMC(){

    // Leeer los datos del formulario
    let n1 = Number(document.getElementById("peso").value); // Obtenemos el valor del primer numero con id="num1"
    let n2 = Number(document.getElementById("altura").value); // Obtenemos el valor del segundo numero con id="num2"

    res = (n1 / (n2 * n2));
    res = res.toFixed(2);

    document.getElementById("IMC").innerHTML = res + "kg/cm^2";
}