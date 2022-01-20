'use strict'
$("button:nth-child(1)").click(function ocultar() {
    $("div").fadeOut("slow")
})
$("button:nth-child(2)").click(function mostrar() {
    $("div").fadeIn("fast")
})