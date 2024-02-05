$(inicio);

function inicio(){
    $("button").click(function(){
        $.get("https://jsonplaceholder.typicode.com/users/"+$("#idData").val(), 
            function(data,status){
                console.log(status)
                console.log(data)
                $("#salida").html(data.name+ "<hr>" + data.email)
            }
        )
    })
}