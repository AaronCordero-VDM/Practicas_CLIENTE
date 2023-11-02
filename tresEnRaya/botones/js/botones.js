// tablero -> Array
// turno -> int
// numero de fichas -> int

let juego = {
    tablero: ["","","","","","","","",""],
    turno:1,
    numFich:0,
    partidaFinalizada: false,
}

function jugar(bot,pos){
    juego.numFich ++;
    if (juego.turno == 1){
        bot.innerHTML = "X";
        juego.tablero[pos] = "X"
    }else{
        bot.innerHTML = "O";
        juego.tablero[pos] = "O"
    }
    bot.disabled = true;

    if(juego.numFich>=5){
        if(hayGanador()){
            document.getElementById("salida").innerHTML = "Ha ganado el jugador "+juego.turno
            juego.partidaFinalizada = true;
        }else if(juego.numFich == 9){
            document.getElementById("salida").innerHTML = "EMPATE"
            juego.partidaFinalizada = true;
        }
    }

    if(!juego.partidaFinalizada){
        if (juego.turno == 1){
            juego.turno = 2;
        }else{
            juego.turno = 1;
        }
    }
}

function hayGanador(){
    if(    (juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[1] && juego.tablero[1]==juego.tablero[2])
        || (juego.tablero[3]!= "" && juego.tablero[3]==juego.tablero[4] && juego.tablero[4]==juego.tablero[5])
        || (juego.tablero[6]!= "" && juego.tablero[6]==juego.tablero[7] && juego.tablero[7]==juego.tablero[8])
        || (juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[3] && juego.tablero[3]==juego.tablero[6])
        || (juego.tablero[1]!= "" && juego.tablero[1]==juego.tablero[4] && juego.tablero[4]==juego.tablero[7])
        || (juego.tablero[2]!= "" && juego.tablero[2]==juego.tablero[5] && juego.tablero[5]==juego.tablero[8])
        || (juego.tablero[2]!= "" && juego.tablero[2]==juego.tablero[4] && juego.tablero[4]==juego.tablero[6])
        || (juego.tablero[0]!= "" && juego.tablero[0]==juego.tablero[4] && juego.tablero[4]==juego.tablero[8]))
        return true;    
}

function reiniciar(){
    juego.tablero = ["","","","","","","","",""];
    juego.turno = 1;
    juego.numFich = 0;
    document.getElementById("salida").innerHTML = ""
    document.querySelectorAll(".boton").forEach(b => {
        juego.partidaFinalizada = false;
        b.innerHTML = "";
        b.disabled = false;
    })
}