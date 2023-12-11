$(inicializar)

// Array para crear las tarjetas por parejas
let parejas = ["mono", "fox", "tigre", "mono", "fox", "tigre"];


// funcion main
function inicializar(){
    // barajamos las parejas con el math.random
    parejas.sort(() => Math.random() - 0.5);

    // Vaciamos el tablero en caso de que se recicie el juego
    $("#tablero").empty();
    // Bucle para crear el tablero e incluir las tarjetas
    for (let i = 0; i < parejas.length; i++) {
        let tarjeta = $("<div>");
        tarjeta.addClass("item");
        let imagen = $("<img>")
        imagen.attr("src", "img/"+parejas[i]+".jpg")
        tarjeta.addClass("estiloTarjeta")
        $(tarjeta).append(imagen);
        $(".grid-container").append(tarjeta);
    }

    // Funcion para manejar el click en las tarjetas
    $(".item").click(async function() {
        // añadimos una clase para manejar la tarjeta cuando este clickada
        await $(this).addClass("tarjetaClick");
        // creamos una funcion con un timeout para comprobar el acierto
        setTimeout(async function(){
            // si hay mas de una tarjeta clickada
            if($(".tarjetaClick").length > 1){
                // creanis un array con las tarjetas clickadas
                let $tarjetasClick = $(".tarjetaClick");
                // si ambas tarjetas tiene las mismas imagenes
                if ($tarjetasClick.eq(0).find("img").attr("src") == $tarjetasClick.eq(1).find("img").attr("src")){
                    // Les añadimos la clase match a ambas
                    await $tarjetasClick.eq(0).addClass("match")
                    $tarjetasClick.eq(1).addClass("match")
                    // Y quitamos la clase de que esta clickada
                    $tarjetasClick.removeClass("tarjetaClick");
                    // Si ya hemos acertado todas las parejas
                    if ($(".match").length == parejas.length){
                        $(".salida").html("<p>FIN GANASTE!</p><br>")
                    }
                }
                // Si no coinciden las tarjetas clickadas directamente 
                // quitamos la clase clickada
                else{
                    $tarjetasClick.removeClass("tarjetaClick");
                }

            }
        },500
        );
    })
}


// Funcion del click en el reset
$("#reset").click(function(){
    // vaciamos la salida
    $(".salida").text("")
    // Quitamos las clases de click a todo y la del match
    $(".tarjetasClick").removeClass("tarjetaClick");
    $(".match").removeClass("match");
    // Llamamos la funcion general para pintar el nuev tablero
    inicializar();
});