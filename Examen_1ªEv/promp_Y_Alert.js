
function mostrarNombre(){
    let nombre = prompt("Introduce tu nombre");
    if(nombre != null && nombre != ""){
        console.log(nombre);
        document.getElementById("salida").innerHTML = "Tu nombre es: "+nombre;
        alert("nombre");
    }else{
        alert("Error el nombre no es valido");
    }
}