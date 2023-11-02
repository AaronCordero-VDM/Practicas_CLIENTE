onload = inicio;
let contexto; 
let canvas;
let ancho;
let largo;
let jugador = 1;
let posX;
let posY;
let partidaAcabada = false;
let contJugadas = 0;
let juego = {
    board:[
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ]
};
const centros = [100,300,500];


function inicio(argument){
    canvas = document.getElementById("miCanvas");
    contexto = canvas.getContext("2d");
    
    ancho = canvas.width;
    largo = canvas.height;
    pintaTablero();
    canvas.addEventListener("click",function(event) {jugada(event)});
}

function pintaTablero(){
    contexto.fillStyle = "gray";
    contexto.fillRect(0,0,ancho,largo);

    let color = "white";
    for (let xCentro of centros){
        for(let yCentro of centros){
            pintarCirulo(xCentro, yCentro,color);
        }
    }
}
function pintarCirulo(xCentro, yCentro,color){
    contexto.beginPath();
    contexto.fillStyle =color;
    contexto.arc(xCentro,yCentro, 90, 0, 2 * Math.PI);
    contexto.closePath();
    contexto.fill();
}

function jugada(evento){
    if(partidaAcabada){
        return;
    }

    let x =  evento.clientX - canvas.getBoundingClientRect().left; //Obtiene la cordenada X donde pulso el jugador
    let y =  evento.clientY - canvas.getBoundingClientRect().top; //Obtiene la cordenada Y donde pulso el jugador
    console.log(x+" - "+y);
    posX = x/100;
    posY = y/100;
    console.log(juego.board)

    if (posX <= 2){
        posX = 0;
    }else if(2<posX && posX <=4){
        posX = 1;
    }else if(4<posX && posX<=6){
        posX = 2;
    }

    if (posY <= 2){
        posY = 0;
    }else if(2<posY && posY <=4){
        posY = 1;
    }else if(4<posY && posY<=6){
        posY = 2;
    }
    verTurno();
    
}
function verTurno(){
    if(juego.board[posY][posX] == 0)
    if (jugador == 1){
        juego.board[posY][posX] = 1;
        color = "red";
        jugador = 2;
        pintarCirulo(centros[posX],centros[posY],color);
        contJugadas++;
        comprobarGanador();
    }else{
        juego.board[posY][posX] = 2;
        color = "green";
        jugador = 1;
        pintarCirulo(centros[posX],centros[posY],color);
        contJugadas++;        
        comprobarGanador();
    }
}

function comprobarGanador(){
    for (let i= 0; i<3;i++){
        if((juego.board[i][0] != 0 && juego.board[i][0] == juego.board[i][1] && juego.board[i][0] == juego.board[i][2] && juego.board[i][2] == 1) ||
          (juego.board[0][i] != 0 && juego.board[0][i] == juego.board[1][i] && juego.board[0][i] == juego.board[2][i] && juego.board[2][i] == 1) ||
          (juego.board[0][0] !== 0 && juego.board[0][0] === juego.board[1][1] && juego.board[0][0] === juego.board[2][2] && juego.board[0][0] ==1) ||
          (juego.board[0][2] !== 0 && juego.board[0][2] === juego.board[1][1] && juego.board[0][2] === juego.board[2][0] && juego.board[0][2] ==1) 
          ) {
            document.getElementById("texto").innerHTML = "Gana el jugador 1";
            partidaAcabada = true;
        }


        if((juego.board[i][0] != 0 && juego.board[i][0] == juego.board[i][1] && juego.board[i][0] == juego.board[i][2] && juego.board[i][2] == 2) ||
        (juego.board[0][i] != 0 && juego.board[0][i] == juego.board[1][i] && juego.board[0][i] == juego.board[2][i] && juego.board[2][i] == 2) ||
        (juego.board[0][0] !== 0 && juego.board[0][0] === juego.board[1][1] && juego.board[0][0] === juego.board[2][2] && juego.board[0][0] ==2) ||
        (juego.board[0][2] !== 0 && juego.board[0][2] === juego.board[1][1] && juego.board[1][1] === juego.board[2][0] && juego.board[0][2] ==2) 
        ){
            document.getElementById("texto").innerHTML = "Gana el jugador 2";
            partidaAcabada = true;
        }
    }
    if(contJugadas>=9){
        partidaAcabada = true;
        document.getElementById("texto").innerHTML = "EMPATE";
    }
}

function reiniciar(){
    location.reload();
}
    


