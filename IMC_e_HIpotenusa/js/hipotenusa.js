function calculaHipo(){

    // Leeer los datos del formulario
    let n1 = Number(document.getElementById("cat1").value); // Obtenemos el valor del primer numero con id="num1"
    let n2 = Number(document.getElementById("cat2").value); // Obtenemos el valor del segundo numero con id="num2"

    res = Math.sqrt((n1*n1) + (n2*n2));
    res = res.toFixed(3);

    document.getElementById("hipotenusa").innerHTML = res + "cm";
}