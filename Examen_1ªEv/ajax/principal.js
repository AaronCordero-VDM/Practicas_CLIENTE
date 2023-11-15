
function principal() {
    document.getElementById("tablaDatos").innerHTML = "";
    traerDatosServidor();
}

function traerDatosServidor() {
    //crear el objeto para conectar al servidor (get)
    const httprq = new XMLHttpRequest();
    /*---------------------------
    Registramos la funcion que trata la 
    respuesta del servidor
    Se hace meidante el evento: onreadtystatechange()
    Este evento se dispara cuando se completa
    la respuesta del servidor
    */
    httprq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {   //Si la respuesta es correcta
            console.log((this.responseText));
            //Convertir datos de texto a formato JS con el JSON.parse
            let datos = JSON.parse(this.responseText);
            crearFilas(datos)
            //console.log(datos)
        } else {
            console.log("Error de estado");
        }
    }
    /*
    Peticion al servidor: 
        Construimos la peticion:
    */
    httprq.open("GET", "/daw/SERVIDOR/proyecto_videojuegos/pedirdatosAPI.py", true);
    //    Ejecutamos la peticion
    httprq.send();
}

function crearFilas(listaVideojuegos) {

    const plantilla = document.getElementById("filaDatos");
    const tbodyDatos = document.getElementById("tablaDatos");

    for (let vj of listaVideojuegos) {
        console.log(vj)
        let filaTR = document.importNode(plantilla.content, true);
        filaTR.querySelector("#fila").id = ("vj" + vj[0]);

        let nombreTD = filaTR.querySelector("#nombre");
        nombreTD.innerHTML = vj[1];

        let empresaTD = filaTR.querySelector("#empresa");
        empresaTD.innerHTML = vj[2];

        let tematicaTD = filaTR.querySelector("#tematica");
        tematicaTD.innerHTML = vj[3];

        let nJugTD = filaTR.querySelector("#nJug");
        nJugTD.innerHTML = vj[4];

        let publicacionTD = filaTR.querySelector("#publicacion");
        publicacionTD.innerHTML = vj[5];

        let borrarTD = filaTR.querySelector("#borrar");
        borrarTD.addEventListener("click", function () {
            borrar(vj[0]);
        })

        let modificarTD = filaTR.querySelector("#modificar");
        modificarTD.addEventListener("click", function () {
            borrar(vj[0], vj[1], vj[2], vj[3], vj[4], vj[5]);
        })
        tbodyDatos.appendChild(filaTR);
    }

}

function borrar(id) {
    //crear el objeto para conectar al servidor (get)
    const httprq = new XMLHttpRequest();

    httprq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {   //Si la respuesta es correcta
            console.log((this.responseText));
            let borrado = JSON.parse(this.responseText);
            console.log(borrado)
            if (borrado) {
                let filaBorrar = document.getElementById("vj" + id);
                filaBorrar.remove();
            }
            else {
                alert("No existe")
            }
        } else {
            console.log("Error de estado");
        }
    }
    /*
    Peticion al servidor: 
        Construimos la peticion:
    */
    httprq.open("GET", "/daw/SERVIDOR/proyecto_videojuegos/borrarAPI.py?id=" + id, true);
    //    Ejecutamos la peticion
    httprq.send();
}

function modificar(id) {
    alert(id);
}

function filtrar() {
    let empresa = document.getElementById("empresaForm").value;
    let tematica = document.getElementById("tematicaForm").value;
    let nJug = document.getElementById("numJugadoresForm").value;
    let anioInicial = document.getElementById("anioInicialForm").value;
    let anioFinal = document.getElementById("anioFinalForm").value;

    let filtro = "";
    if (empresa != "") {
        filtro = "empresa=" + empresa;
    }

    if (tematica != "") {
        if (filtro != "") {
            filtro += "&tematica=" + tematica;
        } else {
            filtro += "tematica=" + tematica;
        }
    }

    if (nJug != "") {
        if (filtro != "") {
            filtro += "&numero_de_jugadores=" + nJug;
        } else {
            filtro += "numero_de_jugadores=" + nJug;
        }
    }

    if (anioInicial != "") {
        if (filtro != "") {
            filtro += "&anioInicial=" + anioInicial;
        } else {
            filtro += "anioInicial=" + anioInicial;
        }
    }

    if (anioFinal != "") {
        if (filtro != "") {
            filtro += "&anioFinal=" + anioFinal;
        } else {
            filtro += "anioFinal=" + anioFinal;
        }
    }
    console.log(filtro);

    const httprq = new XMLHttpRequest();
    httprq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {   //Si la respuesta es correcta
            console.log((this.responseText));
            tbodyDatos = document.getElementById("tablaDatos");
            tbodyDatos.innerHTML = "";
            let datos = JSON.parse(this.responseText);
            crearFilas(datos)
        } else {
            console.log("Error de estado");
        }
    }
    /*
    Peticion al servidor: 
        Construimos la peticion:
    */
    httprq.open("GET", "/daw/SERVIDOR/proyecto_videojuegos/filtrarDatosAPI.py?" + filtro, true);
    //    Ejecutamos la peticion
    httprq.send();
}


function insertar() {
    let nombre = document.getElementById("nombreInsertar").value;
    let empresa = document.getElementById("empresaInsertar").value;
    let tematica = document.getElementById("tematicaInsertar").value;
    let nJug = document.getElementById("numJugadoresInsertar").value;
    let publicacion = document.getElementById("anioInsertar").value;

    let insertaDatos = "";
    let datosOk = true;

    if (nombre != "") {
        insertaDatos += "nombre=" + nombre;
    } else {
        datosOk = false;
    }
    if (empresa != "") {
        insertaDatos += "&empresa=" + empresa;
    } else {
        datosOk = false;
    }
    if (tematica != "") {
        insertaDatos += "&tematica=" + tematica;
    } else {
        datosOk = false;
    }
    if (nJug != "") {
        insertaDatos += "&nJug=" + nJug;
    } else {
        datosOk = false;
    }
    if (publicacion != "") {
        insertaDatos += "&anio=" + publicacion;
    } else {
        datosOk = false;
    }


    console.log(insertaDatos);

    if (datosOk) {
        //crear el objeto para conectar al servidor
        const httprq = new XMLHttpRequest();

        //resolver la respuesta

        httprq.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { //si la respuesta es correcta
                console.log(this.responseText);
                principal();

            } else { //la peticion tiene un error
                console.log("estado: " + this.readyState + ", resp servidor:" + this.status);
            }
        }

        //hacer la llamada al servidor
        //contruir la peticion
        httprq.open("GET", "/daw/SERVIDOR/proyecto_videojuegos/insertarAPI.py?" + insertaDatos, true);

        //ejecuto la peticion
        httprq.send();
    } else {
        alert("datos incorrectos")
    }
}

