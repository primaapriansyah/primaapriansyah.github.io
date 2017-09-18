/*****************************************
    Template Name: Naima App landing and Showcase Template
    Description: This is html5 template
    Author: WpOcean
    Version: 1.0
******************************************/
/******************************************
[  Table of contents  ]
*****************************************
    01. Mobile Menu
	02. Sticky Menu
    03. Owl Carousel |Testimonial slider
	04. Owl Carousel | screenshot-slider
	05. Magnific Popup Video 
	06. Magnific Popup Image 
	07. counter up 
	08. Wow js
	09. ScrollUp
	10. smooth scrolling
	11. preloader
	12. Youtube Video BG
	13. Paralax BG 
	
 
*****************************************
[ End table content ]
******************************************/


(function ($) {
    "use strict";

    // 0. ajaxChimp
    $('#mc-form').ajaxChimp({
        url: 'http://www.wpocean.us13.list-manage.com/subscribe/post?u=e9d729be03847d1a66b143bd2&amp;id=21ac2a3302', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscribe-form input, .subscribe-form button').fadeOut();
            }
        }
    });

    // 1. Mobile Menu
    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });

    // 2. Sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });



    // 3. Testimonial carosal
    $('.testimonials').owlCarousel({
        loop: true,
        items: 1,
        dot: true,
        nav: false,
        autoplay: false,
        margin: 30

    });
    // 4. Owl Carousel | screenshot-slider
    $('.screenshot-slider').owlCarousel({
        loop: true,
        items: 4,
        dot: true,
        nav: true,
        autoplay: true,
        margin: 30,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480: {
                items: 2, // from 480 to 677 
            },

            678: {
                items: 3, // from this breakpoint 678 to 959
            },

            960: {
                items: 4, // from this breakpoint 960 to 1199
            }
        }
    });


    // 5. Magnific Popup Video 
    $('.video-play').magnificPopup({
        type: 'video'
    });


    // 6 . Magnific Popup Image 
    $('.app-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });





    // 7. counter up 
    $('.counter').counterUp();

    // 8. Wow js
    new WOW().init();

    // 9. ScrollUp
    $.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    // 10. smooth scrolling
    $(function () {
        $(".main-menu ul li a, .mobile-menu.mean-container .mean-nav ul li a").bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    //11. preloader
    $(window).on('load', function () {
        $('.preloader-wave-effect').fadeOut();
        $('#preloader-wrapper').delay(100).fadeOut('slow');
    });

    //12. Youtube Video BG
    $('#video-background').YTPlayer({
        videoId: 'YWHi3Ic7wGw',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            origin: window.location.origin
        }
    });

    //13. Paralax BG 
    skrollr.init({
        render: function (data) {

        }
    });



}(jQuery));