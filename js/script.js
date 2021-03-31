let swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    watchOverflow: true,

    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
        1200: {

            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
            centerInsufficientSlides: true
        },
        1080: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1040: {
            slidesPerView: 2.8,
            slidesPerGroup: 2.8,
        },
        768: {
            slidesPerView: 2.8,
            slidesPerGroup: 2.8,
        },
        568: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        567: {
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
        },
        560: {
            slidesPerView: 1.8,
            slidesPerGroup: 1.8,
        },
        425: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        360: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 1.17,
            slidesPerGroup: 1,
        }
    }

});


let swiperGallery = new Swiper('.gallery-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    watchOverflow: true,

    navigation: {
        nextEl: '.slider-next--gallery',
        prevEl: '.slider-prev--gallery',
    },
    breakpoints: {
        1200: {

            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            centerInsufficientSlides: true
        },
        1080: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1040: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        568: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        530: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }

    }
});

// burger menu
$(document).ready(function() {
    $('.burger-menu__button').click(function(event) {
        $('.burger-menu__button,.burger-menu__line, .burger-menu').toggleClass('active');
    })
})