let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYXJvbmNpZW1wb0BnbWFpbC5jb20iLCJqdGkiOiI3YzgyYmEyZS1kZTZmLTQ5MTQtOGQ0OS0zMDU2ZjU0YjNmODAiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcwNTkxMDUwOSwidXNlcklkIjoiN2M4MmJhMmUtZGU2Zi00OTE0LThkNDktMzA1NmY1NGIzZjgwIiwicm9sZSI6IiJ9.S4-Rl6uvwC4hGbK-yTQXADK3SeO_zQE5wzcTqLWcMD4",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    if (response.estado == 200) {
        pedirDatos(response.datos);
    }else{
        alert("Error em la peticionn: " + response.descripcion)
    }
  });
  
function pedirDatos(resultado){
    let setting = {
        "async": true,
        "crossDomain": true,
        "url": resultado,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }
      $.ajax(setting).done(function (response) {
        let salida = JSON.parse(response);
        console.log(response)
        let texto = "";
        for (let predDia of salida[0].prediccion.dia){
            texto += (predDia.fecha) + "-";
            texto += (predDia.temperatura.maxima) + "-";
            texto += (predDia.temperatura.minima);
            texto += "<br>";
        }
        $("#salida").html(texto);
      });
}