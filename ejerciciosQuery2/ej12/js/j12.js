'use strict'
 $("td").hover(entraMouse, saleMouse);
  
  function entraMouse() {
    $(this).css("background-color", "yellow");
  }
  
  function saleMouse() {
    $(this).css("background-color", "white");
  }