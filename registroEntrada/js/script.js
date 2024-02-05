
let visitas;
let salidas;

let openRequest = indexedDB.open("visitas", 1);

openRequest.onupgradeneeded = function () {
    let visitas = openRequest.result;
    let personas = visitas.createObjectStore('personas', { keyPath: 'dni' });
    let salidas = visitas.createObjectStore('salidas', { keyPath: 'dni' });
    let index = personas.createIndex("apell", "apellidos");
    let indexSalidas = salidas.createIndex("apell", "apellidos");
};
openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};
openRequest.onsuccess = function () {
    visitas = openRequest.result;
    listar()
    listarSalida()
};



function guardarBD() {
    visitas = openRequest.result;

    let persona = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        dni: $("#dni").val(),
        perCon: $("#perCon").val(),
        fechaEntrada: new Date().toDateString(),
        fechaSalida: "",
    }

    let transaction = visitas.transaction("personas", "readwrite");

    let personas = transaction.objectStore("personas");

    let request = personas.add(persona);

    request.onsuccess = function () {
        console.log("Visita guardada")
        clean();
        listar()
    }

    request.onerror = function () {
        console.log("Error", request.error);
    };
};

function clean() {
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#dni").val("");
    $("#perCon").val("");
}

function buscarEnt(campo) {

    visitas = openRequest.result;

    let transaction = visitas.transaction("personas", "readwrite");

    let personas = transaction.objectStore("personas");

    let apellIndex = personas.index("apell");

    let pers;

    if (campo == "dni") {
        pers = personas.get($("#dniFilt").val())
    }
    if (campo == "apell") {
        pers = apellIndex.getAll($("#apellFilt").val());
    }

    pers.onsuccess = function () {
        if (pers.result !== undefined) {
            console.log("Personas", pers.result); // array de libros con precio = 10
            $("#tablaBodyEnt").empty();

            for (persona of pers.result) {
                let fila = $("<tr>");
                fila.append($("<td>").text(persona.nombre));
                fila.append($("<td>").text(persona.apellidos));
                fila.append($("<td>").text(persona.dni));
                fila.append($("<td>").text(persona.perCon));
                fila.append($("<td>").text(persona.fechaEntrada));
                let botonSalida = $("<button>").text("Salida").attr("id", persona.dni).on("click", function () {
                    salir(this.id);
                })
                fila.append(botonSalida);
                $("#tablaBodyEnt").append(fila);
            }

        } else {
            console.log("No hay registros con ese DNI o apellido");
        }
    };
}


function salir(id) {
    let transaction = visitas.transaction("personas", "readwrite");
    let personas = transaction.objectStore("personas");
    let personaSel = personas.get(id);
    personaSel.onsuccess = function () {
        if (personaSel.result !== undefined) {
            console.log(personaSel.result);
            salidas = openRequest.result;
            let transaction = visitas.transaction("salidas", "readwrite");
            let perSalida = transaction.objectStore("salidas");
            personaSel.result.fechaSalida = new Date().toDateString();
            let salida = perSalida.add(personaSel.result);
            salida.onsuccess = function () {
                if (salida.result !== undefined) {
                    let transaction = visitas.transaction("salidas", "readwrite");
                    let perSalida = transaction.objectStore("salidas");
                    let salida2 = perSalida.getAll();
                    console.log("Bien 1")
                    salida2.onsuccess = function () {
                        let transaction = visitas.transaction("personas", "readwrite");
                        let personas = transaction.objectStore("personas");
                        personas.delete(id);
                        listar()
                        listarSalida()
                    }
                }
            };


        }
    }
}



function listar() {

    visitas = openRequest.result;

    let transaction = visitas.transaction("personas", "readonly");

    let personas = transaction.objectStore("personas");

    pers = personas.getAll();

    pers.onsuccess = function () {
        $("#tablaBodyEnt").empty();

        for (persona of pers.result) {
            let fila = $("<tr>");
            fila.append($("<td>").text(persona.nombre));
            fila.append($("<td>").text(persona.apellidos));
            fila.append($("<td>").text(persona.dni));
            fila.append($("<td>").text(persona.perCon));
            fila.append($("<td>").text(persona.fechaEntrada));
            let botonSalida = $("<button>").text("Salida").attr("id", persona.dni).on("click", function () {
                salir(this.id);
            })
            fila.append(botonSalida);
            $("#tablaBodyEnt").append(fila);
        }
    };
}

function listarSalida() {

    visitas = openRequest.result;

    let transaction = visitas.transaction("salidas", "readonly");
    let perSalida = transaction.objectStore("salidas");

    pers = perSalida.getAll();

    pers.onsuccess = function () {
        $("#tablaBodySal").empty();

        for (persona of pers.result) {
            let fila = $("<tr>");
            fila.append($("<td>").text(persona.nombre));
            fila.append($("<td>").text(persona.apellidos));
            fila.append($("<td>").text(persona.dni));
            fila.append($("<td>").text(persona.perCon));
            fila.append($("<td>").text(persona.fechaEntrada));
            fila.append($("<td>").text(persona.fechaSalida));
            $("#tablaBodySal").append(fila);
        }
    };
}