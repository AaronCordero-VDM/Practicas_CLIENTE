let contador = 1
$("button").click(function(){
    if($("#contenido").val() != ""){
        $("ul").append("<li>"+($("#contenido").val())+"</li>");
    }
    else{
        $("ul").append("<li>"+"Elemento "+contador+"</li>");
    }
    $("li").hide().fadeIn(500)
    contador++;
    $("li").click(function(){
        this.remove();
    })
});

