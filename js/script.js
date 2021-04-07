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
        nextEl: '.slider-gallery-next',
        prevEl: '.slider-gallery-prev',
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
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }

    }
});

// slider arrow
let arrowsSlider = document.querySelectorAll('.slider-arrow');


//burger
let burgerButton = document.querySelector('.burger-menu__button'),
    burgerLine = document.querySelector('.burger-menu__line'),
    burgerMenu = document.querySelector('.burger-menu');
//menu
let arrow = document.querySelectorAll('.arrow');

//count
let btnPlus = document.querySelector('.product-count__button--plus'),
    btnMinus = document.querySelector('.product-count__button--minus'),
    countItem = document.querySelector('.product-count__item');
//gallery
let galleryMain = document.querySelector('.gallery__photo'),
    gellerySmall = document.querySelectorAll('.gallery-slider__img');



burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    burgerLine.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    let isMobile = {
        Android: function() { return navigator.userAgent.match(/Android/i); },
        BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
        iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
        Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
        Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
        any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
    };
    let body = document.querySelector('body');
    if (isMobile.any()) {
        body.classList.add('touch');
        for (let i = 0; i < arrow.length; i++) {
            let thisLink = arrow[i].previousElementSibling;
            let subMenu = arrow[i].nextElementSibling;
            let thisArrow = arrow[i];

            thisLink.classList.add('parent');
            arrow[i].addEventListener('click', function() {
                subMenu.classList.toggle('open');
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";

            })
        }
    } else {
        body.classList.add('mouse');
    }

})

//count
btnPlus.addEventListener('click', function() {
    let countPlus = countItem.innerHTML;
    if (+countPlus <= 9) {
        countItem.innerHTML++;
    }
})
btnMinus.addEventListener('click', function() {
    let countMinus = countItem.innerHTML;
    if (+countMinus >= 2) {
        countItem.innerHTML--;
    }
})



arrowsSlider.forEach(elem => {
    elem.addEventListener("click", function() {
        arrowsSlider.forEach(item => item.classList.remove('arrow-active'));
        this.classList.add('arrow-active');
    })
})

//gallery
gellerySmall.forEach(elem => {
    elem.addEventListener("click", function(event) {
        elem = event.target.closest('a');
        if (!elem) return;
        Show(elem.href);
        event.preventDefault();

        function Show(href) {
            galleryMain.src = href;
        }
    })
})