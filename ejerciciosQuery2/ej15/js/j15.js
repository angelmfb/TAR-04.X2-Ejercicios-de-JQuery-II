'use strict'
$("input").focus(function foco(){
    $(this).css("color", "red")
})
$("input").blur(function sinfoco(){
    $(this).css("color", "blue")
});