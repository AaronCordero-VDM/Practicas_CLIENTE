onload = crearTabla;

let cuerpo;

function crearTabla() {
    cuerpo = document.getElementsByTagName("body");

    let tabla = "<table id='tablaCreada'><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr></table>";

    cuerpo[0].innerHTML = tabla;

    let tablaC = document.getElementById("tablaCreada");

    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    celda1.innerHTML="7";
    celda2.innerHTML="8";
    celda3.innerHTML="9";

    fila.appendChild(celda1)
    fila.appendChild(celda2)
    fila.appendChild(celda3)

    tablaC.appendChild(fila)
}