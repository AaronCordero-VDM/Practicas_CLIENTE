$(inicio);

function inicio(){
    $("button").click(
        function (){
            $("#divisor1").load("datos/texto.dat", 
                function(responseTxt, statusTxt, xhr){
                    if (statusTxt == "success"){
                        alert("!Datos recuperados con exito");
                    if (statusTxt == "error"){
                        alert("Error: "+ xhr.status +":"+ xhr.statusText)
                    }
                    }
            });
            // $("#divisor1").load("datos/tabla.dat #t2")
        }
        );
}