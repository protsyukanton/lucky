document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Slider ---------- */

    const crerativeSlider = new Swiper('.creative-slider', {
        loop: true,
        pagination: {
            el: '.creative-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.creative-slider-button-next',
            prevEl: '.creative-slider-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });


    

});