/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;  (function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,s=r?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,q="fade"===c.animation,p=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!q)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();p&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(b===39||b===37)){b=b===39?a.getTarget("next"):b===37?a.getTarget("prev"):false;a.flexAnimate(b,c.pauseOnAction)}});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=g<0?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&
 a.pause()},function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());r&&c.touch&&f.touch();(!q||q&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),
 g=b.index();!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===
 c.controlNav?'<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(s,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});r&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#"><i class="arrow_carrot-left_alt2"></i>'+c.prevText+'</a></li><li><a class="'+e+'next" href="#"><i class="arrow_carrot-right_alt2 '+c.nextText+'"></i>'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(s,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 r&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(s,function(b){b.preventDefault();if(d(this).hasClass(e+"pause")){a.manualPause=true;a.manualPlay=false;a.pause()}else{a.manualPause=false;a.manualPlay=true;a.play()}});r&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+
 "pause").addClass(e+"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!q&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/o+2:1),a.setProps(f+j,"setTouch"))}function g(){if(a.animatingTo===
 a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>o/2)?a.flexAnimate(l,c.pauseOnAction):a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchmove",b,!1);i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,o,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),o=l?a.h:a.w,k=Number(new Date),f=h&&
 m&&a.animatingTo===a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*o:(a.currentSlide+a.cloneOffset)*o,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),q?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||q){var c=q?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){p&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(p&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(q)a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,
 c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup);else{var o=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*o:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*o:m?(a.count-1-b+a.cloneOffset)*o:(b+a.cloneOffset)*o;a.setProps(b,
 "",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",function(){a.wrapup(o)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(o)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!q&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===
 a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};
 a.canAdvance=function(b,g){var d=p?a.pagingCount-1:a.last;return g?!0:p&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:p&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&!p?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-
 1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?
 "translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(q)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",
 position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*
 (a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+
 "active-slide")};a.doMath=function(){var b=a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===
 a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>
 a.last&&(a.currentSlide-=1,a.animatingTo-=1),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,
 a.slides).remove():l&&m?a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,
 directionNav:!0,prevText:"",nextText:"",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?
 i.selector:".slides > li");1===c.length?(c.fadeIn(400),i.start&&i.start(a)):void 0===a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
 
 
 
 
 
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


























 
 /*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

			base.userOptions = options;
			base.loadContent();
		},

		loadContent : function(){
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this,[base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var url = base.options.jsonPath;

				function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this,[data]);
					} else {
						var content = "";
						for(var i in data["owl"]){
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				}
				$.getJSON(url,getData);
			} else {
				base.logIn();
			}
		},

		logIn : function(action){
			var base = this;

			base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
					  .data("owl-originalClasses", base.$elem.attr("class"));

			base.$elem.css({opacity: 0});
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible;
			base.setVars();
		},

		setVars : function(){
			var base = this;
			if(base.$elem.children().length === 0){return false}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},

		onStartup : function(){
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();

			if(base.options.transitionStyle !== false){
				base.transitionTypes(base.options.transitionStyle);
			}
			if(base.options.autoPlay === true){
				base.options.autoPlay = 5000;
			}
			base.play();

			base.$elem.find(".owl-wrapper").css("display","block")

			if(!base.$elem.is(":visible")){
				base.watchVisibility();
			} else {
				base.$elem.css("opacity",1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this,[base.$elem]);
			}
		},

		eachMoveUpdate : function(){
			var base = this;

			if(base.options.lazyLoad === true){
				base.lazyLoad();
			}
			if(base.options.autoHeight === true){
				base.autoHeight();
			}
			base.onVisibleItems();

			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this,[base.$elem]);
			}
		},

		updateVars : function(){
			var base = this;
			if(typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this,[base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if(typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this,[base.$elem]);
			}
		},

		reload : function(elements){
			var base = this;
			setTimeout(function(){
				base.updateVars();
			},0)
		},

		watchVisibility : function(){
			var base = this;

			if(base.$elem.is(":visible") === false){
				base.$elem.css({opacity: 0});
				clearInterval(base.autoPlayInterval);
				clearInterval(base.checkVisible);
			} else {
				return false;
			}
			base.checkVisible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","block");
		},

		baseClass : function(){
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if(!hasBaseClass){
				base.$elem.addClass(base.options.baseClass);
			}

			if(!hasThemeClass){
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems : function(){
			var base = this;

			if(base.options.responsive === false){
				return false;
			}
			if(base.options.singleItem === true){
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(base.options.responsiveBaseWidth).width();

			if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
				base.options.items = base.orignalItems;
			}

			if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
				//Reorder array by screen size
				base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
				for(var i in base.options.itemsCustom){
					if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {

				if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
					base.options.items = base.options.itemsDesktop[1];
				}

				if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
					base.options.items = base.options.itemsDesktopSmall[1];
				}

				if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
					base.options.items = base.options.itemsTablet[1];
				}

				if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
					base.options.items = base.options.itemsTabletSmall[1];
				}

				if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
					base.options.items = base.options.itemsMobile[1];
				}
			}

			//if number of items is less than declared
			if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
				base.options.items = base.itemsAmount;
			}
		},

		response : function(){
			var base = this,
				smallDelay;
			if(base.options.responsive !== true){
				return false
			}
			var lastWindowWidth = $(window).width();

			base.resizer = function(){
				if($(window).width() !== lastWindowWidth){
					if(base.options.autoPlay !== false){
						clearInterval(base.autoPlayInterval);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function(){
						lastWindowWidth = $(window).width();
						base.updateVars();
					},base.options.responsiveRefreshRate);
				}
			}
			$(window).resize(base.resizer)
		},

		updatePosition : function(){
			var base = this;
			base.jumpTo(base.currentItem);
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
		},

		appendItemsSizes : function(){
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.$owlItems.each(function(index){
				var $this = $(this);
				$this
					.css({"width": base.itemWidth})
					.data("owl-item",Number(index));

				if(index % base.options.items === 0 || index === lastItem){
					if(!(index > lastItem)){
						roundPages +=1;
					}
				}
				$this.data("owl-roundPages",roundPages)
			});
		},

		appendWrapperSizes : function(){
			var base = this;
			var width = 0;

			var width = base.$owlItems.length * base.itemWidth;

			base.$owlWrapper.css({
				"width": width*2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items)
		},

		max : function(){
			var base = this;
			var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
			if(base.options.items > base.itemsAmount){
				base.maximumItem = 0;
				maximum = 0
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},

		min : function(){
			return 0;
		},

		loops : function(){
			var base = this;

			base.positionsInArray = [0];
			base.pagesInArray = [];
			var prev = 0;
			var elWidth = 0;

			for(var i = 0; i<base.itemsAmount; i++){
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);

				if(base.options.scrollPerPage === true){
					var item = $(base.$owlItems[i]);
					var roundPageNum = item.data("owl-roundPages");
					if(roundPageNum !== prev){
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},

		buildControls : function(){
			var base = this;
			if(base.options.navigation === true || base.options.pagination === true){
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if(base.options.pagination === true){
				base.buildPagination();
			}
			if(base.options.navigation === true){
				base.buildButtons();
			}
		},

		buildButtons : function(){
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>")
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>",{
				"class" : "owl-prev",
				"html" : base.options.navigationText[0] || ""
				});

			base.buttonNext = $("<div/>",{
				"class" : "owl-next",
				"html" : base.options.navigationText[1] || ""
				});

			buttonsWrapper
			.append(base.buttonPrev)
			.append(base.buttonNext);

			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
			})

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
				if($(this).hasClass("owl-next")){
					base.next();
				} else{
					base.prev();
				}
			})
		},

		buildPagination : function(){
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
				event.preventDefault();
				if(Number($(this).data("owl-page")) !== base.currentItem){
					base.goTo( Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for(var i = 0; i<base.itemsAmount; i++){
				if(i % base.options.items === 0){
					counter +=1;
					if(lastPage === i){
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>",{
						"class" : "owl-page"
						});
					var paginationButtonInner = $("<span></span>",{
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page",lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages",counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation : function(){
			var base = this;

			if(base.options.navigation === false){
				return false;
			}
			if(base.options.rewindNav === false){
				if(base.currentItem === 0 && base.maximumItem === 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem === 0 && base.maximumItem !== 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls : function(){
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls){
				if(base.options.items >= base.itemsAmount){
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls : function(){
			var base = this;
			if(base.owlControls){
				base.owlControls.remove();
			}
		},

		next : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
				if(base.options.rewindNav === true){
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		prev : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
				base.currentItem = 0
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if(base.currentItem < 0){
				if(base.options.rewindNav === true){
					base.currentItem = base.maximumItem;
					speed = "rewind"
				} else {
					base.currentItem =0;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		goTo : function(position,speed,drag){
			var base = this;

			if(base.isTransition){
				return false;
			}
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}

			base.currentItem = base.owl.currentItem = position;
			if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
				base.swapSpeed(0)
				if(base.browser.support3d === true){
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position],1);
				}
				base.afterGo();
				base.singleItemTransition();
				
				return false;
			}
			var goToPixel = base.positionsInArray[position];

			if(base.browser.support3d === true){
				base.isCss3Finish = false;

				if(speed === true){
					base.swapSpeed("paginationSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);

				} else if(speed === "rewind" ){
					base.swapSpeed(base.options.rewindSpeed);
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);

				} else {
					base.swapSpeed("slideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(speed === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(speed === "rewind" ){
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo : function(position){
			var base = this;
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem || position === -1){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}
			base.swapSpeed(0)
			if(base.browser.support3d === true){
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position],1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},

		afterGo : function(){
			var base = this;

			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
			base.prevArr.shift(0)

			if(base.prevItem !== base.currentItem){
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();

				if(base.options.autoPlay !== false){
					base.checkAp();
				}
			}
			if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this,[base.$elem]);
			}
		},

		stop : function(){
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlayInterval);
		},

		checkAp : function(){
			var base = this;
			if(base.apStatus !== "stop"){
				base.play();
			}
		},

		play : function(){
			var base = this;
			base.apStatus = "play";
			if(base.options.autoPlay === false){
				return false;
			}
			clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = setInterval(function(){
				base.next(true);
			},base.options.autoPlay);
		},

		swapSpeed : function(action){
			var base = this;
			if(action === "slideSpeed"){
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if(action === "paginationSpeed" ){
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if(typeof action !== "string"){
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},

		addCssSpeed : function(speed){
			var base = this;
			return {
				"-webkit-transition": "all "+ speed +"ms ease",
				"-moz-transition": "all "+ speed +"ms ease",
				"-o-transition": "all "+ speed +"ms ease",
				"transition": "all "+ speed +"ms ease"
			};
		},

		removeTransition : function(){
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate : function(pixels){
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"transform": "translate3d("+pixels+"px, 0px,0px)"
			};
		},

		transition3d : function(value){
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},

		css2move : function(value){
			var base = this;
			base.$owlWrapper.css({"left" : value})
		},

		css2slide : function(value,speed){
			var base = this;

			base.isCssFinish = false;
			base.$owlWrapper.stop(true,true).animate({
				"left" : value
			}, {
				duration : speed || base.options.slideSpeed ,
				complete : function(){
					base.isCssFinish = true;
				}
			});
		},

		checkBrowser : function(){
			var base = this;

			//Check 3d support
			var	translate3D = "translate3d(0px, 0px, 0px)",
				tempElem = document.createElement("div");

			tempElem.style.cssText= "  -moz-transform:"    + translate3D +
								  "; -ms-transform:"     + translate3D +
								  "; -o-transform:"      + translate3D +
								  "; -webkit-transform:" + translate3D +
								  "; transform:"         + translate3D;
			var	regex = /translate3d\(0px, 0px, 0px\)/g,
				asSupport = tempElem.style.cssText.match(regex),
				support3d = (asSupport !== null && asSupport.length === 1);

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d" : support3d,
				"isTouch" : isTouch
			}
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes : function(){
			var base = this;
			var types = ["s","e","x"];

			base.ev_types = {};

			if(base.options.mouseDrag === true && base.options.touchDrag === true){
				types = [
					"touchstart.owl mousedown.owl",
					"touchmove.owl mousemove.owl",
					"touchend.owl touchcancel.owl mouseup.owl"
				];
			} else if(base.options.mouseDrag === false && base.options.touchDrag === true){
				types = [
					"touchstart.owl",
					"touchmove.owl",
					"touchend.owl touchcancel.owl"
				];
			} else if(base.options.mouseDrag === true && base.options.touchDrag === false){
				types = [
					"mousedown.owl",
					"mousemove.owl",
					"mouseup.owl"
				];
			}

			base.ev_types["start"] = types[0];
			base.ev_types["move"] = types[1];
			base.ev_types["end"] = types[2];
		},

		disabledEvents :  function(){
			var base = this;
			base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
			base.$elem.on("mousedown.disableTextSelect", function(e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},

		gestures : function(){
			var base = this;

			var locals = {
				offsetX : 0,
				offsetY : 0,
				baseElWidth : 0,
				relativePos : 0,
				position: null,
				minSwipe : null,
				maxSwipe: null,
				sliding : null,
				dargging: null,
				targetElement : null
			}

			base.isCssFinish = true;

			function getTouches(event){
				if(event.touches){
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					}
				} else {
					if(event.pageX !== undefined){
						return {
							x : event.pageX,
							y : event.pageY
						}
					} else {
						return {
							x : event.clientX,
							y : event.clientY
						}
					}
				}
			}

			function swapEvents(type){
				if(type === "on"){
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if(type === "off"){
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}

			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if (event.which === 3) {
					return false;
				}
				if(base.itemsAmount <= base.options.items){
					return;
				}
				if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}
				if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}

				if(base.options.autoPlay !== false){
					clearInterval(base.autoPlayInterval);
				}

				if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
					base.$owlWrapper.addClass("grabbing")
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());

				var position = $(this).position();
				locals.relativePos = position.left;
				
				locals.offsetX = getTouches(event).x - position.left;
				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event){
				var event = event.originalEvent || event || window.event;

				base.newPosX = getTouches(event).x- locals.offsetX;
				base.newPosY = getTouches(event).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;	

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base,[base.$elem]);
				}

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				}
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				}

				base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
				if(base.browser.support3d === true){
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event){
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if(base.browser.isTouch !== true){
					base.$owlWrapper.removeClass("grabbing");
				}

				if(base.newRelativeX<0){
					base.dragDirection = base.owl.dragDirection = "left"
				} else {
					base.dragDirection = base.owl.dragDirection = "right"
				}

				if(base.newRelativeX !== 0){
					var newPosition = base.getNewPosition();
					base.goTo(newPosition,false,"drag");
					if(locals.targetElement === event.target && base.browser.isTouch !== true){
						$(event.target).on("click.disable", function(ev){
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
						var handlers = $._data(event.target, "events")["click"];
						var owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart); 
		},

		getNewPosition : function(){
			var base = this,
				newPosition;
			
			newPosition = base.closestItem();

			if(newPosition>base.maximumItem){
				base.currentItem = base.maximumItem;
				newPosition  = base.maximumItem;
			} else if( base.newPosX >=0 ){
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem : function(){
			var base = this,
				array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
				goal = base.newPosX,
				closest = null;

			$.each(array, function(i,v){
				if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
					closest = v;
					if(base.options.scrollPerPage === true){
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				} 
				else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
					if(base.options.scrollPerPage === true){
						closest = array[i+1] || array[array.length-1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i+1];
						base.currentItem = i+1;
					}
				}
			});
			return base.currentItem;
		},

		moveDirection : function(){
			var base = this,
				direction;
			if(base.newRelativeX < 0 ){
				direction = "right"
				base.playDirection = "next"
			} else {
				direction = "left"
				base.playDirection = "prev"
			}
			return direction
		},

		customEvents : function(){
			var base = this;
			base.$elem.on("owl.next",function(){
				base.next();
			});
			base.$elem.on("owl.prev",function(){
				base.prev();
			});
			base.$elem.on("owl.play",function(event,speed){
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop",function(){
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo",function(event,item){
				base.goTo(item)
			});
			base.$elem.on("owl.jumpTo",function(event,item){
				base.jumpTo(item)
			});
		},
		
		stopOnHover : function(){
			var base = this;
			if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}
			for(var i=0; i<base.itemsAmount; i++){
				var $item = $(base.$owlItems[i]);

				if($item.data("owl-loaded") === "loaded"){
					continue;
				}

				var	itemNumber = $item.data("owl-item"),
					$lazyImg = $item.find(".lazyOwl"),
					follow;

				if( typeof $lazyImg.data("src") !== "string"){
					$item.data("owl-loaded","loaded");
					continue;
				}				
				if($item.data("owl-loaded") === undefined){
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded","checked");
				}
				if(base.options.lazyFollow === true){
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
					base.lazyPreload($item,$lazyImg);
				}
			}
		},

		lazyPreload : function($item,$lazyImg){
			var base = this,
				iterations = 0;
				if ($lazyImg.prop("tagName") === "DIV") {
					$lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
					var isBackgroundImg=true;
				} else {
					$lazyImg[0].src = $lazyImg.data("src");
				}
				checkLazyImage();

			function checkLazyImage(){
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if(iterations <= 100){//if image loads in less than 10 seconds 
					setTimeout(checkLazyImage,100);
				} else {
					showImage();
				}
			}
			function showImage(){
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
				if(typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this,[base.$elem]);
				}
			}
		},

		autoHeight : function(){
			var base = this;
			var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

			if($currentimg.get(0) !== undefined ){
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage(){
				iterations += 1;
				if ( base.completeImg($currentimg.get(0)) ) {
					addHeight();
				} else if(iterations <= 100){ //if image loads in less than 10 seconds 
					setTimeout(checkImage,100);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}

			function addHeight(){
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height",$currentItem+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")){
					setTimeout(function(){
						base.wrapperOuter.addClass("autoHeight");
					},0);
				}
			}
		},

		completeImg : function(img) {
		    if (!img.complete) {
		        return false;
		    }
		    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
		        return false;
		    }
		    return true;
		},

		onVisibleItems : function(){
			var base = this;

			if(base.options.addClassActive === true){
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
				base.visibleItems.push(i);

				if(base.options.addClassActive === true){
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},

		transitionTypes : function(className){
			var base = this;
			//Currently available: "fade","backSlide","goDown","fadeUp"
			base.outClass = "owl-"+className+"-out";
			base.inClass = "owl-"+className+"-in";
		},

		singleItemTransition : function(){
			var base = this;
			base.isTransition = true;

			var outClass = base.outClass,
				inClass = base.inClass,
				$currentItem = base.$owlItems.eq(base.currentItem),
				$prevItem = base.$owlItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
	            .addClass('owl-origin')
	            .css({
	            	"-webkit-transform-origin" : origin+"px",
	            	"-moz-perspective-origin" : origin+"px",
	            	"perspective-origin" : origin+"px"
	            });
	        function transStyles(prevPos,zindex){
				return {
					"position" : "relative",
					"left" : prevPos+"px"
				};
			}

	        var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

			$prevItem
			.css(transStyles(prevPos,10))
			.addClass(outClass)
			.on(animEnd, function() {
				base.endPrev = true;
				$prevItem.off(animEnd);
		    	base.clearTransStyle($prevItem,outClass);
			});

			$currentItem
			.addClass(inClass)
			.on(animEnd, function() {
				base.endCurrent = true;
				$currentItem.off(animEnd);
		    	base.clearTransStyle($currentItem,inClass);
		    });
		},

		clearTransStyle : function(item,classToRemove){
			var base = this;
			item.css({
					"position" : "",
					"left" : ""
				})
				.removeClass(classToRemove);
			if(base.endPrev && base.endCurrent){
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},

		owlStatus : function(){
			var base = this;
			base.owl = {
				"userOptions"	: base.userOptions,
				"baseElement" 	: base.$elem,
				"userItems"		: base.$userItems,
				"owlItems"		: base.$owlItems,
				"currentItem"	: base.currentItem,
				"prevItem"		: base.prevItem,
				"visibleItems"	: base.visibleItems,
				"isTouch" 		: base.browser.isTouch,
				"browser"		: base.browser,
				"dragDirection" : base.dragDirection
			}
		},

		clearEvents : function(){
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},

		unWrap : function(){
			var base = this;
			if(base.$elem.children().length !== 0){
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if(base.owlControls){
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem
				.attr("style", base.$elem.data("owl-originalStyles") || "")
				.attr("class", base.$elem.data("owl-originalClasses"));
		},

		destroy : function(){
			var base = this;
			base.stop();
			clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},

		reinit : function(newOptions){
			var base = this;
			var options = $.extend({}, base.userOptions, newOptions);
		 	base.unWrap();
		 	base.init(options,base.$elem);
		},

		addItem : function(htmlString,targetPosition){
			var base = this,
				position;

			if(!htmlString){return false}

			if(base.$elem.children().length === 0){
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}
			if(position >= base.$userItems.length || position === -1){
				base.$userItems.eq(-1).after(htmlString)
			} else {
				base.$userItems.eq(position).before(htmlString)
			}

			base.setVars();
		},

		removeItem : function(targetPosition){
			var base = this,
				position;

			if(base.$elem.children().length === 0){return false}
			
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}

			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}

	};

	$.fn.owlCarousel = function( options ){
		return this.each(function() {
			if($(this).data("owl-init") === true){
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
			$.data( this, "owlCarousel", carousel );
		});
	};

	$.fn.owlCarousel.options = {

		items : 5,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsTabletSmall : false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,

		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		autoPlay : false,
		stopOnHover : false,

		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers : false,

		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth	: window,
		

		baseClass : "owl-carousel",
		theme : "owl-theme",

		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",

		autoHeight : false,

		jsonPath : false,
		jsonSuccess : false,

		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,

		addClassActive : false,
		transitionStyle : false,

		beforeUpdate : false,
		afterUpdate : false,
		beforeInit : false,
		afterInit : false,
		beforeMove : false,
		afterMove : false,
		afterAction : false,
		startDragging : false,
		afterLazyLoad: false
		
	};
})( jQuery, window, document );











$(document).ready(function() {

	"use strict";
	
	/* 4 Columns Item Carousel */
	
	var itemCarouselCol4 = $("#item-carousel-col-4");
 
	itemCarouselCol4.owlCarousel({
		items : 4, //4 items above 1199px browser width
		itemsDesktop : [1199,4], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,3], //3 betweem 991px and 768px
		itemsTablet: [767,2], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true
	});
	
	// Custom Navigation Events
	$(".item-carousel4-next").click(function(){
		itemCarouselCol4.trigger('owl.next');
	})
	$(".item-carousel4-prev").click(function(){
		itemCarouselCol4.trigger('owl.prev');
	})
	
	/* 4 Columns Item Carousel with AutoPlay */
	
	var itemCarouselCol4Auto = $("#item-carousel-col-4-auto");
 
	itemCarouselCol4Auto.owlCarousel({
		items : 4, //4 items above 1199px browser width
		itemsDesktop : [1199,4], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,3], //3 betweem 991px and 768px
		itemsTablet: [767,2], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true,
		autoPlay: 7000, //autoPlay : 5000 to play every 5 seconds. If you set autoPlay: true default speed will be 5 seconds.
		stopOnHover: true,
	});
	
	// Custom Navigation Events
	$(".item-carousel4-auto-next").click(function(){
		itemCarouselCol4Auto.trigger('owl.next');
	})
	$(".item-carousel4-auto-prev").click(function(){
		itemCarouselCol4Auto.trigger('owl.prev');
	})
	
	
	/* 3 Columns Item Carousel */
	
	var itemCarouselCol3 = $("#item-carousel-col-3");
 
	itemCarouselCol3.owlCarousel({
		items : 3, //4 items above 1199px browser width
		itemsDesktop : [1199,3], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,2], //3 betweem 991px and 768px
		itemsTablet: [767,1], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true
	});
	
	// Custom Navigation Events
	$(".item-carousel3-next").click(function(){
		itemCarouselCol3.trigger('owl.next');
	})
	$(".item-carousel3-prev").click(function(){
		itemCarouselCol3.trigger('owl.prev');
	})
	
	/* 3 Columns Item Carousel with AutoPlay */
	
	var itemCarouselCol3Auto = $("#item-carousel-col-3-auto");
 
	itemCarouselCol3Auto.owlCarousel({
		items : 3, //4 items above 1199px browser width
		itemsDesktop : [1199,3], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,2], //3 betweem 991px and 768px
		itemsTablet: [767,1], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true,
		autoPlay: 7000, //autoPlay : 5000 to play every 5 seconds. If you set autoPlay: true default speed will be 5 seconds.
		stopOnHover: true,
	});
	
	// Custom Navigation Events
	$(".item-carousel3-auto-next").click(function(){
		itemCarouselCol3Auto.trigger('owl.next');
	})
	$(".item-carousel3-auto-prev").click(function(){
		itemCarouselCol3Auto.trigger('owl.prev');
	})
	
	/* 2 Columns Item Carousel */
	
	var itemCarouselCol2 = $("#item-carousel-col-2");
 
	itemCarouselCol2.owlCarousel({
		items : 2, //4 items above 1199px browser width
		itemsDesktop : [1199,2], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,2], //3 betweem 991px and 768px
		itemsTablet: [767,1], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true
	});
	
	// Custom Navigation Events
	$(".item-carousel2-next").click(function(){
		itemCarouselCol2.trigger('owl.next');
	})
	$(".item-carousel2-prev").click(function(){
		itemCarouselCol2.trigger('owl.prev');
	})
	
	/* 2 Colums Item Carousel with AutoPlay */
	
	var itemCarouselCol2Auto = $("#item-carousel-col-2-auto");
 
	itemCarouselCol2Auto.owlCarousel({
		items : 2, //4 items above 1199px browser width
		itemsDesktop : [1199,2], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,2], //3 betweem 991px and 768px
		itemsTablet: [767,1], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : false, //
		lazyLoad : true,
		autoPlay: 7000, //autoPlay : 5000 to play every 5 seconds. If you set autoPlay: true default speed will be 5 seconds.
		stopOnHover: true,
	});
	
	// Custom Navigation Events
	$(".item-carousel2-auto-next").click(function(){
		itemCarouselCol2Auto.trigger('owl.next');
	})
	$(".item-carousel2-auto-prev").click(function(){
		itemCarouselCol2Auto.trigger('owl.prev');
	})
	
	
	/* Testimonial Carousel */
	
	var testiCarousel = $("#testi-carousel");
 
	testiCarousel.owlCarousel({
		items : 1, //4 items above 1199px browser width
		itemsDesktop : [1199,1], //4 items between 1199px and 992px
		itemsDesktopSmall : [991,1], //3 betweem 991px and 768px
		itemsTablet: [767,1], //2 items between 767px and 478px
		itemsMobile : [479,1], //1 items between 479px and 0
		pagination : true,
		lazyLoad : true
	});
	
	// Custom Navigation Events
	$(".testi-carousel-next").click(function(){
		testiCarousel.trigger('owl.next');
	})
	$(".testi-carousel-prev").click(function(){
		testiCarousel.trigger('owl.prev');
	})
	
	/* Owl Slider */
	
	$(document).ready(function() {
		$("#owl-slider").owlCarousel({
			navigation : false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem : true,
			transitionStyle : "fade",
			lazyLoad : true
		});
    });
	
	/* Owl Slider with Navigation*/
	
	var owlSliderNav = $("#owl-slider-nav");
		owlSliderNav.owlCarousel({
		singleItem : true,
		transitionStyle : "fade",
		lazyLoad : true,
	});
	
	$(".osn-next").click(function(){
		owlSliderNav.trigger('owl.next');
	})
	$(".osn-prev").click(function(){
		owlSliderNav.trigger('owl.prev');
	})
	
	/* General Owl Slider */
	
	var owlSliderGen = $("#owl-slider-general");
		owlSliderGen.owlCarousel({
		singleItem : true,
		transitionStyle : "backSlide",
		lazyLoad : true,
	});
	
	$(".osg-next").click(function(){
		owlSliderGen.trigger('owl.next');
	})
	$(".osg-prev").click(function(){
		owlSliderGen.trigger('owl.prev');
	})
	
	/* Owl Slider With Progress Bar */
	
	var time = 7; // time in seconds

	var $progressBar,
	  $bar, 
	  $elem, 
	  isPause, 
	  tick,
	  percentTime;

	//Init the carousel
	
	var owlSliderBar = $("#owl-slider-pBar");
		owlSliderBar.owlCarousel({
		slideSpeed : 500,
		paginationSpeed : 500,
		singleItem : true,
		afterInit : progressBar,
		afterMove : moved,
		startDragging : pauseOnDragging,
		transitionStyle : "fade",
		navigation : false,
		lazyLoad : true
	});
	
	$(".osb-next").click(function(){
		owlSliderBar.trigger('owl.next');
	})
	$(".osb-prev").click(function(){
		owlSliderBar.trigger('owl.prev');
	})

	//Init progressBar where elem is $("#owl-demo")
	function progressBar(elem){
	  $elem = elem;
	  //build progress bar elements
	  buildProgressBar();
	  //start counting
	  start();
	}

	//create div#progressBar and div#bar then prepend to $("#owl-demo")
	function buildProgressBar(){
	  $progressBar = $("<div>",{
		id:"progressBar"
	  });
	  $bar = $("<div>",{
		id:"bar"
	  });
	  $progressBar.append($bar).prependTo($elem);
	}

	function start() {
	  //reset timer
	  percentTime = 0;
	  isPause = false;
	  //run interval every 0.01 second
	  tick = setInterval(interval, 10);
	};

	function interval() {
	  if(isPause === false){
		percentTime += 1 / time;
		$bar.css({
		   width: percentTime+"%"
		 });
		//if percentTime is equal or greater than 100
		if(percentTime >= 100){
		  //slide to next item 
		  $elem.trigger('owl.next')
		}
	  }
	}

	//pause while dragging 
	function pauseOnDragging(){
	  isPause = true;
	}

	//moved callback
	function moved(){
	  //clear interval
	  clearTimeout(tick);
	  //start again
	  start();
	}

});














/*
* Exposure ( Detail Slider) - (http://http://exposure.blogocracy.org/)
* Copyright 2011, Kristoffer Jelbring
* Licensed under the MIT license.
*/
;(function($){$.exposure={v:'1.0.1',defaultTargetId:'exposure',wrapperClass:'exposureWrapper',targetClass:'exposureTarget',currentImageClass:'exposureCurrentImage',lastImageClass:'exposureLastImage',captionClass:'caption',imageDataClass:'extra',dataContainerClass:'exposureData',controlsClass:'exposureControls',slideshowControlsClass:'exposureSlideshowControls',firstPageClass:'exposureFirstPage',prevPageClass:'exposurePrevPage',nextPageClass:'exposureNextPage',lastPageClass:'exposureLastPage',pagingClass:'exposurePaging',playSlideshowClass:'exposurePlaySlideshow',pauseSlideshowClass:'exposurePauseSlideshow',maskClass:'exposureMask',thumbsClass:'exposureThumbs',imageClass:'exposureImage',imageHoverClass:'exposureHover',selectedImageClass:'selected',activeThumbClass:'active',currentThumbClass:'current',firstThumbClass:'first',lastThumbClass:'last',loadedClass:'loaded',activeLinkClass:'active',disabledLinkClass:'disabled',isDefined:function(v){return typeof v!=='undefined'},isObject:function(v){return typeof v==='object'},startsWith:function(s1,s2){if(s1&&s2){return s1.match("^"+s2)===s2}return false},widthDiff:function(el){return el?el.outerWidth(true)-el.width():0},heightDiff:function(el){return el?el.outerHeight(true)-el.height():0},createLink:function(text,onClick,linkClass){var a=$('<a href="javascript:void(0);"></a>').text(text).click(onClick);if(linkClass){a.addClass(linkClass)}return a},texts:{first:'First',previous:'Prev',next:'Next',last:'Last',play:'Play slideshow',pause:'Pause slideshow'}};var defaults={target:'#'+$.exposure.defaultTargetId,showThumbs:true,showControls:true,imageControls:false,controls:{prevNext:true,firstLast:true,pageNumbers:true},carouselControls:false,enableSlideshow:true,slideshowControlsTarget:null,autostartSlideshow:false,slideshowDelay:3000,onSlideshowPlayed:function(){},onSlideshowPaused:function(){},showCaptions:true,showExtraData:true,dataTarget:null,controlsTarget:null,onThumb:function(thumb){},onImage:function(image,imageData,thumb){image.siblings('.'+$.exposure.lastImageClass).remove()},onImageHoverOver:function(){},onImageHoverOut:function(){},onCarousel:function(firstImage,lastImage){},onNext:function(){},onPrev:function(){},onPageChanged:function(){},onPagingLink:function(link){return link},separatePageBrowsing:false,loop:true,onEndOfLoop:function(){},pageSize:5,viewFirstImage:true,visiblePages:5,preloadBuffer:3,keyboardNavigation:true,clickingNavigation:true,fixedContainerSize:false,maxWidth:null,maxHeight:null,stretchToMaxSize:false,fullScreen:false,onEnterFullScreen:function(mask){mask.show()},onExitFullScreen:function(target,mask){target.hide();mask.hide()},showThumbToolTip:true,onEmpty:function(gallery){gallery.hide();gallery.targetElement.remove();if(gallery.showControls){gallery.controlsElement.remove()}if(gallery.slideshowControlsTarget){gallery.slideshowControlsElement.remove()}},onInit:function(){},allowDuplicates:true,jsonSource:null};var Image=function(src,thumb,caption,data){this.src=src;this.thumb=thumb;this.caption=caption;this.data=data;this.loaded=false};$.fn.exposure=function(options){var gallery=this;var ex=$.exposure;var txt=ex.texts;$.extend(this,{images:[],sources:{},newImage:function(src,thumb,caption,data){var alreadyAdded=ex.isDefined(gallery.sources[src]);if(alreadyAdded&&!gallery.allowDuplicates){return-1}var image=new Image(src,thumb,caption,data);var imageIndex=gallery.images.push(image)-1;if(!alreadyAdded){gallery.sources[src]=imageIndex}return imageIndex},initialized:false,current:-1,deselectCurrentImage:function(){gallery.current=-1;gallery.find('li.'+ex.activeThumbClass).removeClass(ex.activeThumbClass)},loadQueue:[],addToLoadQueue:function(index){if(!gallery.loaded(index)&&!gallery.queued(index)){gallery.loadQueue.push(index)}},queued:function(index){return $.inArray(index,gallery.loadQueue)>-1},loaded:function(index){var image=gallery.getImage(index);if(image!==null){return image.loaded}return false},nextInLoadQueue:function(){var i;if(gallery.loadQueue.length>0){var next=gallery.loadQueue.shift();if(gallery.loaded(next)){i=$.inArray(next,this.loadQueue);gallery.loadQueue.splice(i,1);return gallery.nextInLoadQueue()}return next}return null},preloadNextInQueue:function(){if(gallery.loadQueue.length>0){var nextIndex=gallery.nextInLoadQueue();if(nextIndex!==null){gallery.loadImage(nextIndex,gallery.preloadNextInQueue)}}},loadImage:function(index,onload){var image=gallery.getImage(index);var img=$('<img />').addClass(ex.imageClass);var i;if(image!==null){image.loaded=true;if(gallery.queued(index)){i=$.inArray(index,gallery.loadQueue);gallery.loadQueue.splice(i,1)}if(typeof onload==='function'){img.load(onload)}img.attr('src',image.src)}return img},pageNumberForImage:function(index){return Math.ceil((index+1)/gallery.pageSize)},numberOfPages:function(){return this.pageNumberForImage(gallery.images.length-1)},atFirstPage:function(){return gallery.currentPage===1},atLastPage:function(){return gallery.currentPage===gallery.numberOfPages()},validPage:function(page){return page>0&&page<=gallery.numberOfPages()},createPaging:function(){var i;if(gallery.showControls&&gallery.controls.pageNumbers){var stop=gallery.imageControls?gallery.numberOfImages():gallery.numberOfPages();gallery.controlsElement.find('.'+ex.pagingClass).each(function(){for(i=1;i<=stop;i++){$(this).append(gallery.newPagingLink(i))}})}},updatePaging:function(newActivePage){if(gallery.showControls&&gallery.controls.pageNumbers){var current=gallery.imageControls?gallery.current+1:gallery.currentPage;var paging=gallery.controlsElement.find('.'+ex.pagingClass);paging.find(' span.'+ex.activeLinkClass).each(function(){$(this).replaceWith(gallery.newPagingLink(current))});paging.find('a[rel="'+newActivePage+'"]').each(function(){$(this).replaceWith($('<span>'+newActivePage+'</span>').addClass(ex.activeLinkClass))});var pageCount=gallery.imageControls?gallery.numberOfImages():gallery.numberOfPages();if(gallery.visiblePages>0&&pageCount>gallery.visiblePages){var firstVisiblePage=newActivePage;var lastVisiblePage=gallery.visiblePages;var flooredVisiblePages=Math.floor(gallery.visiblePages/2);if(newActivePage<=flooredVisiblePages){firstVisiblePage=1}else if(newActivePage>(pageCount-flooredVisiblePages)){lastVisiblePage=pageCount;firstVisiblePage=lastVisiblePage-gallery.visiblePages+1}else{firstVisiblePage-=flooredVisiblePages;lastVisiblePage=firstVisiblePage+gallery.visiblePages-1}paging.each(function(){$(this).children().each(function(i){var currentPage=i+1;if(currentPage>=firstVisiblePage&&currentPage<=lastVisiblePage){$(this).show()}else{$(this).hide()}})})}}},newPagingLink:function(index){var onclick=function(){var rel=Number($(this).attr('rel'));if(gallery.imageControls){gallery.viewImage(rel-1)}else{gallery.goToPage(rel)}};return ex.createLink(index,onclick).attr('rel',index)},getNextImage:function(){if(gallery.current===gallery.images.length-1){if(gallery.loop){return 0}else{gallery.onEndOfLoop()}}else{return gallery.current+1}return null},getPrevImage:function(){if(gallery.current===0){if(gallery.loop){return gallery.images.length-1}}else{return gallery.current-1}return null},currentPage:1,goToPage:function(page,imageToView){if(this.validPage(page)){gallery.find('li').removeClass(ex.currentThumbClass).hide();gallery.loadPage(page,imageToView);if(!gallery.imageControls){gallery.updatePaging(page)}gallery.currentPage=page;var disabled=ex.disabledLinkClass;if(gallery.showControls){if(gallery.atFirstPage()){if(gallery.controls.firstLast){gallery.find('.'+ex.firstPageClass).addClass(disabled)}if(!gallery.loop&&gallery.controls.prevNext){gallery.find('.'+ex.prevPageClass).hide()}}else{if(gallery.controls.firstLast){gallery.find('.'+ex.firstPageClass).removeClass(disabled)}if(!gallery.loop&&gallery.controls.prevNext){gallery.find('.'+ex.prevPageClass).show()}}if(gallery.atLastPage()){if(gallery.controls.firstLast){gallery.find('.'+ex.lastPageClass).addClass(disabled)}if(!gallery.loop&&gallery.controls.prevNext){gallery.find('.'+ex.nextPageClass).hide()}}else{if(gallery.controls.firstLast){gallery.find('.'+ex.lastPageClass).removeClass(disabled)}if(!gallery.loop&&gallery.controls.prevNext){gallery.find('.'+ex.nextPageClass).show()}}}if(!gallery.carouselControls){gallery.find('li.'+ex.currentThumbClass).show().each(function(i){var imageHeight=$(this).find('img').height();if(imageHeight>0){$(this).height(imageHeight)}});gallery.onPageChanged(gallery)}}},loadPage:function(page,imageToView){if(gallery.validPage(page)){var last=page*gallery.pageSize;var first=last-gallery.pageSize;if(last>gallery.images.length){last=gallery.images.length}gallery.pageTransition=true;gallery.viewThumbs(first,last-1);if(!gallery.separatePageBrowsing){if(imageToView){gallery.viewImage(imageToView)}else{if(page>1||((page===1&&gallery.viewFirstImage)||gallery.initialized)){gallery.viewImage(first)}}}gallery.pageTransition=false}},viewThumbs:function(first,last){var i;if(gallery.showThumbs){for(i=first;i<=last;i++){gallery.viewThumb(i,i===first,i===last,true)}if(!gallery.carouselControls&&gallery.currentPage<gallery.numberOfPages()){var firstNext=last+1;var lastNext=last+gallery.pageSize;if(lastNext>=gallery.images.length){lastNext=gallery.images.length-1}for(i=firstNext;i<=lastNext;i++){var container=gallery.viewThumb(i,i===firstNext,i===lastNext,false);if(container&&container.length){container.hide()}}}}},viewThumb:function(index,first,last,currentPage){if(index<0){index=gallery.images.length+index}else if(index>=gallery.images.length){index=index-gallery.images.length}var image=gallery.images[index];var container=gallery.getThumb(index).parent();if(!container.length){container=gallery.createThumbForImage(image,index);container.attr('rel',gallery.pageNumberForImage(index))}if(container.length){container.parent().append(container);if(first){container.addClass(ex.firstThumbClass)}else{container.removeClass(ex.firstThumbClass)}if(last){container.addClass(ex.lastThumbClass)}else{container.removeClass(ex.lastThumbClass)}if(currentPage){if(gallery.carouselControls){container.show()}else{container.addClass(ex.currentThumbClass)}}}return container},getThumb:function(index){return gallery.find('img[rel="'+index+'"]')},createThumbForImage:function(image,index){if(gallery.showThumbs){var thumb=gallery.getThumb(index);if(thumb===null||!thumb.length){var container=$('<li></li>');gallery.append(container);thumb=$('<img />');if(image.thumb){thumb.attr('src',image.thumb)}else{thumb.attr('src',image.src);var imageWidth=Math.ceil(thumb.width()/thumb.height()*container.height());var imageHeight=Math.ceil(thumb.height()/thumb.width()*container.width());if(imageWidth<imageHeight){thumb.css({height:'auto',maxWidth:container.width()})}else{thumb.css({width:'auto',maxHeight:container.height()})}}container.append(thumb.css('display','block'));thumb.attr('rel',index);if(image.caption&&gallery.showThumbToolTip){thumb.attr('title',image.caption)}thumb.data('data',image.data);thumb.click(function(){gallery.viewImage(Number($(this).attr('rel')))});thumb.load(function(){var imageHeight=$(this).height();if(imageHeight>0){$(this).parent().height(imageHeight)}});gallery.onThumb(thumb);return container}}return null},firstPage:function(){if(!gallery.atFirstPage()){gallery.goToPage(1)}},lastPage:function(){if(!gallery.atLastPage()){gallery.goToPage(gallery.numberOfPages())}},prevPage:function(){if(!gallery.atFirstPage()){gallery.goToPage(gallery.currentPage-1)}else if(gallery.loop){gallery.goToPage(gallery.numberOfPages())}},nextPage:function(){if(!gallery.atLastPage()){gallery.goToPage(gallery.currentPage+1)}else if(gallery.loop){gallery.goToPage(1)}},firstImageOnPage:function(index){if(!index){index=gallery.current}return gallery.pageSize===1||(index%gallery.pageSize===0)},lastImageOnPage:function(index){if(!index){index=gallery.current}var imageCount=gallery.images.length;if(gallery.pageSize===1||imageCount===1){return true}if(index>0){var currentPageSize=gallery.pageSize;var currentPage=gallery.pageNumberForImage(index);if(currentPage===gallery.numberOfPages()){var newPageSize=imageCount%gallery.pageSize;if(newPageSize>0){currentPageSize=newPageSize}}var imageIndex=index;if(currentPage>1){imageIndex-=(currentPage-1)*gallery.pageSize}return(imageIndex+1)%currentPageSize===0}return false},currentPageNumber:function(){return gallery.currentPage},numberOfImages:function(){return gallery.images.length},atFirstImage:function(){return gallery.current===0},atLastImage:function(){return gallery.current===gallery.numberOfImages()-1},getImage:function(index){if(index!==null&&index>-1&&index<gallery.images.length){return gallery.images[index]}return null},indexOfImage:function(src){if(src&&ex.isDefined(gallery.sources[src])){return gallery.sources[src]}return-1},currentImage:function(){return gallery.current},addImage:function(src,thumb,caption,data){var pageCount=gallery.numberOfPages();var index=gallery.newImage(src,thumb,caption,data);if(index>-1){var pageNumber=gallery.pageNumberForImage(index);var containers=$('.'+ex.thumbsClass+' li[rel="'+pageNumber+'"]');if(containers.length){containers.removeClass(ex.lastThumbClass)}var newPageAdded=pageNumber>pageCount;if(newPageAdded){$('.'+ex.pagingClass).empty();gallery.createPaging()}if(newPageAdded||pageNumber===gallery.currentPage){gallery.goToPage(gallery.currentPage)}}},removeImage:function(index){if(gallery.images.length===1){gallery.removeAllImages()}else{if(gallery.enableSlideshow){gallery.pauseSlideshow()}var oldPageCount=gallery.numberOfPages();gallery.images.splice(index,1);var queueIndex=$.inArray(index,gallery.loadQueue);if(queueIndex>-1){gallery.loadQueue.splice(queueIndex,1)}var container=gallery.getThumb(index).parent();container.remove();$('.'+ex.thumbsClass+' > li').each(function(i){if(i>=index){var newRel=gallery.pageNumberForImage(i);$(this).attr('rel',newRel);$(this).find('img').attr('rel',i);if(gallery.firstImageOnPage(i)){$(this).addClass(ex.firstThumbClass)}else{$(this).removeClass(ex.firstThumbClass)}if(gallery.lastImageOnPage(i)){$(this).addClass(ex.lastThumbClass)}else{$(this).removeClass(ex.lastThumbClass)}if(gallery.currentPage===newRel){$(this).show()}else{$(this).hide()}}});var pageRemoved=$.exposure.numberOfPages<oldPageCount;if(pageRemoved){$('.'+ex.pagingClass).empty();gallery.createPaging()}if(gallery.current===index){gallery.current=-1;var nextIndex=index;if(index===gallery.numberOfImages()){nextIndex=0}gallery.viewImage(nextIndex)}}},removeAllImages:function(){gallery.images=[];gallery.sources={};gallery.loadQueue=[];if(gallery.enableSlideshow){gallery.pauseSlideshow()}$('.'+ex.thumbsClass+', '+'.'+ex.pagingClass).empty();gallery.current=-1},viewImage:function(index){if(gallery.current!==index){if(gallery.enableSlideshow&&!gallery.slideshowTransition){gallery.pauseSlideshow()}var wrapper=gallery.wrapper;var validImage=false;var image=gallery.images[index];if(image){var src=image.src;var caption=image.caption;var extraImageData=image.data;if(src){validImage=true;var hasThumb=gallery.showThumbs;var thumb=null;if(gallery.showThumbs){thumb=gallery.find('img[rel="'+index+'"]');hasThumb=thumb&&thumb.length;var active=ex.activeThumbClass;if(hasThumb){thumb.parent().siblings().removeClass(active);thumb.parent().addClass(active)}else{gallery.find$('li.'+active).removeClass(active)}}wrapper.parent().removeClass(ex.loadedClass);if(gallery.loaded(index)){wrapper.parent().addClass(ex.loadedClass)}var img=gallery.loadImage(index,function(){var lastImage=wrapper.find('.'+ex.imageClass);if(lastImage.length){lastImage.removeClass(ex.currentImageClass);lastImage.addClass(ex.lastImageClass)}$(this).addClass(ex.currentImageClass);wrapper.append($(this));if(gallery.clickingNavigation){$(this).click(gallery.nextImage)}if(!$(this).width()||!$(this).height()){var i=$(this);var delay=setInterval(function(){gallery.resizeContainer(i);clearTimeout(delay)},2)}else{gallery.resizeContainer($(this))}if(gallery.fullScreen&&!gallery.infullScreen){gallery.onEnterFullScreen(gallery.mask);gallery.infullScreen=true}if(gallery.dataElement&&gallery.dataElement.length){if(gallery.showCaptions){var captionContainer=gallery.dataElement.find('.'+ex.captionClass);if(captionContainer.length){captionContainer.empty();if(!caption&&hasThumb){caption=thumb.attr('title')}}captionContainer.html(caption)}if(gallery.showExtraData){var extraImageDataContainer=gallery.dataElement.find('.'+ex.imageDataClass);if(extraImageDataContainer.length){extraImageDataContainer.empty();if(!extraImageData&&hasThumb){extraImageData=thumb.data('data')}extraImageDataContainer.html(extraImageData)}}}wrapper.hover(function(){wrapper.addClass(ex.imageHoverClass);gallery.onImageHoverOver()},function(){wrapper.removeClass(ex.imageHoverClass);gallery.onImageHoverOut()});gallery.onImage($(this),gallery.dataElement,thumb);gallery.preloadNextInQueue()})}}if(!validImage){wrapper.siblings().andSelf().empty();gallery.find('li.'+ex.activeThumbClass).removeClass(ex.activeThumbClass)}if(gallery.imageControls){var page=gallery.pageNumberForImage(index);if(gallery.currentPage!==page&&!gallery.pageTransition){gallery.goToPage(page,index)}gallery.updatePaging(index+1)}gallery.current=index;if(gallery.carouselControls&&gallery.images.length>gallery.pageSize){var firstVisibleImage=index;var lastVisibleImage=gallery.pageSize-1;var flooredVisibleImages=Math.floor(gallery.pageSize/2);if(!gallery.loop&&index<flooredVisibleImages){firstVisibleImage=0}else if(!gallery.loop&&index>=(gallery.length-flooredVisibleImages)){lastVisibleImage=gallery.length-1;firstVisibleImage=lastVisibleImage-gallery.pageSize+1}else{firstVisibleImage-=flooredVisibleImages;lastVisibleImage=firstVisibleImage+gallery.pageSize-1}gallery.onCarousel(firstVisibleImage,lastVisibleImage);gallery.find('li').removeClass(ex.currentThumbClass).hide();gallery.viewThumbs(firstVisibleImage,lastVisibleImage);gallery.currentPage=gallery.pageNumberForImage(index)}}},firstImage:function(){if(!gallery.atFirstImage()){if(gallery.separatePageBrowsing||gallery.atFirstPage()){gallery.viewImage(0)}else{gallery.goToPage(1)}}},nextImage:function(){if(!gallery.separatePageBrowsing&&gallery.lastImageOnPage()){if(gallery.atLastPage()&&gallery.loop){gallery.goToPage(1)}else{gallery.goToPage(gallery.currentPage+1)}gallery.onNext()}else{var next=gallery.getNextImage();if(next!==null){gallery.viewImage(next);gallery.onNext()}}var nextNext=gallery.getNextImage();if(nextNext!==null){gallery.addToLoadQueue(nextNext)}},prevImage:function(){if(!gallery.separatePageBrowsing&&gallery.firstImageOnPage()){if(gallery.atFirstPage()&&gallery.loop){gallery.goToPage(gallery.numberOfPages(),gallery.numberOfImages()-1)}else{var page=gallery.currentPage-1;gallery.goToPage(page,page*gallery.pageSize-1)}gallery.onPrev()}else{var prev=gallery.getPrevImage();if(prev!==null){gallery.viewImage(prev);gallery.onPrev()}}var prevPrev=gallery.getPrevImage();if(prevPrev!==null){gallery.addToLoadQueue(prevPrev)}},lastImage:function(){if(!gallery.atLastImage()){if(gallery.separatePageBrowsing||gallery.atLastPage()){gallery.viewImage(gallery.numberOfImages()-1)}else{gallery.goToPage(gallery.numberOfPages(),gallery.numberOfImages()-1)}}},imageHasData:function(){if(gallery.dataElement&&gallery.dataElement.length){var caption=gallery.dataElement.find('.'+$.exposure.captionClass).html();var extra=gallery.dataElement.find('.'+$.exposure.imageDataClass).html();return(caption&&caption.length>0)||(extra&&extra.length>0)}return false},pageTransition:false,playingSlideshow:false,slideshowTimer:null,slideshowTransition:false,slideshow:function(){gallery.slideshowTimer=setTimeout(function(){gallery.slideshowTransition=true;gallery.nextImage();gallery.slideshowTransition=false;gallery.slideshow()},gallery.slideshowDelay)},playSlideshow:function(){if(!gallery.playingSlideshow){if(gallery.slideshowControlsTarget){gallery.slideshowControlsElement.find('.'+ex.playSlideshowClass).hide();gallery.slideshowControlsElement.find('.'+ex.pauseSlideshowClass).show()}gallery.slideshow();gallery.playingSlideshow=true}gallery.onSlideshowPlayed()},pauseSlideshow:function(){if(gallery.playingSlideshow){if(gallery.slideshowControlsTarget){gallery.slideshowControlsElement.find('.'+ex.playSlideshowClass).show();gallery.slideshowControlsElement.find('.'+ex.pauseSlideshowClass).hide()}gallery.playingSlideshow=false;if(gallery.slideshowTimer){clearTimeout(gallery.slideshowTimer)}gallery.onSlideshowPaused()}},toggleSlideshow:function(){if(gallery.playingSlideshow){gallery.pauseSlideshow()}else{gallery.playSlideshow()}},first:function(){if(gallery.imageControls){gallery.firstImage()}else{gallery.firstPage()}},prev:function(){if(gallery.imageControls){gallery.prevImage()}else{gallery.prevPage()}},next:function(){if(gallery.imageControls){gallery.nextImage()}else{gallery.nextPage()}},last:function(){if(gallery.imageControls){gallery.lastImage()}else{gallery.lastPage()}},infullScreen:false,exitFullScreen:function(){if(gallery.infullScreen){gallery.pauseSlideshow();gallery.deselectCurrentImage();gallery.onExitFullScreen(gallery.targetElement,gallery.mask);gallery.infullScreen=false}},actualMaxWidth:function(image,target){return gallery.maxWidth?gallery.maxWidth-(ex.widthDiff(image)+ex.widthDiff(target)):0},actualMaxHeight:function(image,target){return gallery.maxHeight?gallery.maxHeight-(ex.heightDiff(image)+ex.heightDiff(target)):0},fitToMaxSize:function(image){var target=gallery.targetElement;if(gallery.stretchToMaxSize){if(gallery.maxWidth){image.width(gallery.actualMaxWidth(image,target))}if(gallery.maxHeight){image.height(gallery.actualMaxHeight(image,target))}}else{if(image.width()>image.height()){gallery.fitToMaxWidth(image,target);gallery.fitToMaxHeight(image,target)}else if(image.height()>image.width()){gallery.fitToMaxHeight(image,target);gallery.fitToMaxWidth(image,target)}else{var actualMaxHeight=gallery.actualMaxHeight(image,target);var smallest=gallery.actualMaxWidth(image,target);if(!smallest||(actualMaxHeight&&smallest&&actualMaxHeight<smallest)){smallest=actualMaxHeight}if(smallest&&image.width()>smallest){image.width(smallest);image.height(smallest)}}}},centerImageInWindow:function(image){var target=gallery.targetElement;target.width(image.width()).height(image.height());target.css({'top':($(window).height()-target.outerHeight(true))/2,'left':($(window).width()-target.outerWidth(true))/2});target.find('.'+ex.lastImageClass).each(function(){$(this).css({'top':(target.height()-$(this).height())/2,'left':(target.width()-$(this).width())/2})})},fitToWindow:function(){gallery.maxWidth=$(window).width();gallery.maxHeight=$(window).height();var image=gallery.targetElement.find('.'+$.exposure.currentImageClass).width('auto').height('auto');if(!image.width()||!image.height()){var delay=setInterval(function(){gallery.fitToMaxSize(image);gallery.centerImageInWindow(image);clearTimeout(delay)},2)}else{gallery.fitToMaxSize(image);gallery.centerImageInWindow(image)}},fitToMaxWidth:function(image,target){var actualMaxWidth=gallery.actualMaxWidth(image,target);if(actualMaxWidth&&image.width()>actualMaxWidth){var newHeight=Math.round(actualMaxWidth*image.height()/image.width());image.height(newHeight);image.width(actualMaxWidth)}},fitToMaxHeight:function(image,target){var actualMaxHeight=gallery.actualMaxHeight(image,target);if(actualMaxHeight&&image.height()>actualMaxHeight){var newWidth=Math.round(actualMaxHeight*image.width()/image.height());image.width(newWidth);image.height(actualMaxHeight)}},resizeContainer:function(img){gallery.fitToMaxSize(img);if(!gallery.fixedContainerSize){gallery.targetElement.show().width(img.width()).height(img.height())}}});$.extend(this,defaults,options);this.targetElement=$(this.target);if(!this.targetElement.length){this.target=defaults.target;this.targetElement=$('<div id="'+ex.defaultTargetId+'"></div>').insertBefore($(this))}var w=this.wrapper=$('<div class="'+ex.wrapperClass+'"></div>');var te=this.targetElement.addClass(ex.targetClass).append(w);if(this.showCaptions||this.showExtraData){var dataElementsHtml='';if(this.showCaptions){dataElementsHtml+='<div class="'+ex.captionClass+'"></div>'}if(this.showExtraData){dataElementsHtml+='<div class="'+ex.imageDataClass+'"></div>'}var dataElements=$(dataElementsHtml);if(dataElements.length){this.dataElement=$(this.dataTarget);if(this.dataTarget&&this.dataElement.length){this.dataElement.addClass(ex.dataContainerClass).append(dataElements)}else{this.dataElement=$('<div class="'+ex.dataContainerClass+'"></div>');te.append(this.dataElement.append(dataElements))}}}if(!this.showThumbs){this.carouselControls=false}if(this.carouselControls||!this.controlsTarget||(!this.controls.prevNext&&!this.controls.firstLast&&!this.controls.pageNumbers)){this.showControls=false}if(this.showControls){this.controlsElement=$(this.controlsTarget).addClass(ex.controlsClass).each(function(){if(gallery.controls.firstLast){$(this).append(ex.createLink(txt.first,gallery.first,ex.firstPageClass))}if(gallery.controls.prevNext){$(this).append(ex.createLink(txt.previous,gallery.prev,ex.prevPageClass))}if(gallery.controls.pageNumbers){$(this).append($('<div class="'+ex.pagingClass+'"></div>'))}if(gallery.controls.prevNext){$(this).append(ex.createLink(txt.next,gallery.next,ex.nextPageClass))}if(gallery.controls.firstLast){$(this).append(ex.createLink(txt.last,gallery.last,ex.lastPageClass))}})}if(this.enableSlideshow&&this.slideshowControlsTarget){this.slideshowControlsElement=$(this.slideshowControlsTarget).addClass(ex.slideshowControlsClass).each(function(){$(this).append(ex.createLink(txt.play,gallery.playSlideshow,ex.playSlideshowClass));$(this).append(ex.createLink(txt.pause,gallery.pauseSlideshow,ex.pauseSlideshowClass).hide())})}if(this.keyboardNavigation){if(this.carouselControls){$(document).bind('keyup','left',this.nextImage);$(document).bind('keyup','right',this.prevImage)}else{$(document).bind('keyup','left',this.prevImage);$(document).bind('keyup','right',this.nextImage);$(document).bind('keyup','ctrl+left',this.prevPage);$(document).bind('keyup','ctrl+right',this.nextPage);$(document).bind('keyup','up',this.lastImage);$(document).bind('keyup','down',this.firstImage);$(document).bind('keyup','ctrl+up',this.lastPage);$(document).bind('keyup','ctrl+down',this.firstPage)}if(this.enableSlideshow){$(document).bind('keyup','space',this.toggleSlideshow)}}if(this.fullScreen){$(window).resize(this.fitToWindow);this.mask=$('<div class="'+ex.maskClass+'"></div>').click(this.exitFullScreen).insertAfter(this.target);if(this.keyboardNavigation){$(document).bind('keyup','esc',this.exitFullScreen)}}var jsonImages=null;if(this.jsonSource){if(ex.isObject(this.jsonSource)){jsonImages=this.jsonSource}else if(this.jsonSource.length){if(ex.startsWith(this.jsonSource,"http://")||ex.startsWith(this.jsonSource,"https://")){jsonImages=$.ajax({url:this.jsonSource,type:'GET',async:false}).responseText}else{jsonImages=this.jsonSource}}}return this.addClass(ex.thumbsClass).each(function(){var i;if(jsonImages){var images=ex.isObject(jsonImages)?jsonImages:$.parseJSON(jsonImages);if(images&&images.data){for(i in images.data){var photo=images.data[i];if(photo.source&&photo.source.length){var item=$('<li></li>');var link=$('<a></a>').attr('href',photo.source);if(photo.thumb_source&&photo.thumb_source.length){var thumb=$('<img />').attr('src',photo.thumb_source);if(photo.caption&&photo.caption.length){thumb.attr('title',photo.caption)}link.append(thumb)}else if(photo.caption&&photo.caption.length){link.attr('title',photo.caption)}item.append(link);if(photo.extra_data&&photo.extra_data.length){item.append($(photo.extra_data))}$(this).append(item)}}}}var foundImage=false;var foundThumb=false;if($(this).children('li').length){var selectedIndex=null;$(this).show().children('li').each(function(){foundImage=true;var a=$(this).find('a');if(a.length){a=$(a[0]);var src=a.attr('href');var img=a.find('img');var thumbSrc=img.length?img.attr('src'):a.attr('rel');var caption=img.length?img.attr('title'):a.attr('title');var isSelected=a.hasClass(ex.selectedImageClass)&&!selectedIndex;a.remove();var thumbData=$(this).html();if(thumbSrc){foundThumb=true}$(this).remove();var imageIndex=gallery.newImage(src,thumbSrc,caption,thumbData);if(imageIndex>-1){if(isSelected){selectedIndex=imageIndex}if(gallery.loadQueue.length<gallery.preloadBuffer){gallery.addToLoadQueue(imageIndex)}}}else{$(this).remove()}});if(!gallery.showThumbs){gallery.pageSize=1;$(ex.thumbsClass).remove()}if(foundImage){gallery.preloadNextInQueue();gallery.createPaging();if(selectedIndex){gallery.goToPage(gallery.pageNumberForImage(selectedIndex));gallery.viewImage(selectedIndex)}else{gallery.goToPage(1)}if(gallery.enableSlideshow&&gallery.autostartSlideshow){gallery.playSlideshow()}}else{gallery.onEmpty(gallery)}}else{gallery.onEmpty(gallery)}gallery.onInit();gallery.initialized=true})}})(jQuery);





// Details Slider Images
(function($) {

	"use strict";

	$(function() {

		try {

			var gallery = $('#details-slider-images');
			gallery.exposure({
				controlsTarget : '#controls',
				imageControls : true,
				controls : { prevNext : true, pageNumbers : true, firstLast : false },
				pageSize : parseInt( $('#details-slider-images').width()/128, 10),
				slideshowControlsTarget : '#slideshow',
				onThumb : function(thumb) {
					var li = thumb.parents('li');				
					var fadeTo = li.hasClass($.exposure.activeThumbClass) ? 1 : 0.3;
					
					thumb.css({display : 'none', opacity : fadeTo}).stop().fadeIn(200);
					
					thumb.hover(function() { 
						thumb.fadeTo('fast',1); 
					}, function() { 
						li.not('.' + $.exposure.activeThumbClass).children('img').fadeTo('fast', 0.5); 
					});
				},
				onImageHoverOver : function() {
					if (gallery.imageHasData()) {						
						// Show image data as an overlay when image is hovered.
						gallery.dataElement.stop().show().animate({bottom:0+'px'},{queue:false,duration:160});
					}
				},
				onImageHoverOut : function() {
					// Slide down the image data.
					var imageDataBottom = -gallery.dataElement.outerHeight();
					gallery.dataElement.stop().show().animate({bottom:imageDataBottom+'px'},{queue:false,duration:160});
				},
				onImage : function(image, imageData, thumb) {
					var w = gallery.wrapper;
					
					// Fade out the previous image.
					image.siblings('.' + $.exposure.lastImageClass).stop().fadeOut(500, function() {
						$(this).remove();
					});
					
					// Fade in the current image.
					image.hide().stop().fadeIn(1000);
					
					// Setup hovering for the image data container.
					imageData.hover(function() {
						// Trigger mouse enter event for wrapper element.
						w.trigger('mouseenter');
					}, function() {
						// Trigger mouse leave event for wrapper element.
						w.trigger('mouseleave');
					});
					
					// Check if wrapper is hovered.
					var hovered = w.hasClass($.exposure.imageHoverClass);						
					if (hovered) {
						if (gallery.imageHasData()) {
							gallery.onImageHoverOver();
						} else {
							gallery.onImageHoverOut();
						}	
					}

					if (gallery.showThumbs && thumb && thumb.length) {
						thumb.parents('li').siblings().children('img.' + $.exposure.selectedImageClass).stop().fadeTo(200, 0.5, function() { $(this).removeClass($.exposure.selectedImageClass); });			
						thumb.fadeTo('fast', 1).addClass($.exposure.selectedImageClass);
					}
				}
			});

			$('#right a').click(function() {
				gallery.nextImage();
			});

			$('#left a').click(function() {
				gallery.prevImage();
			});
		} catch(e) {}
		
		/* Safari needs a little boost to display the dropdown controls differently. If user has no JS, the standard Safari controls will be shown. */
		try
		{
			var isSafari = /Constructor/.test(window.HTMLElement);

			if(isSafari) {

				$('html').addClass('safari');
			}
		}
		catch (e)
		{}
	});

})(jQuery);











// noUiSlider - http://refreshless.com/nouislider/
(function(e,p){if(e.zepto&&!e.fn.removeData)throw new ReferenceError("Zepto is loaded without the data module.");e.fn.noUiSlider=function(D){function r(a,b,c){e.isArray(a)||(a=[a]);e.each(a,function(a,l){"function"===typeof l&&l.call(b,c)})}function x(a){return a instanceof e||e.zepto&&e.zepto.isZ(a)}function E(a){a.preventDefault();var b=0===a.type.indexOf("touch"),c=0===a.type.indexOf("mouse"),d=0===a.type.indexOf("pointer"),l,h,g=a;0===a.type.indexOf("MSPointer")&&(d=!0);a.originalEvent&&(a=a.originalEvent);
b&&(l=a.changedTouches[0].pageX,h=a.changedTouches[0].pageY);if(c||d)d||window.pageXOffset!==p||(window.pageXOffset=document.documentElement.scrollLeft,window.pageYOffset=document.documentElement.scrollTop),l=a.clientX+window.pageXOffset,h=a.clientY+window.pageYOffset;return e.extend(g,{x:l,y:h})}function q(a,b,c,d,l){a=a.replace(/\s/g,u+" ")+u;if(l)return 1<l&&(d=e.extend(b,d)),b.on(a,e.proxy(c,d));d.handler=c;return b.on(a,e.proxy(function(a){if(this.target.is('[class*="noUi-state-"], [disabled]'))return!1;
this.handler(E(a))},d))}function m(a){return!isNaN(parseFloat(a))&&isFinite(a)}function F(a){return parseFloat(this.style[a])}function G(a,b){function c(a){return x(a)||"string"===typeof a||!1===a}var d={handles:{r:!0,t:function(a){a=parseInt(a,10);return 1===a||2===a}},range:{r:!0,t:function(a,b,c){if(2!==a.length)return!1;a=[parseFloat(a[0]),parseFloat(a[1])];if(!m(a[0])||!m(a[1])||"range"===c&&a[0]===a[1]||a[1]<a[0])return!1;b[c]=a;return!0}},start:{r:!0,t:function(a,b,c){return 1===b.handles?
(e.isArray(a)&&(a=a[0]),a=parseFloat(a),b.start=[a],m(a)):this.parent.range.t(a,b,c)}},connect:{t:function(a,b){return!0===a||!1===a||"lower"===a&&1===b.handles||"upper"===a&&1===b.handles}},orientation:{t:function(a){return"horizontal"===a||"vertical"===a}},margin:{r:!0,t:function(a,b,c){a=parseFloat(a);b[c]=a;return m(a)}},serialization:{r:!0,t:function(a,b){if(a.resolution)switch(a.resolution){case 1:case 0.1:case 0.01:case 0.001:case 1E-4:case 1E-5:break;default:return!1}else b.serialization.resolution=
0.01;if(a.mark)return"."===a.mark||","===a.mark;b.serialization.mark=".";return a.to?1===b.handles?(e.isArray(a.to)||(a.to=[a.to]),b.serialization.to=a.to,c(a.to[0])):2===a.to.length&&c(a.to[0])&&c(a.to[1]):!1}},slide:{t:function(a){return"function"===typeof a}},set:{t:function(a,b){return this.parent.slide.t(a,b)}},step:{t:function(a,b,c){return this.parent.margin.t(a,b,c)}},init:function(){var a=this;e.each(a,function(b,c){c.parent=a});delete this.init;return this}}.init();e.each(d,function(c,d){if(d.r&&
!a[c]&&0!==a[c]||(a[c]||0===a[c])&&!d.t(a[c],a,c))throw console&&console.log&&console.group&&(console.group("Invalid noUiSlider initialisation:"),console.log("Option:\t",c),console.log("Value:\t",a[c]),console.log("Slider:\t",b[0]),console.groupEnd()),new RangeError("noUiSlider");})}function y(a,b){a=a.toFixed(b.data("decimals"));return a.replace(".",b.data("mark"))}function v(a,b,c){var d=a.data("nui").options,e=a.data("nui").base.data("handles"),h=a.data("nui").style;if(!m(b)||b===a[0].gPct(h))return!1;
b=0>b?0:100<b?100:b;if(d.step&&!c){var g=t.from(d.range,d.step);b=Math.round(b/g)*g}if(b===a[0].gPct(h)||a.siblings("."+f[1]).length&&!c&&e&&(a.data("nui").number?(c=e[0][0].gPct(h)+d.margin,b=b<c?c:b):(c=e[1][0].gPct(h)-d.margin,b=b>c?c:b),b===a[0].gPct(h)))return!1;0===a.data("nui").number&&95<b?a.addClass(f[13]):a.removeClass(f[13]);a.css(h,b+"%");a.data("store").val(y(t.is(d.range,b),a.data("nui").target));return!0}function H(a,b){var c=a.data("nui").number,d={target:a.data("nui").target,options:a.data("nui").options,
handle:a,i:c};if(x(b.to[c]))return q("change blur",b.to[c],z[0],d,2),q("change",b.to[c],d.options.set,d.target,1),b.to[c];if("string"===typeof b.to[c])return e('<input type="hidden" name="'+b.to[c]+'">').appendTo(a).addClass(f[3]).change(z[1]);if(!1===b.to[c])return{val:function(a){if(a===p)return this.handleElement.data("nui-val");this.handleElement.data("nui-val",a)},hasClass:function(){return!1},handleElement:a}}function I(a){var b=this.base,c=b.data("style"),d=a.x-this.startEvent.x,e="left"===
c?b.width():b.height();"top"===c&&(d=a.y-this.startEvent.y);d=this.position+100*d/e;v(this.handle,d);r(b.data("options").slide,b.data("target"))}function A(){var a=this.base,b=this.handle;b.children().removeClass(f[4]);w.off(n.move);w.off(n.end);e("body").off(u);a.data("target").change();r(b.data("nui").options.set,a.data("target"))}function J(a){var b=this.handle,c=b[0].gPct(b.data("nui").style);b.children().addClass(f[4]);q(n.move,w,I,{startEvent:a,position:c,base:this.base,target:this.target,handle:b});
q(n.end,w,A,{base:this.base,target:this.target,handle:b});e("body").on("selectstart"+u,function(){return!1})}function K(a){a.stopPropagation();A.call(this)}function L(a){if(!this.base.find("."+f[4]).length){var b,c,d=this.base;c=this.handles;var e=d.data("style");a=a["left"===e?"x":"y"];var h="left"===e?d.width():d.height(),g=[],k={left:d.offset().left,top:d.offset().top};for(b=0;b<c.length;b++)g.push({left:c[b].offset().left,top:c[b].offset().top});b=1===c.length?0:(g[0][e]+g[1][e])/2;c=1===c.length||
a<b?c[0]:c[1];d.addClass(f[5]);setTimeout(function(){d.removeClass(f[5])},300);v(c,100*(a-k[e])/h);r([c.data("nui").options.slide,c.data("nui").options.set],d.data("target"));d.data("target").change()}}function M(){var a=[];e.each(e(this).data("handles"),function(b,c){a.push(c.data("store").val())});return 1===a.length?a[0]:a}function N(a,b){if(a===p)return M.call(this);b=!0===b?{trigger:!0}:b||{};e.isArray(a)||(a=[a]);return this.each(function(c,d){d=e(d);e.each(e(this).data("handles"),function(c,
f){if(null!==a[c]&&a[c]!==p){var g,k;k=f.data("nui").options.range;g=a[c];b.trusted=!0;if(!1===b.trusted||1===a.length)b.trusted=!1;2===a.length&&0<=e.inArray(null,a)&&(b.trusted=!1);"string"===e.type(g)&&(g=g.replace(",","."));g=t.to(k,parseFloat(g));g=v(f,g,b.trusted);b.trigger&&r(f.data("nui").options.set,d);g||(g=f.data("store").val(),k=t.is(k,f[0].gPct(f.data("nui").style)),g!==k&&f.data("store").val(y(k,d)))}})})}var u=".nui",w=e(document),n={start:"mousedown touchstart",move:"mousemove touchmove",
end:"mouseup touchend"},O=e.fn.val,f="noUi-base noUi-origin noUi-handle noUi-input noUi-active noUi-state-tap noUi-target -lower -upper noUi-connect noUi-vertical noUi-horizontal noUi-background noUi-z-index".split(" "),s=[f[0]],B=[f[1]],C=[f[2]],t={to:function(a,b){b=0>a[0]?b+Math.abs(a[0]):b-a[0];return 100*b/this.len(a)},from:function(a,b){return 100*b/this.len(a)},is:function(a,b){return b*this.len(a)/100+a[0]},len:function(a){return a[0]>a[1]?a[0]-a[1]:a[1]-a[0]}},z=[function(){this.target.val([this.i?
null:this.val(),this.i?this.val():null],{trusted:!1})},function(a){a.stopPropagation()}];window.navigator.pointerEnabled?n={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(n={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"});e.fn.val=function(){return this.hasClass(f[6])?N.apply(this,arguments):O.apply(this,arguments)};return function(a){return this.each(function(b,c){c=e(c);c.addClass(f[6]);var d,l,h,g,k=e("<div/>").appendTo(c),m=[],p=[B.concat([f[1]+
f[7]]),B.concat([f[1]+f[8]])],r=[C.concat([f[2]+f[7]]),C.concat([f[2]+f[8]])];a=e.extend({handles:2,margin:0,orientation:"horizontal"},a)||{};a.serialization||(a.serialization={to:[!1,!1],resolution:0.01,mark:"."});G(a,c);a.S=a.serialization;a.connect?"lower"===a.connect?(s.push(f[9],f[9]+f[7]),p[0].push(f[12])):(s.push(f[9]+f[8],f[12]),p[0].push(f[9])):s.push(f[12]);l="vertical"===a.orientation?"top":"left";h=a.S.resolution.toString().split(".");h="1"===h[0]?0:h[1].length;"vertical"===a.orientation?
s.push(f[10]):s.push(f[11]);k.addClass(s.join(" ")).data("target",c);c.data({base:k,mark:a.S.mark,decimals:h});for(d=0;d<a.handles;d++)g=e("<div><div/></div>").appendTo(k),g.addClass(p[d].join(" ")),g.children().addClass(r[d].join(" ")),q(n.start,g.children(),J,{base:k,target:c,handle:g}),q(n.end,g.children(),K,{base:k,target:c,handle:g}),g.data("nui",{target:c,decimals:h,options:a,base:k,style:l,number:d}).data("store",H(g,a.S)),g[0].gPct=F,m.push(g),v(g,t.to(a.range,a.start[d]));k.data({options:a,
handles:m,style:l});c.data({handles:m});q(n.end,k,L,{base:k,target:c,handles:m})})}.call(this,D)}})($);





// Price range code
$(document).ready(function($) {

	try {

		for( var i = 100; i <= 10000; i++ ){
			$('#start-val').append(
				'<option value="' + i + '">' + i + '</option>'
			);
		}
		// Initialise noUiSlider
		$('.noUiSlider').noUiSlider({
			range: [0,2200],
			start: [30,1000],
			handles: 2,
			connect: true,
			step: 1,
			serialization: {
				to: [ $('#start-val'),
					$('#end-val') ],
				resolution: 1
			}
		});
	} catch(err) {

	}

});