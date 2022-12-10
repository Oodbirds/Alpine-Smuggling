$(document).ready(function() {
    $("#arrow").hover(
      function(){
        $("#inner").stop().animate({marginRight: "0px", opacity: "1px", height: "100px"}, 500 );
      },
      function(){
        $("#inner").stop().animate({marginRight: "-100px", opacity: "1px", height: "100px"}, 500 );
      }
    );
  });