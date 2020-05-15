$(document).ready(function () {

  let date = new Date();
  $("#year").text(date.getFullYear());

  $("#readmore").click(function () {
    $('html,body').animate({
      scrollTop: $(".ourStory").offset().top
    },
      'slow');
  });


  // smooth scroll
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }
      , 500);
  });




  // init mixitup
  // let mixer = mixitup("#myContainer");



  // show team
  $(".ourStory a").on("click", function (e) {
    //$(".ourStory .team").fadeIn();
    // $(".ourStory .team-content").animate({ marginTop: "-=100px" }, 1000);

    // var target = $(".ourStory");

    // $(".ourStory .team-content").animate({ scrollTop: $(this).offset().top - 200 }, 1000);

    e.preventDefult

  });











});
