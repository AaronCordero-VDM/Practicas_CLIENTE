alert("Esta es mi primera pagina");
var nombre;
nombre = prompt("Tu nombre:");
function ponerNombre() {
document.getElementById("nombre").innerHTML = "Hola <p>Tu nombre es: "+nombre+"</p>";
}
ponerNombre();
console.log("hola");