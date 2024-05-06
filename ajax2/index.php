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
        <input type="number" name="valor1" id="valor1">
        <input type="number" name="valor2" id="valor2">
        <input type="submit" value="Sumar">
    </form>
    <h3 id="resultado"></h3>
    <script src="ajax.js"></script>
</body>
</html>
