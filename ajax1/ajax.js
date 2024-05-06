$(document).ready(function () {
    $("#sumar").submit(ajax_sumar);
});

function ajax_sumar(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var data = $(this).serialize();
    $.ajax({
        data: data,
        url: "index.php",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $('#resultado').text(data.suma);
        },
        error: function (xhr, status, error) {
            // Maneja errores específicos como errores de red o errores del servidor
            console.error("Error en la solicitud: " + status + ", " + error);
            $('#resultado').text("Error en la operación");  // Muestra un mensaje de error en el elemento resultado
        },
        complete: function (xhr, status) {
            // Código a ejecutar después de la respuesta, ya sea exitosa o no
            console.log("La solicitud se completó con el estado: " + status);
        }
    });
}

