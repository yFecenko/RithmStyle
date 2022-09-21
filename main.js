$(function(){
    $('.sladers').slick({
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        loop: true,
        centeredSlides: true,


        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        arrows: false,
        autoplay:false,
        autoplaySpeed:5000,
        speed:1000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    })


})