document.addEventListener("DOMContentLoaded", function () {
    const sumaForm = document.getElementById('sumar'); //También document.querySelector
    sumaForm.addEventListener("submit", ajax_sumar);
});

function ajax_sumar(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var data = new FormData(e.target);
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.responseType = 'json';
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
            if (objXMLHttpRequest.status === 200) {
                const response = objXMLHttpRequest.response;
                const resultado = document.getElementById('resultado');
                resultado.textContent = response.suma;
            } else {
                // Manejo de otros códigos de estado HTTP
                console.error('Error en la solicitud: ' + objXMLHttpRequest.status);
            }
        }
    };

    // Manejar errores de red
    objXMLHttpRequest.onerror = function () {
        console.error('Error de red al intentar realizar la solicitud.');
    };

    objXMLHttpRequest.open('POST', 'index.php');
    objXMLHttpRequest.send(data);
}


function ajax_sumar2(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var data = new FormData(e.target);
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.responseType = 'json';

    // Usando onload en lugar de onreadystatechange
    objXMLHttpRequest.onload = function () {
        // Verificar el estado de la respuesta
        if (objXMLHttpRequest.status === 200) {
            const response = objXMLHttpRequest.response;
            const resultado = document.getElementById('resultado');
            resultado.textContent = response.suma;
        } else {
            // Manejo de otros códigos de estado HTTP
            console.error('Error en la solicitud: ' + objXMLHttpRequest.status);
        }
    };

    // Manejar errores de red
    objXMLHttpRequest.onerror = function () {
        console.error('Error de red al intentar realizar la solicitud.');
    };

    objXMLHttpRequest.open('POST', 'index.php');
    objXMLHttpRequest.send(data);
}