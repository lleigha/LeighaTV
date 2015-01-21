
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
var $title = $('span.text');
var $thumb = $('.thumb-wrapper');
$thumb.hover(function () {
	var $teaser = $(this).parents('.project-teaser');
    $teaser.find($title).css( "border-bottom", "2px solid" );
  }, 
  function () {
  	var $teaser = $(this).parents('.project-teaser');
    $teaser.find($title).css( "border-bottom", "none" );
  }
  );
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


//
//
// Image Drop Shadow
//
//
$(".image img[src*='dropshadow']").css( "box-shadow", "none" );


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
