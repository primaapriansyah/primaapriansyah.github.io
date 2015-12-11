
/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
*
* Open source under the BSD License.
*
* Copyright © 2008 George McGinley Smith
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list
* of conditions and the following disclaimer in the documentation and/or other materials
* provided with the distribution.
*
* Neither the name of the author nor the names of contributors may be used to endorse
* or promote products derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
* COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
* GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
* OF THE POSSIBILITY OF SUCH DAMAGE.
*
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});







/* jQuery Waypoints - Copyright (c) 2011-2013 Caleb Troughton - https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt */
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);





/*
* jQuery Superfish Menu Plugin
* Copyright (c) 2013 Joel Birch
*
* Dual licensed under the MIT and GPL licenses:
*        http://www.opensource.org/licenses/mit-license.php
*        http://www.gnu.org/licenses/gpl.html
*/


(function (e) {
    e.fn.superfish = function (t) {
        var n = e.fn.superfish,
            r = n.c,
            i = e(['<span class="', r.arrowClass, '"> <i class="icon icon-bottom4"></i> </span>'].join("")),
            s = function () {
                var t = e(this),
                    n = u(t);
                clearTimeout(n.sfTimer);
                t.showSuperfishUl().siblings().hideSuperfishUl()
            }, o = function () {
                var t = e(this),
                    r = u(t),
                    i = n.op;
                clearTimeout(r.sfTimer);
                r.sfTimer = setTimeout(function () {
                    i.retainPath = e.inArray(t[0], i.$path) > -1;
                    t.hideSuperfishUl();
                    if (i.$path.length && t.parents(["li.", i.hoverClass].join("")).length < 1) {
                        s.call(i.$path)
                    }
                }, i.delay)
            }, u = function (e) {
                var t = e.parents(["ul.", r.menuClass, ":first"].join(""))[0];
                n.op = n.o[t.serial];
                return t
            }, a = function (e) {
                e.addClass(r.anchorClass).append(i.clone())
            };
        return this.each(function () {
            var i = this.serial = n.o.length;
            var u = e.extend({}, n.defaults, t);
            u.$path = e("li." + u.pathClass, this).slice(0, u.pathLevels).each(function () {
                e(this).addClass([u.hoverClass, r.bcClass].join(" ")).filter("li:has(ul)").removeClass(u.pathClass)
            });
            n.o[i] = n.op = u;
            e("li:has(ul)", this)[e.fn.hoverIntent && !u.disableHI ? "hoverIntent" : "hover"](s, o).each(function () {
                if (u.autoArrows) a(e(">a:first-child", this))
            }).not("." + r.bcClass).hideSuperfishUl();
            var f = e("a", this);
            f.each(function (e) {
                var t = f.eq(e).parents("li");
                f.eq(e).focus(function () {
                    s.call(t)
                }).blur(function () {
                    o.call(t)
                })
            });
            u.onInit.call(this)
        }).each(function () {
            var t = [r.menuClass];
            if (n.op.dropShadows && !(e.browser.msie && e.browser.version < 7)) t.push(r.shadowClass);
            e(this).addClass(t.join(" "))
        })
    };
    var t = e.fn.superfish;
    t.o = [];
    t.op = {};
    t.IE7fix = function () {
        var n = t.op;
        if (e.browser.msie && e.browser.version > 6 && n.dropShadows && n.animation.opacity != undefined) this.toggleClass(t.c.shadowClass + "-off")
    };
    t.c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        arrowClass: "sf-sub-indicator",
        shadowClass: "sf-shadow"
    };
    t.defaults = {
        hoverClass: "sfHover",
        pathClass: "overideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        speed: "normal",
        autoArrows: true,
        dropShadows: true,
        disableHI: false,
        onInit: function () {},
        onBeforeShow: function () {},
        onShow: function () {},
        onHide: function () {}
    };
    e.fn.extend({
        hideSuperfishUl: function () {
            var n = t.op,
                r = n.retainPath === true ? n.$path : "";
            n.retainPath = false;
            var i = e(["li.", n.hoverClass].join(""), this).add(this).not(r).removeClass(n.hoverClass).find(">ul").hide().css("visibility", "hidden");
            n.onHide.call(i);
            return this
        },
        showSuperfishUl: function () {
            var e = t.op,
                n = t.c.shadowClass + "-off",
                r = this.addClass(e.hoverClass).find(">ul:hidden").css("visibility", "visible");
            t.IE7fix.call(r);
            e.onBeforeShow.call(r);
            r.animate(e.animation, e.speed, function () {
                t.IE7fix.call(r);
                e.onShow.call(r)
            });
            return this
        }
    })
})(jQuery);



/*
* Select Lava
*/
(function (e) {
    e.fn.lavaLamp = function (t) {
        t = e.extend({
            fx: "swing",
            speed: 500,
            click: function () {
                return true
            },
            startItem: "no",
            autoReturn: true,
            returnDelay: 0,
            setOnClick: true,
            homeTop: 0,
            homeLeft: 0,
            homeWidth: 0,
            homeHeight: 0,
            returnHome: false
        }, t || {});
        var n;
        if (t.homeTop || t.homeLeft) {
            n = e('<li class="current"></li>').css({
                left: t.homeLeft,
                top: t.homeTop,
                width: t.homeWidth,
                height: t.homeHeight,
                position: "absolute"
            });
            e(this).prepend(n)
        }
        return this.each(function () {
            function l(n) {
                if (!n) n = a;
                var r = 0,
                    i = 0;
                if (!e.browser.msie) {
                    r = (u.outerWidth() - u.innerWidth()) / 2;
                    i = (u.outerHeight() - u.innerHeight()) / 2
                }
                u.stop().animate({
                    left: n.offsetLeft - r,
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }, t.speed, t.fx)
            }
            var r = location.pathname + location.search + location.hash;
            var i = new Object;
            var s;
            var u;
            var a;
            e.expr[":"].parents = function (t, n, r) {
                return e(t).parents(r[3]).length < 1
            };
            var f = e("li", this).filter(":parents(ul ul, .sub-menu)");
            if (t.startItem == "no") i = e('li a[href$="' + r + '"]', this).parent("li");
            if (i.length == 0 && t.startItem == "no") i = e('li a[href$="' + location.pathname.substring(location.pathname.lastIndexOf("/") + 1) + location.search + location.hash + '"]', this).parent("li");
            if (i.length == 0 || t.startItem != "no") {
                if (t.startItem == "no") t.startItem = 0;
                i = e(f[t.startItem])
            }
            a = e("li.selectedLava", this)[0] || e(i).addClass("selectedLava")[0];
            f.mouseenter(function () {
                if (e(this).hasClass("homeLava")) {
                    a = e(this)[0]
                }
                l(this)
            });
            u = e('<li class="back"><div class="left"></div></li>').appendTo(this);
            e(this).mouseleave(function () {
                if (t.autoReturn) {
                    if (t.returnHome && n) {
                        l(n[0])
                    } else if (t.returnDelay) {
                        if (s) clearTimeout(s);
                        s = setTimeout(function () {
                            l(null)
                        }, t.returnDelay + t.speed)
                    } else {
                        l(null)
                    }
                }
            });
            f.click(function (n) {
                if (t.setOnClick) {
                    e(a).removeClass("selectedLava");
                    e(this).addClass("selectedLava");
                    a = this
                }
                return t.click.apply(this, [n, this])
            });
            if (t.homeTop || t.homeLeft) u.css({
                left: t.homeLeft,
                width: t.homeWidth,
                height: t.homeHeight
            });
            else u.css({
                left: a.offsetLeft,
                width: a.offsetWidth,
                height: a.offsetHeight
            })
        })
    }
})(jQuery);





jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function (e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});











// tipsy, facebook style tooltips for jquery
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license
(function (e) {
    function t(e) {
        if (e.attr("title") || typeof e.attr("original-title") != "string") {
            e.attr("original-title", e.attr("title") || "").removeAttr("title")
        }
    }

    function n(n, r) {
        this.$element = e(n);
        this.options = r;
        this.enabled = true;
        t(this.$element)
    }
    n.prototype = {
        show: function () {
            var t = this.getTitle();
            if (t && this.enabled) {
                var n = this.tip();
                n.find(".tipsy-inner")[this.options.html ? "html" : "text"](t);
                n[0].className = "tipsy";
                n.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).appendTo(document.body);
                var r = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var i = n[0].offsetWidth,
                    s = n[0].offsetHeight;
                var o = typeof this.options.gravity == "function" ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var u;
                switch (o.charAt(0)) {
                case "n":
                    u = {
                        top: r.top + r.height + this.options.offset,
                        left: r.left + r.width / 2 - i / 2
                    };
                    break;
                case "s":
                    u = {
                        top: r.top - s - this.options.offset,
                        left: r.left + r.width / 2 - i / 2
                    };
                    break;
                case "e":
                    u = {
                        top: r.top + r.height / 2 - s / 2,
                        left: r.left - i - this.options.offset
                    };
                    break;
                case "w":
                    u = {
                        top: r.top + r.height / 2 - s / 2,
                        left: r.left + r.width + this.options.offset
                    };
                    break
                }
                if (o.length == 2) {
                    if (o.charAt(1) == "w") {
                        u.left = r.left + r.width / 2 - 15
                    } else {
                        u.left = r.left + r.width / 2 - i + 15
                    }
                }
                n.css(u).addClass("tipsy-" + o);
                if (this.options.fade) {
                    n.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    })
                } else {
                    n.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    })
                }
            }
        },
        hide: function () {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function () {
                    e(this).remove()
                })
            } else {
                this.tip().remove()
            }
        },
        getTitle: function () {
            var e, n = this.$element,
                r = this.options;
            t(n);
            var e, r = this.options;
            if (typeof r.title == "string") {
                e = n.attr(r.title == "title" ? "original-title" : r.title)
            } else if (typeof r.title == "function") {
                e = r.title.call(n[0])
            }
            e = ("" + e).replace(/(^\s*|\s*$)/, "");
            return e || r.fallback
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')
            }
            return this.$tip
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function () {
            this.enabled = true
        },
        disable: function () {
            this.enabled = false
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    };
    e.fn.tipsy = function (t) {
        function r(r) {
            var i = e.data(r, "tipsy");
            if (!i) {
                i = new n(r, e.fn.tipsy.elementOptions(r, t));
                e.data(r, "tipsy", i)
            }
            return i
        }

        function i() {
            var e = r(this);
            e.hoverState = "in";
            if (t.delayIn == 0) {
                e.show()
            } else {
                setTimeout(function () {
                    if (e.hoverState == "in") e.show()
                }, t.delayIn)
            }
        }

        function s() {
            var e = r(this);
            e.hoverState = "out";
            if (t.delayOut == 0) {
                e.hide()
            } else {
                setTimeout(function () {
                    if (e.hoverState == "out") e.hide()
                }, t.delayOut)
            }
        }
        if (t === true) {
            return this.data("tipsy")
        } else if (typeof t == "string") {
            return this.data("tipsy")[t]()
        }
        t = e.extend({}, e.fn.tipsy.defaults, t);
        if (!t.live) this.each(function () {
            r(this)
        });
        if (t.trigger != "manual") {
            var o = t.live ? "live" : "bind",
                u = t.trigger == "hover" ? "mouseenter" : "focus",
                a = t.trigger == "hover" ? "mouseleave" : "blur";
            this[o](u, i)[o](a, s)
        }
        return this
    };
    e.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: "",
        gravity: "n",
        html: false,
        live: false,
        offset: 0,
        opacity: 1,
        title: "title",
        trigger: "hover"
    };
    e.fn.tipsy.elementOptions = function (t, n) {
        return e.metadata ? e.extend({}, n, e(t).metadata()) : n
    };
    e.fn.tipsy.autoNS = function () {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    };
    e.fn.tipsy.autoWE = function () {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }
})(jQuery);




// stellar for parallex
(function (e, t, n, r) {
    function d(t, n) {
        this.element = t;
        this.options = e.extend({}, s, n);
        this._defaults = s;
        this._name = i;
        this.init()
    }
    var i = "stellar",
        s = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: true,
            verticalScrolling: true,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: true,
            parallaxBackgrounds: true,
            parallaxElements: true,
            hideDistantElements: true,
            hideElement: function (e) {
                e.hide()
            },
            showElement: function (e) {
                e.show()
            }
        }, o = {
            scroll: {
                getLeft: function (e) {
                    return e.scrollLeft()
                },
                setLeft: function (e, t) {
                    e.scrollLeft(t)
                },
                getTop: function (e) {
                    return e.scrollTop()
                },
                setTop: function (e, t) {
                    e.scrollTop(t)
                }
            },
            position: {
                getLeft: function (e) {
                    return parseInt(e.css("left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("top"), 10) * -1
                }
            },
            margin: {
                getLeft: function (e) {
                    return parseInt(e.css("margin-left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("margin-top"), 10) * -1
                }
            },
            transform: {
                getLeft: function (e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                },
                getTop: function (e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        }, u = {
            position: {
                setLeft: function (e, t) {
                    e.css("left", t)
                },
                setTop: function (e, t) {
                    e.css("top", t)
                }
            },
            transform: {
                setPosition: function (e, t, n, r, i) {
                    e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        }, a = function () {
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = e("script")[0].style,
                r = "",
                i;
            for (i in n) {
                if (t.test(i)) {
                    r = i.match(t)[0];
                    break
                }
            }
            if ("WebkitOpacity" in n) {
                r = "Webkit"
            }
            if ("KhtmlOpacity" in n) {
                r = "Khtml"
            }
            return function (e) {
                return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }
        }(),
        f = a("transform"),
        l = e("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        c = l ? function (e, t, n) {
            e.css({
                "background-position-x": t,
                "background-position-y": n
            })
        } : function (e, t, n) {
            e.css("background-position", t + " " + n)
        }, h = l ? function (e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function (e) {
            return e.css("background-position").split(" ")
        }, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        };
    d.prototype = {
        init: function () {
            this.options.name = i + "_" + Math.floor(Math.random() * 1e9);
            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();
            this.refresh({
                firstLoad: true
            });
            if (this.options.scrollProperty === "scroll") {
                this._handleScrollEvent()
            } else {
                this._startAnimationLoop()
            }
        },
        _defineElements: function () {
            if (this.element === n.body) this.element = t;
            this.$scrollElement = e(this.element);
            this.$element = this.element === t ? e("body") : this.$scrollElement;
            this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function () {
            var e = this,
                t = o[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            };
            this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function () {
            var t = this,
                n = o[t.options.scrollProperty],
                r = u[t.options.positionProperty],
                i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = typeof i === "function" ? function (e) {
                i(t.$scrollElement, e)
            } : e.noop;
            this._setScrollTop = typeof s === "function" ? function (e) {
                s(t.$scrollElement, e)
            } : e.noop;
            this._setPosition = r.setPosition || function (e, n, i, s, o) {
                if (t.options.horizontalScrolling) {
                    r.setLeft(e, n, i)
                }
                if (t.options.verticalScrolling) {
                    r.setTop(e, s, o)
                }
            }
        },
        _handleWindowLoadAndResize: function () {
            var n = this,
                r = e(t);
            if (n.options.responsive) {
                r.bind("load." + this.name, function () {
                    n.refresh()
                })
            }
            r.bind("resize." + this.name, function () {
                n._detectViewport();
                if (n.options.responsive) {
                    n.refresh()
                }
            })
        },
        refresh: function (n) {
            var r = this,
                i = r._getScrollLeft(),
                s = r._getScrollTop();
            if (!n || !n.firstLoad) {
                this._reset()
            }
            this._setScrollLeft(0);
            this._setScrollTop(0);
            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();
            if (n && n.firstLoad && /WebKit/.test(navigator.userAgent)) {
                e(t).load(function () {
                    var e = r._getScrollLeft(),
                        t = r._getScrollTop();
                    r._setScrollLeft(e + 1);
                    r._setScrollTop(t + 1);
                    r._setScrollLeft(e);
                    r._setScrollTop(t)
                })
            }
            this._setScrollLeft(i);
            this._setScrollTop(s)
        },
        _detectViewport: function () {
            var e = this.$viewportElement.offset(),
                t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();
            this.viewportOffsetTop = t ? e.top : 0;
            this.viewportOffsetLeft = t ? e.left : 0
        },
        _findParticles: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop();
            if (this.particles !== r) {
                for (var s = this.particles.length - 1; s >= 0; s--) {
                    this.particles[s].$element.data("stellar-elementIsActive", r)
                }
            }
            this.particles = [];
            if (!this.options.parallaxElements) return;
            this.$element.find("[data-stellar-ratio]").each(function (n) {
                var i = e(this),
                    s, o, u, a, f, l, c, h, p, d = 0,
                    v = 0,
                    m = 0,
                    g = 0;
                if (!i.data("stellar-elementIsActive")) {
                    i.data("stellar-elementIsActive", this)
                } else if (i.data("stellar-elementIsActive") !== this) {
                    return
                }
                t.options.showElement(i);
                if (!i.data("stellar-startingLeft")) {
                    i.data("stellar-startingLeft", i.css("left"));
                    i.data("stellar-startingTop", i.css("top"))
                } else {
                    i.css("left", i.data("stellar-startingLeft"));
                    i.css("top", i.data("stellar-startingTop"))
                }
                u = i.position().left;
                a = i.position().top;
                f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10);
                l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10);
                h = i.offset().left - f;
                p = i.offset().top - l;
                i.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === true) {
                        d = m;
                        v = g;
                        c = t;
                        return false
                    } else {
                        m += t.position().left;
                        g += t.position().top
                    }
                });
                s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset;
                o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset;
                t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: s,
                    verticalOffset: o,
                    startingPositionLeft: u,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: d,
                    parentOffsetTop: v,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(true),
                    height: i.outerHeight(true),
                    isHidden: false
                })
            })
        },
        _findBackgrounds: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop(),
                s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds) return;
            s = this.$element.find("[data-stellar-background-ratio]");
            if (this.$element.data("stellar-background-ratio")) {
                s = s.add(this.$element)
            }
            s.each(function () {
                var s = e(this),
                    o = h(s),
                    u, a, f, l, p, d, v, m, g, y = 0,
                    b = 0,
                    w = 0,
                    E = 0;
                if (!s.data("stellar-backgroundIsActive")) {
                    s.data("stellar-backgroundIsActive", this)
                } else if (s.data("stellar-backgroundIsActive") !== this) {
                    return
                }
                if (!s.data("stellar-backgroundStartingLeft")) {
                    s.data("stellar-backgroundStartingLeft", o[0]);
                    s.data("stellar-backgroundStartingTop", o[1])
                } else {
                    c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop"))
                }
                p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10);
                d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10);
                v = s.offset().left - p - n;
                m = s.offset().top - d - i;
                s.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === true) {
                        y = w;
                        b = E;
                        g = t;
                        return false
                    } else {
                        w += t.position().left;
                        E += t.position().top
                    }
                });
                u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset;
                a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset;
                t.backgrounds.push({
                    $element: s,
                    $offsetParent: g,
                    isFixed: s.css("background-attachment") === "fixed",
                    horizontalOffset: u,
                    verticalOffset: a,
                    startingValueLeft: o[0],
                    startingValueTop: o[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10),
                    startingPositionLeft: s.position().left,
                    startingPositionTop: s.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: m,
                    parentOffsetLeft: y,
                    parentOffsetTop: b,
                    stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")
                })
            })
        },
        _reset: function () {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) {
                e = this.particles[i];
                t = e.$element.data("stellar-startingLeft");
                n = e.$element.data("stellar-startingTop");
                this._setPosition(e.$element, t, t, n, n);
                this.options.showElement(e.$element);
                e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null)
            }
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                r = this.backgrounds[i];
                r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null);
                c(r.$element, r.startingValueLeft, r.startingValueTop)
            }
        },
        destroy: function () {
            this._reset();
            this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name);
            this._animationLoop = e.noop;
            e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function () {
            var n = this,
                r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name);
            if (typeof this.options.horizontalOffset === "function") {
                this.horizontalOffset = this.options.horizontalOffset();
                r.bind("resize.horizontal-" + this.name, function () {
                    n.horizontalOffset = n.options.horizontalOffset()
                })
            } else {
                this.horizontalOffset = this.options.horizontalOffset
            } if (typeof this.options.verticalOffset === "function") {
                this.verticalOffset = this.options.verticalOffset();
                r.bind("resize.vertical-" + this.name, function () {
                    n.verticalOffset = n.options.verticalOffset()
                })
            } else {
                this.verticalOffset = this.options.verticalOffset
            }
        },
        _repositionElements: function () {
            var e = this._getScrollLeft(),
                t = this._getScrollTop(),
                n, r, i, s, o, u, a, f = true,
                l = true,
                h, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return
            } else {
                this.currentScrollLeft = e;
                this.currentScrollTop = t;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight
            }
            for (m = this.particles.length - 1; m >= 0; m--) {
                i = this.particles[m];
                s = i.isFixed ? 1 : 0;
                if (this.options.horizontalScrolling) {
                    h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft;
                    d = h - i.startingPositionLeft + i.startingOffsetLeft
                } else {
                    h = i.startingPositionLeft;
                    d = i.startingOffsetLeft
                } if (this.options.verticalScrolling) {
                    p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop;
                    v = p - i.startingPositionTop + i.startingOffsetTop
                } else {
                    p = i.startingPositionTop;
                    v = i.startingOffsetTop
                } if (this.options.hideDistantElements) {
                    l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft;
                    f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop
                }
                if (l && f) {
                    if (i.isHidden) {
                        this.options.showElement(i.$element);
                        i.isHidden = false
                    }
                    this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)
                } else {
                    if (!i.isHidden) {
                        this.options.hideElement(i.$element);
                        i.isHidden = true
                    }
                }
            }
            for (m = this.backgrounds.length - 1; m >= 0; m--) {
                o = this.backgrounds[m];
                s = o.isFixed ? 0 : 1;
                u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft;
                a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop;
                c(o.$element, u, a)
            }
        },
        _handleScrollEvent: function () {
            var e = this,
                t = false;
            var n = function () {
                e._repositionElements();
                t = false
            };
            var r = function () {
                if (!t) {
                    p(n);
                    t = true
                }
            };
            this.$scrollElement.bind("scroll." + this.name, r);
            r()
        },
        _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                p(e._animationLoop);
                e._repositionElements()
            };
            this._animationLoop()
        }
    };
    e.fn[i] = function (t) {
        var n = arguments;
        if (t === r || typeof t === "object") {
            return this.each(function () {
                if (!e.data(this, "plugin_" + i)) {
                    e.data(this, "plugin_" + i, new d(this, t))
                }
            })
        } else if (typeof t === "string" && t[0] !== "_" && t !== "init") {
            return this.each(function () {
                var r = e.data(this, "plugin_" + i);
                if (r instanceof d && typeof r[t] === "function") {
                    r[t].apply(r, Array.prototype.slice.call(n, 1))
                }
                if (t === "destroy") {
                    e.data(this, "plugin_" + i, null)
                }
            })
        }
    };
    e[i] = function (n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    };
    e[i].scrollProperty = o;
    e[i].positionProperty = u;
    t.Stellar = d
})(jQuery, this, document);








(function (c, b) {
    var a = a || function (k) {
            var f = {
                element: null,
                dragger: null,
                disable: "none",
                addBodyClasses: true,
                hyperextensible: true,
                resistance: 0.5,
                flickThreshold: 50,
                transitionSpeed: 0.3,
                easing: "ease",
                maxPosition: 266,
                minPosition: -266,
                tapToClose: true,
                touchToDrag: true,
                slideIntent: 40,
                minDragDistance: 5
            }, e = {
                    simpleStates: {
                        opening: null,
                        towards: null,
                        hyperExtending: null,
                        halfway: null,
                        flick: null,
                        translation: {
                            absolute: 0,
                            relative: 0,
                            sinceDirectionChange: 0,
                            percentage: 0
                        }
                    }
                }, h = {}, d = {
                    hasTouch: (b.ontouchstart === null),
                    eventType: function (m) {
                        var l = {
                            down: (d.hasTouch ? "touchstart" : "mousedown"),
                            move: (d.hasTouch ? "touchmove" : "mousemove"),
                            up: (d.hasTouch ? "touchend" : "mouseup"),
                            out: (d.hasTouch ? "touchcancel" : "mouseout")
                        };
                        return l[m]
                    },
                    page: function (l, m) {
                        return (d.hasTouch && m.touches.length && m.touches[0]) ? m.touches[0]["page" + l] : m["page" + l]
                    },
                    klass: {
                        has: function (m, l) {
                            return (m.className).indexOf(l) !== -1
                        },
                        add: function (m, l) {
                            if (!d.klass.has(m, l) && f.addBodyClasses) {
                                m.className += " " + l
                            }
                        },
                        remove: function (m, l) {
                            if (f.addBodyClasses) {
                                m.className = (m.className).replace(l, "").replace(/^\s+|\s+$/g, "")
                            }
                        }
                    },
                    dispatchEvent: function (l) {
                        if (typeof h[l] === "function") {
                            return h[l].call()
                        }
                    },
                    vendor: function () {
                        var m = b.createElement("div"),
                            n = "webkit Moz O ms".split(" "),
                            l;
                        for (l in n) {
                            if (typeof m.style[n[l] + "Transition"] !== "undefined") {
                                return n[l]
                            }
                        }
                    },
                    transitionCallback: function () {
                        return (e.vendor === "Moz" || e.vendor === "ms") ? "transitionend" : e.vendor + "TransitionEnd"
                    },
                    canTransform: function () {
                        return typeof f.element.style[e.vendor + "Transform"] !== "undefined"
                    },
                    deepExtend: function (l, n) {
                        var m;
                        for (m in n) {
                            if (n[m] && n[m].constructor && n[m].constructor === Object) {
                                l[m] = l[m] || {};
                                d.deepExtend(l[m], n[m])
                            } else {
                                l[m] = n[m]
                            }
                        }
                        return l
                    },
                    angleOfDrag: function (l, o) {
                        var n, m;
                        m = Math.atan2(-(e.startDragY - o), (e.startDragX - l));
                        if (m < 0) {
                            m += 2 * Math.PI
                        }
                        n = Math.floor(m * (180 / Math.PI) - 180);
                        if (n < 0 && n > -180) {
                            n = 360 - Math.abs(n)
                        }
                        return Math.abs(n)
                    },
                    events: {
                        addEvent: function g(m, l, n) {
                            if (m.addEventListener) {
                                return m.addEventListener(l, n, false)
                            } else {
                                if (m.attachEvent) {
                                    return m.attachEvent("on" + l, n)
                                }
                            }
                        },
                        removeEvent: function g(m, l, n) {
                            if (m.addEventListener) {
                                return m.removeEventListener(l, n, false)
                            } else {
                                if (m.attachEvent) {
                                    return m.detachEvent("on" + l, n)
                                }
                            }
                        },
                        prevent: function (l) {
                            if (l.preventDefault) {
                                l.preventDefault()
                            } else {
                                l.returnValue = false
                            }
                        }
                    },
                    parentUntil: function (n, l) {
                        var m = typeof l === "string";
                        while (n.parentNode) {
                            if (m && n.getAttribute && n.getAttribute(l)) {
                                return n
                            } else {
                                if (!m && n === l) {
                                    return n
                                }
                            }
                            n = n.parentNode
                        }
                        return null
                    }
                }, i = {
                    translate: {
                        get: {
                            matrix: function (n) {
                                if (!d.canTransform()) {
                                    return parseInt(f.element.style.left, 10)
                                } else {
                                    var m = c.getComputedStyle(f.element)[e.vendor + "Transform"].match(/\((.*)\)/),
                                        l = 8;
                                    if (m) {
                                        m = m[1].split(",");
                                        if (m.length === 16) {
                                            n += l
                                        }
                                        return parseInt(m[n], 10)
                                    }
                                    return 0
                                }
                            }
                        },
                        easeCallback: function () {
                            f.element.style[e.vendor + "Transition"] = "";
                            e.translation = i.translate.get.matrix(4);
                            e.easing = false;
                            clearInterval(e.animatingInterval);
                            if (e.easingTo === 0) {
                                d.klass.remove(b.body, "snapjs-right");
                                d.klass.remove(b.body, "snapjs-left")
                            }
                            d.dispatchEvent("animated");
                            d.events.removeEvent(f.element, d.transitionCallback(), i.translate.easeCallback)
                        },
                        easeTo: function (l) {
                            if (!d.canTransform()) {
                                e.translation = l;
                                i.translate.x(l)
                            } else {
                                e.easing = true;
                                e.easingTo = l;
                                f.element.style[e.vendor + "Transition"] = "all " + f.transitionSpeed + "s " + f.easing;
                                e.animatingInterval = setInterval(function () {
                                    d.dispatchEvent("animating")
                                }, 1);
                                d.events.addEvent(f.element, d.transitionCallback(), i.translate.easeCallback);
                                i.translate.x(l)
                            } if (l === 0) {
                                f.element.style[e.vendor + "Transform"] = ""
                            }
                        },
                        x: function (m) {
                            if ((f.disable === "left" && m > 0) || (f.disable === "right" && m < 0)) {
                                return
                            }
                            if (!f.hyperextensible) {
                                if (m === f.maxPosition || m > f.maxPosition) {
                                    m = f.maxPosition
                                } else {
                                    if (m === f.minPosition || m < f.minPosition) {
                                        m = f.minPosition
                                    }
                                }
                            }
                            m = parseInt(m, 10);
                            if (isNaN(m)) {
                                m = 0
                            }
                            if (d.canTransform()) {
                                var l = "translate3d(" + m + "px, 0,0)";
                                f.element.style[e.vendor + "Transform"] = l
                            } else {
                                f.element.style.width = (c.innerWidth || b.documentElement.clientWidth) + "px";
                                f.element.style.left = m + "px";
                                f.element.style.right = ""
                            }
                        }
                    },
                    drag: {
                        listen: function () {
                            e.translation = 0;
                            e.easing = false;
                            d.events.addEvent(f.element, d.eventType("down"), i.drag.startDrag);
                            d.events.addEvent(f.element, d.eventType("move"), i.drag.dragging);
                            d.events.addEvent(f.element, d.eventType("up"), i.drag.endDrag)
                        },
                        stopListening: function () {
                            d.events.removeEvent(f.element, d.eventType("down"), i.drag.startDrag);
                            d.events.removeEvent(f.element, d.eventType("move"), i.drag.dragging);
                            d.events.removeEvent(f.element, d.eventType("up"), i.drag.endDrag)
                        },
                        startDrag: function (n) {
                            var m = n.target ? n.target : n.srcElement,
                                l = d.parentUntil(m, "data-snap-ignore");
                            if (l) {
                                d.dispatchEvent("ignore");
                                return
                            }
                            if (f.dragger) {
                                var o = d.parentUntil(m, f.dragger);
                                if (!o && (e.translation !== f.minPosition && e.translation !== f.maxPosition)) {
                                    return
                                }
                            }
                            d.dispatchEvent("start");
                            f.element.style[e.vendor + "Transition"] = "";
                            e.isDragging = true;
                            e.hasIntent = null;
                            e.intentChecked = false;
                            e.startDragX = d.page("X", n);
                            e.startDragY = d.page("Y", n);
                            e.dragWatchers = {
                                current: 0,
                                last: 0,
                                hold: 0,
                                state: ""
                            };
                            e.simpleStates = {
                                opening: null,
                                towards: null,
                                hyperExtending: null,
                                halfway: null,
                                flick: null,
                                translation: {
                                    absolute: 0,
                                    relative: 0,
                                    sinceDirectionChange: 0,
                                    percentage: 0
                                }
                            }
                        },
                        dragging: function (s) {
                            if (e.isDragging && f.touchToDrag) {
                                var v = d.page("X", s),
                                    u = d.page("Y", s),
                                    t = e.translation,
                                    o = i.translate.get.matrix(4),
                                    n = v - e.startDragX,
                                    p = o > 0,
                                    q = n,
                                    w;
                                if ((e.intentChecked && !e.hasIntent)) {
                                    return
                                }
                                if (f.addBodyClasses) {
                                    if ((o) > 0) {
                                        d.klass.add(b.body, "snapjs-left");
                                        d.klass.remove(b.body, "snapjs-right")
                                    } else {
                                        if ((o) < 0) {
                                            d.klass.add(b.body, "snapjs-right");
                                            d.klass.remove(b.body, "snapjs-left")
                                        }
                                    }
                                }
                                if (e.hasIntent === false || e.hasIntent === null) {
                                    var m = d.angleOfDrag(v, u),
                                        l = (m >= 0 && m <= f.slideIntent) || (m <= 360 && m > (360 - f.slideIntent)),
                                        r = (m >= 180 && m <= (180 + f.slideIntent)) || (m <= 180 && m >= (180 - f.slideIntent));
                                    if (!r && !l) {
                                        e.hasIntent = false
                                    } else {
                                        e.hasIntent = true
                                    }
                                    e.intentChecked = true
                                }
                                if ((f.minDragDistance >= Math.abs(v - e.startDragX)) || (e.hasIntent === false)) {
                                    return
                                }
                                d.events.prevent(s);
                                d.dispatchEvent("drag");
                                e.dragWatchers.current = v;
                                if (e.dragWatchers.last > v) {
                                    if (e.dragWatchers.state !== "left") {
                                        e.dragWatchers.state = "left";
                                        e.dragWatchers.hold = v
                                    }
                                    e.dragWatchers.last = v
                                } else {
                                    if (e.dragWatchers.last < v) {
                                        if (e.dragWatchers.state !== "right") {
                                            e.dragWatchers.state = "right";
                                            e.dragWatchers.hold = v
                                        }
                                        e.dragWatchers.last = v
                                    }
                                } if (p) {
                                    if (f.maxPosition < o) {
                                        w = (o - f.maxPosition) * f.resistance;
                                        q = n - w
                                    }
                                    e.simpleStates = {
                                        opening: "left",
                                        towards: e.dragWatchers.state,
                                        hyperExtending: f.maxPosition < o,
                                        halfway: o > (f.maxPosition / 2),
                                        flick: Math.abs(e.dragWatchers.current - e.dragWatchers.hold) > f.flickThreshold,
                                        translation: {
                                            absolute: o,
                                            relative: n,
                                            sinceDirectionChange: (e.dragWatchers.current - e.dragWatchers.hold),
                                            percentage: (o / f.maxPosition) * 100
                                        }
                                    }
                                } else {
                                    if (f.minPosition > o) {
                                        w = (o - f.minPosition) * f.resistance;
                                        q = n - w
                                    }
                                    e.simpleStates = {
                                        opening: "right",
                                        towards: e.dragWatchers.state,
                                        hyperExtending: f.minPosition > o,
                                        halfway: o < (f.minPosition / 2),
                                        flick: Math.abs(e.dragWatchers.current - e.dragWatchers.hold) > f.flickThreshold,
                                        translation: {
                                            absolute: o,
                                            relative: n,
                                            sinceDirectionChange: (e.dragWatchers.current - e.dragWatchers.hold),
                                            percentage: (o / f.minPosition) * 100
                                        }
                                    }
                                }
                                i.translate.x(q + t)
                            }
                        },
                        endDrag: function (m) {
                            if (e.isDragging) {
                                d.dispatchEvent("end");
                                var l = i.translate.get.matrix(4);
                                if (e.dragWatchers.current === 0 && l !== 0 && f.tapToClose) {
                                    d.dispatchEvent("close");
                                    d.events.prevent(m);
                                    i.translate.easeTo(0);
                                    e.isDragging = false;
                                    e.startDragX = 0;
                                    return
                                }
                                if (e.simpleStates.opening === "left") {
                                    if ((e.simpleStates.halfway || e.simpleStates.hyperExtending || e.simpleStates.flick)) {
                                        if (e.simpleStates.flick && e.simpleStates.towards === "left") {
                                            i.translate.easeTo(0)
                                        } else {
                                            if ((e.simpleStates.flick && e.simpleStates.towards === "right") || (e.simpleStates.halfway || e.simpleStates.hyperExtending)) {
                                                i.translate.easeTo(f.maxPosition)
                                            }
                                        }
                                    } else {
                                        i.translate.easeTo(0)
                                    }
                                } else {
                                    if (e.simpleStates.opening === "right") {
                                        if ((e.simpleStates.halfway || e.simpleStates.hyperExtending || e.simpleStates.flick)) {
                                            if (e.simpleStates.flick && e.simpleStates.towards === "right") {
                                                i.translate.easeTo(0)
                                            } else {
                                                if ((e.simpleStates.flick && e.simpleStates.towards === "left") || (e.simpleStates.halfway || e.simpleStates.hyperExtending)) {
                                                    i.translate.easeTo(f.minPosition)
                                                }
                                            }
                                        } else {
                                            i.translate.easeTo(0)
                                        }
                                    }
                                }
                                e.isDragging = false;
                                e.startDragX = d.page("X", m)
                            }
                        }
                    }
                }, j = function (l) {
                    if (l.element) {
                        d.deepExtend(f, l);
                        e.vendor = d.vendor();
                        i.drag.listen()
                    }
                };
            this.open = function (l) {
                d.dispatchEvent("open");
                d.klass.remove(b.body, "snapjs-expand-left");
                d.klass.remove(b.body, "snapjs-expand-right");
                if (l === "left") {
                    e.simpleStates.opening = "left";
                    e.simpleStates.towards = "right";
                    d.klass.add(b.body, "snapjs-left");
                    d.klass.remove(b.body, "snapjs-right");
                    i.translate.easeTo(f.maxPosition)
                } else {
                    if (l === "right") {
                        e.simpleStates.opening = "right";
                        e.simpleStates.towards = "left";
                        d.klass.remove(b.body, "snapjs-left");
                        d.klass.add(b.body, "snapjs-right");
                        i.translate.easeTo(f.minPosition)
                    }
                }
            };
            this.close = function () {
                d.dispatchEvent("close");
                i.translate.easeTo(0)
            };
            this.expand = function (l) {
                var m = c.innerWidth || b.documentElement.clientWidth;
                if (l === "left") {
                    d.dispatchEvent("expandLeft");
                    d.klass.add(b.body, "snapjs-expand-left");
                    d.klass.remove(b.body, "snapjs-expand-right")
                } else {
                    d.dispatchEvent("expandRight");
                    d.klass.add(b.body, "snapjs-expand-right");
                    d.klass.remove(b.body, "snapjs-expand-left");
                    m *= -1
                }
                i.translate.easeTo(m)
            };
            this.on = function (l, m) {
                h[l] = m;
                return this
            };
            this.off = function (l) {
                if (h[l]) {
                    h[l] = false
                }
            };
            this.enable = function () {
                d.dispatchEvent("enable");
                i.drag.listen()
            };
            this.disable = function () {
                d.dispatchEvent("disable");
                i.drag.stopListening()
            };
            this.settings = function (l) {
                d.deepExtend(f, l)
            };
            this.state = function () {
                var l, m = i.translate.get.matrix(4);
                if (m === f.maxPosition) {
                    l = "left"
                } else {
                    if (m === f.minPosition) {
                        l = "right"
                    } else {
                        l = "closed"
                    }
                }
                return {
                    state: l,
                    info: e.simpleStates
                }
            };
            j(k)
        };
    if ((typeof module !== "undefined") && module.exports) {
        module.exports = a
    }
    if (typeof ender === "undefined") {
        this.Snap = a
    }
    if ((typeof define === "function") && define.amd) {
        define("snap", [], function () {
            return a
        })
    }
}).call(this, window, document);




(function (e) {
    e.fn.countdown = function (t, n) {
        function i() {
            eventDate = Date.parse(r["date"]) / 1e3;
            currentDate = Math.floor(e.now() / 1e3);
            if (eventDate <= currentDate) {
                n.call(this);
                clearInterval(interval)
            }
            seconds = eventDate - currentDate;
            days = Math.floor(seconds / (60 * 60 * 24));
            seconds -= days * 60 * 60 * 24;
            hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60;
            minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            if (days == 1) {
                thisEl.find(".timeRefDays").text("day")
            } else {
                thisEl.find(".timeRefDays").text("days")
            } if (hours == 1) {
                thisEl.find(".timeRefHours").text("hour")
            } else {
                thisEl.find(".timeRefHours").text("hours")
            } if (minutes == 1) {
                thisEl.find(".timeRefMinutes").text("minute")
            } else {
                thisEl.find(".timeRefMinutes").text("minutes")
            } if (seconds == 1) {
                thisEl.find(".timeRefSeconds").text("second")
            } else {
                thisEl.find(".timeRefSeconds").text("seconds")
            } if (r["format"] == "on") {
                days = String(days).length >= 2 ? days : "0" + days;
                hours = String(hours).length >= 2 ? hours : "0" + hours;
                minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
            }
            if (!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds)
            } else {
                alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
                clearInterval(interval)
            }
        }
        thisEl = e(this);
        var r = {
            date: null,
            format: null
        };
        if (t) {
            e.extend(r, t)
        }
        i();
        interval = setInterval(i, 1e3)
    }
})(jQuery);

function ssc_init() {
    if (!document.body) return;
    var e = document.body;
    var t = document.documentElement;
    var n = window.innerHeight;
    var r = e.scrollHeight;
    ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
    ssc_activeElement = e;
    ssc_initdone = true;
    if (top != self) {
        ssc_frame = true
    } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        ssc_root.style.height = "auto";
        if (ssc_root.offsetHeight <= n) {
            var i = document.createElement("div");
            i.style.clear = "both";
            e.appendChild(i)
        }
    }
    if (!ssc_fixedback) {
        e.style.backgroundAttachment = "scroll";
        t.style.backgroundAttachment = "scroll"
    }
    if (ssc_keyboardsupport) {
        ssc_addEvent("keydown", ssc_keydown)
    }
}

function ssc_scrollArray(e, t, n, r) {
    r || (r = 1e3);
    ssc_directionCheck(t, n);
    ssc_que.push({
        x: t,
        y: n,
        lastX: t < 0 ? .99 : -.99,
        lastY: n < 0 ? .99 : -.99,
        start: +(new Date)
    });
    if (ssc_pending) {
        return
    }
    var i = function () {
        var s = +(new Date);
        var o = 0;
        var u = 0;
        for (var a = 0; a < ssc_que.length; a++) {
            var f = ssc_que[a];
            var l = s - f.start;
            var c = l >= ssc_animtime;
            var h = c ? 1 : l / ssc_animtime;
            if (ssc_pulseAlgorithm) {
                h = ssc_pulse(h)
            }
            var p = f.x * h - f.lastX >> 0;
            var d = f.y * h - f.lastY >> 0;
            o += p;
            u += d;
            f.lastX += p;
            f.lastY += d;
            if (c) {
                ssc_que.splice(a, 1);
                a--
            }
        }
        if (t) {
            var v = e.scrollLeft;
            e.scrollLeft += o;
            if (o && e.scrollLeft === v) {
                t = 0
            }
        }
        if (n) {
            var m = e.scrollTop;
            e.scrollTop += u;
            if (u && e.scrollTop === m) {
                n = 0
            }
        }
        if (!t && !n) {
            ssc_que = []
        }
        if (ssc_que.length) {
            setTimeout(i, r / ssc_framerate + 1)
        } else {
            ssc_pending = false
        }
    };
    setTimeout(i, 0);
    ssc_pending = true
}

function init() {}

function ssc_wheel(e) {
    if (!ssc_initdone) {
        init()
    }
    var t = e.target;
    var n = ssc_overflowingAncestor(t);
    if (!n || e.defaultPrevented || ssc_isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true
    }
    var r = e.wheelDeltaX || 0;
    var i = e.wheelDeltaY || 0;
    if (!r && !i) {
        i = e.wheelDelta || 0
    }
    if (Math.abs(r) > 1.2) {
        r *= ssc_stepsize / 120
    }
    if (Math.abs(i) > 1.2) {
        i *= ssc_stepsize / 120
    }
    ssc_scrollArray(n, -r, -i);
    e.preventDefault()
}

function ssc_keydown(e) {
    var t = e.target;
    var n = e.ctrlKey || e.altKey || e.metaKey;
    if (/input|textarea|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true
    }
    if (ssc_isNodeName(t, "button") && e.keyCode === ssc_key.spacebar) {
        return true
    }
    var r, i = 0,
        s = 0;
    var o = ssc_overflowingAncestor(ssc_activeElement);
    var u = o.clientHeight;
    if (o == document.body) {
        u = window.innerHeight
    }
    switch (e.keyCode) {
    case ssc_key.up:
        s = -ssc_arrowscroll;
        break;
    case ssc_key.down:
        s = ssc_arrowscroll;
        break;
    case ssc_key.spacebar:
        r = e.shiftKey ? 1 : -1;
        s = -r * u * .9;
        break;
    case ssc_key.pageup:
        s = -u * .9;
        break;
    case ssc_key.pagedown:
        s = u * .9;
        break;
    case ssc_key.home:
        s = -o.scrollTop;
        break;
    case ssc_key.end:
        var a = o.scrollHeight - o.scrollTop - u;
        s = a > 0 ? a + 10 : 0;
        break;
    case ssc_key.left:
        i = -ssc_arrowscroll;
        break;
    case ssc_key.right:
        i = ssc_arrowscroll;
        break;
    default:
        return true
    }
    ssc_scrollArray(o, i, s);
    e.preventDefault()
}

function ssc_mousedown(e) {
    ssc_activeElement = e.target
}

function ssc_setCache(e, t) {
    for (var n = e.length; n--;) ssc_cache[ssc_uniqueID(e[n])] = t;
    return t
}

function ssc_overflowingAncestor(e) {
    var t = [];
    var n = ssc_root.scrollHeight;
    do {
        var r = ssc_cache[ssc_uniqueID(e)];
        if (r) {
            return ssc_setCache(t, r)
        }
        t.push(e);
        if (n === e.scrollHeight) {
            if (!ssc_frame || ssc_root.clientHeight + 10 < n) {
                return ssc_setCache(t, document.body)
            }
        } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow");
            if (overflow === "scroll" || overflow === "auto") {
                return ssc_setCache(t, e)
            }
        }
    } while (e = e.parentNode)
}

function ssc_addEvent(e, t, n) {
    window.addEventListener(e, t, n || false)
}

function ssc_removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false)
}

function ssc_isNodeName(e, t) {
    return e.nodeName.toLowerCase() === t.toLowerCase()
}

function ssc_directionCheck(e, t) {
    e = e > 0 ? 1 : -1;
    t = t > 0 ? 1 : -1;
    if (ssc_direction.x !== e || ssc_direction.y !== t) {
        ssc_direction.x = e;
        ssc_direction.y = t;
        ssc_que = []
    }
}

function ssc_pulse_(e) {
    var t, n, r;
    e = e * ssc_pulseScale;
    if (e < 1) {
        t = e - (1 - Math.exp(-e))
    } else {
        n = Math.exp(-1);
        e -= 1;
        r = 1 - Math.exp(-e);
        t = n + r * (1 - n)
    }
    return t * ssc_pulseNormalize
}

function ssc_pulse(e) {
    if (e >= 1) return 1;
    if (e <= 0) return 0;
    if (ssc_pulseNormalize == 1) {
        ssc_pulseNormalize /= ssc_pulse_(1)
    }
    return ssc_pulse_(e)
}
var ssc_framerate = 150;
var ssc_animtime = 500;
var ssc_stepsize = 150;
var ssc_pulseAlgorithm = true;
var ssc_pulseScale = 6;
var ssc_pulseNormalize = 1;
var ssc_keyboardsupport = true;
var ssc_arrowscroll = 50;
var ssc_frame = false;
var ssc_direction = {
    x: 0,
    y: 0
};
var ssc_initdone = false;
var ssc_fixedback = true;
var ssc_root = document.documentElement;
var ssc_activeElement;
var ssc_key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
};
var ssc_que = [];
var ssc_pending = false;
var ssc_cache = {};
setInterval(function () {
    ssc_cache = {}
}, 10 * 1e3);
var ssc_uniqueID = function () {
    var e = 0;
    return function (t) {
        return t.ssc_uniqueID || (t.ssc_uniqueID = e++)
    }
}();
if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
    ssc_addEvent("mousedown", ssc_mousedown);
    ssc_addEvent("mousewheel", ssc_wheel);
    ssc_addEvent("load", ssc_init)
}






/*! iCheck v1.0.1 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(h){function F(a,b,d){var c=a[0],e=/er/.test(d)?m:/bl/.test(d)?s:l,f=d==H?{checked:c[l],disabled:c[s],indeterminate:"true"==a.attr(m)||"false"==a.attr(w)}:c[e];if(/^(ch|di|in)/.test(d)&&!f)D(a,e);else if(/^(un|en|de)/.test(d)&&f)t(a,e);else if(d==H)for(e in f)f[e]?D(a,e,!0):t(a,e,!0);else if(!b||"toggle"==d){if(!b)a[p]("ifClicked");f?c[n]!==u&&t(a,e):D(a,e)}}function D(a,b,d){var c=a[0],e=a.parent(),f=b==l,A=b==m,B=b==s,K=A?w:f?E:"enabled",p=k(a,K+x(c[n])),N=k(a,b+x(c[n]));if(!0!==c[b]){if(!d&&
b==l&&c[n]==u&&c.name){var C=a.closest("form"),r='input[name="'+c.name+'"]',r=C.length?C.find(r):h(r);r.each(function(){this!==c&&h(this).data(q)&&t(h(this),b)})}A?(c[b]=!0,c[l]&&t(a,l,"force")):(d||(c[b]=!0),f&&c[m]&&t(a,m,!1));L(a,f,b,d)}c[s]&&k(a,y,!0)&&e.find("."+I).css(y,"default");e[v](N||k(a,b)||"");B?e.attr("aria-disabled","true"):e.attr("aria-checked",A?"mixed":"true");e[z](p||k(a,K)||"")}function t(a,b,d){var c=a[0],e=a.parent(),f=b==l,h=b==m,q=b==s,p=h?w:f?E:"enabled",t=k(a,p+x(c[n])),
u=k(a,b+x(c[n]));if(!1!==c[b]){if(h||!d||"force"==d)c[b]=!1;L(a,f,p,d)}!c[s]&&k(a,y,!0)&&e.find("."+I).css(y,"pointer");e[z](u||k(a,b)||"");q?e.attr("aria-disabled","false"):e.attr("aria-checked","false");e[v](t||k(a,p)||"")}function M(a,b){if(a.data(q)){a.parent().html(a.attr("style",a.data(q).s||""));if(b)a[p](b);a.off(".i").unwrap();h(G+'[for="'+a[0].id+'"]').add(a.closest(G)).off(".i")}}function k(a,b,d){if(a.data(q))return a.data(q).o[b+(d?"":"Class")]}function x(a){return a.charAt(0).toUpperCase()+
a.slice(1)}function L(a,b,d,c){if(!c){if(b)a[p]("ifToggled");a[p]("ifChanged")[p]("if"+x(d))}}var q="iCheck",I=q+"-helper",u="radio",l="checked",E="un"+l,s="disabled",w="determinate",m="in"+w,H="update",n="type",v="addClass",z="removeClass",p="trigger",G="label",y="cursor",J=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);h.fn[q]=function(a,b){var d='input[type="checkbox"], input[type="'+u+'"]',c=h(),e=function(a){a.each(function(){var a=h(this);c=a.is(d)?
c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),e(this),c.each(function(){var c=h(this);"destroy"==a?M(c,"ifDestroyed"):F(c,!0,a);h.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var f=h.extend({checkedClass:l,disabledClass:s,indeterminateClass:m,labelHover:!0,aria:!1},a),k=f.handle,B=f.hoverClass||"hover",x=f.focusClass||"focus",w=f.activeClass||"active",y=!!f.labelHover,C=f.labelHoverClass||
"hover",r=(""+f.increaseArea).replace("%","")|0;if("checkbox"==k||k==u)d='input[type="'+k+'"]';-50>r&&(r=-50);e(this);return c.each(function(){var a=h(this);M(a);var c=this,b=c.id,e=-r+"%",d=100+2*r+"%",d={position:"absolute",top:e,left:e,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},e=J?{position:"absolute",visibility:"hidden"}:r?d:{position:"absolute",opacity:0},k="checkbox"==c[n]?f.checkboxClass||"icheckbox":f.radioClass||"i"+u,m=h(G+'[for="'+b+'"]').add(a.closest(G)),
A=!!f.aria,E=q+"-"+Math.random().toString(36).substr(2,6),g='<div class="'+k+'" '+(A?'role="'+c[n]+'" ':"");A&&m.each(function(){g+='aria-labelledby="';this.id?g+=this.id:(this.id=E,g+=E);g+='"'});g=a.wrap(g+"/>")[p]("ifCreated").parent().append(f.insert);d=h('<ins class="'+I+'"/>').css(d).appendTo(g);a.data(q,{o:f,s:a.attr("style")}).css(e);f.inheritClass&&g[v](c.className||"");f.inheritID&&b&&g.attr("id",q+"-"+b);"static"==g.css("position")&&g.css("position","relative");F(a,!0,H);if(m.length)m.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",
function(b){var d=b[n],e=h(this);if(!c[s]){if("click"==d){if(h(b.target).is("a"))return;F(a,!1,!0)}else y&&(/ut|nd/.test(d)?(g[z](B),e[z](C)):(g[v](B),e[v](C)));if(J)b.stopPropagation();else return!1}});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[n];b=b.keyCode;if("click"==d)return!1;if("keydown"==d&&32==b)return c[n]==u&&c[l]||(c[l]?t(a,l):D(a,l)),!1;if("keyup"==d&&c[n]==u)!c[l]&&D(a,l);else if(/us|ur/.test(d))g["blur"==d?z:v](x)});d.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",
function(b){var d=b[n],e=/wn|up/.test(d)?w:B;if(!c[s]){if("click"==d)F(a,!1,!0);else{if(/wn|er|in/.test(d))g[v](e);else g[z](e+" "+w);if(m.length&&y&&e==B)m[/ut|nd/.test(d)?z:v](C)}if(J)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);








/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup."+b("Open"))},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("update",function(){f(g,h);var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup",function(j){if(!h.hasClass(b("Open"))){g.blur();g.focus()}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown",function(j){h.removeClass(b("Changed"))}).on("mouseup",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.focus()}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup."+b("Open"),function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.blur()}else{f(g,h)}})}}}).focus(function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).blur(function(){h.removeClass(b("Focus")+" "+b("Open"))}).hover(function(){h.addClass(b("Hover"))},function(){h.removeClass(b("Hover"))}).trigger("update")})}})})(jQuery);









/*
* jQuery Hotkeys Plugin
* Copyright 2010, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Based upon the plugin by Tzury Bar Yochay:
* http://github.com/tzuryby/hotkeys
*
* Original idea by:
* Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/
(function(jQuery){jQuery.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":"\"",",":"<",".":">","/":"?","\\":"|"}};function keyHandler(handleObj){if(typeof handleObj.data!=="string"){return}var origHandler=handleObj.handler,keys=handleObj.data.toLowerCase().split(" ");handleObj.handler=function(event){if(this!==event.target&&(/textarea|select/i.test(event.target.nodeName)||event.target.type==="text")){return}var special=event.type!=="keypress"&&jQuery.hotkeys.specialKeys[event.which],character=String.fromCharCode(event.which).toLowerCase(),key,modif="",possible={};if(event.altKey&&special!=="alt"){modif+="alt+"}if(event.ctrlKey&&special!=="ctrl"){modif+="ctrl+"}if(event.metaKey&&!event.ctrlKey&&special!=="meta"){modif+="meta+"}if(event.shiftKey&&special!=="shift"){modif+="shift+"}if(special){possible[modif+special]=true}else{possible[modif+character]=true;possible[modif+jQuery.hotkeys.shiftNums[character]]=true;if(modif==="shift+"){possible[jQuery.hotkeys.shiftNums[character]]=true}}for(var i=0,l=keys.length;i<l;i++){if(possible[keys[i]]){return origHandler.apply(this,arguments)}}}}jQuery.each(["keydown","keyup","keypress"],function(){jQuery.event.special[this]={add:keyHandler}})})(jQuery);
















/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);










/**
 * jQuery gMap v3
 *
 * @url         http://www.smashinglabs.pl/gmap
 * @author      Sebastian Poreba <sebastian.poreba@gmail.com>
 * @version     3.3.3
 * @date        27.12.2012
 */
(function(j){var p=function(){this.markers=[];this.mainMarker=!1;this.icon="http://www.google.com/mapfiles/marker.png"};p.prototype.dist=function(a){return Math.sqrt(Math.pow(this.markers[0].latitude-a.latitude,2)+Math.pow(this.markers[0].longitude-a.longitude,2))};p.prototype.setIcon=function(a){this.icon=a};p.prototype.addMarker=function(a){this.markers[this.markers.length]=a};p.prototype.getMarker=function(){if(this.mainmarker)return this.mainmarker;var a,b;1<this.markers.length?(a=new e.MarkerImage("http://thydzik.com/thydzikGoogleMap/markerlink.php?text="+
    this.markers.length+"&color=EF9D3F"),b="cluster of "+this.markers.length+" markers"):(a=new e.MarkerImage(this.icon),b=this.markers[0].title);return this.mainmarker=new e.Marker({position:new e.LatLng(this.markers[0].latitude,this.markers[0].longitude),icon:a,title:b,map:null})};var e=google.maps,q=new e.Geocoder,l=0,r=0,f={},f={init:function(a){var b,c=j.extend({},j.fn.gMap.defaults,a);for(b in j.fn.gMap.defaults.icon)c.icon[b]||(c.icon[b]=j.fn.gMap.defaults.icon[b]);return this.each(function(){var a=
    j(this),b=f._getMapCenter.apply(a,[c]);"fit"==c.zoom&&(c.zoomFit=!0,c.zoom=f._autoZoom.apply(a,[c]));var g={zoom:c.zoom,center:b,mapTypeControl:c.mapTypeControl,mapTypeControlOptions:{},zoomControl:c.zoomControl,zoomControlOptions:{},panControl:c.panControl,panControlOptions:{},scaleControl:c.scaleControl,scaleControlOptions:{},streetViewControl:c.streetViewControl,streetViewControlOptions:{},mapTypeId:c.maptype,scrollwheel:c.scrollwheel,maxZoom:c.maxZoom,minZoom:c.minZoom};c.controlsPositions.mapType&&
(g.mapTypeControlOptions.position=c.controlsPositions.mapType);c.controlsPositions.zoom&&(g.zoomControlOptions.position=c.controlsPositions.zoom);c.controlsPositions.pan&&(g.panControlOptions.position=c.controlsPositions.pan);c.controlsPositions.scale&&(g.scaleControlOptions.position=c.controlsPositions.scale);c.controlsPositions.streetView&&(g.streetViewControlOptions.position=c.controlsPositions.streetView);c.styles&&(g.styles=c.styles);g.mapTypeControlOptions.style=c.controlsStyle.mapType;g.zoomControlOptions.style=
    c.controlsStyle.zoom;g=new e.Map(this,g);c.log&&console.log("map center is:");c.log&&console.log(b);a.data("$gmap",g);a.data("gmap",{opts:c,gmap:g,markers:[],markerKeys:{},infoWindow:null,clusters:[]});if(0!==c.controls.length)for(b=0;b<c.controls.length;b+=1)g.controls[c.controls[b].pos].push(c.controls[b].div);c.clustering.enabled?(b=a.data("gmap"),b.markers=c.markers,f._renderCluster.apply(a,[]),e.event.addListener(g,"bounds_changed",function(){f._renderCluster.apply(a,[])})):0!==c.markers.length&&
    f.addMarkers.apply(a,[c.markers]);f._onComplete.apply(a,[])})},_delayedMode:!1,_onComplete:function(){var a=this.data("gmap"),b=this;if(0!==l)window.setTimeout(function(){f._onComplete.apply(b,[])},100);else{if(f._delayedMode){var c=f._getMapCenter.apply(this,[a.opts,!0]);f._setMapCenter.apply(this,[c]);a.opts.zoomFit&&(c=f._autoZoom.apply(this,[a.opts,!0]),a.gmap.setZoom(c))}a.opts.onComplete()}},_setMapCenter:function(a){var b=this.data("gmap");b&&b.opts.log&&console.log("delayed setMapCenter called");
  if(b&&void 0!==b.gmap&&0==l)b.gmap.setCenter(a);else{var c=this;window.setTimeout(function(){f._setMapCenter.apply(c,[a])},100)}},_boundaries:null,_getBoundaries:function(a){var b=a.markers,c,h=1E3,d=-1E3,g=1E3,e=-1E3;if(b){for(c=0;c<b.length;c+=1)b[c].latitude&&b[c].longitude&&(h>b[c].latitude&&(h=b[c].latitude),d<b[c].longitude&&(d=b[c].longitude),g>b[c].longitude&&(g=b[c].longitude),e<b[c].latitude&&(e=b[c].latitude),a.log&&console.log(b[c].latitude,b[c].longitude,h,d,g,e));f._boundaries={N:h,
  E:d,W:g,S:e}}-1E3==h&&(f._boundaries={N:0,E:0,W:0,S:0});return f._boundaries},_getBoundariesFromMarkers:function(){var a=this.data("gmap").markers,b,c=1E3,h=-1E3,d=1E3,g=-1E3;if(a){for(b=0;b<a.length;b+=1)c>a[b].getPosition().lat()&&(c=a[b].getPosition().lat()),h<a[b].getPosition().lng()&&(h=a[b].getPosition().lng()),d>a[b].getPosition().lng()&&(d=a[b].getPosition().lng()),g<a[b].getPosition().lat()&&(g=a[b].getPosition().lat());f._boundaries={N:c,E:h,W:d,S:g}}-1E3==c&&(f._boundaries={N:0,E:0,W:0,
  S:0});return f._boundaries},_getMapCenter:function(a,b){var c,h=this,d,g;if(a.markers.length&&("fit"==a.latitude||"fit"==a.longitude))return d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(a),c=new e.LatLng((d.N+d.S)/2,(d.E+d.W)/2),a.log&&console.log(b,d,c),c;if(a.latitude&&a.longitude)return c=new e.LatLng(a.latitude,a.longitude);c=new e.LatLng(0,0);if(a.address)return q.geocode({address:a.address},function(b,c){c===google.maps.GeocoderStatus.OK?f._setMapCenter.apply(h,[b[0].geometry.location]):
    a.log&&console.log("Geocode was not successful for the following reason: "+c)}),c;if(0<a.markers.length){g=null;for(d=0;d<a.markers.length;d+=1)if(a.markers[d].setCenter){g=a.markers[d];break}if(null===g)for(d=0;d<a.markers.length;d+=1){if(a.markers[d].latitude&&a.markers[d].longitude){g=a.markers[d];break}a.markers[d].address&&(g=a.markers[d])}if(null===g)return c;if(g.latitude&&g.longitude)return new e.LatLng(g.latitude,g.longitude);g.address&&q.geocode({address:g.address},function(b,c){c===google.maps.GeocoderStatus.OK?
    f._setMapCenter.apply(h,[b[0].geometry.location]):a.log&&console.log("Geocode was not successful for the following reason: "+c)})}return c},_renderCluster:function(){var a=this.data("gmap"),b=a.markers,c=a.clusters,h=a.opts,d;for(d=0;d<c.length;d+=1)c[d].getMarker().setMap(null);c.length=0;if(d=a.gmap.getBounds()){var g=d.getNorthEast(),e=d.getSouthWest(),k=[],m=(g.lat()-e.lat())*h.clustering.clusterSize/100;for(d=0;d<b.length;d+=1)b[d].latitude<g.lat()&&(b[d].latitude>e.lat()&&b[d].longitude<g.lng()&&
    b[d].longitude>e.lng())&&(k[k.length]=b[d]);h.log&&console.log("number of markers "+k.length+"/"+b.length);h.log&&console.log("cluster radius: "+m);for(d=0;d<k.length;d+=1){g=-1;for(b=0;b<c.length&&!(e=c[b].dist(k[d]),e<m&&(g=b,h.clustering.fastClustering));b+=1);-1===g?(b=new p,b.addMarker(k[d]),c[c.length]=b):c[g].addMarker(k[d])}h.log&&console.log("Total clusters in viewport: "+c.length);for(b=0;b<c.length;b+=1)c[b].getMarker().setMap(a.gmap)}else{var j=this;window.setTimeout(function(){f._renderCluster.apply(j)},
    1E3)}},_processMarker:function(a,b,c,h){var d=this.data("gmap"),g=d.gmap,f=d.opts,k;void 0===h&&(h=new e.LatLng(a.latitude,a.longitude));if(!b){var j={image:f.icon.image,iconSize:new e.Size(f.icon.iconsize[0],f.icon.iconsize[1]),iconAnchor:new e.Point(f.icon.iconanchor[0],f.icon.iconanchor[1]),infoWindowAnchor:new e.Size(f.icon.infowindowanchor[0],f.icon.infowindowanchor[1])};b=new e.MarkerImage(j.image,j.iconSize,null,j.iconAnchor)}c||(new e.Size(f.icon.shadowsize[0],f.icon.shadowsize[1]),j&&j.iconAnchor||
    new e.Point(f.icon.iconanchor[0],f.icon.iconanchor[1]));b={position:h,icon:b,title:a.title,map:null,draggable:!0===a.draggable?!0:!1};f.clustering.enabled||(b.map=g);k=new e.Marker(b);k.setShadow(c);d.markers.push(k);a.key&&(d.markerKeys[a.key]=k);var n;a.html&&(c={content:"string"===typeof a.html?f.html_prepend+a.html+f.html_append:a.html,pixelOffset:a.infoWindowAnchor},f.log&&console.log("setup popup with data"),f.log&&console.log(c),n=new e.InfoWindow(c),e.event.addListener(k,"click",function(){f.log&&
console.log("opening popup "+a.html);f.singleInfoWindow&&d.infoWindow&&d.infoWindow.close();n.open(g,k);d.infoWindow=n}));a.html&&a.popup&&(f.log&&console.log("opening popup "+a.html),n.open(g,k),d.infoWindow=n);a.onDragEnd&&e.event.addListener(k,"dragend",function(b){f.log&&console.log("drag end");a.onDragEnd(b)})},_geocodeMarker:function(a,b,c){var h=this;q.geocode({address:a.address},function(d,g){g===e.GeocoderStatus.OK?(l-=1,h.data("gmap").opts.log&&console.log("Geocode was successful with point: ",
    d[0].geometry.location),f._processMarker.apply(h,[a,b,c,d[0].geometry.location])):(g===e.GeocoderStatus.OVER_QUERY_LIMIT&&(!h.data("gmap").opts.noAlerts&&0===r&&alert("Error: too many geocoded addresses! Switching to 1 marker/s mode."),r+=1E3,window.setTimeout(function(){f._geocodeMarker.apply(h,[a,b,c])},r)),h.data("gmap").opts.log&&console.log("Geocode was not successful for the following reason: "+g))})},_autoZoom:function(a,b){var c=j(this).data("gmap"),e=j.extend({},c?c.opts:{},a),d,g,c=39135.758482;
  e.log&&console.log("autozooming map");d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(e);e=111E3*(d.E-d.W)/this.width();g=111E3*(d.S-d.N)/this.height();for(d=2;20>d&&!(e>c||g>c);d+=1)c/=2;return d-2},addMarkers:function(a){var b=this.data("gmap").opts;if(0!==a.length){b.log&&console.log("adding "+a.length+" markers");for(b=0;b<a.length;b+=1)f.addMarker.apply(this,[a[b]])}},addMarker:function(a){var b=this.data("gmap").opts;b.log&&console.log("putting marker at "+a.latitude+", "+a.longitude+
    " with address "+a.address+" and html "+a.html);var c=b.icon.image,h=new e.Size(b.icon.iconsize[0],b.icon.iconsize[1]),d=new e.Point(b.icon.iconanchor[0],b.icon.iconanchor[1]),g=new e.Size(b.icon.infowindowanchor[0],b.icon.infowindowanchor[1]),j=b.icon.shadow,k=new e.Size(b.icon.shadowsize[0],b.icon.shadowsize[1]),m=new e.Point(b.icon.shadowanchor[0],b.icon.shadowanchor[1]);a.infoWindowAnchor=g;a.icon&&(a.icon.image&&(c=a.icon.image),a.icon.iconsize&&(h=new e.Size(a.icon.iconsize[0],a.icon.iconsize[1])),
    a.icon.iconanchor&&(d=new e.Point(a.icon.iconanchor[0],a.icon.iconanchor[1])),a.icon.infowindowanchor&&new e.Size(a.icon.infowindowanchor[0],a.icon.infowindowanchor[1]),a.icon.shadow&&(j=a.icon.shadow),a.icon.shadowsize&&(k=new e.Size(a.icon.shadowsize[0],a.icon.shadowsize[1])),a.icon.shadowanchor&&(m=new e.Point(a.icon.shadowanchor[0],a.icon.shadowanchor[1])));c=new e.MarkerImage(c,h,null,d);j=new e.MarkerImage(j,k,null,m);a.address?("_address"===a.html&&(a.html=a.address),"_address"==a.title&&(a.title=
    a.address),b.log&&console.log("geocoding marker: "+a.address),l+=1,f._delayedMode=!0,f._geocodeMarker.apply(this,[a,c,j])):("_latlng"===a.html&&(a.html=a.latitude+", "+a.longitude),"_latlng"==a.title&&(a.title=a.latitude+", "+a.longitude),b=new e.LatLng(a.latitude,a.longitude),f._processMarker.apply(this,[a,c,j,b]))},removeAllMarkers:function(){var a=this.data("gmap").markers,b;for(b=0;b<a.length;b+=1)a[b].setMap(null),delete a[b];a.length=0},getMarker:function(a){return this.data("gmap").markerKeys[a]},
  fixAfterResize:function(a){var b=this.data("gmap");e.event.trigger(b.gmap,"resize");a&&b.gmap.panTo(new google.maps.LatLng(0,0));b.gmap.panTo(this.gMap("_getMapCenter",b.opts))},setZoom:function(a,b,c){var e=this.data("gmap").gmap;"fit"===a&&(a=f._autoZoom.apply(this,[b,c]));e.setZoom(parseInt(a))},changeSettings:function(a){var b=this.data("gmap"),c=[],e;for(e=0;e<b.markers.length;e+=1)c[e]={latitude:b.markers[e].getPosition().lat(),longitude:b.markers[e].getPosition().lng()};a.markers=c;a.zoom&&
  f.setZoom.apply(this,[a.zoom,a]);(a.latitude||a.longitude)&&b.gmap.panTo(f._getMapCenter.apply(this,[a]))},mapclick:function(a){google.maps.event.addListener(this.data("gmap").gmap,"click",function(b){a(b.latLng)})},geocode:function(a,b,c){q.geocode({address:a},function(a,d){d===e.GeocoderStatus.OK?b(a[0].geometry.location):c&&c(a,d)})},getRoute:function(a){var b=this.data("gmap"),c=b.gmap,f=new e.DirectionsRenderer,d=new e.DirectionsService,g={BYCAR:e.DirectionsTravelMode.DRIVING,BYBICYCLE:e.DirectionsTravelMode.BICYCLING,
    BYFOOT:e.DirectionsTravelMode.WALKING},l={MILES:e.DirectionsUnitSystem.IMPERIAL,KM:e.DirectionsUnitSystem.METRIC},k=null,m=null,n=null;void 0!==a.routeDisplay?k=a.routeDisplay instanceof jQuery?a.routeDisplay[0]:"string"==typeof a.routeDisplay?j(a.routeDisplay)[0]:null:null!==b.opts.routeFinder.routeDisplay&&(k=b.opts.routeFinder.routeDisplay instanceof jQuery?b.opts.routeFinder.routeDisplay[0]:"string"==typeof b.opts.routeFinder.routeDisplay?j(b.opts.routeFinder.routeDisplay)[0]:null);f.setMap(c);
    null!==k&&f.setPanel(k);m=void 0!==g[b.opts.routeFinder.travelMode]?g[b.opts.routeFinder.travelMode]:g.BYCAR;n=void 0!==l[b.opts.routeFinder.travelUnit]?l[b.opts.routeFinder.travelUnit]:l.KM;d.route({origin:a.from,destination:a.to,travelMode:m,unitSystem:n},function(a,c){c==e.DirectionsStatus.OK?f.setDirections(a):null!==k&&j(k).html(b.opts.routeFinder.routeErrors[c])});return this}};j.fn.gMap=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||
    !a)return f.init.apply(this,arguments);j.error("Method "+a+" does not exist on jQuery.gmap")};j.fn.gMap.defaults={log:!1,address:"",latitude:null,longitude:null,zoom:3,maxZoom:null,minZoom:null,markers:[],controls:{},scrollwheel:!0,maptype:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,zoomControl:!0,panControl:!1,scaleControl:!1,streetViewControl:!0,controlsPositions:{mapType:null,zoom:null,pan:null,scale:null,streetView:null},controlsStyle:{mapType:google.maps.MapTypeControlStyle.DEFAULT,zoom:google.maps.ZoomControlStyle.DEFAULT},
  singleInfoWindow:!0,html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",iconsize:[20,34],iconanchor:[9,34],infowindowanchor:[9,2],shadow:"http://www.google.com/mapfiles/shadow50.png",shadowsize:[37,34],shadowanchor:[9,34]},onComplete:function(){},routeFinder:{travelMode:"BYCAR",travelUnit:"KM",routeDisplay:null,routeErrors:{INVALID_REQUEST:"The provided request is invalid.",NOT_FOUND:"One or more of the given addresses could not be found.",
    OVER_QUERY_LIMIT:"A temporary error occured. Please try again in a few minutes.",REQUEST_DENIED:"An error occured. Please contact us.",UNKNOWN_ERROR:"An unknown error occured. Please try again.",ZERO_RESULTS:"No route could be found within the given addresses."}},clustering:{enabled:!1,fastClustering:!1,clusterCount:10,clusterSize:40}}})(jQuery);


	
	


	
	
	
	
/* ===================================================
 * FitVid
 * http://fitvidsjs.com/
 * =================================================== */
 
 /*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML="&shy;<style>                 .fluid-width-video-wrapper {                   width: 100%;                                position: relative;                         padding: 0;                              }                                                                                       .fluid-width-video-wrapper iframe,          .fluid-width-video-wrapper object,          .fluid-width-video-wrapper embed {             position: absolute;                         top: 0;                                     left: 0;                                    width: 100%;                                height: 100%;                            }                                         </style>",e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(jQuery);


