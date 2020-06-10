var cursor = $('.cursor');

$( window ).on("mousemove", function( event ){
cursor.css("left", event.pageX);
cursor.css("right", event.pageY);
});

var li = $('span.monotone2');

li.on("mouseenter", function( event ) {
  cursor.toggleClass('big');
});
