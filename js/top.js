$('head').append('<link rel="icon" type="image/png" sizes="32x32" href="../img/favicon_32x32.png"/>');

$(function () {
  $("#boxwrap2").hide();
  $("#boxwrap3").hide();
});
$(function () {
  $("#mli1").click(function () {
    
    $("#mli1").attr('class',"activeTop");
    $("#mli2").removeClass();
    $("#mli3").removeClass();
    $("#boxwrap1").show();
    $("#boxwrap2").hide();
    $("#boxwrap3").hide();
  });
});
$(function () {
  $("#mli2").click(function () {
    $("#boxwrap2").show();
    $("#boxwrap1").hide();
    $("#boxwrap3").hide();
    $("#mli2").attr('class',"activeTop");
    $("#mli1").removeClass();
    $("#mli3").removeClass();
  });
});
$(function () {
  $("#mli3").click(function () {
    $("#boxwrap3").show();
    $("#boxwrap2").hide();
    $("#boxwrap1").hide();
    $("#mli3").attr('class',"activeTop");
    $("#mli1").removeClass();
    $("#mli2").removeClass();
  });
});