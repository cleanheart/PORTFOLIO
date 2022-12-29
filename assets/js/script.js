$(function(){
  //wow js
  new WOW().init();
  //mobile menu show
  $(".mobile-bar").click(function(){
    $(".mobile-menu").animate({
      left:"0%",     
    },500);
  });
  $(".close-button").click(function(){
    $(".mobile-menu").animate({
      left:"-100%",
    },500);
  });


  //sticky 
  $(window).on("scroll", function(){
    var scrollBarPosition = $(this).scrollTop(); 

    if (scrollBarPosition >150) {
      $(".content-wrapper").addClass("sticky"); 
    } else {
      $(".content-wrapper").removeClass("sticky");
    }
  });



  //typed
  $(".typed").typed({
    strings:["ambassador.","front-end devloper.","graphic designer.", "3D artist.","3D animation.","crypto enthuasist.","influencer.","gamer."],
    loop: "true",
    typeSpeed: 0.1,
    //startDelay:00,
    backSpeed:0.1,
    backDelay:700,
    showCursor: false,
  })
  
  //slider
  $('.slider-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="prev-btn"><i class="fa-solid fa-arrow-right"></i></button>',
    nextArrow: '<button class="next-btn"><i class="fa-solid fa-arrow-left"></i></button>',
  });
  
  






});
