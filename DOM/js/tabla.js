let cuerpo;
let nuevaTabla;
let fila;
let celda;
let nColumnas;
let nFilas

function crearTabla() {

    cuerpo = document.getElementsByTagName("body")[0];

    nFilas = document.getElementById("filas").value;



    nuevaTabla = document.createElement("table");
    const cuerpoTabla = document.createElement("tBody");


    for (nFilas; nFilas > 0; nFilas--) {
        fila = document.createElement("tr");
        nColumnas = document.getElementById("columnas").value;
        for (nColumnas; nColumnas > 0; nColumnas--) {
            celda = document.createElement("td");
            celda.innerHTML = "a";
            if (document.getElementById("borde").checked){
                celda.setAttribute("style", "border 1px #"+document.getElementById("color"));
            }
            celda.setAttribute("id", "celda")
            fila.appendChild(celda);
        }
        cuerpoTabla.appendChild(fila);
    }
    nuevaTabla.appendChild(cuerpoTabla);
    cuerpo.appendChild(nuevaTabla);

}
