$("#añadir").click(function () {
    let imagen = $("<img>");
    if ($("#contenido").val() != "") {
        imagen.attr("src", $("#contenido").val());
        
    }
    else{
        imagen.attr("src","https://www.educima.com/imagen-lapiz-dl22715.jpg");
    }
    let boton = $("<button>")
    let item = $("<div>")
    let divBot = $("<div>")
    item.addClass("grid-item")
    imagen.addClass("imagen");
    boton.text("Borrar")
    boton.addClass("borrar")
    $(".grid-container").append(item);
        divBot.append(boton);
        item.append(imagen);
        item.append("<br>");
        item.append(divBot);
        boton.click(function () {
            item.remove();
            item.fadeOut(300);
        })
});