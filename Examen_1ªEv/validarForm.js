function validarFormulario() {
    let respuesta = true; // Variable de control

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let altura = document.getElementById("altura").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let telefono = document.getElementById("telefono").value;

    // Validar nombre (mínimo 3 caracteres)
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        respuesta = false;
    }

    // Validar apellido (mínimo 3 caracteres)
    if (apellido.length < 3) {
        alert("El apellido debe tener al menos 3 caracteres.");
        respuesta = false;
    }

    // Validar fecha de nacimiento (formato DD-MM-AAAA)
    if (!/^(\d{2})-(\d{2})-(\d{4})$/.test(fechaNacimiento)) {
        alert("La fecha de nacimiento debe tener el formato DD-MM-AAAA.");
        respuesta = false;
    }

    // Validar altura (formato x.xx)
    if (!/^\d{1,2}(\.\d{1,2})?$/.test(altura)) {
        alert("La altura debe tener el formato x.xx.");
        respuesta = false;
    }

    // Validar correo electrónico
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, introduce un correo electrónico válido.");
        respuesta = false;
    }

    // Validar contraseña
    if (password.length >= 6) {
        // Verificar la presencia de al menos una letra minúscula, una letra mayúscula y un dígito
        let tieneMinuscula = false;
        let tieneMayuscula = false;
        let tieneDigito = false;

        for (let caracter of password) {
            if (caracter >= 'a' && caracter <= 'z') {
                tieneMinuscula = true;
            } else if (caracter >= 'A' && caracter <= 'Z') {
                tieneMayuscula = true;
            } else if (caracter >= '0' && caracter <= '9') {
                tieneDigito = true;
            }
        }

        // Mostrar mensaje y cambiar el estilo si no cumple con los criterios
        if (!(tieneMinuscula && tieneMayuscula && tieneDigito)) {
            document.getElementById("password").style.background = "#FF6767";
            alert("Por favor, introduce una contraseña válida.");
            respuesta = false;
        }
    } else {
        // La longitud no cumple con el requisito mínimo
        document.getElementById("password").style.background = "#FF6767";
        alert("Por favor, introduce una contraseña válida.");
        respuesta = false;
    }

    // Validar teléfono
    if (telefono.length != 9) {
        document.getElementById("telefono").style.background = "#FF6767";
        alert("Introduce un número de teléfono español válido (9 dígitos).");
        respuesta = false;
    }

    return respuesta;
}

// --------------------------------------------------------------------



