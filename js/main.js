$(document).ready(function () {

  let date = new Date();
  $("#year").text(date.getFullYear());

  $("#readmore").click(function () {
    $('html,body').animate({
      scrollTop: $(".aboutus").offset().top
    },
      'slow');
  });


  // smooth scroll [href*='#']
  $(".navbar .navbar-nav .nav-item .nav-link").on("click", function (e) {

    if (this.hash !== "") {

      e.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, 'linear');
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
