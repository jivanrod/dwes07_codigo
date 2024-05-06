// Obtener la fecha y hora actual
const date = new Date();

// Crear nodos de texto con la fecha y hora
const fechaTextNode = document.createTextNode(`Fecha: ${date.toLocaleDateString()}`);
const horaTextNode = document.createTextNode(`Hora: ${date.toLocaleTimeString()}`);

// Crear nodos de elementos para mostrar la fecha y hora
const fechaNode = document.createElement("p");
const horaNode = document.createElement("p");

// Agregar los nodos de texto a los nodos de elementos correspondientes
fechaNode.appendChild(fechaTextNode);
horaNode.appendChild(horaTextNode);

// Agregar los nodos de elementos a la página
document.getElementById("fecha").appendChild(fechaNode);
document.getElementById("fecha").appendChild(horaNode);


