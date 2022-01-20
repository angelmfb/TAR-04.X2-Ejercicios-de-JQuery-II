'use strict'
$("button:nth-child(1)").click(function crear() {
    $('div').html('<form>Ingrese nombre:<input type="text" id = "nombre" >' +
    '<br>Ingrese clave:<input type="text" id="clave"><br>' +
    '<input type="submit" value="confirmar"></form>');
})

$("button:nth-child(2)").click(function mostrar() {
    alert($('div').html());
})