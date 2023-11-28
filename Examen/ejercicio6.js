//funcion qu evalida el email
function validarEmail() {
    //crear el objeto para conectar al servidor (get)
    const httprq = new XMLHttpRequest();
    
   //Guardamos la salida y el email del html
    let salida = document.getElementById("resultado")
    let email = document.getElementById("email").value;
    /*---------------------------
    Registramos la funcion que trata la 
    respuesta del servidor
    */
    httprq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {   //Si la respuesta es correcta
            let resultado = JSON.parse(this.responseText);
            //Si la peticion devuelve true, el formato sera valido
            if(resultado){
                salida.innerHTML = "El formato es valido"
            //Si la peticion devuelve false, el formato no sera valido
            }else{
                salida.innerHTML = "Error: el formato no es valido"
            }
            //Convertir datos de texto a formato JS con el JSON.parse
        } else {
            console.log("Error de estado");
        }
        
    }
    //guardamos el valor del email introducido por el usuario
    
    //Peticion al servidor: 
    httprq.open("GET", "/daw/CLIENTE/Examen/validar_email.py?email="+email, true);
    //Ejecutamos la peticion
    httprq.send();
}