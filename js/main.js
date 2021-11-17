$(document).ready(function () {
    // init slick slider
    // $(".clients .clients-list").slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });

    $(".clients .clients-list").slick({
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 300,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    var typed = new Typed("#typed", {
        // Waits 1000ms after typing "First"
        strings: [
            "Simple.",
            "^1000 Pure JS.",
            "Pretty.",
            "Fun!",
            "^1000 nerdy",
        ],
        startDelay: 500,
        typeSpeed: 40,
        shuffle: true,
        backDelay: 700,
        loop: true,
    });

    let date = new Date();
    $("#year").text(date.getFullYear());

    $("#readmore").click(function () {
        $("html,body").animate(
            {
                scrollTop: $(".aboutus").offset().top,
            },
            "slow"
        );
    });

    // smooth scroll [href*='#']
    $(".navbar .navbar-nav .nav-item .nav-link").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            // Store hash
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                "linear"
            );
        }
    });

    // show team
    $("#team").on("click", function () {
        if ($("#content").hasClass("hide")) {
            $("#content").addClass("d-grid").removeClass("hide");
        } else {
            $("#content").removeClass("d-grid").addClass("hide");
        }
    });
});
