$(document).ready(function () {

  let date = new Date();
  $("#year").text(date.getFullYear());

  $("#readmore").click(function () {
    $('html,body').animate({
      scrollTop: $(".aboutus").offset().top
    },
      'slow');
  });


  // smooth scroll
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }
      , 500);
  });



  // show team
  $("#team").on("click", function () {


    if ($("#content").hasClass("hide")) {
      $("#content").addClass("d-grid");
      $("#content").removeClass("hide");
    } else {
      $("#content").removeClass("d-grid");
      $("#content").addClass("hide");


    }









  });











});
