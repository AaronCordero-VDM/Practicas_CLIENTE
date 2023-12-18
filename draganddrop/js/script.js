const posiciones = [];

function arrastrar(event) {
  event.dataTransfer.setData('text/plain', event.target.id);

  event.currentTarget.style.backgroundColor = 'yellow';
}

function recibir(event) {
  event.preventDefault();
}

function soltar(event) {
  const id = event.dataTransfer.getData('text');
  console.log(id)
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
  console.log("salida: " + id)
  $(dropzone).addClass("lleno")
}

function drop(event) {
  event.currentTarget.style.backgroundColor = '#DFA612';
}

async function comprobar() {
  for (let drop of $(".example-dropzone")) {
    posiciones.push($(drop).children().text().trim())
    console.log(posiciones.toString())
  }
  if (posiciones.toString() == posiciones.sort().toString()) {
    $(".salida").text("Orden Correcto")
  }
  else {
    $(".salida").text("Orden Incorrecto")
    await location.reload()
  }
}