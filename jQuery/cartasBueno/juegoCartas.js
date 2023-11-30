const cartas = [
    carta1 = {
        valor: 1,
        acertado: false,
        carta: 1
    },
    carta2 = {
        valor: 2,
        acertado: false,
        carta: 2
    },
    carta3 = {
        valor: 3,
        acertado: false,
        carta: 3
    },
    carta4 = {
        valor: 1,
        acertado: false,
        carta: 4
    },
    carta5 = {
        valor: 2,
        acertado: false,
        carta: 5
    },
    carta6 = {
        valor: 3,
        acertado: false,
        carta: 6
    },
];

let turno = true;
let jugada1 = "";
let jugada2 = "";
let numCar1 = "";
let numCar2 = "";

cartas.sort(() => Math.random() - 0.5);
console.log(cartas);

for (let i = 0; i < cartas.length; i++) {
    let tarjeta = $("<button>");
    tarjeta.attr("class", cartas[i].valor);
    tarjeta.attr("class", cartas[i].carta);
    tarjeta.text(cartas[i].valor);
    tarjeta.addClass("estiloTarjeta tarjeta");
    $(".grid-container").append(tarjeta);
}

$(".tarjeta").click(comprobarCoincidencia)

function comprobarCoincidencia() {
    if (turno) {
        let selec1 = cartas[(($(this).attr("class")).slice(0, 1) - 1)]
        numCar1 = ($(this).attr("class")).slice(0, 1)
        if (!(selec1.acertado)) {
            $(this).css("background", "white")
            jugada1 = selec1.valor
        };
        turno = false
    }
    else{
        let selec2 = cartas[(($(this).attr("class")).slice(0, 1) - 1)]
        numCar2 = ($(this).attr("class")).slice(0, 1)
        if (!(selec2.acertado)) {
            $(this).css("background", "white")
            jugada2 = selec2.valor
            if(jugada1 == jugada2){
                
            }
            else{
                cartas[numCar1].css("background","blueviolet");
                cartas[numCar2].css("background","blueviolet");
            }
        };
    }
}
