(function($) {

    "use strict";

    /* ...................................................................................
     * Adding Class in body
     * ....................................................................................*/
    jQuery.each( jQuery.browser, function( i, val ) {
        $("body").addClass(i);
    });

    $(window).on("load", function() {

        var headerHeight = $(".site-branding .container").outerHeight();
        $(".main-menu .sub-menu,.main-menu  .mega-menu").animate({
            paddingTop: headerHeight
        });

        $(".main-menu li,.main-menu li .sub-menu").on("hover", function () {
            $(this).children(".sub-menu").stop(true, true).fadeToggle();
            $(this).children(".inner-menu").stop(true, true).fadeToggle();
        });

        $(".main-menu .mega-menu-nav").hover(function () {
            $(this).children(".mega-menu").stop(true, true).fadeIn();
            $(this).children(".mega-menu").css("display", "flex");
        }, function(){
            $(this).children(".mega-menu").stop(true, true).fadeOut();
        });

        $(".header-search").on("hover", function () {
            $(this).children(".search").stop(true, true).slideToggle();
        });

        $(".header-tour-package").on("click", function () {
            $(this).children(".header-tour-listing").stop(true, true).slideToggle();
        });

        if ($(window).width() < 992) {
            $("#adv-search legend").on("click", function () {
                $(".form-wrap").stop(true, true).slideToggle();
            });
        }

        window.onresize = function () {
            if ($(window).width() < 992) {
                $("#adv-search legend").on("click", function () {
                    $(".form-wrap").stop(true, true).slideToggle();
                });
            }
        };
    });

    /* ...................................................................................
     * Owl Carousel Functions
     * http://kenwheeler.github.io/slick/
     * ....................................................................................*/
    if(jQuery().slick) {

        // Home page main slider and Tour by destination
        $('.main-slider, .tour-by-destination').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>'
        });

        // Tour Price Carousel
        $('.tour-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Partners Carousel
        $('.partners-carousel').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.tour-single-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.tour-single-slider-nav',
            autoplay: true,
            adaptiveHeight: true
        });
        $('.tour-single-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.tour-single-slider-for',
            arrows: false,
            focusOnSelect: true
        });

    }


    /* ...................................................................................
     * Tabs Functions
     * ....................................................................................*/

    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    /* ...................................................................................
     * Accordion Functions
     * ....................................................................................*/
    $("#accordion .panel-title").click(function(){
        if($(this).hasClass("current")){
            $(this).closest(".panel-heading").removeClass("current");
        }else{
            $(this).closest(".panel-heading").addClass("current");
        }
    });

    /* ...................................................................................
     * Tooltips Functions
     * ....................................................................................*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    /* ...................................................................................
     * Tooltips Functions
     * ....................................................................................*/


    $('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },2000);
    });


    /* ...................................................................................
     * Tooltips Functions
     * ....................................................................................*/
    if(jQuery().datepicker){
        $('.date-picker')
            .datepicker({
                format: 'mm/dd/yyyy'
            });
    }

    /* ...................................................................................
     * Tooltips Functions
     * ....................................................................................*/
    if(jQuery().select2) {
        $("#adv-search select, .sorting select").select2({
            speed: 400
        });
        window.onresize = function() {

            $("#adv-search select, .sorting select").select2({
                speed: 400
            });
        };
    }

    /* ...................................................................................
     * Tour
     * ....................................................................................*/
    var tourItem =$(".tour-item"),
        layoutLinks= $('.layout-control a'),
        bookingLayout= $('.booking-layout a'),
        listStyle= $('.tour-post'),
        CalLayouts= $('.c-layouts');

    layoutLinks.on('click', function () {
        var targetClass = 'col-xs-' + $(this).data('layout');

        tourItem.removeClass('col-md-4 col-xs-12 col-xs-4 col-md-4 col-sm-6');
        tourItem.addClass(targetClass);

        if (tourItem.hasClass('col-xs-12')) {
            listStyle.addClass('list-style');
        } else {
            listStyle.removeClass('list-style');
        }
        layoutLinks.removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".calender-show").on('click', function () {
        var CalClass = $(this).data('layout');
        CalLayouts.removeClass('show');
        $(".calender-layout").addClass(CalClass);
        bookingLayout.removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".list-show").on('click', function () {
        var CalClass = $(this).data('layout');
        CalLayouts.removeClass('show');
        $(".calender-listing").addClass(CalClass);
        bookingLayout.removeClass('active');
        $(this).addClass('active');
        return false;
    });


    /* ...................................................................................
     * Advance Search Range Filter
     * ....................................................................................*/
    var sliderRange = $( "#slider-range" );
    if(jQuery().slider) {
        sliderRange.slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + sliderRange.slider("values", 0) +
        " - $" + sliderRange.slider("values", 1));

    }


    /* ...................................................................................
     * Nice Scroll Function
     * http://slicknav.com/
     * ....................................................................................*/

    if(jQuery().slicknav) {
        $('.main-nav .main-menu').slicknav({
            prependTo: ".site-branding",
            allowParentLinks: true
        });
    }

    /* ...................................................................................
     * Google Map
     * ....................................................................................*/

    if($("#location-map").length > 0){

        $(window).on("load", function(){
            var mapOptions = {
                center: { lat: -33.8818464, lng: 151.205348},
                zoom: 18
            };
            var map = new google.maps.Map(document.getElementById('location-map'),  mapOptions);
        });
    }



})(jQuery);