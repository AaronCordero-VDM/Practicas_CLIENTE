//funcion que se llamra al intentar enviar el formulario
function validaNumeros(){
    //Guardamos los valores de ambos numeros del formulario mediante el document.getElementById()
    num1 = document.getElementById("numero1");
    num2 = document.getElementById("numero2");
    //Validamos que el numero1 sea menor que el numero2, si no devuelve false
    if (num2 < num1){
       alert("Error: "+num1+" debe ser menor o igual que "+num2);
       return false;
    }
    //validamos que ambos numeros sean integer, si no devolvemos false
    else if(Number.isInteger(num1) && Number.isInteger(num2)){
        alert("Error: inroduce un numero entero valido");
        return false;
    }
    //Si los paramatros son validos devolvemos true
    return true;
}