$('head').append('<link rel="icon" type="image/png" sizes="32x32" href="../img/favicon_32x32.png"/>');

$(function () {
  // 최상단 박스
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
  // 중단 박스
$(function midBoxInit () {
  $("#btm2").hide();
  $("#btm3").hide();
  $("#btm4").hide();
  $("#btm5").hide();
  $("#btm6").hide();
  $("#btm7").hide();
  $("#btm8").hide();
  $("#btm9").hide();
})


$(function(){

  $("#line2").hide();
  $("#line3").hide();
});
$(function(){
  $("#smLine1").click(function () {
    $("#line1").show();
    $("#line2").hide();
    $("#line3").hide();
    $("#smLine1").addClass("activeMid");
    $("#smLine2").removeClass();
    $("#smLine3").removeClass();
    $("#lineWrap1").attr('class','line_wrap_active')
    $("#lineWrap2").attr('class', 'line_wrap');
    $("#lineWrap3").attr('class', 'line_wrap');

    $("#btm1").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });
});


$(function (){
  $("#smLine2").click(function () {
    $("#line2").show();
    $("#line1").hide();
    $("#line3").hide();
    $("#smLine2").addClass("activeMid");
    $("#smLine1").removeClass();
    $("#smLine3").removeClass();
    $("#lineWrap4").attr('class','line_wrap_active')
    $("#lineWrap5").attr('class', 'line_wrap');
    $("#lineWrap6").attr('class', 'line_wrap');


    $("#btm4").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm1").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });

});
$(function () {
  $("#smLine3").click(function () {
    $("#line3").show();
    $("#line2").hide();
    $("#line1").hide();
    $("#smLine3").addClass("activeMid");
    $("#smLine2").removeClass();
    $("#smLine1").removeClass();

    $("#lineWrap7").attr('class', 'line_wrap_active');
    $("#lineWrap8").attr('class', 'line_wrap');
    $("#lineWrap9").attr('class', 'line_wrap');


    $("#btm7").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm1").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });



})

$(function () {

  // 하단 9개
  // 1번째
  $("#lineWrap1").click(function () {

    $("#lineWrap1").attr('class','line_wrap_active')
    $("#lineWrap2").attr('class', 'line_wrap');
    $("#lineWrap3").attr('class', 'line_wrap');

    $("#btm1").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });

});
$(function () {


  // 2번째
  $("#lineWrap2").click(function () {
    $("#lineWrap2").attr('class','line_wrap_active')
    $("#lineWrap1").attr('class', 'line_wrap');
    $("#lineWrap3").attr('class', 'line_wrap');


    $("#btm2").show();
    $("#btm1").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();



  });

});
$(function () {

  // 3번째

  $("#lineWrap3").click(function () {
    $("#lineWrap3").attr('class','line_wrap_active')
    $("#lineWrap2").attr('class', 'line_wrap');
    $("#lineWrap1").attr('class', 'line_wrap');


    $("#btm3").show();
    $("#btm2").hide();
    $("#btm1").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });
});
$(function () {
  // 4번째
  $("#lineWrap4").click(function () {
    $("#lineWrap4").attr('class','line_wrap_active')
    $("#lineWrap5").attr('class', 'line_wrap');
    $("#lineWrap6").attr('class', 'line_wrap');


    $("#btm4").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm1").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });
});
$(function () {
  // 5번째

  $("#lineWrap5").click(function () {
    $("#lineWrap5").attr('class','line_wrap_active')
    $("#lineWrap4").attr('class', 'line_wrap');
    $("#lineWrap6").attr('class', 'line_wrap');

    $("#btm5").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm1").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });
});
$(function () {

  // 6번째

  $("#lineWrap6").click(function () {
    $("#lineWrap6").attr('class','line_wrap_active')
    $("#lineWrap5").attr('class', 'line_wrap');
    $("#lineWrap4").attr('class', 'line_wrap');


    $("#btm6").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm1").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });

  // 7번째
});
$(function () {
  $("#lineWrap7").click(function () {
    $("#lineWrap7").attr('class','line_wrap_active')
    $("#lineWrap8").attr('class', 'line_wrap');
    $("#lineWrap9").attr('class', 'line_wrap');


    $("#btm7").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm1").hide();
    $("#btm8").hide();
    $("#btm9").hide();
  });
  // 8번째
});
$(function () {
  $("#lineWrap8").click(function () {
    $("#lineWrap8").attr('class','line_wrap_active')
    $("#lineWrap7").attr('class', 'line_wrap');
    $("#lineWrap9").attr('class', 'line_wrap');


    $("#btm8").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm1").hide();
    $("#btm9").hide();
  });
  // 9번째
});
$(function () {
  $("#lineWrap9").click(function () {
    $("#lineWrap9").attr('class','line_wrap_active')
    $("#lineWrap7").attr('class', 'line_wrap');
    $("#lineWrap8").attr('class', 'line_wrap');


    $("#btm9").show();
    $("#btm2").hide();
    $("#btm3").hide();
    $("#btm4").hide();
    $("#btm5").hide();
    $("#btm6").hide();
    $("#btm7").hide();
    $("#btm8").hide();
    $("#btm1").hide();
  });



});


$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadeInBottom').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-bottom':'0px'},600);
          }
          
      }); 
  });
});
