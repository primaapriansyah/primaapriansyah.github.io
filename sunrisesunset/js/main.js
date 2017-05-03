/*
    NAME : MAIN JS FILE
    AUTHOR NAME : Infinyteam
    AUTHOR WEBSITE : www.infinyteam.net
    OUR PORTFOLIO : http://themeforest.net/user/infinyteam/portfolio?ref=infinyteam
*/
$(document).ready(function () {
    "use strict";

// Is to disable the preloader when the page finish load!
    $(window).load(function () {
        setTimeout(function () {
            $('#loader').css('display', 'none');
        }, 300);
    });

// Mobile Menu Toggle
    $(".m-menu .toggle, .m-close").on("click", function () {
      $(".m-menu").toggleClass("open");
    });

// Mobile Search Toggle
    $(".m-search .toggle, .s-close").on("click", function () {
      $("#mobile-header").toggleClass("open");
    });

// Mobile Menu List
	$(".m-navigation > ul > li > a").on("click", function () {
		$(".m-navigation ul ul").slideUp();
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});
	$(".m-navigation > ul > li > ul > li > a").on("click", function () {
		$(".m-navigation ul ul ul").slideUp();
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});

// Search Toggle
    $(".search .toggle").on("click", function () {
      $(".search").toggleClass("open");
    });

// Activate tooltip by bootstrap
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

// Add parent class to navigation parents
    $(".m-navigation ul > li > ul, .m-navigation ul > li > ul ul,.topmenu ul > li > ul").parent().addClass('parent');

//  Is to change bootstrap tabs from click to on hover for mega menu tabs
    $('.mega-tabs .nav-tabs > li > a').on("hover", function () {
          $(this).tab('show');
    });

// Main  Featured Posts Slider
    var swiper = new Swiper('.featured-posts .featured-slider', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        speed: 500,
        autoplay: 5000,
        slideActiveClass: 'animated',
        paginationClickable: false,
        spaceBetween: 5,
        effect: 'slide',
        nextButton: '.featured-next',
        prevButton: '.featured-prev'
    }),
// Main  Grid Posts Slider
    swiper = new Swiper('.grid-posts .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: true,
        speed: 500,
        autoplay: 5000,
        paginationClickable: false,
        nextButton: '.grid-next',
        prevButton: '.grid-prev',
        spaceBetween: 5,
        breakpoints: {
            // when window width is resized
            480: {
              slidesPerView: 1
            },
            992: {
              slidesPerView: 2
            }
        }
    }),
    swiper = new Swiper('.grid-posts.centred .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        speed: 500,
        autoplay: 5000,
        paginationClickable: false,
        nextButton: '.grid-next',
        prevButton: '.grid-prev',
        spaceBetween: 5,
        breakpoints: {
            // when window width is resized
            480: {
              slidesPerView: 1
            },
            992: {
              slidesPerView: 2
            }
        }
    }),
    swiper = new Swiper('.grid-posts.centred-full .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        speed: 500,
        autoplay: 5000,
        paginationClickable: false,
        nextButton: '.grid-next',
        prevButton: '.grid-prev',
        spaceBetween: 5,
        breakpoints: {
            // when window width is resized
            480: {
              slidesPerView: 1
            },
            992: {
              slidesPerView: 2
            }
        }
    }),
// Single : Post Slider
    swiper = new Swiper('.post-slider  .swiper-container', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        speed: 500,
        autoplay: 5000,
        paginationClickable: false,
        spaceBetween: 0,
        effect: 'slide',
        nextButton: '.ps-next',
        prevButton: '.ps-prev'
    });

// This is function to activate the Sticky Sidebar Plugin
        jQuery('#sidebar').theiaStickySidebar({
          // Settings
          additionalMarginTop: 80
        });

// Fitvids Activated
        // Target your .container, .wrapper, .post, etc.
        $("#content").fitVids();

// Activate Match Height Plugin
    $('.block-entries .row').each(function() {
        $(this).children('.post').matchHeight();
    });

// Scroll To Top
    $('.totop').on("click",function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

// This is function to activate the Sticky Header
(function($) {
    $.fn.stickMe = function(options) {
        // Assigning variables
        var $window = $(window),
            $document = $(document),
            $elemTopOffset,
            $body = $('body'),
            position = 0,
            $elem = this,
            $elemHeight = $elem.innerHeight(),
            $win_center = $window.height() / 2,
            $pos,
            settings = $.extend({
                transitionDuration: 300,
                shadow: false,
                shadowOpacity: 0.3,
                animate: true,
                triggerAtCenter: true,
                topOffset: $elemHeight,
                transitionStyle: 'fade',
                stickyAlready: false
            }, options);
        // Initial state
        $elem
            .addClass('stick-me')
            .addClass('not-sticking');
        switch (settings.triggerAtCenter) {
            case (settings.triggerAtCenter && settings.topOffset < $elemHeight) || (settings.triggerAtCenter && settings.topOffset > $elemHeight):
                settings.triggerAtCenter = false;
                break;
        }
        if (settings.stickyAlready) {
            settings.triggerAtCenter = false;
            settings.topOffset = 0;
            stick();
        }

        $elemTopOffset = $elem.offset().top;

        function $elem_slide() {
            if (settings.animate === true && settings.transitionStyle === 'slide' && settings.stickyAlready !== true) {
                $elem.slideDown(settings.transitionDuration);
            }
            if (settings.animate === true && settings.transitionStyle === 'fade' && settings.stickyAlready !== true) {
                $elem.fadeIn(settings.transitionDuration);
            } else {
                $elem.show();
            }
            $elem.removeClass('not-sticking');
        }

        function stick() {
            if ($elem.hasClass('sticking')) {
                $elem.trigger('sticking');
            }
            if (position === 0) {
                position = 1;
                if(settings.stickyAlready === false) {
                    $elem.trigger('sticky-begin');
                }
            }
            if ($elem.hasClass('not-sticking')) {
                $elem.hide();
                $elem_slide();
            }
            if (settings.shadow === true) {
                $elem.css('box-shadow', '0px 1px 2px rgba(0,0,0,' + settings.shadowOpacity + ')');
            }
            $elem
                .addClass('sticking')
                .css('position', 'fixed')
                .css('top', '0');
            $body.css('padding-top', $elemHeight);
        }

        function unstick() {
            if (settings.shadow === true) {
                $elem.css('box-shadow', 'none');
            }
            $elem.addClass('not-sticking')
                .removeClass('sticking')
                .show()
                .css('position', 'relative');
            $body.css('padding-top', '0');
        }
        $window.scroll(function() {
            $pos = $window.scrollTop();
            if ($pos === 0) {
                position = 0;
                $elem.trigger('top-reached');
            }
            if (settings.triggerAtCenter === true) {
                if ($pos > $win_center + $elemHeight) {
                    stick();
                }
            }
            if (settings.triggerAtCenter === false) {
                if ($pos > settings.topOffset) {
                    stick();
                }
            }
            if ($pos + $window.height() > $document.height() - 1) {
                $elem.trigger('bottom-reached');
            }
            if (settings.triggerAtCenter === true) {
                if ($pos < (1 + $elemTopOffset)) {
                    unstick();
                }
            }
            if (settings.triggerAtCenter === false) {
                if ($pos < 1) {
                    if (settings.stickyAlready !== true) {
                        unstick();
                    }
                }
            }
        });
        return this;
    };
}(jQuery));

/* Activate Sticky Header */
  $('.topbar').stickMe();
  
})