/* Theme Name: Greatepp
   Author: Mannat-Themes
   Version: 1.0.0
   Created: Augest 2017
   File Description:Main JS file of the template
*/

(function ($) {

    'use strict';

    function initStickeyNavigation() {
        $(window).scroll(function () {
          var secondFeature = $('#features').offset().top;
          var scroll = $(window).scrollTop();
          if (scroll >= 600) {
              $('.sticky-navigation').css({"top": '0px'});
          } else {
              $('.sticky-navigation').css({"top": '-100px'});
          }
          if (scroll >= secondFeature - 200) {
              $(".mobileScreen").css({'background-position': 'center top'});
          }
          return false;
        });
    }  

    function initScrollPage() {
        $('.page-scroll').on('click', function (event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
        });
    }  

    function initMousePrallax() {
        $( document ).mousemove( function( e ) {
          $( '.iphone' ) .parallax( 70, e );
        });
    }
    function initPreloader() {
        $(window).load(function() {
          $('#status').fadeOut();
          $('#preloader').delay(350).fadeOut('slow');
          $('body').delay(350).css({
          'overflow': 'visible'
          });
        });
    }
    function initScreenshot() {
        $(".owl-screenshot").owlCarousel({
          items : 4,
            itemsDesktop : [1000, 2],
            itemsDesktopSmall : [768, 1],
            itemsTablet: [568, 1],
            lazyLoad: true,
            autoPlay: true,
            pagination : true,
            stopOnHover: true,
            navigation : false
            });
    }   

    function initFancyBox() {
        $(".fancybox").fancybox({
          helpers : {
            overlay : {
              speedOut : 0,
              locked: false
            }
          }
        });
    }
    function initTestimonialSlider() {
        $("#owl-demo").owlCarousel({
           items : 1,
            itemsDesktop : [1000, 1],
            itemsDesktopSmall : [768, 1],
            itemsTablet: [568, 1],
            lazyLoad: true,
            autoPlay: true,
            pagination : true,
            stopOnHover: true,
            navigation : false
        });
    }

    function initMagnificPopoup() {
        $('.video-play-icon').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    }
    function init() {
      initStickeyNavigation();
      initScrollPage();
      initMousePrallax();
      initPreloader();
      initScreenshot();
      initFancyBox();
      initTestimonialSlider();
      initMagnificPopoup();
    }

   init();

})(jQuery);
