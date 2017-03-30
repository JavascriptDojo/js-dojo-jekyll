// //jQuery for page scrolling feature - requires jQuery Easing plugin
setTimeout(function () {

$(function() {

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
