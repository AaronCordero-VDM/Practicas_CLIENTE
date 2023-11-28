//Funcion para comprobar si los numero son positivos
function sonPositivos(numeros) {
    //variable booleana para saber si son positivos
    let positivos = true;
    //Condicion de que el array tenga contenido
    if ((numeros.length) != 0) {
        //Si teiene contenido lo recorremos con un for of
        
        for (num of numeros) {
            //Si el numero es de tipo number comprobaremos si es mayor que 0
            console.log(num)
            if (Number.isInteger(num)){
                //Comprobacion de positividad
                if (num < 0) {
                    //Si es positivo decimos que positivos = false por lo que la funcion devolvera false
                    positivos = false;
                }
            }else{
                //Si los valores no son numeros devolvemos false
                positivos = false;
            }
        }
    }
    //si ningun numero es negativo o 
    return positivos;
}

let resultado = sonPositivos([2,5,5,4]);
console.log(resultado);

resultado = sonPositivos([-2,5,5,4]);
console.log(resultado);