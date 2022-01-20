'use strict'
$("button:nth-child(1)").click(function ocultar() {
    $("div").hide("slow")
})
$("button:nth-child(2)").click(function mostrar() {
    $("div").show("fast")
})