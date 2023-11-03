function llamadaAjax(){
    //Cofigurar el objeto para la peticion al servidor
    let httprq = new XMLHttpRequest();
    /*---------------------------*/

    /*
    Registramos la funcion que trata la 
    respuesta del servidor
    Se hace meidante el evento: onreadtystatechange()
    Este evento se dispara cuando se completa
    la respuesta del servidor
    */
    httprq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){   //Si la respuesta es correcta
            console.log(JSON.parse(this.responseText));
            //Convertir datos de texto a formato JS con el JSON.parse
            let datos = (JSON.parse(this.responseText));
            crearSalida(datos);
        }else{
            console.log("Error de estado");
        }
    } 
    /*
    Peticion al servidor: 
        Construimos la peticion:
    */
    httprq.open("GET","/daw/SERVIDOR/ajaxServ/pedirdatos.py", true);
    //    Ejecutamos la peticion
    httprq.send();
}

function insertAjax(){
    let texto = document.getElementById("texto").value;
    let numero = document.getElementById("numero").value;
    inserterDatos(texto,numero);
}

function crearSalida(datos){
    //guardamos la lista extraida de JSON en un formato para HTML
    let tableHtml = "<table border='1ps solid black'>";
    for (d of datos){
        tableHtml += ("<tr>")
        for (e of d){
            tableHtml += "<td>"+e+"</td>";
        }
        tableHtml += ("</tr>")
    }
    tableHtml += "</ul>";

    document.getElementById("salida").innerHTML = tableHtml;
}

function inserterDatos(texto, numero){
    let httprq = new XMLHttpRequest();

    let peticion = "/daw/SERVIDOR/ajaxServ/insertarDatos.py?texto="+texto+"&numero="+numero

    httprq.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){   //Si la respuesta es correcta
            console.log(JSON.parse(this.responseText));
            //Convertir datos de texto a formato JS con el JSON.parse
            let datos = (JSON.parse(this.responseText));
            alert(datos);
        }else{
            console.log("Error de estado");
        }
    } 

    httprq.open("GET",peticion, true);

    //    Ejecutamos la peticion
    httprq.send();
}