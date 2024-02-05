//  1. Recuperar el objeto localStorage, siempre esta presente
//      tiene diferentes funciones, entre ellas 'setItem("clave1","valor1")' y 'getItem("clave1")'
//      removeItem('clave1') para borrar uno en concreto y 'clear()' para borrar todos 

//  Si guardas algo que ya existe, modifica el valor

//  2. Guardamos toda la informacion en un mapa
//  3. Este mapa hay que pasarlo por JSON porque localStorage solo guarda cadenas de texto

function guardar(){
    //  Map() es un diccionario
    let datos = new Map();


    datos.set("datoTexto", $("#datoTexto").val());
    datos.set("datoNumber", $("#datoNumber").val());
    datos.set("datoEmail", $("#datoEmail").val());
    datos.set("datoFecha", $("#datoFecha").val());
    datos.set("datoColor", $("#datoColor").val());

    // .entries() lo convierte en un Array y luego en JSON
    let miMapa = JSON.stringify(Array.from(datos.entries()))
    localStorage.setItem("miMapa", miMapa)
}


function borrar(){
    /*
    //  BORRAR UN ITEM EN CONCRETO
    let clave = prompt("¿Que clave quieres borrar?")
    localStorage.removeItem(clave)
    */
    localStorage.clear();
}


function recuperar(){
    //console.log(localStorage.getItem('clave1'));
    if (localStorage.getItem("miMapa")){
        let datosRecuperados = new Map(JSON.parse(localStorage.getItem("miMapa")))
        console.log(datosRecuperados);

    }else{
        alert("No existe :(")
    }
}