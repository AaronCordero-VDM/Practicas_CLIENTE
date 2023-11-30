let parejas = [1, 2, 3, 1, 2, 3];
let clase = [];

parejas.sort(() => Math.random() - 0.5);
console.log(parejas)

for (let i = 0; i < parejas.length; i++) {
    let tarjeta = $("<div>");
    tarjeta.attr("class", parejas[i]);
    tarjeta.text(parejas[i])
    tarjeta.addClass("estiloTarjeta tarjeta")
    $(".grid-container").append(tarjeta);

}
let contador = 0;
$(".tarjeta").click(function comprobar() {
    let eleccion1 = "";ac
    let eleccion2 = "";
    if (contador == 0 ) {
            console.log(contador)
            $(this).css("background-color", "blue");
            clase[contador] = ($(this).attr("class")).slice(0, 1);
            console.log("clase"+clase[contador])
            $(this).off("click");
            contador++
        
    }
    else if(contador == 1){
        console.log(contador)
        $(this).css("background-color", "blue");
        clase[contador] = ($(this).attr("class")).slice(0, 1);
        console.log("clase"+clase[contador])
        $(this).off("click");
        contador++
        
        if(clase[0] == clase[1]){
            console.log("si")
        }
        else{
            $("."+clase[0]).on("click",comprobar),
            $("."+clase[0]).css("background-color", "blueviolet")
            $("."+clase[1]).on("click",comprobar),
            $("."+clase[1]).css("background-color", "blueviolet")
            contador = 0;
            
            console.log("no")
        
        }
        contador = 0;
    }
    else {
        console.log("error")
    }
})