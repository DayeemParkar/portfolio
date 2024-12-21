(
    function($) {
        "use strict";

        // Smooth scrolling
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
            if (
                location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
                && location.hostname == this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                
                if (target.length) {
                    $("html, body").animate(
                        {
                            scrollTop: (target.offset().top)
                        },
                        1000,
                        "easeInOutExpo"
                    );
                    return false;
                }
            }
        });

        // Responsive nav
        $(".js-scroll-trigger").click(
            function() {
                $(".navbar-collapse").collapse("hide");
            }
        );

        // Scrolling
        $("body").scrollspy(
            {
                target: "#sideNav"
            }
        );

    }
)(jQuery);
