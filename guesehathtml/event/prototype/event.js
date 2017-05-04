$(document).ready(function() {

    var $container = $('#container').masonry({
        itemSelector: "#container .item",
        columnWidth: ".grid-sizer",
        gutter: ".gutter-sizer",
        percentPosition: true

    });

    $container.imagesLoaded().progress(function() {
        $container.masonry('layout');
    });

    var $containerTwo = $('#container2').masonry({
        itemSelector: "#container2 .item",
        columnWidth: "#container2 .grid-sizer",
        gutter: "#container2 .gutter-sizer",
        percentPosition: true

    });

    $containerTwo.imagesLoaded().progress(function() {
        $containerTwo.masonry('layout');
    });



});

$(document).ready(function() {

    $(".item").each(function() {
        var item = $(this);
        var image = item.children('img').attr('src');
        $(item).find('.description p').append('<a href="' + image + '" data-featherlight="image">View Larger</a>');

    });

    $('.back-to-top-container a').smoothScroll({
        offset: -20

    });


    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }


    });

    $('item.taphover').on("touchstart", function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('item.taphover').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});


});