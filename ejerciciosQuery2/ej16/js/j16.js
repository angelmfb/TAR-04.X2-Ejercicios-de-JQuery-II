'use strict'
$("button:nth-child(1)").click(function eliminar() {
    $("ul").empty()
})
$("button:nth-child(2)").click(function restaurar() {
    $("ul").html('<li>VeChain VET</li><li>Tezos XTZ</li><li>KuCoin Token KCS</li><li>Oasis Network ROSE</li>');
})
$("button:nth-child(3)").click(function anadirFinal() {
    $("ul").append("<li>Kadena KDA</li>")
})
$("button:nth-child(4)").click(function anadirPrincipio() {
    $("ul").prepend("<li>IoTeX IOTX</li>")
})
$("button:nth-child(5)").click(function eliminarUltimo() {
    let cantidad = $("li").length
    $("li").eq(cantidad - 1).remove()
})
$("button:nth-child(6)").click(function eliminarPrimero() {
    $("li").eq(0).remove()
})