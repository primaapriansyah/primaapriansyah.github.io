var $ = jQuery.noConflict();


$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(650).css({'overflow':'visible'});
})

jQuery(document).ready(function ($) {

	"use strict";

	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
	$('body').append('<script type="text/javascript" src="customizer/script.js"></script>');

	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 700,
			animation: {
				opacity: 'none', height: 'show'
			},
			speed: 500
		});
		$('.sf-menu li li a').prepend('<i class="arrow_carrot-2right"></i>');
		$('.sf-menu li li .sf-sub-indicator i').removeClass('icon icon-bottom4').addClass('icon icon-move13');
	}
	// Login
	$(".header-login").hover(function() {
		$('.login_show').slideDown('fast');
	}, function() {
		$('.login_show').slideUp('fast');
	});
	// Register
	$(".header-register").hover(function() {
		$('.register_show').slideDown('fast');
	}, function() {
		$('.register_show').slideUp('fast');
	});
	// Languages
	$(".header-language").hover(function() {
		$('.other_languages').slideDown('fast');
	}, function() {
		$('.other_languages').slideUp('fast');
	});
	// Currency
	$(".header-currency").hover(function() {
		$('.currency-show').slideDown('fast');
	}, function() {
		$('.currency-show').slideUp('fast');
	});
	// Search
	$('.search-toggle').click(function(){
		//get collapse content selector
		var collapse_content_selector = $(this).attr('id');					

		//make the collapse content to be shown or hide
		var toggle_switch = $(this);
		$(collapse_content_selector).toggle(function(){
			if($(this).css('display')=='none'){
							//change the button label to be 'Show'
			toggle_switch.html('<i class="icon icon-active-search"></i>');
			}else{
							//change the button label to be 'Hide'
			toggle_switch.html('<i class="icon icon-active-search"></i>');
			}
		});
	});
	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			if ($(".faq")[0]) {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			} else {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			}
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			if ($(".faq")[0]) {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			} else {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			}
		});
	});
	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content").css('display', 'none');
		jQuery(this).find(".toggle-head-sign").html("<i class='fa-plus'></i>");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "<i class='fa-minus'></i>";
				} else {
					return "<i class='fa-plus'></i>";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');
	// Responsive
	$("#header nav").before('<div id="mobilepro"><i class="fa-reorder fa-times"></i></div>');
	$("#header .sf-menu a.sf-with-ul").before('<div class="subarrow"><i class="fa-angle-down"></i></div>');
	$('.subarrow').click(function () {
		$(this).parent().toggleClass("xpopdrop");
	});
	$('#mobilepro').click(function () {
		$('#header .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#mobilepro i").toggleClass("fa-reorder");
	});
	$("body").click(function() {
		$('#header .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
		$("#mobilepro i").addClass("fa-reorder");
	});
	$('#mobilepro, .sf-menu').click(function(e) {
		e.stopPropagation();
	});
	function checkWindowSize() {
		if ($(window).width() >= 959) {
			$('#header .sf-menu').css('display', 'block').removeClass("xactive");
		} else {
			$('#header .sf-menu').css('display', 'none');
		}
	}
	$(window).load(checkWindowSize);
	$(window).resize(checkWindowSize);
	// ToTop
	jQuery('#toTop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
	// Search
	$(".search_icon").click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('.icon_close').addClass('icon_search');
			$('.s_form').fadeOut('slow').removeClass('animated fadeInUp').addClass('animated fadeOutUp');
		} else {
			$(this).addClass('opened');
			$('.icon_close').removeClass('icon_search');
			$(".s_form").fadeIn('slow').removeClass('animated fadeOutUp').addClass('animated fadeInUp');
			$('.search_icon #inputhead').focus();
		}
	});
	$("body").click(function() {
		$('.search_icon').removeClass('opened');
		$('.icon_close').addClass('icon_search');
		$('.s_form').fadeOut('slow').removeClass('animated fadeInUp').addClass('animated fadeOutUp');
	});
	$('.search').click(function(e) {
		e.stopPropagation();
	});

	// Notification
	$(".notification-close").click(function () {
		$(this).parent().slideUp("slow");
		return false;
	});
	// Nivo Slider
	if ($("#nivo-slider")[0]) {
		$('#nivo-slider').nivoSlider({pauseTime:5000});
	}
	// Modern Slider
	if ($(".modern-slider")[0]) {
		$('.modern-slider').modernSlider({
			effect:'easeInOutElastic',
			pause:4000,
			autoplay:true
		});
		$(window).load(methodToFixLayout);
		$(window).bind("resize", methodToFixLayout);
		$(window).bind("change", methodToFixLayout);
	}
	// FlexSlider
	if ($(".big_flex")[0]) {
		jQuery('.big_flex').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".general_flex")[0]) {
		jQuery('.general_flex').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 8000,
			animationSpeed: 1400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
		});
	}
	// iView Show
	if ($("#iview")[0]) {
		jQuery('#iview').iView({
			pauseTime: 7000,
			directionNav: false,
			controlNav: true,
			tooltipY: -15
		});
	}
	// jCarousel
	jQuery(".preve").addClass('disabled');
	if ($(".portfolio_carousel")[0]) {
		jQuery(".portfolio_carousel").jCarouselLite({
			btnNext: ".portfolio_carousel .nexte",
			btnPrev: ".portfolio_carousel .preve",
			easing: "easeOutExpo",
			circular: false,
			visible: 3,
			scroll: 1,
			speed: 800
		});
	}
	// prettyPhoto
	if ($("a[data-gal^='lightbox']")[0]) {
		$("a[data-gal^='lightbox']").prettyPhoto({
			animation_speed: 'normal',
			theme: 'dark_rounded',
			autoplay_slideshow: false,
			overlay_gallery: true,
			show_title: false
		});
	}
	// quicksand
	if ($(".filter")[0]) {
		var $portfolioClone = $(".portfolio").clone();
		$(".filter a").click(function (e) {
			$(".filter li").removeClass("current");
			var $filterClass = $(this).parent().attr("class");
			if ($filterClass === "all") {
				var $filteredPortfolio = $portfolioClone.find("li");
			} else {
				var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
			}
			// Call quicksand
			$(".portfolio").quicksand($filteredPortfolio, {
				duration: 800,
				useScaling: 'true',
				easing: 'easeInOutCubic',
				adjustHeight: 'dynamic'
			}, function () {
				$(".portfolio a[data-gal^='lightbox']").prettyPhoto({
					animation_speed: 'normal',
					theme: 'dark_rounded',
					autoplay_slideshow: false,
					overlay_gallery: true,
					show_title: false
				});
			});
			$(this).parent().addClass("current");
			e.preventDefault();
		});
	}
	// Ajax Contact
	if ($("#contactForm")[0]) {
		$('#contactForm').submit(function () {
			$('#contactForm .error').remove();
			$('#contactForm .requiredField').removeClass('fielderror');
			$('#contactForm .requiredField').addClass('fieldtrue');
			$('#contactForm span strong').remove();
			var hasError = false;
			$('#contactForm .requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).addClass('fielderror');
					$('#contactForm span').html('<strong>*Please fill out all fields.</strong>');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).addClass('fielderror');
						$('#contactForm span').html('<strong>Is incorrect your email address</strong>');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm').slideDown('normal', function () {
					$("#contactForm #sendMessage").addClass('load-color');
					$("#contactForm #sendMessage").attr("disabled", "disabled").addClass("btn-success").val('Sending message. Please wait...');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="fa-check"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time.</p></div>');
					});
				});
			}
			return false;
		});
	}
	// Tipsy
	$('.toptip').tipsy({fade: true,gravity: 's'});
	$('.bottomtip').tipsy({fade: true,gravity: 'n'});
	$('.righttip').tipsy({fade: true,gravity: 'w'});
	$('.lefttip').tipsy({fade: true,gravity: 'e'});
	// T20 Custom
	var isDesktop = (function() {
		return !('ontouchstart' in window) // works on most browsers 
		|| !('onmsgesturechange' in window); // works on ie10
	})();
	window.isDesktop = isDesktop;
	if( isDesktop ){
		if ($(".animated")[0]) {
			jQuery('.animated').css('opacity', '0');
		}
		jQuery('.animt').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			$curr.bind('animt', function () {
				$curr.css('opacity', '');
				$curr.addClass($curr.data('gen'));
			});
		});
		jQuery('.animated').each(function () {
			var $curr = jQuery(this);
			var $currOffset = $curr.attr('data-gen-offset');
			if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
				$currOffset = 'bottom-in-view';
			}
			$curr.waypoint(function () {
				$curr.trigger('animt');
			}, {
				triggerOnce: true,
				offset: $currOffset
			});
		});

		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0
		});
	}
	// Progress Load
	if ($(".progress-bar > span")[0]) {
		$('.progress-bar > span').waypoint(function() {
			$(this).each(function() {
				$(this).delay(400).animate({
					width: $(this).attr('rel') + "%"
				}, 800).delay(10000);
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
	}
	// MinusMargin for Slider and Breadcrumb
		var headdown_h = $('.large-header').height();
		var intro_p_h = $('.intro_p').height();
		$('.sliderr').css('margin-top', - headdown_h + 'px').css('margin-bottom', - intro_p_h + 'px');
	// Sticky
	if ($(".my_sticky")[0]){
		$('.my_sticky').before('<div class="Corpse_Sticky"></div>');
		$(window).scroll(function(){
			var wind_scr = $(window).scrollTop();
			var window_width = $(window).width();
			var head_w = $('.my_sticky').height();
			if (window_width >= 959) {
				if(wind_scr < 120){
					if($('.my_sticky').data('sticky') === true){
						$('.my_sticky').data('sticky', false);
						$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
							$('.my_sticky').removeClass('sticky');
							$('.my_sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', '').css('border-bottom', '0');
						});
					}
				} else {
					if($('.my_sticky').data('sticky') === false || typeof $('.my_sticky').data('sticky') === 'undefined'){
						$('.my_sticky').data('sticky', true);
						$('.my_sticky').stop(true).animate({opacity : 0},300,function(){
							$('.my_sticky').addClass('sticky');
							$('.my_sticky.sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', head_w + 'px').css('border-bottom', '2px solid #F5F5F5');
						});
					}
				}
			}
		});
		$(window).resize(function(){
			var window_width = $(window).width();
			if (window_width <= 959) {
				if($('.my_sticky').hasClass('sticky')){
					$('.my_sticky').removeClass('sticky');
					$('.my_sticky').stop(true).animate({opacity : 0}, 300, function(){
						$('.my_sticky').removeClass('sticky');
						$('.my_sticky').stop(true).animate({opacity : 1}, 300);
						$('.Corpse_Sticky').css('padding-top', '');
					});
				}
			}
		});
	}
	
});

//------------------------------
//Custom select
//------------------------------
jQuery(document).ready(function(){
	// Custom Select
	jQuery('.mySelectBoxClass').customSelect();

	/* -OR- set a custom class name for the stylable element */
	//jQuery('.mySelectBoxClass').customSelect({customClass:'mySelectBoxClass'});
});

function mySelectUpdate(){
	setTimeout(function (){
		$('.mySelectBoxClass').trigger('update');
	}, 200);
}

$(window).resize(function() {
	mySelectUpdate();
});


$(document).ready(function() {
	"use strict";

	/* Custom checkable */
	$('.styled-checkbox input, .styled-radio input').iCheck({
		checkboxClass: 'icheckbox',
		radioClass: 'iradio',
		increaseArea: '20%'
	});
	
	/* jQuery UI - Datepicker */
	$('input.date').datepicker();
	
	// filter open-close
	$('.another-toggle').each(function(){
		if( $('h5',this).hasClass('active') ){
			$(this).find('.another-toggle-inner').show();
		}
	});
	$('.another-toggle h5').click(function(){
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).next('.another-toggle-inner').slideUp();
		} else {
			$(this).addClass('active');
			$(this).next('.another-toggle-inner').slideDown();
		}
	});
	
});



$(document).ready(function() {
	
	"use strict";
	
	// lightbox
	$('.image-lightbox').magnificPopup({type: 'image'});
	
	// More-less
	$(".show-more-btn a").on("click", function() {
		var $link = $(this);
		var $content = $link.parent().prev("div.show-more");
		var linkText = $link.text();
		
		switchClasses($content);

		$link.text(getShowLinkText(linkText));
		
		return false;
	});

	function switchClasses($content){
		if($content.hasClass("short-text")){  
			$content.switchClass("short-text", "full-text", 300);
		} else {
			$content.switchClass("full-text", "short-text", 300);
		}
	}

	function getShowLinkText(currentText){
		var newText = '';
		
		if (currentText.toUpperCase() === "SHOW MORE") {
			newText = "show less";
		} else {
			newText = "show more";
		}
		
		return newText;
	}
	
	//Google Maps
	var $map = $('#map');
	if( $map.length ) {
		$map.gMap({
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 12,
			scrollwheel: false,
			markers: [
				{ 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' }
			]
		});
	}
	var $smallMap = $('#map-small');
	if( $smallMap.length ) {
		$smallMap.gMap({
			address: 'No: 58 A, East Madison St, Baltimore, MD, USA',
			zoom: 10,
			streetViewControl: false,
			scrollwheel: true,
			markers: [
				{ 'address' : 'No: 58 A, East Madison St, Baltimore, MD, USA' }
			]
		});
	}

});



$(function(){ 

	// Show-Hide
    $(".show_hide_wrapper").hide();
	
	// Show-Hide - features
	$('.show_hide').click(function( e ){
        e.preventDefault();
    	$(".show_hide_wrapper").slideToggle("slow");
        var isShow = $(this).text() == 'Change Your Search';
        $(this).text(isShow ? 'Cancel Searching' : 'Change Your Search').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw1").hide();
	$('.fsh1').click(function( e ){
        e.preventDefault();
    	$(".fshw1").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw2").hide();
	$('.fsh2').click(function( e ){
        e.preventDefault();
    	$(".fshw2").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw3").hide();
	$('.fsh3').click(function( e ){
        e.preventDefault();
    	$(".fshw3").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw4").hide();
	$('.fsh4').click(function( e ){
        e.preventDefault();
    	$(".fshw4").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw5").hide();
	$('.fsh5').click(function( e ){
        e.preventDefault();
    	$(".fshw5").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	$(".fshw6").hide();
	$('.fsh6').click(function( e ){
        e.preventDefault();
    	$(".fshw6").slideToggle("slow");
        var isShow = $(this).text() == 'Show room facilities';
        $(this).text(isShow ? 'Hide room facilities' : 'Show room facilities').css({backgroundPosition:'0 '+ (isShow?-18:0) +'px'});
	});
	
	// fitVids
	$("body").fitVids();

});

$(document).ready(function(){

	"use strict";
	
	

});


function methodToFixLayout( e ) {var widthmodern = $('#layout').width();$('.modern-slider, .modern-slider img').css('width', widthmodern + 'px');}
function mycarousel4_initCallback(e){e.buttonNext.hover(function(){e.stopAuto()},function(){e.startAuto()});e.buttonPrev.hover(function(){e.stopAuto()},function(){e.startAuto()});e.clip.hover(function(){e.stopAuto()},function(){e.startAuto()})};

