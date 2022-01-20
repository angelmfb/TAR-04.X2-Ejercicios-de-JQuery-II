'use strict'
$("p").each(function resaltar() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "yellow");
      }
})