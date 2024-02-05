let canvas = document.getElementById("tablero");
let contexto = canvas.getContext("2d");

contexto.fillStyle = "white";
contexto.fillRect(0, 0, canvas.width, canvas.height);


let puntos = 0
let coordx = 275;
let coordy = 275;
let lado = 20;
let direccion = null;
let velocidad = 3;
let comidaX = Math.random() * 500
let comidaY = Math.random() * 500

let cabeza = {
    x: coordx,
    y: coordy
}
let snake = []
snake.unshift(cabeza);

contexto.fillStyle="green";
contexto.fillRect(coordx,coordy,lado,lado);

contexto.fillStyle = "red";
contexto.fillRect(comidaX, comidaY, lado, lado);

let temporizador = setInterval(redibuja, 1000 / 60);

function redibuja() {

    coordx = snake[0].x;
    coordy = snake[0].y;
    
    contexto.fillStyle = "white";
    for (let trozo of snake) {
        contexto.fillRect(trozo.x, trozo.y, lado, lado);
    }
    snake.pop()

    switch (direccion) {
        case "N":
            coordy -= velocidad
            break;
        case "S":
            coordy += velocidad
            break;
        case "O":
            coordx += velocidad
            break;
        case "E":
            coordx -= velocidad
            break;
    }

    let cabezaNueva = {
        x:coordx,
        y:coordy
    }
    snake.unshift(cabezaNueva);

    contexto.fillStyle = "green";
    for (let trozo of snake) {
        contexto.fillRect(trozo.x, trozo.y, lado, lado);
    }

    //Comprobar si choca
    if (coordx > 530 || coordx < 0 || coordy > 530 || coordy < 0) {
        clearInterval(temporizador)
        document.getElementById("salida").innerHTML = "PERDISTE"
    }

    //Comprobar si come
    //comprobar si comio
    if (coordx > comidaX && coordx < (comidaX + lado) && coordy > comidaY && coordy < (comidaY + lado)) {
        comido();
    } else if ((coordx + lado) > comidaX && (coordx + lado) < (comidaX + lado) && coordy > comidaY && coordy < (comidaY + lado)) {
        comido();
    } else if ((coordx + lado) > comidaX && (coordx + lado) < (comidaX + lado) && coordy + lado > comidaY && coordy + lado < (comidaY + lado)) {
        comido();
    } else if ((coordx) > comidaX && coordx < (comidaX + lado) && coordy + lado > comidaY && coordy + lado < (comidaY + lado)) {
        comido();
    }


}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            direccion = "N";
            break;
        case "s":
            direccion = "S";
            break;
        case "d":
            direccion = "O";
            break;
        case "a":
            direccion = "E";
            break;
    }
})

function comido() {
    contexto.fillStyle = "white";
    contexto.fillRect(comidaX - 0.5, comidaY - 0.5, lado + 1, lado + 1);

    comidaX = Math.random() * 500
    comidaY = Math.random() * 500

    contexto.fillStyle = "red";
    contexto.fillRect(comidaX, comidaY, lado, lado);

    puntos = puntos + 10;
    if (puntos >= 30) {
        velocidad = (puntos / 10)
    }
    document.getElementById("puntos").innerHTML = puntos;

    let cuerpoNuevo = {
        x: 0,
        y: 0
    }
    snake.push(cuerpoNuevo)
}

document.addEventListener("keydown", function (event) {
    if(key.event="Space"){ 
        location.reload()
    }
})

function reiniciar() {
    location.reload()
}