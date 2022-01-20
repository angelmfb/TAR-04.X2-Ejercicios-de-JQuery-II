'use strict'
$("button:nth-child(1)").click(function alerta() {
    alert("Text: " + $("p").text())
})
$("button:nth-child(2)").click(function contenido() {
    $("p").text("Lo he cambiado")
    
})
$("button:nth-child(3)").click(function cambiar() {
    $("td").text($("p").text())
})