'use strict'

$("button:nth-child(1)").click(function anadir() {
    $('div').addClass("recuadro");
})

$("button:nth-child(2)").click(function quitar() {
    $('div').removeClass("recuadro");
})