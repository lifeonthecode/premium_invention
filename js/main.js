$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 120) {
            $('.header_section').addClass('fixed');
        } else {
            $('.header_section').removeClass('fixed');
        }
    });


    // brand slider 
    
    $('.brand_slider_container').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 800,
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
    });


    // core values slider
    $('.core_slider_container').owlCarousel({
        center: true,
        items:4,
        nav: true,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });


    // our clients slider 
    $('.our_client_slider_container').owlCarousel({
        loop:true,
        margin:11,
        nav: true,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })




  
});