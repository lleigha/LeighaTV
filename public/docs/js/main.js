
$(document).ready(function(){

//
//
// Masonry
//
//
  var $container = $('#projects-container');

  $container.imagesLoaded( function(){

    $container.masonry({
      itemSelector : '.project-teaser',
      columnWidth : '.grid-sizer',
      transitionDuration : 0
    })
    .masonry();

    $container.fadeTo( "fast", 1.0 );

  });

//
//
// Browser Resize
//
//
$(window).resize(function(){
	if ($(window).width() <= 600){	
		$container.masonry('destroy');
	} else {
		$container.masonry({
		  itemSelector : '.project-teaser',
		  columnWidth : '.grid-sizer',  
		  transitionDuration : 0
		});	
	}
});
//
//
// Title Hover
//
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

// var $title = $('span.text');

// $thumb.hover(function () {
// 	var $teaser = $(this).parents('.project-teaser');
//     $teaser.find($title).css( "border-bottom", "2px solid" );
//   }, 
//   function () {
//   	var $teaser = $(this).parents('.project-teaser');
//     $teaser.find($title).css( "border-bottom", "none" );
//   }
//   );
//
//
// Projects List
//
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
//
// Image Drop Shadow
//
//
$(".image img[src*='dropshadow']").css( "box-shadow", "none" );

//
//
// Lazy Load Images
//
//

// $(function() {
//         $('.lazy').Lazy();
//     });
         
//
//
// Project Pager (Next)
//
//
  $(window).load(function(){

     $("#pager").fadeIn("slow");

  });

  $(window).bind("load resize", function() {

    $("#pager").show();

    var media = $('#media');
    var offset = media.offset();

    if ($("#pager-bottom").css("display") == "none" ) {
      $("#pager").offset({ top: 35, left: offset.left});
    } else {
      $("#pager").css("display", "none");
    }
    
});


});
