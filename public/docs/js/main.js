
$(document).ready(function(){

//
// Index
//
var $container = $('#projects-container');

  $container.imagesLoaded( function(){

    $container.fadeTo( "fast", 1.0 );

  });

//
// Title Hover
//
var $category = $('.categories');
var $hoverinfo = $('.hover-info');

$hoverinfo.hover(function () {
  var $teaser = $(this).parents('.project-teaser');
    $teaser.find($category).css( "opacity", "1.0" );
  }, 
  function () {
    var $teaser = $(this).parents('.project-teaser');
    $teaser.find($category).css( "opacity", "0.0" );
  }
  );

//
// Projects List
//
$('#projects-link').click(function(){
    $('#projects-list-menu').toggleClass('hide');
});


$('#close-link').click(function(){
    $('#projects-list-menu').addClass('hide');
});


(function($){
        $(window).load(function(){
            $("#projects-list").mCustomScrollbar({
                theme:"minimal-dark",
                scrollInertia: 10,
                autoDraggerLength: false,
              });
        });
    })(jQuery);

//
// Image Drop Shadow
//
$(".image img[src*='dropshadow']").css( "box-shadow", "none" );

//
// Lazy Load Images
//
$(function() {
        $('.lazy').Lazy({
          combined: true,
          delay: 8000,
        });
});
         
//
// Project Pager (Next)
//
  $(window).load(function(){

     $("#pager").fadeIn("slow");

  });

  $(window).bind("load resize", function() {

    $("#pager").show();

    var media = $('#media');
    var offset = media.offset();

    if ($("#pager-bottom").css("display") == "none" ) {
      $("#pager").offset({ left: offset.left});
    } else {
      $("#pager").css("display", "none");
    }
    
});

//
// Everything Link Bottom
//  
/*$(function() {
  if ($("#everything-link-bottom").css("display") == "inline-block" ) {
    $("#everything-link").css("display" , "none");
  } else {
      $("#everything-link").css("display", "block");
    }
});*/

});
