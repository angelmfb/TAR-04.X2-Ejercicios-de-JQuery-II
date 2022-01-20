'use strict'
$("p:nth-child(1)").click(function mover(event) {
    $("p").text("coordenada x=" + event.clientX);
  
})
$("p:nth-child(2)").click(function contenido(event) {
    $("p").text("coordenada y=" + event.clientY);
})