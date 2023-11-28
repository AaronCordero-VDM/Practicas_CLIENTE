console.log($("p").text());
console.log($("p").html());
$("p").text("<b>Hola</b>");
console.log($("p").text())
$("p").html("<b>Hola</b>");
console.log($("p").text());
console.log($("input").val());
$("input").val("Fede");
$("p").addClass("verde");
$("p").addClass("amarillo");
$("p").toggleClass("amarillo");//alternar con poner si no lo esta o quitar si esta la clases
$("p").append("<b> Mundo</b>");
$("p").fadeOut(2000);
$("p").fadeIn(2000);
let elemento = $("<p>");
elemento.text("adios mundo");
$("body").append(elemento);