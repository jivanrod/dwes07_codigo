<?php
if (!empty($_POST)) {
    $valor1 = filter_input(INPUT_POST, 'valor1', FILTER_VALIDATE_INT);
    $valor2 = filter_input(INPUT_POST, 'valor2', FILTER_VALIDATE_INT);
    $resultado = ['suma' => $valor1 + $valor2];
    header('Content-type: application/json');
    echo json_encode($resultado);
    die;
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ejemplo AJAX</title>
    </head>
    <body>
    <center><h1>Ejemplo AJAX</h1></center>
    <form id="sumar">
        <input type="number" id="valor1" name="valor1">
        <input type="number" id="valor2" name = "valor2"> 
        <input type="submit" value="Sumar">
    </form>
    <h3 id="resultado"></h3>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="ajax.js"></script>
</body>
</html>
