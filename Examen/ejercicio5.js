//Funcion para el evento onClick, al cual le pasamos el parametro de la fila en la que estamos, es decir el ID
function cambiarEstiloBorde(fila){
    //bucle para recorrer todas las filas     
    for (let cont = 1; cont <=3;cont ++){
        //guardamos en una variable la fila en la que estamos
        let f = document.getElementById("fila"+cont)
        //cambiamos el borde a todas las filas
        f.style.border = "1px solid grey";
    }
    //Para la fila seleccionada que le pasamos del id, le cambiamos el borde
    let filaSel = document.getElementById(fila);
    filaSel.style.border = "3px solid red";
}