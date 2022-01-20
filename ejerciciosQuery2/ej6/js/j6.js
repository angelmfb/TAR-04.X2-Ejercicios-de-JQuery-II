'use strict'
$("button:nth-child(1)").click(function borde() {
    $('table').css({'border': '1px solid black'})
})

$("button:nth-child(2)").click(function borde() {
    alert($('table').css('border'))
})

$("button:nth-child(3)").click(function borde() {
    $('table').css({'border': 'none'})
})
  
