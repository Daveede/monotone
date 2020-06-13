$(document).ready(function() {

setInterval (function(){
  $('.rightcolumn').addClass('enter-left');
}, 1000);





var cursor = $('.cursor');

$( window ).on( "mousemove", function( event ){
  cursor.css("left", event.pageX);
  cursor.css("top", event.pageY );
  });



var li = $('span.monotone2');

li.on("mouseenter", function( event ) {
  cursor.addClass('big');
});

li.on("mouseleave", function( event ) {
  cursor.removeClass('big');
});

$( 'a' ).on( "click", function() {
    $('body').fadeOut(2000);
  });

}) ;
