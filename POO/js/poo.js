//Creacion de un objeto siempre con const
const persona = {
    //Una vez dentro ya se pueden declarar lets
    nombre: "Federico",
    apellidos: "Garcia Lorca",
    edad: 55,
    nacionalidad: "España",
    datosCompletos: function(){
        console.log(this.nombre+ " - " + this.apellidos + " - "+ this.edad)
    }
}

console.log(persona.nombre);

//Se puede camviar el valor de los atributos del objeto
persona.nombre = "El Fede";
console.log(persona.nombre);


persona.apodo = "Fer"
console.log(persona.apodo)