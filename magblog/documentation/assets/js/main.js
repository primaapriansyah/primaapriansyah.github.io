/*
    NAME : MAIN JS FILE
    AUTHOR NAME : Infinyteam
    AUTHOR WEBSITE : www.infinyteam.com
    OUR PORTFOLIO : http://themeforest.net/user/infinyteam/portfolio?ref=infinyteam
*/

(function ($) {
    "use strict";
    $(document).ready(function () {
        // ------------------------------------------------------
        // Make code pretty
        // ------------------------------------------------------
        window.prettyPrint && prettyPrint();
        // ------------------------------------------------------
        // Anchor Point With Ease
        // ------------------------------------------------------
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;
        });
        // ------------------------------------------------------
        // Sticky Header
        // ------------------------------------------------------
        $(".header").stickMe();
    });

})(jQuery);