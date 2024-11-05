// ***************** Form Script ****************** //
$('input,textarea').val("");
  $('.form-group input, .form-group textarea').focusout(function() {
    var text_val = $(this).val();
    if (text_val === "") {
      console.log("empty!");
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
});

// ***************** Form Script ****************** //

$(document).ready(function() {
    // Initialize carousel for screenshots and Google rating
    $(".Blog-webpage .screenshot_slider, .Blog-webpage #googlerating_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 }
      }
    });
    $(".owl-nav .owl-prev").attr("role", "button");
    $(".owl-nav .owl-next").attr("role", "button");

    // Initialize carousel for testimonials
    $(".Blog-webpage #testimonilas_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 4 }
      }
    });
    


    // Initialize carousel for testimonials
    $(".Blog-webpage .greycontent_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });


    // Initialize carousel for testimonials
    $(".Blog-webpage .treadingblogs_slider").owlCarousel({
      loop: !0,
      responsiveClass: !0,
      nav: !0,
      margin: 0,
      // autoplay: !0,
      autoplayTimeout: 4e3,
      smartSpeed: 400,
      center: !0,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });
    

    e();
  });

