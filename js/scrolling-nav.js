// //jQuery for page scrolling feature - requires jQuery Easing plugin
setTimeout(function () {

$(function() {

    if(window.location.pathname == "/blog.html" && !window.location.hash) {
      $('html, body').animate({
          scrollTop: $("#bloglist").offset().top
      }, 400, 'easeInOutExpo');
    }

    if(window.location.pathname == "/" && window.location.hash){
      $('html, body').animate({
          scrollTop: $(window.location.hash).offset().top
      }, 1000, 'easeInOutExpo');
    }


    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);

        console.log("$anchor.attr('href'): ", $anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
        setTimeout(function () {
          window.location.hash = $anchor.attr('href');
        }, 500);
    });

});

}, 500);
